function range(start, end, step = start < end ? 1 : -1) {
    let newArr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) newArr.push(i);
    } else {
        for (let i = start; i >= end; i += step) newArr.push(i);
    }
    return newArr;
}

// console.log(range(1,10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(arr) {
    total = 0;
    for (let num of arr) {
        total += num;
    }

    return total;
}

console.log(range(5, 2, -1));
