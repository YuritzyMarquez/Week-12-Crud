
var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}


function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["type"] = document.getElementById("type").value;
    formData["role"] = document.getElementById("role").value;
    formData["runes"] = document.getElementById("runes").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("championRoster").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.type;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.role;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.runes;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("type").value = selectedRow.cells[1].innerHTML;
    document.getElementById("role").value = selectedRow.cells[2].innerHTML;
    document.getElementById("runes").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.type;
    selectedRow.cells[2].innerHTML = formData.role;
    selectedRow.cells[3].innerHTML = formData.runes;
}


function onDelete(td) {
    if (confirm('Do you want to remove this Champion?')) {
        row = td.parentElement.parentElement;
        document.getElementById('championRoster').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("champion").value = '';
    document.getElementById("type").value = '';
    document.getElementById("role").value = '';
    document.getElementById("runes").value = '';
    selectedRow = null;
}