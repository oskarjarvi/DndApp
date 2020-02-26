import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Input } from "react-native-elements";
import Background from "../../assets/background.jpg";
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Signup } from '../../redux/actions/user'
import { useCurrentUser } from "../../utils/customHooks";


const SignUp = (props) => {

  const [formData, setFormData] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const user = useCurrentUser()

  const handleSubmit = () => {
    dispatch(Signup(formData))
    // props.navigation.navigate('App')
  }
  useEffect(() => {
    if (user && user.user) {
      props.navigation.navigate('App')
    }
  }, [user])
  const renderButton = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text style={styles.submitButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <ImageBackground
      source={Background}
      imageStyle={{ resizeMode: "cover" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            containerStyle={styles.inputFieldwrapper}
            inputContainerStyle={styles.inputWrapperStyle}
            inputStyle={styles.textInput}
            value={formData.email}
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
            value={formData.password}
            labelStyle={{ color: "white", paddingBottom: 20 }}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onSubmitEditing={() => handleLogin()}
            onChangeText={data => setFormData({ ...formData, password: data })}
            secureTextEntry={true}
          />
        </View>

        {renderButton()}
      </View>
    </ImageBackground>
  );
}


export default SignUp

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
