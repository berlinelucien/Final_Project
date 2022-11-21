import React from 'react';
import { useEffect } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const saveUser = async (user) => {
    return await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
}

const AuthenticationButton = () => {
    const { isAuthenticated, user } = useAuth0();

  useEffect(()=>{
    if(isAuthenticated){
        saveUser(user);
    }
  }, [isAuthenticated, user]);

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;