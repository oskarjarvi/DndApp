import * as Firebase from "firebase";
import firestore from '@react-native-firebase/firestore';

const api = {
  getCharacters(userRef) {
    const ref = firestore().collection('users').doc(userRef).collection('characters').get()
  },
  async addCharacter(userRef, character) {
    const ref = firestore().collection('users')
    return await ref.add({ ...character })
  },
  async getClasses() {
    let data = await getData("classes");
    return data.results;
  },
  async getRaces() {
    let data = await getData("races");
    return data.results;
  },
  async getRaceSpecifics(race) {
    let data = await getData(`races/${race}`);
    return data;
  },
  async getClassSpecifics(Class) {
    let data = await getData(`classes/${Class}`);
    return data;
  },
  async getFeatures() {
    let data = await getData("features");
    return data.results;
  },
  Login(params) { return Firebase.auth().signInWithEmailAndPassword(params.email, params.password) },

  SignUp(params) { return Firebase.auth().createUserWithEmailAndPassword(params.email, params.password) }
};
export const getData = url => {
  return fetch(`http://dnd5eapi.co/api/${url}`)
    .then(res => res.json())
    .then(response => {
      return response;
    })
    .catch(error => console.log(error));
};

export default api;
