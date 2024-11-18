import fs from "fs";

// Convert data to CSV format
function arrayToCSV(data) {
  return data
    .map((row) => {
      row.join(",");
    })
    .join("\n");
}

// Write data to CSV file

const addData = (newData) => {
  fs.appendFile("projects.csv", arrayToCSV(newData) + "\n", (err) => {
    if (err) throw err;
    console.log("Data added to CSV file!");
  });
};

export default addData;
