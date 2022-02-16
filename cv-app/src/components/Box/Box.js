import styles from './Box.module.scss';

export function Box(props) {
    return (
        <section className={styles.info_box}>
            <h2 id={`${props.title}`}>{props.title}</h2>
            <div>{props.content}</div>
        </section>
    )
}