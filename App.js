import { ImageBackground, View } from "react-native";

import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { UNITS } from "./constants";
import hotBackground from "./assets/images/hot.png";
import { s } from "./App.style";
import { useState } from "react";

export default function App() {
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);
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
