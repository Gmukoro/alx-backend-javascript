/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
function cleanSet(set, startString) {
  if (typeof startString !== "string" || startString === "") {
    return "";
  }

  const result = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join("-");
}

export default cleanSet;
