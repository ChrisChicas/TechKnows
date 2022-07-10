import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function MainFeed(){
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/articles`)
            const data = await response.json()
            setArticles(data)
        }
        fetchData()
    }, [])

    const formatArticles = articles.map((article, key) => {
        let contentDisplay = article.content.substring(0, 50) + "..."
        return(
            <div key={key}>
                <Link to={"/articles/" + article.article_id}>
                    <h2>{article.title}</h2>
                    <p>{contentDisplay}</p>
                </Link>
            </div>    
        ) 
    })

    return(
        <main>
            <h1>Main Feed</h1>
            {formatArticles}    
        </main>
    )
}