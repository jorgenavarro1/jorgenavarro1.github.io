const btn = document.getElementById("getDataBtn");
const select = document.getElementById("locationSelect");
const todayCard = document.getElementById("todayCard");
const tomorrowCard = document.getElementById("tomorrowCard");
const errorMsg = document.getElementById("errorMsg");
const timezoneDisplay = document.getElementById("timezoneDisplay");

btn.addEventListener("click", () => {
  errorMsg.textContent = "";

  const value = select.value;

  if (!value) {
    errorMsg.textContent = "Please select a location.";
    return;
  }

  const [lat, lng] = value.split(",");

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const urlToday = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${todayStr}`;
  const urlTomorrow = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${tomorrowStr}`;

  Promise.all([
    fetch(urlToday).then(res => res.json()),
    fetch(urlTomorrow).then(res => res.json())
  ])
  .then(([todayData, tomorrowData]) => {

    if (todayData.status !== "OK" || tomorrowData.status !== "OK") {
      throw new Error("API error");
    }

    const t = todayData.results;
    const tm = tomorrowData.results;

    todayCard.innerHTML = `
      <h2>Today:</h2>
      <p>🌅 Sunrise: ${t.sunrise}</p>
      <p>🌇 Sunset: ${t.sunset}</p>
      <p>🌄 Dawn: ${t.dawn}</p>
      <p>🌃 Dusk: ${t.dusk}</p>
      <p>⏳ Day Length: ${t.day_length}</p>
      <p>🕛 Solar Noon: ${t.solar_noon}</p>
    `;

    tomorrowCard.innerHTML = `
      <h2>Tomorrow:</h2>
      <p>🌅 Sunrise: ${tm.sunrise}</p>
      <p>🌇 Sunset: ${tm.sunset}</p>
      <p>🌄 Dawn: ${tm.dawn}</p>
      <p>🌃 Dusk: ${tm.dusk}</p>
      <p>⏳ Day Length: ${tm.day_length}</p>
      <p>🕛 Solar Noon: ${tm.solar_noon}</p>
    `;

    timezoneDisplay.textContent = `Timezone: ${t.timezone}`;
  })
  .catch(err => {
    errorMsg.textContent = "Error fetching data. Try again.";
    console.error(err);
  });
});