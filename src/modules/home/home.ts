import { getSum } from '../../functions/getSum'
import styles from './home.module.scss'

export const Home = () => {
    const title: HTMLHeadingElement = document.createElement('h1')
    const homeRoot = document.getElementById('homepage')

    title.classList.add('color-title')
    title.textContent = 'Hello JS Quests!'

    homeRoot?.classList.add(styles['wrapper'])
    homeRoot?.appendChild(title)

    getSum()
}
