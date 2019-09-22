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

// from 08  stock act and avSnippets
function getData() {
    data(function(data) {
        var datetime = unpack(data.dataset.data, 0);
        var city = unpack(data.dataset.data, 1);
        var state = unpack(data.dataset.data, 2);
        var country = unpack(data.dataset.data, 3);
        var shape = unpack(data.dataset.data, 4);
        var durationMinutes = unpack(data.dataset.data, 5);
        var comments = unpack(data.dataset.data, 6);
        var volume = unpack(data.dataset.data, 7);
        buildTable(
            datetime,
            city,
            state,
            country,
            shape,
            durationMinutes,
            comments
        );
    });
}

// from 08  stock act and avSnippets
function buildTable(
    datetime,
    city,
    state,
    country,
    shape,
    durationMinutes,
    comments
) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < 12; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(datetime[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(durationMinutes[i]);
        trow.append("td").text(comments[i]);
    }
}



// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input value from the form
    var ufoTable = d3.select("filter-btn").node().value;
    console.log(ufoTable);

    // clear the input value
    d3.select("#filter-btn").node().value = "";

    // Build the table with the filtered data
    buildTable(ufoTable);
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
} + 76);

d3.select("#ufo-table")
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