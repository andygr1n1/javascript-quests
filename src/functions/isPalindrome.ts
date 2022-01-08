import path from 'path'

import _ from 'lodash'

export const isPalindrome = () => {
    const isPalindromeByMe = (word: string) => {
        let isPalindrome = true
        console.warn('isPalindrome', word)

        const palindromeLength = word.length / 2
        const wordToArray = word.split('')
        for (let i = 0; i <= palindromeLength; i++) {
            console.log('wordToArray', wordToArray)

            if (_.first(wordToArray) !== _.last(wordToArray)) {
                isPalindrome = false
            }
            wordToArray.shift()
            wordToArray.pop()
        }

        return isPalindrome
    }

    const isPalindromeByWebdev = (word: string) => {
        const arr = word.split('')
        const reverseArr = arr.reverse()
        const reverseArrToString = reverseArr.join('')

        return word === reverseArrToString
    }

    const isPalindromeAdvanced = (word: string) => {
        return word === word.split('').reverse().join('')
    }

    console.log('dogmaiamgod', isPalindromeByMe('dogmaiamgod'))
    console.log('javascript', isPalindromeByMe('javascript'))
    console.log('')
    console.log('great:::')
    console.log('dogmaiamgod', isPalindromeByWebdev('dogmaiamgod'))
    console.log('javascript', isPalindromeByWebdev('javascript'))
    console.log('')
    console.log('advanced:::')
    console.log('dogmaiamgod', isPalindromeAdvanced('dogmaiamgod'))
    console.log('javascript', isPalindromeAdvanced('javascript'))

    console.log('node starts here', path.resolve(__dirname, 'src'))
    // console.log()
    // console.log()
}
