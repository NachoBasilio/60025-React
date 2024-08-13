

export const InfoUser = ({name, username, details}) => {
    return <>
        <div className="content">
            <h3 className="name">{name}</h3>
            <p className="username">{username}</p>
            <p className="details">
                {details}
            </p>
            <a className="effect" href="#">
                Contactar
            </a>
        </div>
    </>
}