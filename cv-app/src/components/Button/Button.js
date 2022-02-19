import styles from './Button.module.scss';

export function Button(props) {
    const size = props.size;
    return (
        <>
            <button className={`${styles.button} ${size === 'mini' ? styles.mini : ''}`}>
                <span>{props.icon}</span>
                <span className={styles.button_text}>{props.text}</span>
            </button>
        </>
    )
}