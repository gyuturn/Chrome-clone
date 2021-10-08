const API_KEY="a5822fd600723ecbc217150c78c0f6a8";
const icon=document.getElementById("icon");
const img=document.createElement("img");
const simpledescript=document.getElementById("simpledescript");
const  city=document.getElementById("city");


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
        
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
