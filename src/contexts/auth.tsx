import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import api from '../services/api';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  signIn({email, password}: { email: string, password: string}): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('@Auth:token');
      if(storagedToken) {
        setToken(storagedToken);
        api.defaults.headers['x-api-key'] = token;
        setLoading(false);
        return
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn({email, password}: { email: string, password: string}) {
    try {
      const { token } = await auth.signIn({ email, password });
      setToken(token);

      api.defaults.headers['x-api-key'] = token;

      await AsyncStorage.setItem('@Auth:token', token);
    } catch (error) {
      console.log(error)
    }
  }

  async function signOut () {
    await AsyncStorage.clear();
    setToken('');
  }

  return (
    <AuthContext.Provider value={{
      signed: !!token,
      token,
      user: {},
      loading,
      setLoading,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}