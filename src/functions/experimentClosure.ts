export const experimentClosure = () => {
    const hiFunction = (greeting: string, name: string) => {
        return console.log(`${greeting} ${name}`)
    }

    const sayHello = (name: string) => {
        return hiFunction('Hi', name)
    }

    sayHello('Andrew')
}
