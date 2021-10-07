const week=["SUN","MON","TUE","WED","THU","FRI","SAT"];

const clock=document.querySelector("h2#clock");
const Fulldate=document.createElement("span");
const time=document.createElement("span");
Fulldate.id="date";
time.id="time";
clock.appendChild(Fulldate);
clock.appendChild(time);
function getClock(){
    const date=new Date();
    const year=String(date.getFullYear()).padStart(2,"0");
    const month=String(date.getMonth()+1).padStart(2,"0");
    const day=String(date.getDate()).padStart(2,"0");
    const mon=String(week[date.getDay()]);
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    Fulldate.innerText=`${year}-${month}-${day}-${mon}`;
    time.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);
