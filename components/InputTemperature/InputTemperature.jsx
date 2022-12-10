import { Text, TextInput, View } from "react-native";

import { s } from "./InputTemperature.style";

export function InputTemperature({ unit, onChangeText }) {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        keyboardType="numeric"
        style={s.input}
        maxLength={4}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
