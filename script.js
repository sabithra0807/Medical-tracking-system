document.getElementById("patientForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let diagnosis = document.getElementById("diagnosis").value;

    let table = document.getElementById("recordTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = doctor;
    row.insertCell(3).innerHTML = diagnosis;

    document.getElementById("patientForm").reset();
});