function showTime() {
    console.clear();
    // Getting current time and date
    let time = new Date();
    let hour = String(time.getHours()).padStart(2, 0);
    let min = String(time.getMinutes()).padStart(2, 0);
    let sec = String(time.getSeconds()).padStart(2, 0);
    console.log(hour,':',min,':',sec);
}

// showTime();
setInterval(showTime, 1000);