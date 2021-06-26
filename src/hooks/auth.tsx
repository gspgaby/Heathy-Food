import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  cpf: number;
  birthdate: number;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number?: number;
  email: string;
  password: string;
}

interface AuthContextData {
  token: { token: string };
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  createUser(user: User): void;
  updateUser(user: User): void;
}

interface AuthState {
  user: User;
}

interface AuthStateToken {
  token: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<AuthStateToken>(() => {
    const tokenData = localStorage.getItem('@HEALTHY:token');

    if (tokenData) {
      return { token: tokenData };
    }

    return {} as AuthStateToken;
  });

  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@HEALTHY:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const dataLogin = localStorage.getItem('@HEALTHY:user');
    const tokenUuid = uuid();

    if (dataLogin) {
      const user: User = JSON.parse(dataLogin);
      if (user.email === email && user.password === password) {
        localStorage.setItem('@HEALTHY:token', tokenUuid);
        setToken({ token: tokenUuid });
      }
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@HEALTHY:token');

    setToken({ token: '' });
  }, []);

  const createUser = useCallback(
    (user: User) => {
      setData({
        user,
      });
      localStorage.setItem('@HEALTHY:user', JSON.stringify(user));
    },

    [setData],
  );

  const updateUser = useCallback(
    (user: User) => {
      setData({
        user,
      });
      localStorage.setItem('@HEALTHY:user', JSON.stringify(user));
    },

    [setData],
  );

  return (
    <AuthContext.Provider
      value={{
        token,
        user: data.user,
        signIn,
        signOut,
        createUser,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
