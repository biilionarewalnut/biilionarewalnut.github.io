const clock=document.querySelector("h2#clock");
const DAYS=["SUN","MON","TUE","WEN","THU","FRI","SAT"];

function timeSetter(){
    const date=new Date();
    let hours=(date.getHours()%12).toString().padStart(2,"0");
    if(date.getHours()%12==0){
        hours=(12).toString().padStart(2,"0");
    }
    const minutes=date.getMinutes().toString().padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

setInterval(timeSetter,1000);
