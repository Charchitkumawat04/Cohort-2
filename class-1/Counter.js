let countdown = 30;

function updateCounter() {
    console.log(countdown);

    if (countdown === 0) {
        clearInterval(timer); // Stop the timer when countdown reaches 0
        console.log("Countdown complete!");
    } else {
        countdown--;
    }
}

// Update the counter every second (1000 milliseconds)
const timer = setInterval(updateCounter, 1000);
