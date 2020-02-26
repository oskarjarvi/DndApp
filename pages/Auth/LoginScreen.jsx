import React, { useEffect, useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import Background from "../../assets/background.jpg";
import { connect, useSelector } from 'react-redux'
import { Login } from '../../redux/actions/user'
import { useCurrentUser } from "../../utils/customHooks";
import { useDispatch } from 'react-redux'

const LoginPage = (props) => {

  const dispatch = useDispatch()
  const user = useCurrentUser()
  const [formData, setFormData] = useState({ email: '', password: '' })

  useEffect(() => {
    if (user&& user.user) {
      props.navigation.navigate('App')
    }
  }, [user])
  const handleLogin = () => {
      dispatch(Login(formData))
  }
  const renderButton = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleLogin()}>
          <Text style={styles.submitButton}>Login</Text>
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
        <LinearGradient
          style={styles.backgroundFilter}
          colors={["#D4EFDF", "#145A32", "#145A32"]}
        />
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
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={{ color: "white", opacity: 0.6 }}>
            Dont have an account yet? Sign up here
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

export default LoginPage
  // mapStateToProps,
  // mapDispatchToProps

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
