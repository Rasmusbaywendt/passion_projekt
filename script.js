window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu")

    document.querySelector("#burger").classList.toggle("gone");

    let erSkjult = document.querySelector("#burger").classList.contains("gone");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector("body").classList.remove("fixed");
    } else {
        document.querySelector("#menuknap").textContent = "╳";
        document.querySelector("body").classList.add("fixed");
    }
}
