const slider = document.getElementById("slider");
const output = document.getElementById("remain");

slider.oninput = function() {
    output.innerHTML = this.value;
    
}

slider.addEventListener("mousemove", function() {
    let percentage = (slider.value / 10) - 1;
    let color = `linear-gradient(90deg, hsl(6, 100%, 80%), hsl(335, 100%, 65%) ${percentage}%, #0c122c ${percentage}%)`;
    slider.style.background = color;
})


