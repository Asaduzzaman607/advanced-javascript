// let firstArray = [1,2,3,4,5,6,7];
// let secondArray = [3,4,5,8,9];
// let matchedArray = [];

// matchedArray = firstArray.map(i => {
//    return { 'number': i,};
// });

// console.log(matchedArray);


function intersect(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
  }
  let array1 = [1,2,3,4,5,6,7];
  let array2 = [3,4,5,8,9];
  console.log(intersect(array1, array2));