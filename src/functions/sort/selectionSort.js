/**
 * Сортировка алгоритмом выбора
 *
 * @param array Массив чисел
 *
 * @returns {[number[],number]} [Отсортированный массив чисел, количество выполненных итераций]
 */
export const selectionSort = (array = []) => {
    let count = 0
    const sortedArray = [
        ...array
    ]

    for (let i = 0; i < sortedArray.length; i++) {
        let minValueIndex = i
        for (let j = i + 1; j < sortedArray.length; j++) {
            count++
            if (sortedArray[j] < sortedArray[minValueIndex]) {
                minValueIndex = j
            }
        }
        let tmp = sortedArray[i]
        sortedArray[i] = sortedArray[minValueIndex]
        sortedArray[minValueIndex] = tmp

        console.log(JSON.stringify(sortedArray))
    }

    return [sortedArray, count]
}
