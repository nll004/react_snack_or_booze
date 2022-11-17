/** Takes a square array and converts it into a single array
 *
 * It starts in the top left corner and moves down the square before moving right
 *
 * Ex: [ [1,2,3],
 *       [4,5,6],
 *       [7,8,9]
 *     ]
 * Returns [1,4,7,2,5,8,3,6,9]
 * @param {array} squareArray
 */

function unroll(squareArray) {
    const newArray = [];
    let index = 0;

    while(index < squareArray.length){
        for(let subArray in squareArray){
            newArray.push(squareArray[subArray][index]);
        }
        index++
    }
    return newArray
}

module.exports = unroll;
