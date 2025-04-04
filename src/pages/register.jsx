import { Link } from "react-router-dom";
import Forminput from "../components/forminput";
import { useRegister } from "../hooks/useRegister";
function Register (){
    const {data,isPending,register} = useRegister
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const formData = new FormData(e.target);

        const displayName = formData.get("displayName");
        const email = formData.get("email");
        const password = formData.get("password");
        register({email,displayName,password});
        
    }
    return<section>
        <div className="h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="login-register-left-section hidden md:flex"></div>
            <div className="absolute left-0 top-0 bottom-0 w-full bg-black opacity-50 z-10 md:hidden"></div>
            <div className="grid place-items-center login-register-left-section md:bg-none">
                <form onSubmit={handleSubmit} className="w-96 z-20 relative">
                    <h2 className="text-3xl text-center mb-5 font-bold">Register</h2>
                   <Forminput label="Email:" name="email" type="email"/>

                   <Forminput label="Display Name:" name="displayName" type="text"/>

                   <Forminput label="Password:" name="password" type="password"/>


                    <div className="flex items-center gap-5 mt-8 mb-8" >
                    <button type="submit" className="btn btn-primary grow">Register</button>
                    <button type="button" className="btn btn-secondary grow">Google</button>
                    </div>
                     <p className="text-center opacity-75">
                        If you have not an account  
                        <Link className="link link-primary" to="/login">Login</Link>
                     </p>
                </form>
            </div>
        </div>
    </section>
} export default Register;