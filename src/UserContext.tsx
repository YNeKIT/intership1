import React, { useState } from "react";
import { createContext} from "react";



export const UserContext = React.createContext<any|null>(null);



















// export const LoginContext = createContext(null);
// export const AuthProvider  = ({children}) => { 
//     const [token, setToken]= useState(null) 


// return(

//     <LoginContext.Provider value={{token, setToken}}>

//         {children}
//     </LoginContext.Provider>

// )
// }
// export const useAuth = useContext(AuthContext)