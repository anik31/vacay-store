import { Link } from "react-router-dom";
import "./auth.css";
import {useState} from "react";

export function Signup(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const passwordVisibilityHandler = (e) => {
        e.preventDefault();
        setIsPasswordVisible(prev=> !prev);
    }

    const confirmPasswordVisibilityHandler = (e) => {
        e.preventDefault();
        setIsConfirmPasswordVisible(prev=> !prev);
    }
    
    return (
        <div className="grid-container-auth">
        <form className="form box-shadow">
        <h3>Signup</h3>
        <div className="input input-text">
            <label>Email address</label>
            <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className="input input-text">
            <label>First name</label>
            <input type="text" placeholder="First name" />
        </div>
        <div className="input input-text">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
        </div>
        <div className="input input-text">
            <label>Password</label>
            <div className="password-wrapper">
            <input type={isPasswordVisible?"text":"password"} placeholder="password" />
                <button onClick={passwordVisibilityHandler}>
                {isPasswordVisible
                ? <i className="far fa-eye-slash"></i>
                : <i className="far fa-eye"></i>}
                </button>
            </div>
        </div>
        <div className="input input-text">
            <label>Confirm password</label>
            <div className="password-wrapper">
            <input type={isConfirmPasswordVisible?"text":"password"} placeholder="confirm password" />
                <button onClick={confirmPasswordVisibilityHandler}>
                {isConfirmPasswordVisible
                ? <i className="far fa-eye-slash"></i>
                : <i className="far fa-eye"></i>}
                </button>
            </div>
        </div>
        <div className="input input-checkbox-radio">
            <label><input type="checkbox" />I accept all terms & conditions</label>
        </div>
        <button className="btn btn-primary">Create New Account</button>
        <Link to="/login" className="btn btn-secondary-icon-text-no-border">Already have an account <i className="fas fa-chevron-right"></i></Link>
        </form>
        </div>
    );
}