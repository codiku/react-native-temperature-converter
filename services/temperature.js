import { UNITS } from "./../constants";

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

function convertTemperature(value, toUnit) {
  if (toUnit === UNITS.celcius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}

export { getOppositeUnit, convertTemperature };
