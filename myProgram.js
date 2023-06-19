const fs = require('fs');
const csv = require('csv-parser');

console.log("Hello! Let read a CSV file");


const filePath = 'data/LauraFAQDataTest.csv';

function readAndParseCSV(filePath, callback) {
    const results = [];
  
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        callback(null, results);
      })
      .on('error', (error) => {
        callback(error, null);
      });
  }

  readAndParseCSV(filePath, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Check inital data length");
    console.log(data.length);
    console.log("Get unique BaseQuestion");
    const unique = [...new Set(data.map(item => item.BaseQuestion))];
    console.log(unique);
    console.log(unique.length);
    console.log('Pop out "smalltalk"');
    const lastItem = unique.pop();
    console.log(unique);
    console.log(unique.length);
    console.log(lastItem);
  });
  
