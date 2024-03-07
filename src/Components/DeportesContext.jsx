import React, { useState, useContext } from 'react';

export const DeportesContext = React.createContext();

export const DeportesProvider = ({ children }) => {
  const [deportes, setDeportes] = useState([]);

  return (
    <DeportesContext.Provider value={{ deportes, setDeportes }}>
      {children}
    </DeportesContext.Provider>
  );
};

export const useDeportes = () => {
  const context = useContext(DeportesContext);
  if (!context) {
    throw new Error('useDeportes debe usarse dentro de un SportsProvider');
  }
  return context;
};

export default DeportesContext;