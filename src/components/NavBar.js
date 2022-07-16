import { useContext } from "react"
import { CurrentUser } from "../contexts/currentUser"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar(props){
    const {currentUser, setCurrentUser} = useContext(CurrentUser)
    const navigate = useNavigate()

    const logOut = async () => {
        await fetch(`${process.env.REACT_APP_API}/authentication/logout`, {
            method: "POST",
            headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
			}
        })
        setCurrentUser(null)
        localStorage.removeItem("token")
        props.setLoggedOut(true)
        navigate("/")   
    }

    let loggedIn = (
        <>
            <li className="nav-item"><Link to="/login">Login</Link></li> 
            <div className="dropdown-divider"></div>
            <li className="nav-item"><Link to="/signup">Sign Up</Link></li>
        </>
    )

    if (currentUser) {
        loggedIn = (
            <>
                <li className="nav-item"><Link to="/articles/new">Create Article</Link></li>
                <div className="dropdown-divider"></div>
                <li className="nav-item" onClick={logOut}>LOG OUT</li>
                <div className="dropdown-divider"></div>
                <p className="username">Logged in as: <strong>{currentUser.username}</strong></p>
            </>
            
        )
    }
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <div className="dropdown-divider"></div>
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-item dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Articles</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/articles" className="dropdown-item">Most Recent</Link>
                            <div className="dropdown-divider"></div> 
                            <Link to="/articles" className="dropdown-item">JavaScript</Link>
                            <div className="dropdown-divider"></div> 
                            <Link to="/articles" className="dropdown-item">Python</Link>
                        </div>
                    </li>
                    <div className="dropdown-divider"></div>      
                </ul>
                <ul className="ml-auto navbar-nav">
                    {loggedIn}    
                </ul>
            </div>
        </nav>
    )
}