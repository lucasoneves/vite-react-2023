import styles from './Button.module.scss';

export const Button = ({click, children, isFlat, fullWidth}) => {
  return <button onClick={click} className={`${styles['button']} ${isFlat ? styles['flat'] : ''} ${fullWidth ? styles['full-width']  : ''}`}>{children}</button>
}

