// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

data.forEach((tableData) => {
    // console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var dateBut = d3.select("#filter-btn");

dateBut.on("click", function() {
    d3.event.preventDefault();
    tbody.html("");
    var inputDateId = d3.select("#datetime").property("value");
    var filterData = tableData.filter(date => date.datetime === inputDateId);
    filterData.forEach(itInstance => {
        var row = tbody.append(`tr`);
        Object.entries(itInstance).forEach(([key, value]) => {
            var cell = row.append(`td`);
            cell.text(value);
        });
    });
});