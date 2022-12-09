import { ImageBackground, Text, TextInput } from "react-native";

import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <ImageBackground
      source={{ uri: "https://reactjs.org/logo-og.png" }}
      resizeMode="cover"
      style={s.bgImage}
    >
      <SafeAreaView>
        <InputTemperature />
      </SafeAreaView>
    </ImageBackground>
  );
}
