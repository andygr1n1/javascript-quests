export const indexOfUppercase = () => {
    const getIndexOfUppercase = (text: string) => {
        const splitText = text.split('')

        const indexArray: number[] = []

        splitText.forEach((char, index) => {
            const letterRegExp = new RegExp(/[A-Za-z]/)
            if (!letterRegExp.test(char)) return
            if (char.toUpperCase() === char) indexArray.push(index)
        })
    }

    getIndexOfUppercase('Hello My 18 Friend!')
}
