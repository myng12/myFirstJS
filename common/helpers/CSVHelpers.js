import * as fs from 'node:fs';

async function readFile(filePath) {
  try {
    // Read the file using readFileSync
    const fileData = fs.readFileSync(filePath, 'utf-8');
    
    // Split the file data into rows
    const rows = fileData.split('\n');

    // Extract the values from the first column
    const firstColumn = [];
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].split(',');
      if (columns.length > 0) {
        const value = columns[0].trim();
        if (value !== '') {
          firstColumn.push(value);
        }
      }
    }

    return firstColumn;
  } catch (error) {
    // Handle any errors that occur during file reading
    console.error('Error reading CSV file:', error);
    return null;
  }
}

export { readFile }