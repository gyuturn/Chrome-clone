const API_KEY="a5822fd600723ecbc217150c78c0f6a8";
const icon=document.getElementById("icon");
const img=document.createElement("img");
const simpledescript=document.getElementById("simpledescript");
const  city=document.getElementById("city");
const arrow=document.getElementById("arrow");
const arrowdown=document.getElementById("arrowdown");
const temp=document.getElementById("temp");
const moisture=document.getElementById("mositure");
 
function onGeoOk(position){
    const lat= position.coords.latitude;
    const lng=position.coords.longitude;
   const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    
    fetch(url).then(response => response.json()).then(data => {
        const weatherimg = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        icon.appendChild(img);
        img.src=weatherimg;
        simpledescript.innerText =`${data.weather[0].main}`;
        city.innerText=`${data.name}`;
        temp.innerText=`TEMP:${data.main.temp}°C`;
        moisture.innerText=`HUMIDIY:${data.main.humidity}%`
        
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}

function clickArrow(event){
    //아직 버튼 누르기전
    if(event.path[1].childNodes[9].className==="hiddenweather"){
        event.path[1].childNodes[7].style.display="none";
        event.path[1].childNodes[9].className="long";

    }
}
function upArrow(event){
   
    if(event.path[2].childNodes[9].className==="long"){
        event.path[2].childNodes[9].className="hiddenweather";
        event.path[2].childNodes[7].style.display="block";
    }
}
arrow.addEventListener("click",clickArrow)
arrowdown.addEventListener("click",upArrow)

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
