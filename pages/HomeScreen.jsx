import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useSafeArea } from "react-native-safe-area-context";
export default function Home({ navigation }) {
  const insets = useSafeArea();

  return (
    <SafeAreaView style={{ paddingTop: insets.top, flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuOption}
          onPress={() => {
            navigation.navigate("Characters");
          }}
        >
          <Text>Character</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuOption, styles.disabled]}>
          <Text>Spellbook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuOption, styles.disabled]}>
          <Text>Bestiary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuOption, styles.disabled]}>
          <Text>Classbook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuOption, styles.disabled]}>
          <Text>Races</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuOption, styles.disabled]}>
          <Text>Races</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "stretch"
  },
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
