import { createContext, useContext, useEffect, useReducer } from "react";
import { getCallTypes } from "../services/apiCallTypes";

const AppContext = createContext();
const initialState = {
  questions: [],
  status: "loading",
  callTypes: {},
  filteredCallTypes: [],
  activeCallType: "",
  currentForm: "questionGuide",
  usedCount: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "dataReceived":
      return { ...state, callTypes: action.payload, status: "ready" };
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
    {
      questions,
      status,
      callTypes,
      filteredCallTypes,
      activeCallType,
      currentForm,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // useEffect(function () {
  //   const fetchData = async function () {
  //     dispatch({ type: "loading" });
  //     const data = await getCallTypes();

  //     try {
  //       dispatch({
  //         type: "dataReceived",
  //         payload: data,
  //       });
  //     } catch {
  //       dispatch({ type: "dataFailed" });
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleFilterCallTypes = (callArray) =>
    dispatch({ type: "filterTypes", payload: callArray });

  const handleSetActiveCallType = (callType) => {
    dispatch({ type: "setActiveCallType", payload: callType });
  };

  const handleSetForm = (formName) => {
    console.log("clicked", "formname ", formName);
    dispatch({ type: "setForm", payload: formName });
  };

  const handleCreateGuide = (updatedCallTypes) => {
    dispatch({ type: "createGuide", payload: updatedCallTypes });
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        status,
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
    throw new Error("QuestionsProvider was used outside of App Provider");
  return context;
}

export { AppProvider, useAppContext };
