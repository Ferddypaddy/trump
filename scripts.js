// Function to get the current date and time in Washington, DC
const getCurrentTimeInWashingtonDC = () => {
    const options = { timeZone: "America/New_York" };
    const now = new Date();
    return new Date(now.toLocaleString("en-US", options)).getTime();
};

// Set the end date of the countdown
const countdownDate = new Date("January 20, 2029 12:00:00").getTime();

// Set the start date dynamically to the current time in Washington, DC
const startDate = getCurrentTimeInWashingtonDC();

// Calculate the total duration of the countdown
const totalTime = countdownDate - startDate;

const updateCountdown = () => {
    const now = getCurrentTimeInWashingtonDC(); // Use dynamic start time
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Calculate the percentage of time left
    const percentageLeft = (timeLeft / totalTime) * 100;

    // Gradually change the background color from black to white
    const brightness = Math.floor(100 - percentageLeft); // 100% (black) to 0% (white)
    document.body.style.backgroundColor = `hsl(0, 0%, ${brightness}%)`;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Time's up!";
        document.body.style.backgroundColor = "white"; // Ensure it ends as white
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay
