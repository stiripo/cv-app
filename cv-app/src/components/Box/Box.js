import styles from './Box.module.scss';

export function Box(props) {
    return (
        <div className={styles.info_box}>
            <h2 id={`${props.title}`}>{props.title}</h2>
            <div>{props.content}</div>
        </div>
    )
}