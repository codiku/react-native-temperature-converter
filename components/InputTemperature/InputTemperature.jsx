import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemperature.style.js";

export function InputTemperature({ defaultValue }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Tappe une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
      />
      <Text style={s.unit}>°C</Text>
    </View>
  );
}
