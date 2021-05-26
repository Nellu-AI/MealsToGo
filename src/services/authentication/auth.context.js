import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {loginRequest, registerRequest, logOut} from './auth.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onAuthStateChanged = userData => {
    setUser(userData);
    if (isLoading) setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(userData => {
        setUser(userData);
      })
      .catch(e => {
        setError(e.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match');
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then(userData => {
        setUser(userData);
      })
      .catch(e => {
        setError(e.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    setError(null);
    logOut();
  };
  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
