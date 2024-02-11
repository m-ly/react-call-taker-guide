import road from "../assets/road-3.png";

function Banner({ setForm }) {
  function handleSetCallButton() {
    setForm("addCallForm");
  }
  return (
    <header>
      <div className="logo">
        <h1>GuardRails</h1>
        <img src={road} alt="road" style={{ maxHeight: "12rem" }} />
      </div>
      <button onClick={handleSetCallButton}>Add a new Call</button>
    </header>
  );
}

export default Banner;
