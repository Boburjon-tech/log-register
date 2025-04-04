import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const useGlobalContext = ()=>{
    const context = useContext(GlobalContext);
    if(!context) {
        throw new Error("useGlobal context must be in GlobalContextProvider")
    }
    return context;
}