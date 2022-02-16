import styles from './PhotoBox.module.scss';

export function PhotoBox(props) {
    return (
        <figure className={props.size==='small' ? styles.small : styles.photoBox}>
            <div className={styles.photo}>
                <img  width={props.size==='small' ? '100px' : '163px'} height={props.size==='small' ? '100px' : '163px'} src={props.avatar} alt='developer'/>
            </div>
            <figcaption>
                <div className={props.size==='small' ? styles.name_small : styles.name}>{props.name}</div>
                <article>
                    <header className={styles.title}>{props.title}</header>
                    <div className={styles.description}>{props.description}</div>
                </article>
            </figcaption>
        </figure>
    )
}
