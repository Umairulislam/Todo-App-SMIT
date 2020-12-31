var list = document.getElementById('list')
function addTodo() {
    // li
    var todoItem = document.getElementById('todoItem')
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)
    list.appendChild(li)
    var br = document.createElement("br");
    li.appendChild(br);

    // delbtn
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", 'delBtn')
    delBtn.setAttribute("onclick", 'deleteItem(this)')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    // editbtn
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", 'editBtn')
    editBtn.setAttribute("onclick", 'editItem(this)')
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

    todoItem.value = ""
}

// delbtn func
function deleteItem(d){
    d.parentNode.remove()
}
// edit func
function editItem(e){
    var prom = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = prom
}
// delall func
function dltAll(){
    list.innerHTML = ""
}