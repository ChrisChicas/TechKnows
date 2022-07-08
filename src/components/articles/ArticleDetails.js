import { useParams } from "react-router-dom"

export default function ArticleDetails(){
    let params = useParams()
    // const response = await fetch(url/articles/params.articleId)
    // const data = await response.json()
    //return article data
    return(
        <h1>Article Details For Article {params.articleId}</h1>
    )
}