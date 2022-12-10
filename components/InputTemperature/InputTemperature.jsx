import { Text, TextInput, View } from "react-native";

import { s } from "./InputTemperature.style";

export function InputTemperature() {
  return (
    <View>
      <TextInput keyboardType="numeric" style={s.input} />
      <Text style={s.unit}>°F</Text>
    </View>
  );
}
