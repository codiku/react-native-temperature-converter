import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaView style={s.container}>
      <Text>Starter</Text>
    </SafeAreaView>
  );
}
