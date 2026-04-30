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