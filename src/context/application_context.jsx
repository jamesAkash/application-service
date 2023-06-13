import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

//to avoid headache of useGlobal in every component
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  /* Global States */
  const [applications, setApplications] = useState([]);
  const [status, setStatus] = useState({
    pending: 31,
    applied: 40,
    completed: "9",
  });
  return (
    <GlobalContext.Provider value={{ applications, status }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
