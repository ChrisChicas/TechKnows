import { useEffect, useState, useContext } from "react"
import { CurrentUser } from "../../contexts/currentUser"
import { Link } from "react-router-dom"

export default function MainFeed(){
    const {currentUser} = useContext(CurrentUser)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.SERVER_URL}/articles`, {
                credentials: "include"
            })
            const data = await response.json()
            setArticles(data)
        }
        fetchData()
    }, [])

    const formatArticles = articles.map((article, key) => {
        let contentDisplay
        if (article.content.length >= 50){
            contentDisplay = article.content.substring(0, 50) + "..."
        } else {
            contentDisplay = article.content
        }
        return(
            <main className="main" key={key}>
            <div className="text-slate-500 hover:text-blue-600">
                <Link to={"/articles/" + article.article_id}>
                    <h2>{article.title}</h2>
                    <p>{contentDisplay}</p>
                </Link>
            </div> 
            </main>   
        ) 
    })

    let loggedIn
    if (currentUser){
        loggedIn = (
            <div>
                <h4 style={{"fonFamily": "cursive"}}>Want to write your own article? <Link to="/articles/new">Create a new article here!</Link></h4>
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
        <main className="my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">
            <h1 style={{"fontFamily": "cambria"}}>Main Feed {loggedIn}</h1>
            {formatArticles}
                
        </main>
    )
}