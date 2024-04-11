import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();
const initialState = {
  questions: [],
  callTypes: {},
  filteredCallTypes: [],
  activeCallType: "",
  currentForm: "questionGuide",
  usedCount: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, callTypes: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "filterTypes":
      return { ...state, filteredCallTypes: action.payload };
    case "setActiveCallType":
      return { ...state, activeCallType: action.payload };
    case "setForm":
      return { ...state, currentForm: action.payload };
    case "createGuide":
      return { ...state, callTypes: action.payload };
    default:
      throw new Error("Action Unknown");
  }
}

function AppProvider({ children }) {
  const [
    { questions, callTypes, filteredCallTypes, activeCallType, currentForm },
    dispatch,
  ] = useReducer(reducer, initialState);

  // const handleFilterCallTypes = (callArray) =>
  //   dispatch({ type: "filterTypes", payload: callArray });
  const handleFilterCallTypes = (callObject) =>
    dispatch({ type: "filterTypes", payload: callObject });

  const handleSetActiveCallType = (callType) => {
    dispatch({ type: "setActiveCallType", payload: callType });
  };

  const handleSetForm = (formName) => {
    dispatch({ type: "setForm", payload: formName });
  };

  const handleCreateGuide = (updatedCallTypes) => {
    dispatch({ type: "createGuide", payload: updatedCallTypes });
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        callTypes,
        activeCallType,
        filteredCallTypes,
        currentForm,
        handleFilterCallTypes,
        handleSetActiveCallType,
        handleSetForm,
        handleCreateGuide,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContextProvider was used outside of App Provider");
  return context;
}

export { AppProvider, useAppContext };
