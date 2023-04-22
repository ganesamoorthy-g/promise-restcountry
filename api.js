
var contain = document.createElement("div")
contain.className = "container"


var crerow = document.createElement("div")
crerow.classList.add("row", "m-3");

contain.append(crerow);

var res = fetch('https://restcountries.com/v2/all')
res.then((data) => data.json())
  .then((data1) => foo(data1));

  // var weather=fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=f12eac39b18e3824b41d2f9f55f0d1bf
  // `);
  // weather.then((data)=>data.json())
  // .then((data2)=>console.log(data2));
  

function foo(data1) {
  for (let i = 0; i < data1.length; i++) {
    crerow.innerHTML += `
      <div class="col-md-4">
        <div class="card border-primary mb-3 " style="width: 18rem;">
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="country flags">
          <div class="card-body">
          <h5 class="card-title">${data1[i].name}</h5>
          <p class="card-text">Capital:${data1[i].capital}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">CountryCode:${data1[i].alpha3Code}</p>



          <button>click for weather:${data1[i].latlng}</button>
    
      
        </div>
      </div>
      </div>
      `;
    document.body.append(contain);
  }
}


