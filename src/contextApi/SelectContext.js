import React, { createContext, useState, useEffect } from "react";

const SelectContext = createContext();

export function SelectProvider({ children }) {
  const [fournisseurs, setFournisseurs] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5555/api/fournisseurs")
      .then((res) => res.json())
      .then((json) => {
        setFournisseurs(json);
      });
    fetch("http://localhost:5555/api/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  }, []);
  return (
    <SelectContext.Provider value={{ fournisseurs, categories }}>
      {children}
    </SelectContext.Provider>
  );
}

export default SelectContext;
