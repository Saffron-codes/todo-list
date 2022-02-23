console.log("Todo List")

let todos = [
    'Go to Store',
    'Buy Milk',
    'Take dog for walk',
];
var addbtn = document.getElementById("addbtn");
var mylistul = document.createElement("ul")
document.getElementById("myItemList").appendChild(mylistul)
// todos.forEach((todo)=>{
//     let li = document.createElement('li')
//     li.innerText = todo
//     mylistul.appendChild(li)
// })

var  todo = document.getElementById("todo");

todo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(todo.value != ""){
            addTodo(todo.value)
            todo.value = ""
        }
    }
  });

addbtn.onclick = function(){
    var  todo = document.getElementById("todo");
    if(todo.value != ""){
        addTodo(todo.value)
        todo.value = ""
    }
}

function addTodo(todo){
    let li = document.createElement('li')
    li.innerText = todo
    mylistul.appendChild(li)
}