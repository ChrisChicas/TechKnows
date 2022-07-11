import { CurrentUser } from "../../contexts/currentUser"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LogOut(props){
    const navigate = useNavigate()
	const {setCurrentUser} = useContext(CurrentUser)

    useEffect(() => {
        const logOut = async () => {
            await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setCurrentUser(null)
            props.setLoggedOut(true)
            navigate("/")   
        }
        logOut()    
    }, [navigate, setCurrentUser, props])
    
}