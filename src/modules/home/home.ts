import styles from './home.module.scss'

export const Home = () => {
    const title: HTMLHeadingElement = document.createElement('h1')
    const homeRoot = document.getElementById('homepage')

    title.classList.add('color-title')
    title.textContent = 'Hello Pro!'
    
    homeRoot?.classList.add(styles['wrapper'])
    homeRoot?.appendChild(title)
}
