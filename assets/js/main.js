const bars = document.querySelector(".fa-bars")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".mainLeft")


bars.addEventListener("click", () => {
    overlay.classList.add("active")
    menu.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menu.classList.remove("active")
})






const timeDisplay = document.querySelector(".headerLeftTop")

function getCurrentTimeInCustomFormat() {
    const months = [
        "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();

    // Get hours and minutes in 12-hour format with AM/PM
    let hours = currentDate.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight

    const minutes = currentDate.getMinutes();

    // Add leading zero if minutes is less than 10
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const timeString = `${month} ${day}. ${year} [${hours}:${formattedMinutes} ${amPm} PST]`;

    return timeString;
}

// Example usage:
const currentTime = getCurrentTimeInCustomFormat();
timeDisplay.innerText = currentTime