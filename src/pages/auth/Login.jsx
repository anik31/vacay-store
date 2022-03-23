import "./auth.css";
import {Link} from "react-router-dom";
import {useState} from "react";

export function Login(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const passwordVisibilityHandler = (e) => {
        e.preventDefault();
        setIsPasswordVisible(prev=> !prev);
    }

    return (
        <div className="grid-container-auth">
            <form className="form box-shadow">
            <h3>Login</h3>
            <div className="input input-text">
                <label>Email address</label>
                <input type="text" placeholder="example@gmail.com" />
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
            <div className="input-link-grp">
                <div className="input input-checkbox-radio">
                    <label><input type="checkbox" />Remember me</label>
                </div>
                <button className="btn btn-primary-link">Forgot your Password?</button>
            </div>
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-primary-outline">Test Login</button>
            <Link to="/signup" className="btn btn-secondary-icon-text-no-border">Create New Account <i className="fas fa-chevron-right"></i></Link>
            </form>
        </div>
    );
}