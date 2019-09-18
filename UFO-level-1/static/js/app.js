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
button.on("click", () => {
  d3.event.preventDefault();
  var inputDateId = d3.select('#datetime');
  var inputDateVal = inputDateId.property("value");
  console.log(inputDateVal);

  tableData.filter(item => item.datetime === inputDateVal);

  // ********************************
  // Get a reference to the table body


  console.log(tableData);
  // ********************************************
  var tbody = d3.select("tbody");


  data.forEach(tableData => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
})