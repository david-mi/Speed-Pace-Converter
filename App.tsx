import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from "react";
import styles from "./app.styles"
import InputWrapper from "./components/InputWrapper/InputWrapper";
import { removeNonDigitsCharsFromString, convertNumberToStringDecimal, convertToPaceOrSpeed } from "./components/InputWrapper/helpers";

function App() {
  const MAX_DECIMALS = 2
  const [speedInputValue, setSpeedInputValue] = useState<string>((0).toFixed(MAX_DECIMALS))
  const [paceInputValue, setPaceInputValue] = useState<string>((0).toFixed(MAX_DECIMALS))

  function paceChangeText(pace: string) {
    const formattedPaceInput = removeNonDigitsCharsFromString(pace)
    const paceToNumber = Number(formattedPaceInput)

    const paceToSpeedCalc = convertNumberToStringDecimal(convertToPaceOrSpeed(paceToNumber), MAX_DECIMALS)

    setPaceInputValue(formattedPaceInput)
    setSpeedInputValue(paceToSpeedCalc)
  }

  function speedChangeText(speed: string) {
    const formattedSpeedInput = removeNonDigitsCharsFromString(speed)
    const speedToNumber = Number(formattedSpeedInput)

    const speedToPaceCalc = convertNumberToStringDecimal(convertToPaceOrSpeed(speedToNumber), MAX_DECIMALS)

    setSpeedInputValue(formattedSpeedInput)
    setPaceInputValue(speedToPaceCalc)
  }

  return (
    <View style={styles.container}>
      <InputWrapper
        title={"MIN / KM"}
        value={paceInputValue}
        onChangeText={paceChangeText}
      />
      <StatusBar style="auto" backgroundColor={"white"} />
      <InputWrapper
        title={"KM / H"}
        value={speedInputValue}
        onChangeText={speedChangeText}
      />
    </View>
  );
};

export default App;