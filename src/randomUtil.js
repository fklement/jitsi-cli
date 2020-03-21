/**
 * Get random element of array or string.
 *
 * @param {Array|string} arr - Source.
 * @returns {Array|string} Array element or string character.
 */
exports.randomElement = function (arr) {
  return arr[randomInt(0, arr.length - 1)];
}

/**
 * Generates random int within the range [min, max].
 *
 * @param {number} min - The minimum value for the generated number.
 * @param {number} max - The maximum value for the generated number.
 * @returns {number} Random int number.
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}