import { useState } from "react"

export default function CreateArticle(){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)

    const postArticle = async e => {
        e.preventDefault()
        try {
          // fetch request to post article content
          //redirect page to main feed or to article details
        } catch (error) {
          //if article title or content empty, setError true, reset username/password values
        }
      }

    return(
        <main>
            <h1>Create Article</h1>
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
                        <textarea value={content} id='content' className="form-control" rows="12" placeholder="..." onChange={e => {setContent(e.target.value)}} required/>
                    </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </main>
    )
}