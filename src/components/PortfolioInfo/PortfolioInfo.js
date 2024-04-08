import styles from './PortfolioInfo.module.scss';

export function PortfolioInfo(props) {
    return(
        <article className={styles.overlay_content}>
            <h2 className={styles.overlay_title}>{props.title}</h2>
            <p className={styles.overlay_text}>{props.text}</p>
            <a href={props.source}>View source</a>
        </article>
    )
}