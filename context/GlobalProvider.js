import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true)

    useEffect(()=>{
        getCurrentUser().
        then((res)=>{
            if(res){
                setUser(res);
                setisLoggedIn(true);
            }else{
                setisLoggedIn(true);
                setUser(null);
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            setisLoading(false);
        })

    }, [])

    return (
        <GlobalContext.Provider 
            value={{ 
                isLoggedIn, 
                setisLoggedIn,
                user, 
                setUser,
                isLoading
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;