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
import { useState } from "react";

export default function App() {
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);
  const [inputValue, setInputValue] = useState("");

  function toggleUnit() {
    setCurrentUnit(getOppositeUnit(currentUnit));
  }
  console.log(inputValue);
  return (
    <ImageBackground
      source={
        inputValue &&
        (isIceTemperature(inputValue, currentUnit)
          ? coldBackground
          : hotBackground)
      }
      resizeMode="cover"
      style={[
        s.imgContainer,
        { backgroundColor: inputValue === "" && "black" },
      ]}
    >
      <View style={s.container}>
        <View style={s.temperatureContainer}>
          <TemperatureDisplay
            value={
              inputValue
                ? convertTemperature(
                    Number.parseFloat(inputValue),
                    getOppositeUnit(currentUnit)
                  ).toFixed(1)
                : ""
            }
            unit={getOppositeUnit(currentUnit)}
          />
        </View>
        <InputTemperature
          onChangeText={setInputValue}
          unit={currentUnit}
          value={inputValue}
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
