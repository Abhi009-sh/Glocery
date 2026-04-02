import { createContext,useState,useContext} from "react";
import {useNavigate} from 'react-router-dom'

export const AppContext=createContext();
export const AppContextProvider=({children})=>{
    const navigate=useNavigate();
    const[user,setuser]=useState(true);
    const[isSeller,setIsSeller]=useState(false);
    const [isLogin,setLogin]=useState(false)
    const values={navigate,user,setuser,isSeller,setIsSeller,isLogin,setLogin}
        return <AppContext.Provider value={values}>
              {children}
        </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}