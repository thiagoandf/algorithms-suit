
function mergeSort (arr) {
    if (arr.length < 2) return arr      

    var middle = parseInt(arr.length/2)
    var left = arr.slice(0, middle)
    var right = arr.slice(middle, arr.length)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) { 
 
    var result = [] 

    while (left.length && right.length) {
        if (left[0] <= right[0]) result.push(left.shift())
        else result.push(right.shift())
    }
    
    while (left.length) result.push(left.shift())

    while (right.length) result.push(right.shift())

    return result
}

console.time("merge")
//console.log(mergeSort([4,3,5,6,1,2,7]))
console.log(mergeSort([19, 30, 8, 5, 53, 98, 58, 51, 85, 76, 59, 94, 43, 79, 89, 95, 72, 36, 52, 42, 21, 18, 54, 87, 1, 63, 78, 10, 68, 97, 23, 48, 81, 93, 31, 34, 74, 24, 60, 91, 11, 3, 46, 2, 33, 15, 37, 83, 71, 100, 16, 40, 35, 55, 65, 86, 27, 47, 45, 92, 4, 26, 67, 32, 57, 29, 96, 77, 38, 88, 50, 20, 90, 70, 75, 41, 69, 44, 73, 22, 28, 80, 84, 12, 64, 49, 82, 25, 56, 39, 62, 6, 17, 61, 14, 13, 7, 9, 66, 99]))
console.timeEnd("merge")
