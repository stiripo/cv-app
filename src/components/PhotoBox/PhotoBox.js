import styles from './PhotoBox.module.scss';

export function PhotoBox(props) {
    return (
        <div className={props.size==='small' ? styles.small : styles.photoBox}>
            <div className={styles.photo}>
                <img  width={props.size==='small' ? '100px' : '163px'} height={props.size==='small' ? '100px' : '163px'} src={props.avatar} alt='developer'/>
            </div>
            <div>
                <h1 className={props.size==='small' ? styles.name_small : styles.name}>{props.name}</h1>
                <div>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
