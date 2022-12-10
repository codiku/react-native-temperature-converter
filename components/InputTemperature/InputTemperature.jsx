import { Text, TextInput, View } from "react-native";

import { s } from "./InputTemperature.style";

export function InputTemperature({ unit }) {
  return (
    <View>
      <TextInput keyboardType="numeric" style={s.input} />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
