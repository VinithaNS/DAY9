// Solving problems using array functions on rest countries data.
// 1. Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
 request.onload=function(){
   var data=JSON.parse(request.response);
   console.log(data);
let countryName=data.filter((country)=>country.region==="Asia")
console.log(countryName);
 
// 2.Get all the countries with a population of less than 2 lakhs using Filter function
 let getpopulation = data.filter((populations) =>populations.population < 200000);
 let population = getpopulation.map((populationless) => populationless.name);
 console.log(population);

 //3. Print the following details name, capital, flag using forEach function
 data.forEach((countries)=>{
    for (var i=0;i<data.length;i++){
          console.log(`name:${data[i].name} capital:${data[i].capital} flag:${data[i].flag}`);
    }
})
// 3.Print the total population of countries using reduce function
let tp=data.map((country)=>country.population);
var total=tp.reduce((sum,cv)=>sum+cv);
console.log(`Total Population:${total}`);
// 4.Print the country which uses US Dollars as currency.
const dollar=data.filter((country)=>country.currencies&&country.currencies.USD);
let currency=dollar.map((list)=>list.currencies.name);
console.log(currency);
}