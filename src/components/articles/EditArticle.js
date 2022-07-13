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
            const response = await fetch(`${process.env.REACT_APP_API}/articles/${articleId}`, {
                credentials: "include"
            })
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
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
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
            <main>
                <h1>Editing "{article.title}"</h1>
                {error ? <div className="alert alert-danger alert-dismissible" role="alert">
                    Article Title or Content Cannot be Empty.
                    <button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> 
                : null}
                <form onSubmit={updateArticle}>
                        <div className="col-sm-2 form-group">
                            <label htmlFor='title'>Article Title</label>
                            <input type="text" value={title} id='title' className="form-control" placeholder="Enter Title" onChange={e => {setTitle(e.target.value)}} required/>
                        </div>
                        <div className="col-sm-8 form-group">
                            <label htmlFor='content'>Article Content</label>
                            <textarea value={content} id='content' className="form-control" rows="12" placeholder="..." onChange={e => {setContent(e.target.value)}} required/>
                        </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </main>
        )    
    } else {
        return(
            <main>
                <h1>Error! Page Not Found</h1>
            </main>
        )
    }
    
}