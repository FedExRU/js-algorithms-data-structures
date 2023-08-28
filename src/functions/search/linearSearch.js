/**
 * Линейный поиск
 *
 * @param haystack Массив чисел
 * @param needle   Искомое число
 *
 * @returns {[number,number]} [Индекс искомого числа в массиве, количество выполненных итераций]
 */
export const linearSearch = (haystack = [], needle) => {
    let count = 0
    for (let i = 0; i < haystack.length; i++) {
        count++
        if (haystack[i] === needle) {
            return [i, count]
        }
    }

    return [-1, count]
}