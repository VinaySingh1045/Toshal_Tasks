console.log("Starting");

let editingRow = null;

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;


    if (editingRow) {
        // Update the existing row
        updateRow(editingRow, name, number, email, age);
    } else {

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
        deleteButton.addEventListener("click", () => {
            newRow.remove();
        })
        actionCell.appendChild(deleteButton);
        newRow.appendChild(actionCell);
        document.querySelector("#results-table").appendChild(newRow)

        function editRow(row) {
            let cell = row.querySelectorAll("td")
            // console.log(cell[0].textContent);

            document.querySelector("#name").value = cell[0].textContent
            document.querySelector("#number").value = cell[1].textContent
            document.querySelector("#email").value = cell[2].textContent
            document.querySelector("#age").value = cell[3].textContent

            // row.remove();
            // row --> we are updating the all row not the single cell that's why we are not used the cell
            editingRow = row;

        }


    }
    function updateRow(row, name, number, email, age) {
        let cells = row.querySelectorAll("td");
        cells[0].textContent = name;
        cells[1].textContent = number;
        cells[2].textContent = email;
        cells[3].textContent = age;
    }

    document.querySelector("form").reset();

})

document.querySelector("#ageBtn").addEventListener("click", () => {
    let selectRow = document.querySelectorAll("#results-table tr")

    for (let i = 0; i < selectRow.length; i++) {
        let age = selectRow[i].querySelectorAll("td")[3].textContent;
        // console.log(age);

        if(age<=18){
            selectRow[i].style.display = "none";
        }
        else{
            selectRow[i].style.display = "";
        }

    }

})
document.querySelector("#age_less_Btn").addEventListener("click", () => {
    let selectRow = document.querySelectorAll("#results-table tr")

    for (let i = 0; i < selectRow.length; i++) {
        let age = selectRow[i].querySelectorAll("td")[3].textContent;
        // console.log(age);

        if(age>18){
            selectRow[i].style.display = "none";
        }
        else{
            selectRow[i].style.display = "";
        }

    }

})