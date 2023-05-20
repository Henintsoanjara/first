export default function Login(){
    return(
        <div className="login">
            <div id="divcontainer">
                 <div id="idform">
                     <h1>Sign In</h1>
                          <form>
                                <input type="text" name="username" placeholder="Username"></input><br></br>
                                <input type="text" name="userpass" placeholder="Password"></input><br></br>
                                <input id="idsubmit" type="submit" name="validation" value="Submit" />
                            </form>
                </div> 
                <a className="lo" href="">Forgot Password</a>    
            </div>
        </div>
    );
}