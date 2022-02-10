export function PhotoBox(props) {
    return (
        <figure className={props.size==='small' ? 'photoBox--small' : 'photoBox'}>
            <div className='photoBox-photo'>
                <img  width={props.size==='small' ? '100px' : '163px'} height={props.size==='small' ? '100px' : '163px'} src={props.avatar} alt='developer'/>
            </div>
            <figcaption>
                <div className={props.size==='small' ? 'photoBox-name--small' : 'photoBox-name'}>{props.name}</div>
                <article>
                    <header className='photoBox-title'>{props.title}</header>
                    <div className='photoBox-description'>{props.description}</div>
                </article>
            </figcaption>
        </figure>
    )
}