import styles from './Button.module.scss';

export const Button = ({click, children, isFlat}) => {
  return <button onClick={click} className={`${styles['button']} ${isFlat ? styles['flat'] : ''}`}>{children}</button>
}

