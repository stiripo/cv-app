export function Button(props) {
    return (
        <div>
            <button className='button'>{props.icon}{props.text}</button>
        </div>
    )
}