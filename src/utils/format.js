// Convierte los números de los pokemones a siempre 4 digitos, por ejemplo 0001 o 0024
export const formatNumberFourDigits = (number) => {
  let strNumber = String(number)
  let zerosNeeded = 4 - strNumber.length
  for (let i = 0; i < zerosNeeded; i++) {
    strNumber = '0' + strNumber
  }
  return strNumber
}
// Convierte la unidad a metros
export const convertLengthToMeters = (lengthInCentimeters) => {
  const lengthInMeters = lengthInCentimeters / 100
  return Math.round(lengthInMeters * 100) / 100 // Redondeo a dos decimales
}

// Convierte la unidad a kilogramos
export function convertWeightToKg(weightInHectograms) {
  const weightInKg = Math.round(weightInHectograms * 0.1 * 100) / 100 // Redondeo a dos decimales
  return weightInKg.toFixed(2).replace('.', ','); // Reemplaza el punto por coma
}