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
  const [
    {
      showForm,
      showEditForm,
      showKeywords,
      showQuestions,
      activeCallType,
      currentQuestion,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  function setShowForm() {
    dispatch({ type: "handleShowForm", payload: !showForm });
  }
  function setShowEditForm() {
    dispatch({ type: "handleShowEditForm", payload: !showEditForm });
  }

  function setShowKeywords() {
    dispatch({ type: "handleShowKeywords", payload: !showKeywords });
  }

  function setShowQuestions() {
    dispatch({ type: "handleShowQuestions", payload: !showQuestions });
  }

  function setActiveCallType(callType) {
    dispatch({ type: "handleSetActiveCallType", payload: callType });
  }

  function setCurrentQuestion(currentQuestion) {
    dispatch({ type: "handleSetCurrentQuestion", payload: currentQuestion });
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
