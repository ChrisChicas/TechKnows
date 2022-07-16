import { useEffect, useState, useContext } from "react"
import { CurrentUser } from "../../contexts/currentUser"
import { Link } from "react-router-dom"

export default function MainFeed(){
    const {currentUser} = useContext(CurrentUser)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/articles`)
            const data = await response.json()
            setArticles(data)
        }
        fetchData()
    }, [])

    if(articles.length === 0){
        return(
            <main className="article">
                <h1>Loading...</h1>  
            </main>       
        )    
    }

    const formatArticles = articles.map((article, key) => {
        return(
            <div className="row justify-content-center mx-auto" key={key}>
                <Link className="mainart col-9" to={"/articles/" + article.article_id}>
                    <h2 className="text-capitalize"><u>{article.title}</u></h2>
                    <p className="text-truncate">{article.content}</p>
                </Link>
            </div>   
        ) 
    })

    let loggedIn
    if (currentUser){
        loggedIn = (
            <div>
                <h4>Want to write your own article? <Link to="/articles/new">Create a new article here!</Link></h4>
            </div>
        )
    } else {
        loggedIn = (
            <div >
                <h4>Log in or sign up to create your own article!</h4>
            </div>
        )
    }

    return(
        <div className="main container-fluid">
            <h2><u>Most Recent Articles</u></h2>
            {formatArticles}
            {loggedIn}     
        </div>
    )
}