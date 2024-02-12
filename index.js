

let btn=document.getElementById("btn");

btn.onclick=()=>getInput();

function getInput()
{
    let cityName=document.getElementById("cityName").value;
    getWeatherInfo(cityName);
}


const imgObj={
    'veryHot':'weatherApp\assets\sun.png',
    'hot':'',
    'moderate':'',
    'cold':'',
    'veryCold':'',
}

const getWeatherInfo=async (cityName)=>{
    {
        const apiKey='cb499ecf2489180dd1fc89e39cdfba41';
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        try {
            const response = await fetch(url);
             result = await response.json();
             document.getElementById("desc").innerText=result.weather[0].main;
             document.getElementById("temp").innerText=(result.main.temp-273.15).toFixed(2);
             document.getElementById("mintemp").innerText=(result.main['temp_min']-273.15).toFixed(2);
             document.getElementById("maxtemp").innerTex=Math.round(result.main['temp_max']-273.15).toFixed(2);
        } catch (error) {
            console.error(error);
        }
    }
}