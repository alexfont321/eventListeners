function factory () {
    const createElement = document.createElement("section");
    const textbox = document.querySelector(".input").value;
    createElement.className = "border";
    createElement.innerHTML = `<h3>${textbox}</h3><button id="box">Delete This Card</button>`;
    document.querySelector(".card").appendChild(createElement);
    
};



const createButton = document.querySelector('.create');

createButton.addEventListener("click", factory);

document.querySelector("#box").addEventListener("click", function () {
    documument.querySelector(".card").removeChild();
    });


