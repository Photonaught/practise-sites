function login() {
    const accBox = document.getElementById("accountBox");
    const closeBox = document.getElementById("closeBox");
    accBox.classList.toggle("show");
    closeBox.classList.toggle("show");
    closeBox.style.visibility="visible";
}

function closeBox() {
    const accBox = document.getElementById("accountBox");
    const closeBox = document.getElementById("closeBox");
    accBox.classList.toggle("hide");
    closeBox.classList.toggle("hide");
}