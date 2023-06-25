var body = document.querySelector("body");
var toggle = document.querySelector("#toggle");
        
toggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});