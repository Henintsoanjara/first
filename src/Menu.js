import { NavLink } from "react-router-dom";
export default function Menu(){
    return (
        <div className="menu">
            <ul>
                <li><NavLink className="lienM">Home</NavLink></li>
                <li><NavLink className="lienM">Films</NavLink></li>
                <li><NavLink className="lienM">Séries</NavLink></li>
                <li><NavLink className="lienM">Documentaires</NavLink></li>
                <li><NavLink className="lienM">Panier</NavLink></li>
            </ul>
        </div>
    );
}
