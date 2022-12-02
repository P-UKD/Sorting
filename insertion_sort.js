function insertionSorted(referencedArray, { reversed = false, by = (a, b) => a > b } = {}) {
    const array = Array.from(referencedArray);
    for (let i = 0; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;
        while (j >= 0 && by(array[j], key) ^ reversed) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
}

let exampleArray = [1, 2, 3, 4, 5];
let sortedArrayAscending = insertionSorted(exampleArray);
let sortedArrayDescending = insertionSorted(exampleArray, { reversed: true });
console.log(sortedArrayAscending, sortedArrayDescending);

let wordArray1 = ['Dad', 'About', 'Ice', 'Edit'];
let sortedWordsBySecondLetter = insertionSorted(wordArray1, { by: (a, b) => a[1] > b[1] });
let wordArray2 = ['Race', 'Sad', 'Lab'];
let sortedWordsByThirdLetterIfSecondIsEqual = insertionSorted(wordArray2, { by: (a, b) => a[1] == b[1] ? a[2] > b[2] : a[1] > b[1] });
console.log(sortedWordsBySecondLetter, sortedWordsByThirdLetterIfSecondIsEqual);

let numberArray = [3, 2, 1, 4, 5, 6, 9, 8, 7];
let filteredNumberArray = numberArray.filter(number => number % 2);
let sortedFilteredNumberArray = insertionSorted(filteredNumberArray);
console.log(sortedFilteredNumberArray);