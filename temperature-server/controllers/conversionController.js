import { convertTemperature as calculateTemperature } from '../utils/temperatureConverter.js';

export const convertTemperature = (req, res) => {
  const { temperature, from, to } = req.body;

  if (temperature === undefined) {
    return res.status(400).json({
      error: 'Temperature is required',
    });
  }

  if (typeof temperature !== 'number' || Number.isNaN(temperature)) {
    return res.status(400).json({
      error: 'Temperature must be a number',
    });
  }

  const validUnits = ['C', 'F', 'K'];

  if (!validUnits.includes(from)) {
    return res.status(400).json({
      error: 'Invalid temperature unit',
    });
  }

  if (!validUnits.includes(to)) {
    return res.status(400).json({
      error: 'Invalid temperature unit',
    });
  }

  try {
    const result = calculateTemperature(temperature, from, to);

    res.json({
      result,
      unit: to,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};