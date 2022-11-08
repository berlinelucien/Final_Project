// src/components/logout-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
    return (
      <div className='app__navbar-login'>
    <button
      className="button is-danger"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
            </button>
            </div>
  );
};


export default LogoutButton;