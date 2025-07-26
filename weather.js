const API_KEY=`c5ac204cd877719af4c6add8ae644ee6`
const btn=document.querySelector('.submit')
const input=document.getElementById('city')

const weatherInfo=document.querySelector('.weather-info')
btn.addEventListener('click',fetchWeather);
function fetchWeather(){
    let cityName = input.value;
    if(!cityName){
        alert("Please enter city name");
        return ;
    }
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
.then((response)=>{
    const data = response.json();
    return data;

}
).then((data)=>{

    const cityTemp= data.main.temp;
   
    const humidity=data.main.humidity;
    const windSpeed=data.wind.speed;
    const fellsLike=data.main.feels_like;

    weatherInfo.innerHTML = `
   
    <div class ="current-weather">
    <h2>${cityName}</h2>
    <div class="temp">${cityTemp}</div>
    <div class ="temp">25C</div>
    
    <div class="details">
        <div>Humidity: ${humidity}</div>
        <div>Wind Speed: ${windSpeed}</div>
        <div>Fells Like: ${fellsLike}</div>
    </div>
    </div>`

})

}