import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useSafeArea } from "react-native-safe-area-context";
import Api from "../../utils/Api";

export default function Characters({ navigation }) {
  const insets = useSafeArea();

  return (
    <SafeAreaView style={{ paddingTop: insets.top, flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Text>Create your character</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Generate your character</Text>
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
  }
});
