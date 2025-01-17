import {useContext, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children, value}) =>{

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

export function useAuthValue(){
    return useContext(AuthContext);
}