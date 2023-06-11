export default function Signin(){
    return(
        <div className="signin">
            <div className="divcontain">
                <div>
                    <h1>Sign Up</h1>
                    <label htmlFor="anarana">NOM</label>
                    <input type="text" className="anarana" id="anarana" placeholder="Ex:RAVALOHERY"/>
                    <label htmlFor="fname">PRENOM</label>
                    <input type="text" className="fname" id="fname" placeholder="Ex:Aajran"/>
                    <label htmlFor="uname">USERNAME</label>
                    <input type="text" className="uname" id="uname" placeholder="Ex:@Bonhome12"/>
                    <label htmlFor="num">NUMBER</label>
                    <input type="text" className="num" id="num" placeholder="Ex:03491xxxxx"/>
                </div>
                <div id="divcote">
                        <h2>Welcome to your word</h2>
                </div>
            </div>

        </div>
    );
}