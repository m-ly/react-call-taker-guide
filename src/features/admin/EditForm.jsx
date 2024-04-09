export default function EditForm({
  handleUpdateQuestion,
  setCurrentQuestion,
  currentQuestion,
}) {
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
