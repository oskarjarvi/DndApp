import * as firebase from "firebase";

const api = {
  getCharacters(userRef) {
    firebase
      .database()
      .ref(`user/characters/${userRef}`)
      .once("value", data => {
        if (data.exists()) {
          let values = Object.values(data.val());
          if (values) {
            return values;
          }
        }
      });
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
  }
};
export const getData = url => {
  return fetch(`http://dnd5eapi.co/api/${url}`)
    .then(res => res.json())
    .then(response => {
      return response;
    })
    .catch(error => console.log(error));
};
// export const postData = url => {
//   return fetch(`http://dnd5eapi.co/api/${url}`)
//     .then(res => res.json())
//     .then(response => {
//       return response;
//     })
//     .catch(error => console.log(error));
// };
export default api;
