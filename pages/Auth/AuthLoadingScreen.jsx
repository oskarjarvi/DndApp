/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, StatusBar } from "react-native";
import * as firebase from "firebase";
import fireBaseConfig from "../../config/firebase";

export default function AuthLoading({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(fireBaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoading(false);
        navigation.navigate("App");
      } else {
        setLoading(false);
        navigation.navigate("Auth");
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
