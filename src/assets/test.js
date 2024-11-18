import fs from "fs";

// Data to add to the CSV file
const newData = [
  ["Name", "Age", "City"],
  ["Alice", 25, "New York"],
  ["Bob", 30, "Los Angeles"],
];

// Convert data to CSV format
function arrayToCSV(data) {
  return data
    .map((row) => {
      row.join(",");
    })
    .join("\n");
}

// // Write data to CSV file
// fs.appendFile("projects.csv", arrayToCSV(newData) + "\n", (err) => {
//   if (err) throw err;
//   console.log("Data added to CSV file!");
// });
arrayToCSV(newData);
