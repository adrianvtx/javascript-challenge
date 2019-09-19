// from data.js
var tableData = data;
console.log(tableData);

// mongoimport --db data; --collection inventory --authenticationDatabase admin - username < admin > --password < admin > --drop --file ~\static\data.js;

//                      <input class="form-control" id="datetime"
// event.preventDefault();
d3.selectAll();
var dateBut = d3.select('#filter-btn');
var inputDateId = d3.select("#datetime");
var inputDateVal = inputDateId.property("value").trim();
console.log(inputDateVal);

var tbody = d3.select("tbody");


dateBut.on("click", () => {
  "use strict";
  tbody.html("");
  var filteredData = data.filter(data => data.datetime === inputDateVal);
  console.log(filteredData);

  data.forEach(filteredData => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
  var cell = row.append("td");
  cell.text(value);
  });
  });
});