// ShowContext.js
import React, { createContext, useContext, useState } from 'react';

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState(null);

  const setSelectedShowData = (data) => {
    setSelectedShow(data);
  };

  return (
    <ShowContext.Provider value={{ selectedShow, setSelectedShowData }}>
      {children}
    </ShowContext.Provider>
  );
};

export const useShowContext = () => {
  return useContext(ShowContext);
};
