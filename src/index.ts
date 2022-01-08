import './styles/index.css'
import { Home } from './modules/home/home'
import { the_shortest_word } from './functions/the_shortest_word'

const root = () => {
    const homepage = document.getElementById('homepage')
    homepage && Home()

    the_shortest_word()
}

root()
