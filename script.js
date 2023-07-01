
let nav = document.getElementById("nav");
let icon = document.getElementById("icon");
let projectInfo = document.getElementById("project-info")


/* Navigation Button interaction */
icon.addEventListener("click", () => {
    nav.classList.contains("close") ? nav.classList.remove("close") : nav.classList.add("close")
    nav.querySelector("i").style.display = "none";
})


/* Project Info Close Button */
document.getElementById("project-close").addEventListener("click", () => {
    projectInfo.style.display = "none";
    nav.querySelector("i").classList.add("click-me");
})
