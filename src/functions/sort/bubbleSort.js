/**
 * Сортировка алгоритмом выбора
 *
 * @param array Массив чисел
 *
 * @returns {[number[],number]} [Отсортированный массив чисел, количество выполненных итераций]
 */
export const bubbleSort = (array = []) => {
    let count = 0
    const sortedArray = [
        ...array
    ]

    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            count++
            console.log(JSON.stringify(sortedArray))
            if (sortedArray[j] > sortedArray[j + 1]) {
                let tmp = sortedArray[j]
                sortedArray[j] = sortedArray[j + 1]
                sortedArray[j + 1] = tmp
            }
        }
    }

    return [sortedArray, count]
}

console.log(bubbleSort([2, 5, 4, 6, 3, 1]))