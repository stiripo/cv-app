import styles from './Info.module.scss';

export function Info(props) {
    return (
        <div className={styles.info}>
            {props.text}
        </div>
    )
}