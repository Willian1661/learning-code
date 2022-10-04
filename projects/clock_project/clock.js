const currentTime= document.querySelector("h1"),
content = document.querySelector(".content")
SelectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet = false;

for(let i = 12; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    SelectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for(let i = 59; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    SelectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for(let i = 2; i > 0; i--){
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    SelectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if( h >= 12){
        h = h -12;
        ampm = "PM"
    }
    h = h == 0? h = 12 : h;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText =  `${h}:${m}:${s} ${ampm}`;

    if(alarmTime == `${h}:${m} ${ampm}`){
    }

}, 1000);

    function setAlarm(){
        if(isAlarmSet){
        alarmTime = "";
        
        content.classList.remove("disable");
        setAlarmBtn.innerText = "set alarm";
        return isAlarmSet = false;
    }


        let time = `${SelectMenu[0].value}:${SelectMenu[1].value} ${SelectMenu[2].value}`;

        if(time.includes("hour")||time.includes("minute")||time.includes("AM/PM")){

            return alert("please, select a valid time to set alarm!");
        }
        isAlarmSet = true;
        alarmTime = time;
        content.classList.add("disable");
        setAlarmBtn.innerText = "clear alarm";
    }

setAlarmBtn.addEventListener("click", setAlarm)
