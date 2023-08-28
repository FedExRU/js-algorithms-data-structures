import {binarySearch, bubbleSort, linearSearch, selectionSort} from "./functions"
import { PLAIN_NUMERIC_ARRAY, PLAIN_NUMERIC_SORTED_ARRAY } from "./constants"

const element = document.createElement('div')
const sortElement = document.createElement('div');

const [linearSearchResult, linearSearchComplexity] = linearSearch(PLAIN_NUMERIC_ARRAY, 3)
const [binarySearchResult, binarySearchComplexity] = binarySearch(PLAIN_NUMERIC_SORTED_ARRAY, 17)

element.innerHTML = `LinearSearch ${linearSearchResult} -- ${linearSearchComplexity}<br/>` +
 `BinarySearch ${binarySearchResult} -- ${binarySearchComplexity}`


const [selectionSortResult, selectionSortComplexity] = selectionSort(PLAIN_NUMERIC_ARRAY)
const [bubbleSortResult, bubbleSortComplexity] = bubbleSort(PLAIN_NUMERIC_ARRAY)

sortElement.innerHTML = `SelectionSort ${JSON.stringify(selectionSortResult)} -- ${selectionSortComplexity} <br/>` +
    `BubbleSort ${JSON.stringify(bubbleSortResult)} -- ${bubbleSortComplexity} <br/>`

document.body.appendChild(element).appendChild(sortElement)
