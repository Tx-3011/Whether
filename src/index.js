import "./styles.css"

const submit = document.querySelector("#submit");
const inputBox = document.querySelector("#inputBox")

const temp = document.querySelector("#temp")
const minT = document.querySelector("#minT")
const maxT = document.querySelector("#maxT")
const address = document.querySelector("#address")

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    let locationName = inputBox.value
    console.log(locationName);

    getWeatherDeatails(locationName)
})

async function getWeatherDeatails(name){
    const rawData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=current%2Cdays&key=A29PP798V6S8FFBRLP8CT6W8X&contentType=json`,{mode:"cors"});

    const jsonData = await rawData.json();
    
    let addressTxt = jsonData.resolvedAddress;
    let currentTemp = jsonData.currentConditions.temp;

    let iconName = `${jsonData.currentConditions.icon}.svg`






    console.log(addressTxt);
    console.log(currentTemp);

    temp.textContent = currentTemp;
    address.textContent = addressTxt
    minT.textContent = `Minimum : ${jsonData.days[0].tempmin}°C`
    maxT.textContent = `Maximum : ${jsonData.days[0].tempmax}°C`
    

    

}