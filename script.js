let rainbowMode = false;
let opacity = 0.1;

const container = document.querySelector("#container");

for (i=1; i<17; i++){
    const child = document.createElement("div");
    child.classList.add("miniSquare");
    container.appendChild(child);
    for (j=1; j<17; j++){
        const subChild = document.createElement("div");
        subChild.setAttribute("id", "subChild");
        child.appendChild(subChild);
    };
};

const squares = document.querySelectorAll("#subChild");


squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if (rainbowMode == true) {
            const R = Math.floor(Math.random() * 255);
            const G = Math.floor(Math.random() * 255);
            const B = Math.floor(Math.random() * 255);
            let opac = parseFloat(square.style.opacity) || 0;
            if (opac < 1){square.style.opacity = opac + 0.1}
            else {square.style.opacity = 1.0};
            squareColor = "rgba(" + R + ", " + G + ", " + B + ", " + opac + ")";
        } else {
            rainbowMode = false;
            let opac = parseFloat(square.style.opacity) || 0;
            if (opac < 1){square.style.opacity = opac + 0.1}
            else {square.style.opacity = 1.0};
        };
    square.style.background = squareColor;    
    })
});


const numSquares = document.getElementById("numSquares");

let selectedNumSquares = 16;

let color = document.querySelector("#colorSelect");
let squareColor = color.value.toLowerCase();

color.addEventListener("change", () => {
    const newColor = color.value.toLowerCase();
    if (newColor === "rainbow mode"){
        rainbowMode = true;
    } else {
        rainbowMode = false;
        squareColor = newColor;
    };
});

numSquares.addEventListener('keydown', () => {
    if (event.key == "Enter") {
        let inputValue = numSquares.value;
        if (parseFloat(inputValue) > 100) {
            alert("Warning: Due to performance, you can't enter a number larger than 100.");
            selectedNumSquares = 100;
        } else {
            selectedNumSquares = parseFloat(inputValue);
        };
        numSquares.value = "";
        

        const parentDiv = document.querySelector("#container");
        const children = parentDiv.querySelectorAll(":scope > *");
        children.forEach(child => {
                child.remove();
            }
        );
        
        for (i=1; i <= selectedNumSquares; i++){
            const child = document.createElement("div");
            child.classList.add("squareContainer");
            container.appendChild(child);
            for (j=1; j <= selectedNumSquares; j++){
                const subChild = document.createElement("div");
                subChild.setAttribute("id", "square");
                child.appendChild(subChild);
            };
            const width = 514 / (selectedNumSquares);
            const height = width;
            console.log(514 - selectedNumSquares * height)
            const rectangles = document.querySelectorAll(".squareContainer")
            rectangles.forEach(rect => {
                rect.style.width = width + "px";
                rect.style.height = "514px";
            });
            const squaresInRects = document.querySelectorAll("#square")
            squaresInRects.forEach(square => {
                square.style.height = height + "px";
                square.style.width = width + "px";
            });
        };
        const hoverSquares = document.querySelectorAll("#square")

        hoverSquares.forEach(square => {
            square.addEventListener('mouseover', () => {
                if (rainbowMode == true) {
                    const R = Math.floor(Math.random() * 255);
                    const G = Math.floor(Math.random() * 255);
                    const B = Math.floor(Math.random() * 255);
                    let opac = parseFloat(square.style.opacity) || 0;
                    if (opac < 1){square.style.opacity = opac + 0.1}
                    else {square.style.opacity = 1.0};
                    console.log(opac);
                    square.style.background = "rgba(" + R + ", " + G + ", " + B + ", " + opac + ")";
                } else {
                    square.style.background = squareColor;
                    let opac = parseFloat(square.style.opacity) || 0;
                    if (opac < 1){square.style.opacity = opac + 0.1}
                    else {square.style.opacity = 1.0};
                    console.log(opac);
                };
            });
        });
    };
    
});







