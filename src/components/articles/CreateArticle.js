import { CurrentUser } from "../../contexts/currentUser"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateArticle(){
    const navigate = useNavigate()
    const {currentUser} = useContext(CurrentUser)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    const postArticle = async e => {
        e.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_API}/articles`, {
            method: "POST",
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
            const data = await response.json()
            navigate(`/articles/${data.article_id}`)
        } else {
            setError(true)
        }
      }

    if (currentUser){
        return(
            <main className="article-cret">
                <h1 className="article-hd">Create Article</h1>
                {error ? <div className="alert alert-danger alert-dismissible" role="alert">
                    Article Title or Content Cannot be Empty.
                    <button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> 
                : null}
                <form onSubmit={postArticle}>
                        <div className="col-sm-2 form-group">
                            <label htmlFor='title'>Article Title</label>
                            <input type="text" value={title} id='title' className="form-control" placeholder="Enter Title" onChange={e => {setTitle(e.target.value)}} required/>
                        </div>
                        <div className="col-sm-8 form-group">
                            <label htmlFor='content'>Article Content</label>
                            <textarea value={content} id='content' className="form-control" rows="12" placeholder="Enter Article Content..." onChange={e => {setContent(e.target.value)}} required/>
                        </div>
                    <input className="btn btn-primary article-hd" type="submit" value="Submit" />
                </form>
            </main>
        )    
    } else {
        return(
            <main>
                <h1>You must be logged in to create an article.</h1>
            </main>
        )
    }
    
}