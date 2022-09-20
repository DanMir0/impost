const navigationList = document.querySelector(".navigation-menu")
const navigationLinks = document.querySelectorAll(".navigation-menu__link")
const menuButton = document.querySelector(".menu-button")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")

function toggleMenu() {
    if (navigationList.classList.contains("showMenu")) {
        navigationList.classList.remove("showMenu")
        closeIcon.style.display = "none"
        menuIcon.style.display = "block"
    } else {
        navigationList.classList.add("showMenu")
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

menuButton.addEventListener("click", toggleMenu)

navigationLinks.forEach(function(navigationLink) {
    navigationLink.addEventListener("click", toggleMenu)
})