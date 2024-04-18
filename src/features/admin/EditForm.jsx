import { useAdminContext } from "../../context/AdminContext";

export default function EditForm({ handleUpdateQuestion }) {
  const { currentQuestion, setCurrentQuestion } = useAdminContext();

  return (
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
  );
}
