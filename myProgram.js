import { readFile } from './common/helpers/CSVHelpers.js';
import { getUniqueValues, removeValue } from './common/helpers/IOHelpers.js';
import { createJSONTemplate, saveJSONToFile } from './common/utils/JSONUtils.js';

async function main() {
  try {
    // Read CSV file and get unique BaseQuestion (the first column)
    const csvFilePath = './data/LauraFAQDataTest.csv';
    const question = 'BaseQuestion';
    const firstColumnValues = await readFile(csvFilePath, question);
    // console.log(firstColumnValues);
    const uniqueValues = await getUniqueValues(firstColumnValues);

    // Remove smalltalk
    const valueToRemove = 'smalltalk';
    const updatedValues = await removeValue(uniqueValues, valueToRemove);
    console.log('Updated values:', updatedValues);

    // Create JSON file
    const jsonData = await createJSONTemplate(updatedValues);
    const jSONFilePath = './result.JSON';
    await saveJSONToFile(jsonData, jSONFilePath);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
