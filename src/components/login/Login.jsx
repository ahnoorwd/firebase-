import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {
    const provider = new GoogleAuthProvider();
    const gitprovider = new GithubAuthProvider();
    const [username,setUsername] = useState(null);
    const btnhandlegoogle =()=>{
       signInWithPopup(auth,provider)
       .then(result =>{
          console.log(result.user);
          setUsername(result.user);
       })
       .catch(error =>{
        console.log("error is occuired",error);
        setUsername(null);
       })
    }

    const loginGithubHandle= () =>{
      signInWithPopup(auth,gitprovider)
      .then(result=>{
        setUsername(result.user);
      })
      .catch(error=>console.log("there is a error finding",error));
    }

    const btnsignOuthandle =  () =>{
        signOut(auth)
        .then(()=>{
            console.log("signout is completely done")
        })
        .catch(error=>console.log(error));
        setUsername(null);
    }
    return (
        <div>
           
           
           {
            username ?  <button onClick={btnsignOuthandle} style={{'marginTop':'20px'}}>Signout</button> : 
            <div>
                <button onClick={btnhandlegoogle} style={{'marginTop':'10px', 'marginRight':'20px'}}>Login With Google</button>
                <button onClick={loginGithubHandle}>Login With Github</button>
            </div>
           }
           {
            username && <div>
                <h4>{username.displayName}</h4>
                <p>{username.email}</p>
                <img style={{'borderRadius':'100%','width':'200px'}} src={username.photoURL}></img>
            </div>
           } 
        </div>
    );
};

export default Login;
