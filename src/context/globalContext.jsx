import { createContext,  useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    user : null
};

const reducer = (state,action)=>{
    const {type,payload} = action;
    switch (type) {
        case "LOGIN" :
            return {...state,user:payload}
        case "LOGOUT" :
            return {...state, user:null}
        default :
                return state;
    }
}

export const GlobalContextProvider =({children})=> {

        const [state,dispatch] = useReducer(useReducer,initialState)

        return <GlobalContext.Provider value={({...state,dispatch})}>
            {children}
        </GlobalContext.Provider>
}