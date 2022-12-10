import { ImageBackground, View } from "react-native";
import { UNITS, UNIT_LABELS } from "./constants";
import { convertTemperature, getOppositeUnit } from "./services/temperature";

import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import hotBackground from "./assets/hot.png";
import { s } from "./App.style";
import { useState } from "react";

export default function App() {
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);

  function toggleUnit() {
    setCurrentUnit(getOppositeUnit(currentUnit));
  }
  return (
    <ImageBackground
      // source={{ uri: "https://reactjs.org/logo-og.png" }}
      source={hotBackground}
      resizeMode="cover"
      style={s.imgContainer}
    >
      <View style={s.container}>
        <View style={s.temperatureContainer}>
          <TemperatureDisplay
            value={convertTemperature(32, UNITS.celcius)}
            unit={getOppositeUnit(currentUnit)}
          />
        </View>
        <InputTemperature unit={currentUnit} />
        <View style={s.buttonContainer}>
          <ButtonConvert
            text={"Convertir en " + UNIT_LABELS[currentUnit]}
            onPress={toggleUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
