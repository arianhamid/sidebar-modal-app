import React, { useState, useContext, createContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
//custom hooks
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
