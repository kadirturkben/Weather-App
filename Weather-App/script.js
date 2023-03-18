const url = "https://api.openweathermap.org/data/2.5/";
const key = "54169e1958ad178ba708e461472c88e2";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};
const searchBar = document.getElementById("main-searchBar");
searchBar.addEventListener("keypress", setQuery);

async function getResult(cityname) {
  const response = await fetch(
    `${url}weather?q=${cityname}&appid=${key}&units=metric&lang=en`
  );
  const data = await response.json();
  console.log(data);
  displayResult(data);
}

function displayResult(result) {
  let city = document.querySelector("#city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector("#temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector("#desc");
  desc.innerText = `${result.weather[0].description}`;
}
