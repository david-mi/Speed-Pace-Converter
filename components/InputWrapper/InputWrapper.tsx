import { useState, useRef, useEffect } from "react";
import { View, TextInput, Animated, Easing, useAnimatedValue } from 'react-native';
import styles from "./styles"
import useTextInputAnimations from "./useTextInputAnimations";

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
  const { inputContainerBackgroundColor, labelBackgroundColor } = useTextInputAnimations({ focused })

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
    <View style={styles.container} onTouchStart={handleTouchStart}>
      <Animated.Text
        style={{
          ...styles.title,
          backgroundColor: labelBackgroundColor,
        }}>
        {title}
      </Animated.Text>
      <Animated.View
        style={{
          ...styles.inputContainer,
          backgroundColor: inputContainerBackgroundColor
        }}>
        <TextInput
          keyboardType={"numeric"}
          style={styles.input}
          value={value}
          onChangeText={onChangeTextHandler}
          selection={selectionOptions}
          selectionColor={"transparent"}
          autoFocus={autoFocus}
          selectTextOnFocus
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Animated.View>
    </View>
  );
}

export default InputWrapper;