import "./auth.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../context";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 0.5rem;
  border-color: #fff;
`;

export function Login(){
    const {loginUser, isAuthLoading} = useAuth();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const testCredentials = {
        email: "johndoe@gmail.com",
        password: "johnDoe123"
    };
    const [errMsg, setErrMsg] = useState("");

    const passwordVisibilityHandler = () => setIsPasswordVisible(prev=> !prev);

    const loginHandler = () => {
        if(!credentials.email.trim() || !credentials.password.trim()){
            setErrMsg("Enter credentials");
        }else{
            loginUser(credentials);
        }
    };

    const testLoginHandler = () => {
        setCredentials(testCredentials);
        loginUser(testCredentials);
    };

    return (
        <div className="container-auth">
        <div className="form box-shadow">
            <h3>Login</h3>
            {errMsg && <p className="err-msg">{errMsg}</p>}
            <div className="input input-text">
                <label>Email address</label>
                <input type="email" value={credentials.email} 
                placeholder="example@gmail.com" onChange={(e)=>{setCredentials(prev=>({...prev, email:e.target.value}))}} />
            </div>
            <div className="input input-text">
                <label>Password</label>
                <div className="password-wrapper">
                    <input type={isPasswordVisible?"text":"password"} 
                    value={credentials.password} placeholder="password" onChange={(e)=>{setCredentials(prev=>({...prev, password:e.target.value}))}} />
                    <button onClick={passwordVisibilityHandler}>
                    {isPasswordVisible
                    ? <i className="far fa-eye-slash"></i>
                    : <i className="far fa-eye"></i>}
                    </button>
                </div>
            </div>
            <button className="btn btn-primary" onClick={loginHandler} disabled={isAuthLoading}>
                {isAuthLoading && 
                <ClipLoader color={`#fff`} css={override} size={20}/>} 
                Login
            </button>
            <button className="btn btn-primary-outline" onClick={testLoginHandler} disabled={isAuthLoading}>
                Test Login
            </button>
            <Link to="/signup" className="btn btn-secondary-icon-text-no-border">Create New Account <i className="fas fa-chevron-right"></i></Link>
            </div>
        </div>
    );
}