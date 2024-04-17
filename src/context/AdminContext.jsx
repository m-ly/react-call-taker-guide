import { createContext, useContext, useReducer } from "react";

const AdminContext = createContext();

const [showForm, setShowForm] = useState(false);
const [showKeywords, setShowKeywords] = useState(false);
const [showQuestions, setShowQuestions] = useState(false);
const [showEditForm, setShowEditForm] = useState(false);

const [activeCallType, setActiveCallType] = useState(null);
const [currentQuestion, setCurrentQuestion] = useState({});

const [activePanel, setActivePanel] = useState("callTypes");
