import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonConvert.style";
export function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.text}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
