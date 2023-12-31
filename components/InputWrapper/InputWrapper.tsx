import { useState, useRef, useEffect } from "react";
import { Text, View, TextInput, GestureResponderEvent, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import styles from "./styles"

interface Props {
  title: string
  value: string
  onChangeText: (value: string) => void
  autoFocus?: boolean
}

type SelectionOptions = {
  start: number
  end: number
} | null

function InputWrapper({ title, value, onChangeText, autoFocus = false }: Props) {
  const [focused, setFocused] = useState(autoFocus)
  const [selectionOptions, setSelectionOptions] = useState<SelectionOptions>({ start: 0, end: value.length })

  function onFocus() {
    setFocused(true)
  }

  function onBlur() {
    setFocused(false)
  }

  function handleTouchStart() {
    setSelectionOptions(null)
  }

  function onChangeTextHandler(value: string) {
    onChangeText(value)
    setSelectionOptions(null)
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
        onChangeText={onChangeTextHandler}
        selection={selectionOptions}
        selectionColor={"#FFBB5C"}
        autoFocus={autoFocus}
        selectTextOnFocus
        onFocus={onFocus}
        onBlur={onBlur}
        onTouchStart={handleTouchStart}
      />
    </View>
  );
}

export default InputWrapper;