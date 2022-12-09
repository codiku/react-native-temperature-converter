import { TextInput } from "react-native";
import { s } from "./InputTemperature.style";

export function TemperatureInput() {
  return <TextInput keyboardType="numeric" style={s.input} />;
}
