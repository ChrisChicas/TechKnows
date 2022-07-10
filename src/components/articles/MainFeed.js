import { useEffect, useState } from "react"

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

    const formatArticles = articles.map(article => {
        let contentDisplay = article.content.substring(0, 50) + "..."
        return(
            <div>
                <h2>{article.title}</h2>
                <p>{contentDisplay}</p>
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