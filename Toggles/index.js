const pud = document.getElementById("pudialog");
const toggleButton = document.getElementById("styled");
function toggle() {
    if (toggleButton.getAttribute("aria-pressed") == "false") {
        toggleButton.setAttribute("aria-pressed", "true");
        pud.showModal();
    } else {
        toggleButton.setAttribute("aria-pressed", "false");
    }
}
function ClosePU() {
    pud.close();
    toggleButton.setAttribute("aria-pressed", "false");
}
