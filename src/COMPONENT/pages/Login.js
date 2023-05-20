export default function Login(){
    return(
        <div className="login">
            <div id="divcontainer">
                 <div id="idform">
                     <h1>Sign In</h1>
                          <form>
                                <input type="text" name="username" ></input><br></br>
                                <input type="text" name="userpass" ></input><br></br>
                                <input type="submit" name="validation" />
                          </form>
                </div>
            </div>
        </div>
    );
}