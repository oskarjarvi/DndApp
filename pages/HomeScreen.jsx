import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useSafeArea } from "react-native-safe-area-context";
import Firebase from '../config/firebase'
import { globalStyles } from './sharedStyles'
import CharacterPicker from "../components/characterPicker";
import { useDispatch } from "react-redux";
import { AddCharacter, Logout } from "../redux/actions/user";
import { useCurrentUser } from "../utils/customHooks";

export default function Home(props) {
  const insets = useSafeArea();
  const dispatch = useDispatch();
  const currentUser = useCurrentUser()
  const handleSignout = () => {
    Firebase.auth().signOut()
    dispatch(Logout())
    props.navigation.navigate('Login')
  }
  const data = {
    user: currentUser.user.uid,
    character: { race: 'elf', class: 'ranger', level: 1 }
  }
  return (
    <SafeAreaView style={{ paddingTop: insets.top, flex: 1 }}>
      <View style={globalStyles.container}>
        <CharacterPicker />
        <TouchableOpacity onPress={() => dispatch(AddCharacter(data))}>
          <Text style={{ color: 'white' }}>Add character</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSignout()}>
          <Text style={{ color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  menuOption: {
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    flexBasis: "45%"
  },
  disabled: {
    opacity: 0.2
  }
});
