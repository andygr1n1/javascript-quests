import './styles/index.css'
import { Home } from './modules/home/home'

const root = () => {
    const homepage = document.getElementById('homepage')
    homepage && Home()
}

root()
