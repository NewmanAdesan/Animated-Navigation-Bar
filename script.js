
let nav = document.getElementById("nav");
let icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    nav.classList.contains("close") ? nav.classList.remove("close") : nav.classList.add("close")
    nav.querySelector("i").style.display = "none";
})



