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
            <main className="main">
            <div key={key} className="text-slate-500 hover:text-blue-600">
                <Link to={"/articles/" + article.article_id}>
                    <h2>{article.title}</h2>
                    <p>{contentDisplay}</p>
                </Link>
            </div> 
            </main>   
        ) 
    })

    return(
        <main className="my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">
            <h1 className="my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">Main Feed</h1>
            {formatArticles}    
        </main>
    )
}