import { ImageBackground, View } from "react-native";
import { UNITS, UNIT_LABELS } from "./constants";
import {
  convertTemperature,
  getOppositeUnit,
  isIceTemperature,
} from "./services/temperature";

import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import coldBackground from "./assets/cold.png";
import hotBackground from "./assets/hot.png";
import { s } from "./App.style";
import { useEffect, useState } from "react";

export default function App() {
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);
  const [inputValue, setInputValue] = useState("0");
  const [currentBackground, setCurrentBackground] = useState();

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(
        temperatureAsFloat,
        currentUnit
      );
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue]);

  function toggleUnit() {
    setCurrentUnit(getOppositeUnit(currentUnit));
  }

  function getConvertedTemperature(value) {
    const temperatureAsFloat = Number.parseFloat(value);
    return isNaN(temperatureAsFloat)
      ? ""
      : convertTemperature(
          temperatureAsFloat,
          getOppositeUnit(currentUnit)
        ).toFixed(1);
  }
  return (
    <ImageBackground
      source={currentBackground}
      resizeMode="cover"
      style={s.imgContainer}
    >
      <View style={s.container}>
        <View style={s.temperatureContainer}>
          <TemperatureDisplay
            value={getConvertedTemperature(inputValue)}
            unit={getOppositeUnit(currentUnit)}
          />
        </View>
        <InputTemperature
          onChangeText={setInputValue}
          unit={currentUnit}
          defaultValue={inputValue}
        />
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
