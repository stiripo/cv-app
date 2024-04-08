import styles from './SectionContainer.module.scss';

export function SectionContainer(props) {
    return (
        <section className={styles.info_box}>
            <h2 id={`${props.title}`}>{props.title}</h2>
            <div>{props.content}</div>
        </section>
    )
}