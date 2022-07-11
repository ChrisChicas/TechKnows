import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ArticleDetails(){
    const [article, setArticle] = useState([])
    let {articleId} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/articles/${articleId}`)
            const data = await response.json()
            setArticle(data)
        }
        fetchData()
    }, [articleId])

    return(
        <main className="article">
            <h1 className="articlehead">Article Details For Article "{article.title}"</h1>
            <p className="para">{article.content}</p>  
        </main>       
    )
}

//add comments section, author edit/delete buttons