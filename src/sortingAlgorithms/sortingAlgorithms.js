export function insertionSort(array){
    let animations= [];
    for(let i = 0 ; i < array.length ; i++){
        let p = i - 1
        while (p>= 0 && array[i]<array[p]){
            //swap
            let temp = array[p]
            array[p] = array[i]
            array[i] = temp

            animations.push([i,p])

            i -= 1
            p -= 1
        }
    }

    return animations;
}

// export function bubbleSort(array) {
//     let animations = [];
//     let isSorted = false;
//     let counter = 0;

//     while (isSorted === false) {
//         isSorted = true;
//         for (let i = 0; i < array.length - 1 - counter; i++) {
//             let p = i + 1;
//             if (array[i] > array[p]) {
//                 // swap
//                 [array[i], array[p]] = [array[p], array[i]];
//                 isSorted = false;
//                 animations.push([i, p, true]);  // True means swapped
//             } else {
//                 animations.push([i, i, true]);  // False means not swapped
//             }
//         }
//         // Mark the last element in this pass as sorted (green)
//         //animations.push([array.length - 1 - counter, array.length - 1 - counter, 'sorted']);
//         counter++;
//     }
//     return animations;
// }


export function bubbleSort(array){
    let animations = [];
    let isSorted = false;
    let isFalse = true
    let counter = 0;

    while(isSorted === false){
        isSorted = true;

        for(let i = 0 ; i < array.length -1 - counter; i++){
            let p = i + 1;
            if(array[i] > array[p]){
                //swap
                let temp = array[p]
                array[p] = array[i]
                array[i] = temp

                isFalse = false

                isSorted = false;

                animations.push([i,p,true])

            }
            else{
                animations.push([i,p,false]);

            }
        }

        counter++;
    }

    animations.push(isFalse);
    return animations
}



  export function selectionSort(array) {
    let animations = [];
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        // True indicates that the bar should be turned green
        if (minIdx !== i) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
            animations.push([i, minIdx, true]); 
        } else {
            animations.push([i, i, false]);  // Element is already sorted, turn it green
        }
    }
    return animations;
}




// export function getMergeSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) return array;
//     const auxiliaryArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//     return animations;
//   }
  
//   function mergeSortHelper(
//     mainArray,
//     startIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     if (startIdx === endIdx) return;
//     const middleIdx = Math.floor((startIdx + endIdx) / 2);
//     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//     doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
//   }
  
//   function doMerge(
//     mainArray,
//     startIdx,
//     middleIdx,
//     endIdx,
//     auxiliaryArray,
//     animations,
//   ) {
//     let k = startIdx;
//     let i = startIdx;
//     let j = middleIdx + 1;
//     while (i <= middleIdx && j <= endIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([i, j]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([i, j]);
//       if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//         // We overwrite the value at index k in the original array with the
//         // value at index i in the auxiliary array.
//         animations.push([k, auxiliaryArray[i]]);
//         mainArray[k++] = auxiliaryArray[i++];
//       } else {
//         // We overwrite the value at index k in the original array with the
//         // value at index j in the auxiliary array.
//         animations.push([k, auxiliaryArray[j]]);
//         mainArray[k++] = auxiliaryArray[j++];
//       }
//     }
//     while (i <= middleIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([i, i]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([i, i]);
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     }
//     while (j <= endIdx) {
//       // These are the values that we're comparing; we push them once
//       // to change their color.
//       animations.push([j, j]);
//       // These are the values that we're comparing; we push them a second
//       // time to revert their color.
//       animations.push([j, j]);
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
