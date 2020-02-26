import React, { useState, useEffect } from 'react';
import Firebase  from '../config/firebase'
import { useSelector, useDispatch } from 'react-redux';
import { SetCurrentUser } from '../redux/actions/user'

export function useCurrentUser() {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)
  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
        dispatch(SetCurrentUser(user))
    });
   },[])
  return userState;
}