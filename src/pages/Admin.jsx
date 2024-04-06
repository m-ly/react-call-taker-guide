import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import {
  getCallTypes,
  deleteCallType,
  updateQuestion,
} from "../services/apiCallTypes";
import toast from "react-hot-toast";
import NewGuide from "../components/admin/NewGuide";
import Header from "../components/Header";
import Modal from "../ui/Modal";

function CallType({
  callType,
  queryClient,
  showKeywords,
  setShowKeywords,
  showQuestions,
  setShowQuestions,
  setActiveCallType,
}) {
  const { name, id } = callType;
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCallType,
    onSuccess: () => {
      toast.success("Delete successful!");
      queryClient.invalidateQueries({ queryKey: ["calltype"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>
          <button
            onClick={() => {
              setShowQuestions(!showQuestions);
              setActiveCallType(callType);
            }}
          >
            Show Questions
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              setShowKeywords(!showKeywords);
              setActiveCallType(callType);
            }}
          >
            Show Keywords
          </button>
        </td>
        <td className="deleteCell">
          <button onClick={() => mutate(id)} disabled={isDeleting}>
            delete
          </button>
        </td>
      </tr>

      {/* <Modal
        showModal={showQuestions}
        title="Questions"
        data={callType.questions}
      /> */}
    </>
  );
}

function Admin() {
  const [showForm, setShowForm] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeCallType, setActiveCallType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const queryClient = useQueryClient();
  const { handleSetForm } = useAppContext();

  const {
    isLoading,
    data: callTypes,
    error,
  } = useQuery({
    queryKey: ["calltype"],
    queryFn: getCallTypes,
  });

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>error</h1>;

  async function handleUpdateQuestion(e) {
    e.preventDefault();
    updateQuestion(currentQuestion.question, currentQuestion.id);
  }

  return (
    <div>
      <Header />
      <h1>This is the Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>Call Type</th>

            <th colSpan={2}>Show Details</th>
            <th colSpan={2}>Available Actions</th>
          </tr>
        </thead>
        <tbody>
          {callTypes.map((callType) => {
            return (
              <CallType
                key={`type-${callType.id}`}
                callType={callType}
                queryClient={queryClient}
                showQuestions={showQuestions}
                setShowQuestions={setShowQuestions}
                showKeywords={showKeywords}
                setShowKeywords={setShowKeywords}
                setActiveCallType={setActiveCallType}
              />
            );
          })}
        </tbody>
      </table>
      <button
        className=""
        onClick={() => {
          setShowForm(!showForm);
          handleSetForm("questionGuide");
        }}
      >
        New Guide
      </button>
      {showForm && <NewGuide setShowForm={setShowForm} />}
      {showQuestions &&
        activeCallType.questions.map((element) => {
          return (
            <li key={element.id}>
              <div>
                {element.question}
                <button
                  onClick={() => {
                    setShowQuestions(!showQuestions);
                    setShowEditForm(!showEditForm);
                    setCurrentQuestion(element);
                  }}
                >
                  update
                </button>
                <button>delete</button>
              </div>
            </li>
          );
        })}

      {showKeywords &&
        activeCallType.keywords.map((element) => {
          return (
            <span key={element.keyword}>
              {element.keyword}
              <button onClick={() => "deleteKeyword"}>x</button>
            </span>
          );
        })}

      {showEditForm && (
        <form onSubmit={handleUpdateQuestion}>
          <input
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                question: e.target.value,
              })
            }
            value={currentQuestion.question}
          ></input>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Admin;
