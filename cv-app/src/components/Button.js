export function Button(props) {
    return (
        <>
            <button className='button'>
                <span>{props.icon}</span>
                <span className='button-text'>{props.text}</span>
            </button>
        </>
    )
}