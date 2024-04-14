function showTime() {
    console.clear();
    let status = 'am';
    // Getting current time and date
    let time = new Date();
    let hour = String(time.getHours()).padStart(2, 0);
    let min = String(time.getMinutes()).padStart(2, 0);
    let sec = String(time.getSeconds()).padStart(2, 0);
    // console.log(hour,':',min,'::',sec);
    if (parseInt(hour) >= 12 && parseInt(min) >= 1)
    {
        hour -= 12;
        hour = hour.toString().padStart(2, 0);
        console.log(hour,':',min,'::',sec,'pm');
    }
    else
    {
    console.log(hour,':',min,'::',sec,'',status);
    }
}
// showTime();
setInterval(showTime, 1000);