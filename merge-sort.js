function mergeSort (list) {
    if (list.length <= 1) {
        return list;
    }
    const breakPoint = list.length/2;
    let leftSide = list.slice(0, breakPoint);
    let rightSide = list.slice(breakPoint);
    leftSide = mergeSort(leftSide);
    rightSide = mergeSort(rightSide);
    return merge(leftSide, rightSide);
    
    function merge(leftArr, rightArr) {
        let mergedArr = [];
        while (leftArr.length > 0 && rightArr.length > 0) {
            if (rightArr.at(0)< leftArr.at(0)) {
                mergedArr.push(rightArr.at(0));
                rightArr.shift();
            } else {
                mergedArr.push(leftArr.at(0));
                leftArr.shift();
            }
        }
        if (leftArr.length === 0) {
            mergedArr = mergedArr.concat(rightArr);
        } else if (rightArr.length === 0) {
            mergedArr = mergedArr.concat(leftArr);
        }
        return mergedArr;
    }
}
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, -1]));
// console.log(mergeSort([105, 79, 100, 110]));