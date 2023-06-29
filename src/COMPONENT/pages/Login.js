import { NavLink } from "react-router-dom";
export default function Login(){
    return(
        <div className="login">
            <div id="di">
                 <div id="idform">
                          <form>
                                <h1 className="G">Sign In</h1>
                                <input className="i" type="text" name="username" placeholder="Username"></input><br></br>
                                <input className="i" type="text" name="userpass" placeholder="Password"></input><br></br>
                                <input id="idsubmit" type="submit" name="validation" value="Submit"/>
                            </form>
                </div> 
                <NavLink className="lo">Forgot Password</NavLink>    
            </div>
        </div>
    );
}