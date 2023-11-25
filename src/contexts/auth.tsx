import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AuthContextProps {
  loggedUser: User | null;
  setLoggedUser: Dispatch<SetStateAction<User | null>>;
}

interface User {
  name: string;
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextProps>({
  loggedUser: null,
  setLoggedUser: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
