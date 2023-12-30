import { useState } from "react";
import { Text, View, TextInput, GestureResponderEvent, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import styles from "./styles"

interface Props {
  title: string
  value: string
  onChangeText: (value: string) => void
  autoFocus?: boolean
}

function InputWrapper({ title, value, onChangeText, autoFocus = false }: Props) {
  const [focused, setFocused] = useState(autoFocus)
  console.log("input wrapper")


  function onFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(true)
  }

  function onBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocused(false)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType={"numeric"}
        style={{
          ...styles.input,
          backgroundColor: focused ? "#ffe8c7" : "white"
        }}
        value={value}
        onChangeText={onChangeText}
        defaultValue={"0.00"}
        selectTextOnFocus
        autoFocus={autoFocus}
        selectionColor={"transparent"}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
}

export default InputWrapper;