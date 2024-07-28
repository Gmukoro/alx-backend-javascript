/**
 * Retrieves a map of grocery names and their quantity.
 * @author Godspower Mukoro <https://github.com/gmukoro>
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const values = [
    ["Apples", 10],
    ["Tomatoes", 10],
    ["Pasta", 1],
    ["Rice", 1],
    ["Banana", 5],
  ];
  return new Map(values);
}
