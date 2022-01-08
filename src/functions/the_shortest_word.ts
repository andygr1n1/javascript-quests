export const the_shortest_word = () => {
    const the_shortest_word_for_each_solution = (sentence: string) => {
        const sentenceToArray = sentence
            .split(' ')
            .filter((word) => word.length)

        let theShortestWord = sentenceToArray[0]
        let theShortestWords = [sentenceToArray[0]]

        sentenceToArray.forEach((word) => {
            if (theShortestWord === word || theShortestWords.includes(word)) {
                return
            }

            if (theShortestWord.length > word.length) {
                theShortestWord = word
                theShortestWords = []
            }

            if (
                theShortestWord.length === word.length &&
                theShortestWord !== word
            ) {
                if (!theShortestWords.includes(theShortestWord))
                    theShortestWords.push(theShortestWord)
                theShortestWords.push(word)
            }
        })

        if (theShortestWords.length) {
            return theShortestWords.join(', ')
        }
        return theShortestWord
    }

    const the_shortest_word_with_sort = (sentence: string) => {
        const sentenceSortedByShortestWord = sentence
            .split(' ')
            .sort((a, b) => a.length - b.length)

        const arrayOfShortestWords: string[] = [sentenceSortedByShortestWord[0]]

        sentenceSortedByShortestWord.forEach((word) => {
            if (
                sentenceSortedByShortestWord[0].length === word.length &&
                !arrayOfShortestWords.includes(word)
            ) {
                arrayOfShortestWords.push(word)
            }
        })

        return arrayOfShortestWords.join(', ')
    }

    console.log(
        'Andrei with Dakota love ice-cream::: ',
        the_shortest_word_for_each_solution('Andrei with Dakota love ice-cream')
    )
    console.log(
        'Did you eat ice ???::: ',
        the_shortest_word_with_sort('Did you eat ice ???')
    )

    console.log(
        'Si vis pacem, para bellum::: ',
        the_shortest_word_with_sort('Si vis pacem, para bellum')
    )
}
