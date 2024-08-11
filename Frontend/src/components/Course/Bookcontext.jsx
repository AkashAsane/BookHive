import React, { useContext, useState, createContext } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [book, setBook] = useState([]);

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
