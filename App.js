import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
export default function App() {
  return (
    <ImageBackground source={hotBackground} style={s.container}>
      <View style={s.workspace}>
        <View>
          <Text>Temperature</Text>
        </View>
        <InputTemperature defaultValue={"12"} />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
