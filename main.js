/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const getIdActivate = document.querySelector("#activate-flight");
const getPowerList = document.querySelector("#powerList");
const getFlight = document.querySelector("#flight");
const getMind = document.querySelector("#mindreading")
const getXray = document.querySelector("#xray")



function handlerFunction (event) {
    for (let i = 0; i < getPowerList.children.length; i++) {
    getPowerList.children[i].classList.remove("disabled");
    getPowerList.children[i].classList.add("enabled");
    }
    // getFlight.classList.remove("disabled");
    // getFlight.classList.add("enabled");
    // getMind.classList.remove("disabled");
    // getMind.classList.add("enabled");
    // getXray.classList.remove("disabled");
    // getXray.classList.add("enabled");

    console.log(getFlight.classList.value);
    console.log(getMind.classList.value);
    console.log(getXray.classList.value);

    // for (let i = 0; i < 3; i++) {
    //     // getPowerList.item([i]).classList.remove("disabled");
    // // event.target.classList.remove("disabled");
    //     // getPowerList.event.target[i].classList.add("enabled");

    // // getIdActivate.classList.add('enabled');
    //     console.log(event.target) 
    // }
};

getIdActivate.addEventListener("click", handlerFunction)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/










/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/