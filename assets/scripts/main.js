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

let todoList = document.querySelector(".todo-list")
let input = document.querySelector(".inputbox");

input.addEventListener("keyup", function(e){
    if(e.keyCode == 13) {
        let value = input.value 
        input.value = "";
        let li  = document.createElement("li");
        let para = document.createElement("p");
        para.append(value);
        let button = document.createElement("button");
        button.innerText = "Delete"
        button.addEventListener("click", function(e){
            console.log(e, e.target)
            e.target.parentElement.remove()
        })
        li.append(para, button);
        todoList.prepend(li)

    }
    // console.log(e.keyCode);
})