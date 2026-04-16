import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const WeddingContext = createContext();

// 2. Create a custom hook for easy access in other files
export const useWeddingContext = () => useContext(WeddingContext);

// 3. Create the Provider component
export const WeddingProvider = ({ children }) => {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const openRsvp = () => setIsRsvpOpen(true);
  const closeRsvp = () => setIsRsvpOpen(false);

  return (
    <WeddingContext.Provider value={{ isRsvpOpen, openRsvp, closeRsvp }}>
      {children}
    </WeddingContext.Provider>
  );
};