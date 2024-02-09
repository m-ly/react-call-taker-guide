function CallGuideForm({ questions }) {
  return (
    <div className="dynamic">
      <form>
        <h3>Questions</h3>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              {index + 1}: {question}
            </label>
            <br></br>
            <textarea
              value={index}
              onChange={() => "something"}
              rows="5"
              cols="50"
            />
          </div>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CallGuideForm;
