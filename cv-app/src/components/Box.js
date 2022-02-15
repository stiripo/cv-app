export function Box(props) {
    return (
        <div className='info-box'>
            <h2 id={`${props.title}`}>{props.title}</h2>
            <div>{props.content}</div>
        </div>
    )
}