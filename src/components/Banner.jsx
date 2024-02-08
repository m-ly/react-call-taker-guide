import { useState } from "react";
import road from "../assets/road-3.png";

function AddCallTypeForm({ onSetCallType }) {
  const [callType, setCallType] = useState("");

  console.log("in the form");
  function submitCallType(event) {
    event.preventDefault();

    onSetCallType(callType);
    setCallType("");
  }

  return (
    <form className="dynamic" onSubmit={submitCallType}>
      <input
        type="text"
        value={callType}
        placeholder="...Add a New Call Type"
        onChange={(event) => setCallType(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}

function Banner({ setCallType }) {
  function handleSetCallButton() {
    console.log("click registered");
    return <AddCallTypeForm onSetCallType={setCallType} />;
  }
  return (
    <>
      <div className="logo">
        <h1>GuardRails</h1>
        <img src={road} alt="road" style={{ maxHeight: "12rem" }} />
      </div>
      <button onClick={handleSetCallButton}>Add a new Call</button>
    </>
  );
}

export default Banner;
