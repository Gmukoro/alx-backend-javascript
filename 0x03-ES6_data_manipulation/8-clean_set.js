/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
function cleanSet(set, startString) {
  if (!startString || typeof startString !== "string") {
    return "";
  }

  let result = "";
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (result) {
        result += "-";
      }
      result += value.slice(startString.length);
    }
  }

  return result;
}

export default cleanSet;
