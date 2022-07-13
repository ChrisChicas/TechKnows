import { useContext } from "react"
import { CurrentUser } from "../contexts/currentUser"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar(props){
    const {currentUser, setCurrentUser} = useContext(CurrentUser)
    const navigate = useNavigate()

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

    let loggedIn = (
        <>
            <li style={{ float: 'right' }}><Link to="/signup">Sign Up</Link></li>
            <li style={{ float: 'right' }}><Link to="/login">Login</Link></li>
        </>
    )

    if (currentUser) {
        loggedIn = (
            <>
                <li><Link to="/articles/new">Create Article</Link></li>
                <li className="log" onClick={logOut}>LOG OUT</li>
                <p className="logname">Logged in as {currentUser.username}</p>
            </>
            
        )
    }
    
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                {loggedIn}
            </ul>
        </nav>
    )
}