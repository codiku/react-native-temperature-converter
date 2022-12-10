import { Text } from "react-native";
import { s } from "./TemperatureDisplay.style";

export function TemperatureDisplay({ unit, value }) {
  return (
    <Text style={s.text}>
      {value} {unit}
    </Text>
  );
}
