import { children, createContext } from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import roles from '../helpers/roles'
import routes from "../helpers/routes";
export const AuthContext=createContext();
export default function AuthProvider({children}) {
    const history=useHistory();
    const [user, setUser] = useState({id:1,role:roles.lider});
    const login=(userCredentials,fromLocation)=>{
        setUser({id:1,nombreCompleto:"Jorge Rios",email:"jorgerios@gmail.com",password:"12345",role:roles.estudiante});
        if(fromLocation){
           history.push(fromLocation);
        }
    }
    const logout=()=>setUser(null);
    const isLogged=()=>!!user;
    const hasRole= (role)=>  user?.role ===role;
    if(!isLogged) return <Redirect to={routes.home}/>
    const contextValue={
        user,
        isLogged,
        hasRole,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
