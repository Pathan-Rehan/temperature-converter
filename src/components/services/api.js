const API_URL = "http://localhost:5000";

export async function convertTemperature(temperature, from, to) {
  const response = await fetch(`${API_URL}/api/convert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temperature,
      from,
      to,
    }),
  });

  const data = await response.json();

  return data;
}
