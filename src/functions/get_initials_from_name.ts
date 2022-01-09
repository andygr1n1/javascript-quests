export const get_initials_from_name = () => {
    const getInitials = (name: string) => {
        const nameToArray = name.split(' ')
        const initials = nameToArray
            .map((word) => word.slice(0, 1).toUpperCase())
            .join('.')

        return console.log(name, ' ::: ', initials)
    }

    getInitials('Andrei Grini')
    getInitials('Elon mask')
    getInitials('Eleonora mary Ruzvelt')
}
