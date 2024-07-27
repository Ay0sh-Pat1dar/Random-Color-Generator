let btn = document.querySelector("button");

btn.addEventListener("click", changeColor);

function changeColor(){
    let h3 = document.querySelector("h3");
    let randomColor = generateRandomColor();
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    //copy color code
    let copybtn = document.querySelector("#copy");
    copybtn.addEventListener("click", function (){
        navigator.clipboard.writeText(randomColor);
        // alert("Copied");
    });
}
function generateRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);   

    let color = `rgb(${red},${green},${blue})`;
    return color;
}



