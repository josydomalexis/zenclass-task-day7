var xmlhttp = new XMLHttpRequest();
var url = "https://restcountries.com/v3.1/all";
const countryListContainer = document.querySelector(".countryList");

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var countryList = JSON.parse(this.responseText);
    filterCountry(countryList, (continent = "Americas")); //Asia | Oceania | Africa | Europe | Americas |
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function filterCountry(arr) {
  let text = "";
  let countryByCurrency = [];
  let finalList = [];

  arr.forEach((item, index) => {
    countryByCurrency.push(
      item.currencies != undefined ? Object.keys(item.currencies) : ["NULL"]
    );
  });

  countryByCurrency.forEach((item, index) => {
    item.forEach((curr) => {
      if (curr == "USD") {
        finalList.push(index);
      }
    });
  });

  finalList.forEach((element, index) => {
    text += `<div class='country'>
        <h3>${arr[element].name.common}</h3>
      </div>`;
  });

  countryListContainer.innerHTML = text;
}
