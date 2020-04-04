// Create an array of each country's numbers
var January = Object.values(data.January);
var February = Object.values(data.February);
var March = Object.values(data.March);
var April = Object.values(data.April);
var May = Object.values(data.May);
var June = Object.values(data.June);
var July = Object.values(data.July);
var August = Object.values(data.August);
var September = Object.values(data.September);
var October = Object.values(data.October);
var November = Object.values(data.November);

var labels = Object.keys(data.January);

// Display the default plot
function init() {
  var data = [{
    values: January,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
   // Initialize x and y arrays
   var data = [];

  if (dataset == 'January') {
      data = January;
  }
  else if (dataset == 'February') {
      data = February;
  }
  else if (dataset == 'March') {
      data = March;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();