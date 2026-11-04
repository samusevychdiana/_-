const openbtn = document.getElementById("openbtn");
const closebtn = document.getElementById("closebtn");
const modal = document.getElementById("modal");

openbtn.addEventListener("click", () => {
    modal.style.display = "block";
})

closebtn.addEventListener("click", () => {
    modal.style.display = "none";
})