import { Text, View, TextInput } from 'react-native';
import styles from "./styles"

interface Props {
  title: string
  value: string
  onChangeText: (value: string) => void
}

function InputWrapper({ title, value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType={"numeric"}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        defaultValue={"0.00"}
        selectTextOnFocus
      />
    </View>
  );
}

export default InputWrapper;