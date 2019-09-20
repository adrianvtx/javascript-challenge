// from data.js
var tableData = data;
console.log(tableData);

// mongoimport --db data; --collection inventory --authenticationDatabase admin - username < admin > --password < admin > --drop --file ~\static\data.js;

//                      <input class="form-control" id="datetime"
// event.preventDefault();


var dateBut = d3.select('#filter-btn');

var inputDateId = d3.select("#datetime");
// var inputDateVal = inputDateId.property("value").trim();
var inputDateVal = inputDateId.text();

console.log(inputDateVal);

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input value from the form
    var ufoTable = d3.select("#ufo-table").node().value;
    console.log(ufoTable);

    // clear the input value
    d3.select("#ufo-table").node().value = "";

    // Build the plot with the new stock
    buildPlot(ufoTable);
}


d3.select("#filter-btn").on("click", function() {
    ("use strict");
    d3.event.preventDefault();
    var tbody = d3.select("tbody");
    tbody.html("");
    var filteredData = data.filter((data) => data.datetime === inputDateVal);
    data.forEach(filteredData => {
        console.log(filteredData);
        var row = tbody.append(`tr`);
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append(`td`);
            cell.text(value);
        });
    });
});

d3.select("#table-area")
    .datum(data)
    .call(myTable);
// var tbody = d3.select("tbody");
// data.forEach(tableData => {
//   console.log(tableData);
//   var row = tbody.append("tr");
//   Object.entries(tableData).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });