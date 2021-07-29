import { createContext, useState } from "react";
export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);

  return (
    <ColorContext.Provider value={{ status, setStatus }}>
      {children}
    </ColorContext.Provider>
  );
};
