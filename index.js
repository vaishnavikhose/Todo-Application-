var todoArray = [];


function saveMyTodo() {
    const title = document.getElementById("title").value;

    todoArray.push(title);

    localStorage.setItem("todos", todoArray.toString());

    document.getElementById("title").value = "";
    fetchAllTodos();
}

function fetchAllTodos() {

    const str = localStorage.getItem("todos"); // returns a string www

    todoArray = str.split(","); // convert string to array

    var htmlString = `
    
    <tr>
    
    <th> Sr.No. </th>
    
    <th> Title </th>
    <th> Actions </th>
    </tr>
    `;

    for (var i = 0; i < todoArray.length; i++) {
        htmlString += `
        <tr>
        <td> ${i + 1} </td>
            <td> ${todoArray[i]} </td>
            <td>
             <button class="btn btn-warning" onclick="editTodo(${i})"> Edit </button>
                 <button class="btn btn-danger" onclick="deleteTodo(${i})"> Delete </button>
                </td>
            </tr>
            `;
    }

    document.getElementById("todo-table").innerHTML = htmlString;
}
function editTodo(index) {
    const newValue = prompt("Do you want  to change?", todoArray[index]);
    if (newValue != "" && newValue != undefined) {
        todoArray[index] = newValue;
        localStorage.setItem("todos", todoArray.toString());
        fetchAllTodos();
    }

}

function deleteTodo(index) {
    if (confirm("Do you want to delete?")) {
        todoArray.splice(index, 1);
       localStorage.setItem("todos", todoArray.toString());
       fetchAllTodos();

    }
}
function clearAllData() {

    localStorage.removeItem("todos"); 
       todoArray = [];
        document.getElementById("todo-table").innerHTML = "";

}