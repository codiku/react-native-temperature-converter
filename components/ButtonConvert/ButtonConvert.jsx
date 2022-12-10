import { Text, TextInput, TouchableOpacity } from "react-native";

import { s } from "./ButtonConvert.style";

export function ButtonConvert({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text style={s.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
