var list = document.getElementById('list')

// get realtime data
firebase.database().ref('todos').on('child_added', function (data) {

    // li
    var li = document.createElement('li')
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)
    list.appendChild(li)
    var br = document.createElement("br");
    li.appendChild(br);

    // delbtn
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", 'delBtn')
    delBtn.setAttribute("id", data.val().key)
    delBtn.setAttribute("onclick", 'deleteItem(this)')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)

    // editbtn
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class", 'editBtn')
    editBtn.setAttribute("id", data.val().key)
    editBtn.setAttribute("onclick", 'editItem(this)')
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
})

function addTodo() {
    var todoItem = document.getElementById('todoItem');
    var key = firebase.database().ref('todos').push(todo).key;
    var todo = {
        value: todoItem.value,
        key: key
    }
    firebase.database().ref('todos').child(key).set(todo)
    todoItem.value = ""
}

// delbtn func
function deleteItem(d) {
    firebase.database().ref('todos').child(d.id).remove()
    d.parentNode.remove()
}

// editbtn func
function editItem(e) {
    var prom = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    var editTodo = {
        value: prom,
        key: e.id
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = prom
}

// delall func
function dltAll() {
    list.innerHTML = ""
    firebase.database().ref('todos').remove()
}