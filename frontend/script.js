
const countryURL = "https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/all"
async function fetchCountries(url){
    const response = await fetch(url);
    const countries = await response.json();
    return countries;
}

async function loadEvent(){
    const countries = await fetchCountries('https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/all');
    console.log(countries);
}
async function fetchAllCountryName(countryURL){
    const response = await fetch(url);
    const countries = await response.json();
    return countries;

}
const fetchCountryByCode = async event => {
    const code = event.currentTarget.textContent.slice(event.currentTarget.textContent.indexOf("[")+1, event.currentTarget.textContent.indexOf("]"))
    console.log(code)
    const response = await fetch(`https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/by-cca3/%7Bcca3%7D$(code)`)
    const countryData = await response.json();
    console.log(countryData);
    const flagElement = document.getElementById("flag")
    flagElement.innerHTML= `<img src = ${countryData.flags.png}></img>`

}

document.addEventListener("DOMContentLoaded", async() =>{
const countryList = document.getElementById("country-list")
const countries = await fetchAllCountryName(countryURL);
countries.forEach(country =>{
    const countryElement = document.createElement("li")
    countryElement.textContent = `${country.name.common}[${country.cca3}]`
    countryElement.addEventListener("click",async(event)=> fetchCountryByCode(event))
    countryList.appendChild(countryElement)

});


});