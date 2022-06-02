import { createContext } from "react";
import { useState } from "react";

export const AuthContext= createContext();

export const AuthContextProvider= ({children})=>{
    const [token, setToken]= useState(null);

    const handleToken= (logintoken)=>{
        setToken(logintoken)
    }

    return (<AuthContext.Provider value={{token, handleToken}}>{children}</AuthContext.Provider>)
};