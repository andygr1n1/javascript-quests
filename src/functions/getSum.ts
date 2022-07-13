export const getSum = () => {
    // const getSumCalculator = (number: number) => {
    //     const numberToArray = number.toString().split('')

    //     let calculate = 0
    //     numberToArray.forEach((num) => {
    //         if (isNaN(+num)) return
    //         calculate += +num
    //     })

    //     console.log('calculate', calculate)
    // }

    const getSumCalculator = (number: number) =>
        console.log(
            Math.abs(number)
                .toString()
                .split('')
                .reduce((sum, cur) => +sum + +cur, 0)
        )

    getSumCalculator(50)
    getSumCalculator(-230)
    getSumCalculator(-12345)
}
