export function convertTemperature(temperature, from, to) {
  if (from === to) {
    return temperature;
  }

  if (from === 'C' && to === 'F') {
    return (temperature * 9) / 5 + 32;
  }

  if (from === 'C' && to === 'K') {
    return temperature + 273.15;
  }

  if (from === 'F' && to === 'C') {
    return ((temperature - 32) * 5) / 9;
  }

  if (from === 'F' && to === 'K') {
    return ((temperature - 32) * 5) / 9 + 273.15;
  }

  if (from === 'K' && to === 'C') {
    return temperature - 273.15;
  }

  if (from === 'K' && to === 'F') {
    return ((temperature - 273.15) * 9) / 5 + 32;
  }

  throw new Error('Unsupported conversion');
}