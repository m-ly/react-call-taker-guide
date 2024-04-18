import { createContext, useContext, useReducer } from "react";

const AdminContext = createContext();
const initialState = {
  showForm: false,
  showEditForm: false,
  showKeywords: false,
  showQuestions: false,
  activeCallType: null,
  currentQuestion: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "handleShowForm":
      return { ...state, showForm: action.payload };
    case "handleShowKeywords":
      return { ...state, showKeywords: action.payload };
    case "handleShowQuestions":
      return { ...state, showQuestions: action.payload };
    case "handleSetActiveCallType":
      return { ...state, activeCallType: action.payload };
    case "handleSetCurrentQuestion":
      return { ...state, currentQuestion: action.payload };
    case "handleShowEditForm":
      return { ...state, showEditForm: action.payload };
    default:
      throw new Error();
  }
}

function AdminProvider({ children }) {
  const {
    showForm,
    showEditForm,
    showKeywords,
    showQuestions,
    activeCallType,
    currentQuestion,
  } = useReducer(reducer, initialState);

  function setShowForm(showForm) {
    reducer({ type: "handleShowForm", action: !showForm });
  }

  function setShowKeywords(showKeywords) {
    reducer({ type: "handleShowKeywords", action: !showKeywords });
  }

  function setShowQuestions(showQuestions) {
    reducer({ type: "handleShowQuestions", action: !showQuestions });
  }

  function setActiveCallType(callType) {
    reducer({ type: "handleSetActiveCallType", action: callType });
  }

  function setCurrentQuestion(currentQuestion) {
    reducer({ type: "handleSetCurrentQuestion", action: currentQuestion });
  }

  function setShowEditForm(showEditForm) {
    reducer({ type: "handleShowEditForm", action: !showEditForm });
  }

  return (
    <AdminContext.Provider
      value={{
        showForm,
        setShowForm,
        showEditForm,
        setShowEditForm,
        showKeywords,
        setShowKeywords,
        showQuestions,
        setShowQuestions,
        activeCallType,
        setActiveCallType,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

function useAdminContext() {
  const context = useContext(AdminContext);
  if (context === undefined)
    throw new Error("AdminContextProvider was used outside of Admin Provider");
  return context;
}

export { AdminProvider, useAdminContext };
