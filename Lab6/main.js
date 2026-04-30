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