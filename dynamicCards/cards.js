//////Mine | doesnt work lol
 

// let count = 0;

// function factory () {
//     count += 1
//     const createElement = document.createElement("section");
//     const textbox = document.querySelector(".input").value;
//     createElement.className = `border`;
//     createElement.classList.add(`card--${count}`)
//     createElement.innerHTML = `<h3>${textbox}</h3><button id="box" class="delete">Delete This Card</button>`;
//     document.querySelector(".card").appendChild(createElement);
//     // document.querySelector("#box").addEventListener("click", function () {
//     //     document.querySelector("section").remove();
//     //     });
    
// };



// function addDeleteButton(e){
//     if(e.target.className === 'delete'){
//         e.target.parentElement.remove();
//     }
//     console.log(e);
// };


// const createButton = document.querySelector('.create');

// createButton.addEventListener("click", factory);

// document.querySelector('#box').addEventListener("click", addDeleteButton);



///Streator

const getCreateCard = document.getElementById('cardHolderDiv');
const getText = document.getElementById('text');
const getCreate = document.getElementById('create');
// const deleteButton = document.getElementById('delete');


function cardString(){
    let newCards = '';
    newCards += `<div class="deleteButtonCard">`
    newCards += `<p>${getText.value}</p>`
    newCards += `<button class="delete" id="delete">Delete this card</button>`
    newCards += `</div>`
    getCreateCard.innerHTML += newCards;
    console.log(newCards);
};


function addDeleteButton(event){
    if(event.target.id === 'delete'){
        event.target.parentElement.remove();
    }
    console.log(e);
};



getCreate.addEventListener('click', cardString);
getCreateCard.addEventListener('click', addDeleteButton);



//////Jonathan

// let count = 0;

// function factory() {
//     count += 1;
//     const createElement = document.createElement("section");
//     createElement.id = `card--${count}`
    
//     const textbox = document.querySelector(".input").value;
    
//     createElement.className = "border";
//     createElement.classList.add(`card--${count}`)
//     createElement.innerHTML = `<h3>${textbox}</h3><button id="delete--${count}" class="">Delete This Card</button>`;
    
//     document.querySelector(".card").appendChild(createElement);

// console.log(createElement.id.split("--")[1]);

//     document.querySelector(`#delete--${count}`).addEventListener("click", function (event) {
//         if (event.target.id.split("--")[1] === createElement.id.split("--")[1]) {
//             createElement.remove();
//         } else {
//             alert("You suck");
//         }
//     }
//     )
// }


// const createButton = document.querySelector('.create');
// createButton.addEventListener("click", factory);