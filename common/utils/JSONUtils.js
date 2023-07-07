import * as fs from 'node:fs';

async function createJSONTemplate(array) {
  try {
    const jsonData = array.map((value, index) => {
      const order = index + 1;
      const id = 'REQ_00' + order;
      const request = 'REQUEST';
      const name = 'REQ_00' + order;
      const question = value;
      return { id, request, name, question };
    });

    return jsonData;
  } catch (error) {
    console.error('Error creating JSON template:', error);
    throw error;
  }
}

async function saveJSONToFile(jsonData, filePath) {
  try {
    // Delete existing file
    await fs.promises.unlink(filePath); 
    
    const jsonString = JSON.stringify(jsonData, null, 2);
    await fs.promises.writeFile(filePath, jsonString);
    console.log('JSON file saved successfully:', filePath);
  } catch (error) {
    console.error('Error saving JSON file:', error);
    throw error;
  }
}

export { createJSONTemplate , saveJSONToFile}