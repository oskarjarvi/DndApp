import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import * as firebase from "firebase";

import Background from "../../assets/background.jpg";

export default function SignUp({ navigation }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        navigation.navigate("Main");
      })
      .catch(() => {
        setError("Authentication failed");
        setLoading(false);
      });
  };
  const renderButton = () => {
    if (loading) {
      return <Text style={styles.submitButton}>Loading</Text>;
    }
    return (
      <View>
        <TouchableOpacity onPress={() => onLogin()}>
          <Text style={styles.submitButton}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const errorsubmit = () => {
    if (error) {
      return <Text> {this.state.error} </Text>;
    }
  };

  return (
    <ImageBackground
      source={Background}
      imageStyle={{ resizeMode: "cover" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <LinearGradient
          style={styles.backgroundFilter}
          colors={["#D4EFDF", "#145A32", "#145A32"]}
        />
        <View style={styles.inputContainer}>
          <Input
            containerStyle={styles.inputFieldwrapper}
            inputContainerStyle={styles.inputWrapperStyle}
            inputStyle={styles.textInput}
            label="Enter your email here"
            labelStyle={{ color: "white", paddingBottom: 20 }}
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={data => setFormData({ ...formData, email: data })}
          />
          <Input
            containerStyle={styles.inputFieldwrapper}
            inputStyle={styles.textInput}
            inputContainerStyle={styles.inputWrapperStyle}
            label="Enter your password here"
            labelStyle={{ color: "white", paddingBottom: 20 }}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={data => setFormData({ ...formData, password: data })}
            secureTextEntry={true}
          />
        </View>
        {errorsubmit()}
        {renderButton()}
        <TouchableOpacity>
          <Text style={{ color: "white", opacity: 0.6 }}>
            Dont have an account? Sign up here
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  backgroundFilter: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    position: "absolute"
  },
  inputContainer: {
    width: "80%"
  },
  textInput: {
    color: "white",
    paddingLeft: 15
  },
  inputWrapperStyle: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "white"
  },
  inputFieldwrapper: {
    marginBottom: 15,
    alignItems: "center"
  },
  tabButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  tabButton: {
    borderRadius: 55,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  submitButton: { color: "white", marginBottom: 50 }
});
