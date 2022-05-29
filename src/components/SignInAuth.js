import{createContext, useState} from "react"

const AuthCon = createContext({});


export const AuthPro = ({children}) =>{
    const [auth, setAuth] = useState({});
    return(
        <AuthCon.Provider value = {{auth, setAuth}}>
            {children}
        </AuthCon.Provider>
    )
}

export default AuthCon;