import React, { useState, useEffect } from 'react';
import Firebase  from '../config/firebase'

export function useCurrentUser() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  useEffect(() =>{
    Firebase.auth().onAuthStateChanged(user => {
        setAuthenticatedUser(user)
    });
   },[])
  return authenticatedUser;
}