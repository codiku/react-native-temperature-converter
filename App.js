import { ImageBackground, View } from "react-native";

import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import hotBackground from "./assets/hot.png";
import { s } from "./App.style";

export default function App() {
  return (
    <ImageBackground
      // source={{ uri: "https://reactjs.org/logo-og.png" }}
      source={hotBackground}
      resizeMode="cover"
      style={s.imgContainer}
    >
      <View style={s.container}>
        <View style={s.temperatureContainer}>
          <TemperatureDisplay />
        </View>
        <InputTemperature />
        <View style={s.buttonContainer}>
          <ButtonConvert />
        </View>
      </View>
    </ImageBackground>
  );
}
