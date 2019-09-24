// from data.js
var tableData = data;
console.log(tableData);

const tbody = d3.select("tbody");
const newLocal = d3.select("#filter-btn");


data.forEach((tableData) => {
    // console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
var dateBut = newLocal;
dateBut.on("click", function () {
// d3.event.preventDefault();
let inputUser = {
    Date: document.getElementById("datetime").value,
    City: document.getElementById("city").value,
    State: document.getElementById("state").value,
    Country: document.getElementById("country").value,
    Shape: document.getElementById("shape").value,
    Duration: document.getElementById("duration").value,
    Comments: document.getElementById("comments").value
    }
tbody.html("");
console.log(inputUser.City);
    console.log((tableData));

var filterData = tableData.filter(data => data.Date === inputUser.Date);
    filterData.forEach(itInstance => {
        var row = tbody.append(`tr`);
        Object.entries(itInstance).forEach(([key, value]) => {
            var cell = row.append(`td`);
            cell.text(value);
// filterData = new Array;
        });
    });
});

        

    // filterData = tableData.filter(function(d) {
    //     for (let key, value in filter) {
    //         if (d[key] === undefined || d[value] === undefined ||
    //         d[key] != filter[key]) return false;
    //     }
    //     return true;
    // });
