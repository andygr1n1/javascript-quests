// import { getSum } from '../../functions/getSum'
// import { minMaxNumber } from '../../functions/minmaxnumber'
// import { experimentClosure } from '../../functions/experimentClosure'
// import { indexOfUppercase } from '../../functions/indexOfUppercase'
import { closure } from '../../functions/closure'
// import { restOperator } from '../../functions/restOperator'
import styles from './home.module.scss'

export const Home = () => {
    const title: HTMLHeadingElement = document.createElement('h1')
    const homeRoot = document.getElementById('homepage')

    title.classList.add('color-title')
    title.textContent = 'Hello JS Quests!'

    homeRoot?.classList.add(styles['wrapper'])
    homeRoot?.appendChild(title)

    // getSum()
    // minMaxNumber()
    // experimentClosure()
    // indexOfUppercase()
    // restOperator()
    closure()
}
