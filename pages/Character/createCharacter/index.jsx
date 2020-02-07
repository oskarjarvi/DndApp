import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Picker } from "react-native";
import { Input } from "react-native-elements";
import SafeAreaView from "react-native-safe-area-view";
import { useSafeArea } from "react-native-safe-area-context";
import Api from "../../../utils/Api";

export default function CharacterCreation() {
  const insets = useSafeArea();
  const [characterSelection, setCharacterSelection] = useState({
    name: "",
    class: "testing",
    race: "fuck you",
    stats: [
      { int: 0 },
      { str: 0 },
      { con: 0 },
      { dex: 0 },
      { wis: 0 },
      { char: 0 }
    ],
    alignments: ""
  });
  const [alignments, setAlignments] = useState([
    { lawfullGood: false },
    { lawfullEvil: false },
    { lawfullNeutral: false },
    { neutralGood: false },
    { neutralEvil: false },
    { neutral: false },
    { chaoticGood: false },
    { chaoticNeutral: false },
    { chaoticEvil: false }
  ]);
  const [fetchedData, setFetchedData] = useState({
    classes: false,
    races: false
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let classes = await Api.getClasses();
    let races = await Api.getRaces();
    setFetchedData({
      classes: classes,
      races: races
    });
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        flex: 1
      }}
    >
      <View style={styles.container}>
        <View style={styles.characterWrapper}>
          <Input
            label={"Name"}
            containerStyle={styles.inputFieldwrapper}
            inputContainerStyle={styles.inputWrapperStyle}
            inputStyle={styles.textInput}
            labelStyle={{ color: "white", paddingBottom: 20 }}
            onChangeText={data =>
              setCharacterSelection({ ...characterSelection, name: data })
            }
          />
          <Picker
            selectedValue={characterSelection.class}
            style={styles.picker}
            mode={"dialog"}
            onValueChange={(itemValue, itemIndex) =>
              setCharacterSelection({
                ...characterSelection,
                class: itemValue
              })
            }
          >
            {fetchedData &&
              fetchedData.classes &&
              fetchedData.classes.map((item, key) => {
                return (
                  <Picker.Item label={item.name} value={item.name} key={key} />
                );
              })}
          </Picker>
          <Picker
            selectedValue={characterSelection.race}
            style={styles.picker}
            mode={"dialog"}
            onValueChange={(itemValue, itemIndex) =>
              setCharacterSelection({
                ...characterSelection,
                race: itemValue
              })
            }
          >
            {fetchedData &&
              fetchedData.races &&
              fetchedData.races.map((item, key) => {
                return (
                  <Picker.Item label={item.name} value={item.name} key={key} />
                );
              })}
          </Picker>
          <TouchableOpacity>
            <Text>Stats</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={characterSelection.race}
            style={styles.picker}
            mode={"dialog"}
            onValueChange={(itemValue, itemIndex) =>
              setCharacterSelection({
                ...characterSelection,
                alignments: itemValue
              })
            }
          >
            {alignments.map((item, key) => {
              return <Picker.Item label={item} value={item} key={key} />;
            })}
          </Picker> 
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  characterWrapper: {
    flex: 1,
    width: "80%",
    alignItems: "center"
  },
  picker: {
    width: "100%",
    height: 50,
    backgroundColor: "green"
  },
  inputWrapperStyle: {
    borderWidth: 1,
    borderColor: "white"
  },
  inputFieldwrapper: {
    marginBottom: 15
  },
  textInput: {
    paddingLeft: 15
  }
});
