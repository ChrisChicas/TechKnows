import { CurrentUser } from "../../contexts/currentUser"
import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditArticle(){
    const navigate = useNavigate()
    const {articleId} = useParams()
    const {currentUser} = useContext(CurrentUser)
    const [article, setArticle] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/articles/${articleId}`)
            if (response.status === 200){
                const data = await response.json()
                setArticle(data)
                setTitle(data.title)
                setContent(data.content)   
            } else {
                navigate("/articles/PageNotFound")
            }
        }
        fetchData()
    }, [articleId, navigate])

    const updateArticle = async e => {
        e.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_API}/articles/${articleId}`, {
            method: "PUT",
            headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
			},
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        if (response.status === 200){
            navigate(`/articles/${articleId}`)
        } else {
            setError(true)
        }
      }

    if (currentUser?.user_id === article.user_id || currentUser?.role === "admin"){
        return (
            <div className="articleforms">
                <h2><u>Editing Article {article.title}</u></h2>
                {error ? <div className="alert alert-danger alert-dismissible" role="alert">
                    Article Title or Content Cannot be Empty.
                    <button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> 
                : null}
                <form onSubmit={updateArticle}>
                    <div className="form-group">
                        <label htmlFor='title'>Article Title</label>
                        <input type="text" value={title} id='title' className="form-control" placeholder="Enter Title" onChange={e => {setTitle(e.target.value)}} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor='content'>Article Content</label>
                        <textarea value={content} id='content' className="form-control" rows="12" placeholder="..." onChange={e => {setContent(e.target.value)}} required/>
                    </div>
                    <a href={`/articles/${articleId}`} className="btn btn-primary">Go Back</a>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        )    
    } else {
        return(
            <main>
                <h2><u>Error! Page Not Found</u></h2>
            </main>
        )
    }
    
}