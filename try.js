console.log("Starting");

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;

    let newRow = document.createElement("tr");

    // let nameCell = document.createElement("td");
    // nameCell.textContent = name;
    // newRow.appendChild(nameCell);

    function CreateCell(value) {
        let cell = document.createElement("td");
        cell.textContent = value;
        newRow.appendChild(cell);
    }

    CreateCell(name);
    CreateCell(number);
    CreateCell(email);
    CreateCell(age);

    // Create "Action" cell with Edit and Delete buttons
    let actionCell = document.createElement("td");

    // Edit button
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
        editRow(newRow)
    })
    actionCell.appendChild(editButton);
    newRow.appendChild(actionCell);

    //   Delete Button

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click",()=>{
        newRow.remove();
    })
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    function editRow(row) {
        let cell = row.querySelectorAll("td")
        // console.log(cell[0].textContent);

        document.querySelector("#name").value = cell[0].textContent
        document.querySelector("#number").value = cell[1].textContent
        document.querySelector("#email").value = cell[2].textContent
        document.querySelector("#age").value = cell[3].textContent

        row.remove();
 
    }

    document.querySelector("#results-table").appendChild(newRow)

    document.querySelector("form").reset();

})


