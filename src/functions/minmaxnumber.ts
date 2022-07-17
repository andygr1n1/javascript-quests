export const minMaxNumber = () => {
    const minMax = (array: number[]) => {
        if (!array.length) return console.log('no data')
        // console.log('array:', array)
        let sorted = array.sort((a, b) => a - b)
        sorted = [sorted[0], sorted[sorted.length - 1]]
        console.log('[min,max]', sorted)
    }

    minMax([1, 2, 4, 8, 233, 4, 5])
    minMax([1, 2, 4, 8, -233, 4, 12, 5])
    minMax([1])
    minMax([])
}
