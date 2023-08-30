/**
 * Быстрая сортировка/Сортировка Хоара
 *
 * @param array Массив чисел
 *
 * @returns {[number[],number]} [Отсортированный массив чисел, количество выполненных итераций]
 */
export const quickSort = (array = []) => {
    let count = 0
    const qSort = (array = []) => {
        const sortedArray = [
            ...array
        ]

        // Условие выхода из рекурсии
        if (sortedArray.length <= 1) {
            return sortedArray
        }

        const leftArray = []
        const rightArray = []
        const pivot = sortedArray[Math.floor((sortedArray.length) / 2)]

        for (let i = 0; i < sortedArray.length; i++) {
            count++
            if (sortedArray[i] === pivot) {
                continue
            }

            if (sortedArray[i] > pivot) {
                rightArray.push(sortedArray[i])
            } else {
                leftArray.push(sortedArray[i])
            }
        }

        return [...qSort([...leftArray]), pivot, ...qSort([...rightArray])]
    }
    const sortedArray = qSort(array)

    return [sortedArray, count]
}
