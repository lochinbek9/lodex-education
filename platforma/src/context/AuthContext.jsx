import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import * as authApi from '../api/auth.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authApi.currentUser());

  const login = useCallback(async creds => { const u = await authApi.login(creds); setUser(u); return u; }, []);
  const register = useCallback(async data => { const u = await authApi.register(data); setUser(u); return u; }, []);
  const logout = useCallback(async () => { await authApi.logout(); setUser(null); }, []);
  const updateProfile = useCallback(async data => { const u = await authApi.updateProfile(user.id, data); setUser(u); return u; }, [user]);

  const value = useMemo(() => ({ user, login, register, logout, updateProfile }), [user, login, register, logout, updateProfile]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
