import styles from './Button.module.scss';

export function Button(props) {
    return (
        <>
            <button className={`${styles.button} ${props.className || ' '}`}>
                <span>{props.icon}</span>
                <span className={styles.button_text}>{props.text}</span>
            </button>
        </>
    )
}