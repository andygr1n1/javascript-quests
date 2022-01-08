import './styles/index.css'
import { Home } from './modules/home/home'

import { isPalindrome } from './functions/isPalindrome'

const root = () => {
    const homepage = document.getElementById('homepage')
    homepage && Home()

    isPalindrome()
}

root()
