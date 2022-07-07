import { useParams } from "react-router-dom"

export default function ArticleDetails(){
    let params = useParams()
    return(
        <h1>Article Details For Article {params.articleId}</h1>
    )
}