import React, { createContext} from "react";
import  {useAuthContext}  from "./useAuthContext";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const {
        user,
        setUser,
        tokens,
        setTokens,
        me
    } = useAuthContext();
    return (
        <AuthContext.Provider value={{tokens,setTokens,user,setUser,me}}>
            {children}
        </AuthContext.Provider>
    );
};
