import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 


// add authO login function
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
    return (
        <div className="app__navbar-login">
 <button className="button is-primary is-rounded are-medium"
      onClick={() => loginWithRedirect()}>
                
      Sign Up/Log In
    </button>
        </div>
   
  );
  };


export default LoginButton