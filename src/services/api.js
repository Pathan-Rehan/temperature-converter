const API_URL = "http://localhost:5000";

export async function convertTemperature(temperature, from, to) {
  // eslint-disable-next-line no-useless-catch
  try{
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
    if(!response.ok){
      throw new Error(data.error || "API request failed");
    }
    return data;
  }catch(error) {
    throw error;
  }
}
