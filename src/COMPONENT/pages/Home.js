import { NavLink } from "react-router-dom";
import Login from "./Login";
export default function Home(){
    return (
        <div className="home">
            <div className="boutton">
                <div className="seconde">
                     <NavLink className="ok" id="con" to="/COMPONENT/pages/Login">Connexion</NavLink>
                     <NavLink className="ok" id="ins" to="/COMPONENT/pages/Signin">Inscription</NavLink>
                </div>
            </div>
        </div>
    )
}