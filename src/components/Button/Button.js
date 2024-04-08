import styles from './Button.module.scss';

export function Button(props) {
    const size = props.size;
    return (
        <>
            <button className={`${styles.button} ${props.className} ${size === 'mini' ? styles.mini : ''}`} onClick={props.onClick} disabled={props.disabled}>
                <span>{props.icon}</span>
                <span className={styles.button_text}>{props.text}</span>
            </button>
        </>
    )
}