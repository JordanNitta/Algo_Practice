const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i]; 
    }
    return obj;
}

console.log(zipArraysIntoMap(keys1, vals1))
console.log(zipArraysIntoMap(keys2, vals2))