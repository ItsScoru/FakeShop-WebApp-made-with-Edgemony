const seppiaRange = document.getElementById("seppiaRange"); //VARIABILE COSTANTE
const grayscaleRange = document.getElementById("grayscaleRange");
const blurRange = document.getElementById("blurRange");
const brightnessRange = document.getElementById("brightnessRange");
const contrastRange = document.getElementById("contrastRange");
const saturateRange = document.getElementById("saturateRange");

const imageElement = document.getElementById("image");

seppiaRange.addEventListener("input", updateFilter);
grayscaleRange.addEventListener("input", updateFilter);
blurRange.addEventListener("input", updateFilter);
brightnessRange.addEventListener("input", updateFilter);
contrastRange.addEventListener("input", updateFilter);
saturateRange.addEventListener("input", updateFilter);

//const updateFilter = (E) => {}

function updateFilter() {
    const seppiaValue = seppiaRange.value;
    const grayscaleValue = grayscaleRange.value;
    const blurValue = blurRange.value;
    const brightnessValue = brightnessRange.value;
    const contrastValue = contrastRange.value;
    const saturateValue = saturateRange.value;

    const filter = `sepia(${seppiaValue}%) grayscale(${grayscaleValue}%) blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) saturate(${saturateValue}%)`;  //ALT+9+6

    imageElement.style.filter = filter;

}