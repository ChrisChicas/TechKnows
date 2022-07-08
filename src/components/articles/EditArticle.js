import { useParams } from "react-router-dom"

export default function EditArticle(){
    let params = useParams()
    // const response = await fetch(url/articles/params.articleId)
    // const data = await response.json()
    // return form similar to create but with update route and with previous article data loaded 

    return (
        <h1>Edit Artcile {params.articleId}</h1>
    )
}