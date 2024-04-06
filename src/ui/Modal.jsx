const Modal = ({ showModal, title, data }) => {
  return (
    <>
      {showModal ? (
        <div className="modalContainer">
          <div className="modal">
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              <button className="close">close</button>
            </header>
            <main className="modal_content">
              <ol>
                {data.map((element) => {
                  return (
                    <li key={element.id}>
                      <div>
                        {element.question}
                        <button>update</button>
                        <button>delete</button>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </main>
            <footer className="modal_footer">
              <button className="modal-close">Cancel</button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
