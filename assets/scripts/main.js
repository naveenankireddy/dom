// let body = document.body;
// let heading = document.querySelector("h1")
// body.addEventListener("keyup", function (e){
//     console.log(e)
//     console.log(heading.classList)
//     heading.classList.toggle("pink")
//     console.log(heading.classList.contains("pink"))
//     // const getRandom = () => Math.round(Math.random() * 255);
//     // const background = `linear-gradient(45 deg, rgb(${getRandom()}, ${getRandom()}, ${getRandom()}), rgb(${getRandom()}, ${getRandom()}, ${getRandom()}))`
//     // console.log(background)
//     // document.body.background = background
// })

// let todoList = document.querySelector(".todo-list")
// let input = document.querySelector(".inputbox");

// input.addEventListener("keyup", function(e){
//     if(e.keyCode == 13) {
//         let value = input.value 
//         input.value = "";
//         let li  = document.createElement("li");
//         let para = document.createElement("p");
//         para.append(value);
//         let button = document.createElement("button");
//         button.innerText = "Delete"
//         button.addEventListener("click", function(e){
//             console.log(e, e.target)
//             e.target.parentElement.remove()
//         })
//         li.append(para, button);
//         todoList.prepend(li)

//     }
//     // console.log(e.keyCode);
// })

// 1. counter

// let counter  = 0;

// function renderView() {
//     document.querySelector("h1").textContent = counter;
// }

// function increment() {
//     counter++;
//     renderView()
// }

// function decrement() {
//     counter--;
//     renderView()
// }

// // Create an element div 
// // Create a heading element which contains the value of counter
// // Create a button which says increment 
// // On clicking the button it should increment the value of counter by 1 and re-render the view of counter value
// // Create a button which says decrement
// // On clicking the button it should decrement the value of counter by 1 and re-render the view of counter value
// // Now push the heading and both button inside div
// // Now push the div inside body
// let containerElement = document.createElement("div");
// let timerContainer =  document.createElement("h1");
// // timerContainer.textContent = counter;
// let incrementButton = document.createElement("button");
// incrementButton.textContent = "+ Increment";
// incrementButton.addEventListener("click", increment);
// let decrementButton = document.createElement("button");
// decrementButton.textContent = "- Decrement";
// decrementButton.addEventListener("click", decrement);
// containerElement.append(timerContainer, incrementButton, decrementButton);
// document.body.appendChild(containerElement)
// renderView();

// 2. Calculator


// const getValues = () => {
//     let value1 = document.querySelector(".input-1").value;
//     let value2 = document.querySelector(".input-2").value;
//     return [Number(value1), Number(value2)];
// }
// const addValues = () => {
//     const values = getValues();
//     document.querySelector("h1").textContent = values[0]+ values[1];
// }
// const subtractValues = () => {
//     const values = getValues();
//     document.querySelector("h1").textContent = values[0] - values[1];
// }
// const multiplyValues = () => {
//     const values = getValues();
//     document.querySelector("h1").textContent = values[0] * values[1]
// }
// const divideValues = () => {
//     const values = getValues();
//     document.querySelector("h1").textContent = values[0] / values[1]
// }

// let containerElement =  document.createElement("div");
// let screenElement = document.createElement("h1");
// let inputOneElement = document.createElement("input");
// inputOneElement.classList.add("input-1");
// inputOneElement.type = "number";
// let inputTwoElement = document.createElement("input");
// inputTwoElement.type = "number";
// inputTwoElement.classList.add("input-2");

// let addButton = document.createElement("button");
// addButton.textContent = "+ Add";
// addButton.addEventListener("click", addValues)

// let subtractButton = document.createElement("button");
// subtractButton.textContent = "- Subtract";
// subtractButton.addEventListener("click", subtractValues)

// let multiplyButton = document.createElement("button");
// multiplyButton.textContent = "* Multiply";
// multiplyButton.addEventListener("click", multiplyValues);

// let divideButton = document.createElement("button");
// divideButton.textContent = "/ Divide";
// divideButton.addEventListener("click", divideValues)

// containerElement.append(screenElement, inputOneElement, inputTwoElement, addButton, subtractButton, multiplyButton, divideButton);
// document.body.appendChild(containerElement)

// Timer 
// let timer = 3

// function renderView() {
//     document.querySelector("h1").textContent = timer;
// }
// let container = document.createElement("div");
// let timerElement = document.createElement("h1");
// container.append(timerElement);
// document.body.append(container);

// let id = window.setInterval(function() {
//     if(timer == 0){
//        return window.clearInterval(id)
//     }
//     timer--;
//     renderView();
// }, 1000)
// renderView();
