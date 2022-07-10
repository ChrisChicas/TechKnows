import { CurrentUser } from "../../contexts/currentUser"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LogOut(){
    const navigate = useNavigate()
	const {setCurrentUser} = useContext(CurrentUser)

    useEffect(() => {
        const logOut = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/logout`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = response.json()
            console.log(data)
            setCurrentUser(null)
            navigate("/")   
        }
        logOut()    
    }, [navigate, setCurrentUser])
    
}