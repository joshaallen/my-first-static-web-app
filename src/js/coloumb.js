//Caching html dom element in constant 
const simulation_btn = document.getElementById("bgn_simulation");
const electron_img = document.querySelector(".electron");
const unknown_distance_container = document.querySelector(".unknown_distance_container");


//function
function beginAnimation() {
    electron_img.style.transform = "translateX(210%)";
    unknown_distance_container.style.display = "flex";
}

//Traditional DOM Event Handler
simulation_btn.onclick = beginAnimation;