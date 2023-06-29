export default function Signin(){
    return(
        <div className="signin">
            <div className="divcontain">
                <div>
                    <h1 className="H">Sign'Up</h1>
                    <label className="labels" htmlFor="anarana">NOM</label>
                    <input type="text" className="inp" id="anarana" placeholder="Ex:RAVALOHERY" autoComplete="off" required/>
                    <label className="labels" htmlFor="fname">PRENOM</label>
                    <input type="text" className="inp" id="fname" placeholder="Ex:Aajran" autoComplete="off" required/>
                    <label className="labels" htmlFor="uname">USERNAME</label>
                    <input type="text" className="inp" id="uname" placeholder="Ex:@Bonhome12" autoComplete="off" required/>
                    <label className="labels" htmlFor="num">NUMBER</label>
                    <input type="text" className="inp" id="num" placeholder="Ex:03491xxxxx" autoComplete="off" required/>
                    <input type="reset" value="Reset"id="nok"/>
                </div>
                <div id="divcote">
                   <h2>Welcome to your word</h2>
                   <input id="ok" type="submit" value="submit"/>
            </div>
            </div>
        </div>
    );
}