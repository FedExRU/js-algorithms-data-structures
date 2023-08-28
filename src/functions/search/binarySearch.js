/**
 * Бинарный поиск
 *
 * @param haystack Отсортированный массив чисел
 * @param needle   Искомое число
 *
 * @returns {[number,number]} [Индекс искомого числа в массиве, количество выполненных итераций]
 */
export const binarySearch = (haystack = [], needle) => {
    let start = 0
    let end = haystack.length - 1
    let middle

    let found = false
    let result = -1

    let count = 0

    while (found === false && start <= end) {
        count++
        middle = Math.floor((start + end) / 2)
        console.log(start, middle, end - 1)

        // Искомое число является срединным
        if (haystack[middle] === needle) {
            found = true
            result = middle
        } else {
            // Если массив состоит из 2 элементов
            if (start === end - 1) {
                start = end
                result = haystack[start] === needle ? start : haystack[end] === needle && end || -1
                if (result) {
                    found = true
                }
            } else {
                // Искомое число больше срединного
                if (needle > haystack[middle]) {
                    start = middle + 1
                } else {
                    // Искомое число меньше срединного
                    end = middle - 1
                }
            }
        }
    }

    return [result, count]
}
