// Function to display the current date and time
function displayDateTime() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const currentTime = `${day} ${hours}:${minutes}`;

  const currentDetails = document.querySelector(".current-details");
  const weatherInfo =
    "moderate rain <br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>";

  currentDetails.innerHTML = `${currentTime}, ${weatherInfo}`;
}

displayDateTime();

// Feature #2: Search Engine
const searchForm = document.querySelector("header form");
const currentCity = document.querySelector(".current-city");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const city = document.querySelector(".search-input").value;
  currentCity.textContent = city;
});
