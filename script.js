
let city=document.getElementById('searchbar');
let cityname=document.getElementById('cityname');
let temperature=document.getElementById('weatherdata');
let humidity=document.getElementById('humidity');
let windspeed=document.getElementById('windspeed');
let wthr=document.getElementById('wthr');
let wthricon=document.getElementById('wthricn');
//calling function..
function show(city){
    if(city.value==''){
        city.value='jammu';
    }
    let urlid=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=2e5e37b35f225304d0237d5ce43cee8a&units=metric`);
    urlid.then((value)=>value.json()).then((value2)=>{
    if(value2.cod=='404'){
        invalid();
    }
    images(value2);
    Dataa(value2);   
    })     
}



//invalid city name..
function invalid(){
    cityname.innerHTML='invalid city name...';
    wthricon.src=`confused.png`;
    wthr.innerHTML='';
    temperature.innerHTML='';
    humidity.innerHTML='';
    windspeed.innerHTML='';
    return 0;
}
//data targeting..
function Dataa(value2){
     cityname.innerHTML=value2.name;
     wthr.innerHTML=value2.weather[0].main;
     temperature.innerHTML=Math.round(value2.main.temp)+'°C';
     humidity.innerHTML=`${value2.main.humidity}%`;
     windspeed.innerHTML=`${value2.wind.speed}km/h`;
}

//weather images...
function images(value2){
    if(value2.weather[0].main=='Clouds'){
        console.log(value2.weather[0].main);
        wthricon.src=`cloud.jpg`;
    }else if(value2.weather[0].main=='Dust'){
        wthricon.src=`dustt.jpg`;
    }else if(value2.weather[0].main=='Rain'){
        wthricon.src=`raining.jpg`;
    }else if(value2.weather[0].main=='Clear'){
        wthricon.src=`clear.jpg`;
    }else if(value2.weather[0].main=='Haze'){
        wthricon.src=`haze.jpg`;
    }
}