
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
    return (
        <div className="app__navbar-login">
    <button
      className="button is-primary is-dark"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
            </button>
            </div>
  );
};

export default SignupButton;