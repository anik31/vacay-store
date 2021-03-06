import { Link } from "react-router-dom";
import {illustration404} from "../../assets";

export function Page404(){
    return (
        <main className="container-error-page">
            <img src={illustration404} alt="404 illustration" />
            <h2>Oops! The page you’re trying to reach doesn’t exist.</h2>
            <Link to="/" className="btn btn-primary">Click here to go back home</Link>
        </main>
    );
}; 