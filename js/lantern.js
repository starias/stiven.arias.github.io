// Get the lantern element
const lantern = document.getElementById("lantern");

// Add a mousemove event to track the cursor
document.addEventListener("mousemove", (e) => {
    // Update the position of the lantern to follow the mouse
    lantern.style.left = `${e.pageX}px`;
    lantern.style.top = `${e.pageY}px`;
});