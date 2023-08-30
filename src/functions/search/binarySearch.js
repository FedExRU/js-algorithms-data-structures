// /**
//  * Бинарный поиск
//  *
//  * @param haystack Отсортированный массив чисел
//  * @param needle   Искомое число
//  *
//  * @returns {[number,number]} [Индекс искомого числа в массиве, количество выполненных итераций]
//  */
// export const binarySearch = (haystack = [], needle) => {
//     let start = 0
//     let end = haystack.length - 1
//     let middle
//
//     let found = false
//     let result = -1
//
//     let count = 0
//
//     while (found === false && start <= end) {
//         count++
//         middle = Math.floor((start + end) / 2)
//         console.log(start, middle, end - 1)
//
//         // Искомое число является срединным
//         if (haystack[middle] === needle) {
//             found = true
//             result = middle
//         } else {
//             // Если массив состоит из 2 элементов
//             if (start === end - 1) {
//                 start = end
//                 result = haystack[start] === needle ? start : haystack[end] === needle && end || -1
//                 if (result) {
//                     found = true
//                 }
//             } else {
//                 // Искомое число больше срединного
//                 if (needle > haystack[middle]) {
//                     start = middle + 1
//                 } else {
//                     // Искомое число меньше срединного
//                     end = middle - 1
//                 }
//             }
//         }
//     }
//
//     return [result, count]
// }

/**
 * Бинарный поиск
 *
 * @param haystack Отсортированный массив чисел
 * @param needle   Искомое число
 *
 * @returns {[number,number]} [Индекс искомого числа в массиве, количество выполненных итераций]
 */
export const binarySearch = (haystack = [], needle) => {
    let count = 0
    const bSearch = (haystack = [], needle, start, end) => {
        let localStart = start === undefined ? 0 : start
        let localEnd = end === undefined ? haystack.length - 1 : end

        const pivotIndex = Math.floor(localStart + localEnd / 2)

        if (start + end < 0) {
            return -1
        }

        count++

        // Искомое число является срединным
        if (needle === haystack[pivotIndex]) {
            return pivotIndex
        }

        // Искомое число больше срединного
        if (needle > haystack[pivotIndex]) {
            return bSearch(haystack, needle, pivotIndex + 1, localEnd)
        } else {
            // Искомое число меньше срединного
            return bSearch(haystack, needle, localStart, localEnd - 1)
        }
    }
    const result = bSearch(haystack, needle)

    return [result, count]
}