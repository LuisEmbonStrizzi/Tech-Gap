"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/client";

const authContext = createContext({});

export const useAuth = () => useContext(authContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }),
    [];

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export const useAuthContext = () => useContext(authContext);
