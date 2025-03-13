function treci_la_urmatoarea(ID_SECTIUNE)
{
    document.getElementById(ID_SECTIUNE).scrollIntoView({behavior:"smooth"});
}
function ascunde_textbox() {
    // Selectează elementul input
    const textbox = document.getElementById("introdu_nume");
    // Schimbă display-ul la none pentru a-l ascunde
    textbox.style.display = "none";
}
function apare_textbox()
{
    const textbox = document.getElementById("introdu_nume");
    textbox.style.display = "block";
}
function reseteaza_formularul()
{
 document.getElementById("formular_importanta").reset();
}
