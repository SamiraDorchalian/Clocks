function showTime(){
    let data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let seconds = data.getSeconds();
    let session = "AM";

    if ( hour === 0){
        hour = 12;
    }
    if(hour > 12){
        // hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    let time = `${hour}:${minute}: ${seconds} ${session}`;
    document.querySelector(".Clock").innerText = time;
}

setInterval(showTime, 1000)