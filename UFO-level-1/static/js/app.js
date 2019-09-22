// from data.js
var tableData = data;
// console.log(tableData);

// mongoimport --db data; --collection inventory --authenticationDatabase admin - username < admin > --password < admin > --drop --file ~\static\data.js;

//                      <input class="form-control" id="datetime"
// // event.preventDefault();
// getData(tableData);
// // fillTable();
// handleSubmit(tableData);

// function unpack(rows, index) {
//     return rows.map(function(row) {
//         // console.log(row[index]);
//         return row[index];
//     });
// }


function fillTable() {
    var tbody = d3.select("tbody");
    data.forEach(tableData) => {
        // console.log(tableData);
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
fillTable();

var dateBut = d3.select('#filter-btn');

var inputDateId = d3.select("#datetime").node().value;
var compValue1 = inputDateId;

// // from 08  stock act and avSnippets
// function getData() {
//     (function() {
//         var datetime = unpack((0), 0);
//         var city = unpack(data(0), 1);
//         var state = unpack(data(0), 2);
//         var country = unpack(data(0), 3);
//         var shape = unpack(data(0), 4);
//         var durationMinutes = unpack(data(0), 5);
//         var comments = unpack(data(0), 6);
//         buildTable(
//             datetime,
//             city,
//             state,
//             country,
//             shape,
//             durationMinutes,
//             comments
//         );
//     });
// }


// d3.select("#filter-btn").on("click", function() {
//     ("use strict");
//     d3.event.preventDefault();
//     var tbody = d3.select("tbody");
//     tbody.html("");
//     var filterArray = [s => s.datetime === compValue1];
//     filterArray.forEach(f => (tableData = tableData.filter(f)));
//     // console.log(filterArray);
//     // console.log(compValue1);
//     // console.log(tableData);
//     var row = tbody.append(`tr`);
//     // buildTable(tableData);
//     // fillTable(filterArray);
//     // buildTable(tableData);
//     Object.entries(tableData).forEach(([key, value]) => {
//         var cell = row.append(`td`);
//         cell.text(value);
//     });
// });

// // from 08  stock act and avSnippets
// function buildTable(
//     datetime,
//     city,
//     state,
//     country,
//     shape,
//     durationMinutes,
//     comments
// ) {
//     var table = d3.select("#ufo-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < length(tableData); i++) {
//         trow = tbody.append("tr");
//         trow.append("td").text(datetime[i]);
//         trow.append("td").text(city[i]);
//         trow.append("td").text(state[i]);
//         trow.append("td").text(country[i]);
//         trow.append("td").text(shape[i]);
//         trow.append("td").text(durationMinutes[i]);
//         trow.append("td").text(comments[i]);
//     }
// }



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

// d3.select("#ufo-table")
//     .datum(data)
//     .call(myTable);
var tbody = d3.select("tbody");
data.forEach(tableData => {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

body = document.getElementsByTagName("body")[0];
tab = document.createElement("table");
for (row = 0; row < tableData.length; row++) {
    tr = document.createElement("tr");
    for (col = 0; col < tableData[row].length; col++) {
        td = document.createElement("td");
        tn = document.createTextNode(arr[row][col]);
        td.appendChild(tn);
        tr.appendChild(td);
    }
    tab.appendChild(tr);
}
body.appendChild(tab);