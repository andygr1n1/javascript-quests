import { get_initials_from_name } from '../../functions/get_initials_from_name'
import styles from './home.module.scss'

export const Home = () => {
    const title: HTMLHeadingElement = document.createElement('h1')
    const homeRoot = document.getElementById('homepage')

    title.classList.add('color-title')
    title.textContent = 'Initials quest!'

    homeRoot?.classList.add(styles['wrapper'])
    homeRoot?.appendChild(title)

    get_initials_from_name()
}
