function openForm() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "block"; 
}

function closeForm() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none"; 
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}