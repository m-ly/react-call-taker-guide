export default function CallTypeForm({ setCallType, callType, handleSetForm }) {
  function handleClick(e) {
    e.preventDefault();
    handleSetForm("questionsForm");
  }

  return (
    <form>
      <label htmlFor="callType">New Call Type</label>
      <input
        type="text"
        id="callType"
        value={callType}
        placeholder="Enter a New Call Type"
        onChange={(e) => setCallType(e.target.value)}
      />

      <button
        style={{ padding: "4px", margin: "5px", width: "40px" }}
        onClick={handleClick}
      >
        <span>+</span>
      </button>
    </form>
  );
}
