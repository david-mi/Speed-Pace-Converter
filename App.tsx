import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { useState } from "react";
import styles from "./app.styles"

function App() {
  const [speedInputValue, setSpeedInputValue] = useState<string>("")
  const [paceInputValue, setPaceInputValue] = useState<string>("")

  function handleSpeedInput(speed: string) {
    const formattedSpeed = speed.replace(/[^\d\.]/g, "")
    const speedToNumber = Number(formattedSpeed)

    const speedToPaceCalc = speedToNumber > 0
      ? (60 / speedToNumber).toFixed(2)
      : "0"

    setSpeedInputValue(formattedSpeed)
    setPaceInputValue(speedToPaceCalc)
  }


  function handlePaceInput(pace: string) {
    const formattedPace = pace.replace(/[^\d\.]/g, "")
    const paceToNumber = Number(formattedPace)

    const paceToSpeedCalc = paceToNumber > 0
      ? (60 / paceToNumber).toFixed(2)
      : "0"

    setPaceInputValue(formattedPace)
    setSpeedInputValue(paceToSpeedCalc)
  }

  return (
    <View
      style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>KM / H</Text>
        <TextInput
          keyboardType={"numeric"}
          style={styles.input}
          value={speedInputValue}
          onChangeText={handleSpeedInput}
        />
      </View>
      <StatusBar style="auto" backgroundColor={"white"} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>MIN / KM</Text>
        <TextInput
          keyboardType={"numeric"}
          style={styles.input}
          value={paceInputValue}
          onChangeText={handlePaceInput}
        />
      </View>
    </View>
  );
};

export default App;