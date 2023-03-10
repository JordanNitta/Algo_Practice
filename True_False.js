/* case insensitive string compare */
// R - restate/read
//I - input
//O - output
//T - talk
//WALK


const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {
    strA = strA.toLowerCase()
    strB = strB.toLowerCase()
    if(strA.length != strB.length){
        return false
    }
    for(var i = 0; i < strA.length; i++){
            if(strA[i] != strB[i]){
                return false
        }
    }
    return true
}
console.log(caseInsensitiveStringCompare(strA1, strB1))
console.log(caseInsensitiveStringCompare(strA2, strB2))
console.log(caseInsensitiveStringCompare(strA3, strB3))

