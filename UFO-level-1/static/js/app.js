// from data.js
var tableData = data;

// YOUR CODE HERE!
//Filter Search
//Enter a Date
//FILTER Table
//ufo-table
//UFO Sightings

// console.log(tableData);

// mongoimport --db data; --collection inventory --authenticationDatabase admin - username < admin > --password < admin > --drop --file ~\static\data.js;

//                      <input class="form-control" id="datetime"
var inputValue = "datetime";


var filteredData = tableData.filter(item => item.datetime === inputValue);

// ********************************
// Get a reference to the table body


console.log(filteredData);
// ********************************************
var tbody = d3.select("tbody");


data.forEach(filteredData => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

