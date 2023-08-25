var countSownDate = new Date("Oct 30, 2023 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countSownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    var secods = Math.floor((distance % (1000 * 60 )) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("secods").innerHTML = secods;

   if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("secods").innerHTML = "00";
   }


},5000);