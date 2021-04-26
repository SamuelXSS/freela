import React, { createContext } from 'react';

import useAuth from './auth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated,
    userId,
    userName,
    loading,
    logging,
    handleLogin,
    handleLogout,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        loading,
        logging,
        authenticated,
        userId,
        userName,
        handleLogin,
        handleLogout
      }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };