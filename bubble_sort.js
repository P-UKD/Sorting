function bubbleSorted(referencedArray, { reversed = false, by = (a, b) => a > b } = {}) {
    const array = Array.from(referencedArray);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const currentElement = array[j];
            const nextElement = array[j + 1];
            if (by(currentElement, nextElement) ^ reversed) {
                array[j] = nextElement;
                array[j + 1] = currentElement;
            }
        }
    }
    return array;
}

let exampleArray = [1, 2, 3, 4, 5];
let sortedArrayAscending = bubbleSorted(exampleArray);
let sortedArrayDescending = bubbleSorted(exampleArray, { reversed: true });
console.log(sortedArrayAscending, sortedArrayDescending);

let wordArray1 = ['Dad', 'About', 'Ice', 'Edit'];
let sortedWordsBySecondLetter = bubbleSorted(wordArray1, { by: (a, b) => a[1] > b[1] });
let wordArray2 = ['Race', 'Sad', 'Lab'];
let sortedWordsByThirdLetterIfSecondIsEqual = bubbleSorted(wordArray2, { by: (a, b) => a[1] == b[1] ? a[2] > b[2] : a[1] > b[1] });
console.log(sortedWordsBySecondLetter, sortedWordsByThirdLetterIfSecondIsEqual);

let numberArray = [3, 2, 1, 4, 5, 6, 9, 8, 7];
let filteredNumberArray = numberArray.filter(number => number % 2);
let sortedFilteredNumberArray = bubbleSorted(filteredNumberArray);
console.log(sortedFilteredNumberArray);