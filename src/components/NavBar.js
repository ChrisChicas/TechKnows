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
                            <a href="/articles/?sort=Most Recent&page=1" className="dropdown-item">Most Recent</a>
                            <div className="dropdown-divider"></div> 
                            <a href="/articles/?sort=General&page=1" className="dropdown-item">General</a>
                            <div className="dropdown-divider"></div> 
                            <a href="/articles/?sort=HTML&page=1" className="dropdown-item">HTML</a>
                            <div className="dropdown-divider"></div> 
                            <a href="/articles/?sort=CSS&page=1" className="dropdown-item">CSS</a>
                            <div className="dropdown-divider"></div> 
                            <a href="/articles/?sort=JavaScript&page=1" className="dropdown-item">JavaScript</a>
                            <div className="dropdown-divider"></div> 
                            <a href="/articles/?sort=NodeJS&page=1" className="dropdown-item">NodeJS</a>
                            <div className="dropdown-divider"></div> 
                            <a href="/articles/?sort=Python&page=1" className="dropdown-item">Python</a>
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