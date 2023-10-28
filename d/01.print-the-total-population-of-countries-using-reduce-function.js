var xmlhttp = new XMLHttpRequest();
var url = "https://restcountries.com/v3.1/all";
const countryListContainer = document.querySelector(".countryList");

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var arr = JSON.parse(this.responseText);
    filterCountry(arr); //Asia | Oceania | Africa | Europe | Americas |
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function filterCountry(arr) {
  let population = [];

  arr.forEach((element, index) => {
    population.push(element.population);
  });

  console.log(population);

  let totalPopulation = population.reduce(
    (acc, currentValue) => (acc = acc + currentValue)
  );

  console.log(totalPopulation);
  countryListContainer.innerHTML = `<h1>Total Population is : <span>${totalPopulation}</span></h1>`;
}
