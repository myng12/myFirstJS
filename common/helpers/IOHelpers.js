async function getUniqueValues(array) {
    try {
        const uniqueValues = [...new Set(array)];
        return uniqueValues;
    } catch (error) {
        console.error('Error getting unique values:', error);
        throw error;
    }
  }
async function removeValue(array, value) {
    try {
      const index = array.indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
      }
      return array;
    } catch (error) {
      console.error('Error removing value from array:', error);
      throw error;
    }
  }
  
export { getUniqueValues, removeValue }