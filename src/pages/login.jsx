import { Link } from "react-router-dom";
import Forminput from "../components/forminput";
function Login (){
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const formData = new FormData(e.target);

        const email = formData.get("email");
        const password = formData.get("password");
        console.log({email,password});
        
    }
    return<section>
        <div className="h-screen grid md:grid-cols-2">
            <div  className="login-register-left-section hidden md:flex"></div>
            <div className="grid place-items-center login-register-left-section md:bg-none">
                <form onSubmit={handleSubmit} className="w-96 relative z-20" >
                    <h2 className="text-3xl text-center mb-5 font-bold">Login</h2>
                    <Forminput label="Email:" name="email" type="email" />

                    <Forminput label="Password:" name="password" type="password"/>

                    <div className="flex items-center gap-5 mt-8 mb-8" >
                    <button type="submit" className="btn btn-primary grow">Login</button>
                    <button type="button" className="btn btn-secondary grow">Google</button>
                    </div>
                     <p className="text-center opacity-75">
                        If you have not an account
                        <Link className="link link-primary" to="/register">Register</Link>
                     </p>
                </form>
            </div>
        </div>
    </section>
} export default Login;