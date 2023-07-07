import * as fs from 'node:fs';

async function readFile(filePath, keyword) {
  try {
    // Read the file using readFileSync
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const rows = fileData.split('\n');
    const headerRow = rows[0].split(',');

    // Find keyword in header row
    const keywordIndex = headerRow.findIndex((column) => column.trim() === keyword);
    if (keywordIndex === -1) {
      throw new Error(`Keyword "${keyword}" not found in CSV header row.`);
    }

    // Extract value from the column which includes keyword
    const columnData = [];
    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(',');
      if (columns.length > keywordIndex) {
        const value = columns[keywordIndex].trim();
        if (value !== ''){
        columnData.push(value);
        }
      }
    }

    return columnData;
  } catch (error) {
    // Handle any errors that occur during file reading
    console.error('Error reading CSV file:', error);
    return null;
  }
}

export { readFile }