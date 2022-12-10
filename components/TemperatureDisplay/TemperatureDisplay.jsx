import { Text } from "react-native";
import { s } from "./TemperatureDisplay.style";

export function TemperatureDisplay({ unit }) {
  return <Text style={s.text}>Todo {unit}</Text>;
}
