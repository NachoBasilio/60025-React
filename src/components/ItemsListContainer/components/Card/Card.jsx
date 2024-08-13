import { ImageUser } from "./ImageUser"
import { InfoUser } from "./InfoUser"


export const Card = ({imagenURL, name, username, details}) => {
    return <div className="container">
        <ImageUser imagenURL={imagenURL} />
        <InfoUser  name={name} username={username} details={details}/>
    </div>

}