import { Link } from "react-router-dom"

export default function NavBar(){
    let loggedIn = (
        <>
            <li style={{ float: 'right' }}><Link to="/signup">Sign Up</Link></li>
            <li style={{ float: 'right' }}><Link to="/login">Login</Link></li>
        </>
    )
    // if (current user is logged in) {
    //     loggedIn = (
//             <li style={{float: "right"}}><a href="#">Sign Out</a></li>
    //     )
    // }
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