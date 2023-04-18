//Caching html dom element in constant 
const submit_btn = document.getElementById("submit_btn");
const solution_textBox = document.getElementById("solution");
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");



//function
function getSolution() {
     let solution = solution_textBox.value;
     if (solution == "3") {
        correct.style.display = "block";
    }
    else {
        incorrect.style.display = "block";
    }
     
}

//HTML DOM Event Handler
submit_btn.onclick = getSolution;