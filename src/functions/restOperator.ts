export const restOperator = () => {
    const createRestOperatorExample = (
        a: number,
        b: number,
        ...args: (string | number)[]
    ) => {
        console.log('args:::', a, b, args)
    }

    createRestOperatorExample(1, 4, '1', 2, '3')
}
