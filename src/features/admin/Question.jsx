import toast from "react-hot-toast";
import RedX from "../../assets/red-x-10333.svg?react";
import supabase from "../../services/supabase";

function Question({
  element,
  setShowQuestions,
  showQuestions,
  setShowEditForm,
  showEditForm,
  setCurrentQuestion,
}) {
  async function handleDeleteQuestion() {
    const { error } = await supabase
      .from("questions")
      .delete()
      .eq("id", element.id);

    error
      ? toast.error(error.message)
      : toast.success("Question Successfully Deleted!");
  }

  return (
    <li key={element.name}>
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

      <button onClick={handleDeleteQuestion}>
        <RedX height={20} width={20} className="RedX" />
      </button>
    </li>
  );
}

export default Question;
