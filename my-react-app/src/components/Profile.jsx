
import UserContext from "../context/useContext"
import { useContext } from "react"


function Profile(){
    const username = useContext(UserContext)

    return(
        <div>
            <h1>
                the user name is {username}
            </h1>
        </div>
    )
}

export default Profile;