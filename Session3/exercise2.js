function displayTime() {
    let currentDate = new Date();
    let currentTime= currentDate.getHours() + ":" + currentDate.getMinutes();
//if you are not fond of military time, add the if statement:
// if (currentDate.getHours()> 12) {
    if (hours > 12) {
        hours -=12;
    }
} 
    document.getElementById("time").innerHTML = currentTime;
}