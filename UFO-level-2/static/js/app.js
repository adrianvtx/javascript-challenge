// from data.js
const tableData = data;

// This will force the "keys" to be an array, even with a single element.
if (typeof(keys ) == "string")
  keys = [keys];
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

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

unpack(tableData.data[0], 0)

function buildPlot() {
  d3.json(url).then(function (data) {

    // Grab values from the data json object to build the plots
    var ddate = tableData.data.datetime;
    var ccity = data.dataset.dataset_code;
    var sstate = data.dataset.start_date;
    var ccountry = data.dataset.end_date;
    var sshape = unpack(data.dataset.data, 0);
    var dduratonMin = unpack(data.dataset.data, 1)
  });

    var dateBut = newLocal;
    dateBut.on("click", function () {
      // d3.event.preventDefault();
      let inputUser = new Array({
        Date: document.getElementById("datetime").value,
        City: document.getElementById("city").value,
        State: document.getElementById("state").value,
        Country: document.getElementById("country").value,
        Shape: document.getElementById("shape").value,
        Duration: document.getElementById("duration").value,
        Comments: document.getElementById("comments").value
      })
      // Create empty arrays to store the dish and spice values
      var dateArr = [];
      var cityArr = [];
      var stateArr = [];
      var countryArr = [];
      var shapeArr = [];
      var durationArr = [];
      var commentsArr = [];

      // // Iterate through each data object
      tableData.forEach((parameter1) => {
        // Iterate through each key and value
        Object.entries(parameter1).forEach(([key, value]) => {
          // Use the key to determine which array to push the value to
          if (key === "datetime") {
            dateArr.push(key, value);
          }
          else if (key === "city") {
            cityArr.push(key, value);
          }
          else if (key === "state") {
            stateArr.push(key, value);
          }
          else if (key === "country") {
            countryArr.push(key, value);
          }
          else if (key === "shape") {
            shapeArr.push(key, value);
          }
          else if (key === "durationMinutes") {
            durationArr.push(key, value);
          }
          else {
            commentsArr.push(key, value);
          }
        });
      });

      console.log(dateArr);
      console.log(cityArr);
      console.log(stateArr);
      console.log(countryArr);
      console.log(shapeArr);
      console.log(durationArr);
      console.log(commentsArr);

      // BONUS - Use map to build arrays of values
      var dateMapped = inputUser.map(data => data.Date);
      var cityMapped = inputUser.map(data => data.City);
      var stateMapped = inputUser.map(data => data.State);
      var countryMapped = inputUser.map(data => data.Country);
      var durationMapped = inputUser.map(data => data.Duration);
      var commentsMapped = inputUser.map(data => data.Comments);
      console.log(dateMapped);
      console.log(cityMapped);
      console.log(stateMapped);
      console.log(countryMapped);
      console.log(durationMapped);
      console.log(commentsMapped);


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
    };
