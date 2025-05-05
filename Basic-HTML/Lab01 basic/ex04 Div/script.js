const databtn = document.getElementById("databtn");
let intervalId; // Variable to hold the interval ID

databtn.addEventListener("click", () => {
    // If already updating, stop the previous interval
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        databtn.textContent = "Start Auto Update"; // Update button text
    } else {
        // Start updating time every second
        intervalId = setInterval(() => {
            const nowTimeElement = document.getElementById("Now_time");
            const currentTime = new Date().toLocaleTimeString(); // Get current time
            nowTimeElement.textContent = `Current Time: ${currentTime}`;
        }, 1000);

        databtn.textContent = "Stop Auto Update"; // Update button text
    }
});