import { UNITS } from "./../constants";

export function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}
