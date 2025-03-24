import React, { createContext, useState } from "react";

// Create the context
export const SearchContext = createContext({ searchQuery: "", setSearchQuery: () => {} }); 

// Provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
