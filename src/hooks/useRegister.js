import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useState } from "react";
export const useRegister =()=>{
    const [isPending,setIsPending]  = useState(false);
    const [data,setData] = useState(null);

    const register = async (displayName,email,password)=>{
        try {
            setIsPending(true)
            const req = await createUserWithEmailAndPassword(auth,email,password)

            const user=req.user
            console.log(user)
        }catch (error){
            toast.error(error.message)
            console.log(error.message)
        }finally {
        isPending(false)
        }
    }
    return {isPending,data,register}
}
