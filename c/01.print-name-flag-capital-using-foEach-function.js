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
  let text = "";

  arr.forEach((element, index) => {
    text += `<div class='country'>
        <h3>${element.name.common}</h3>
        <div class='imgDetailContainer'>
        <div class='imageContainer'>
          <img src="${element.flags.svg}" />
        </div>
        ${
          element.capital
            ? `<div class='detail'>Capital :  ${element.capital[0]}</div>`
            : ``
        }
        </div>
      </div>`;
  });

  countryListContainer.innerHTML = text;
}
