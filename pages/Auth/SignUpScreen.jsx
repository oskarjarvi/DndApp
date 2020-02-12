import React from "react";
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
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../../redux/actions/user'

 const SignUp =(props) => {
  
  const handleSubmit = () => 
  {
    props.signup()
    props.navigation.navigate('App')
  }
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
            value={props.user.email}
            label="Enter your email here"
            labelStyle={{ color: "white", paddingBottom: 20 }}
            onChangeText={email => props.updateEmail(email)}
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            autoCapitalize='none'

          />
          <Input
            containerStyle={styles.inputFieldwrapper}
            inputStyle={styles.textInput}
            inputContainerStyle={styles.inputWrapperStyle}
            label="Enter your password here"
            value={props.user.password}
            labelStyle={{ color: "white", paddingBottom: 20 }}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={password => props.updatePassword(password)}
            secureTextEntry={true}
          />
        </View>
    
        {renderButton()}    
      </View>
    </ImageBackground>
  );
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

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
