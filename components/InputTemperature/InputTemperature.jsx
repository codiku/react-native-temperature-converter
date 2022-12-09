import { TextInput } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature() {
  return <TextInput keyboardType="numeric" style={s.input} />;
}
