import { CurrentUser } from "../../contexts/currentUser"
import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

export default function ArticleDetails(){
    const navigate = useNavigate()
    const {articleId} = useParams()
    const {currentUser} = useContext(CurrentUser)
    const [article, setArticle] = useState([])
    const [comment, setComment] = useState("")
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/articles/${articleId}`, {
                credentials: "include"
            })
            if (response.status === 200){
            const data = await response.json()
            setArticle(data)   
            } else {
                navigate("/PageNotFound")
            }
            
        }
        fetchData()
    }, [articleId, navigate])

    const deleteArticle = async () => {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/articles/${articleId}`, {
            method: "DELETE",
            credentials: "include",
        })
        navigate("/articles")
    }

    const createComment = async e => {
        e.preventDefault()
        if (!comment){
            setError(true)
        } else {
            await fetch(`${process.env.REACT_APP_SERVER_URL}/articles/${articleId}/comments`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comment: comment
                })
            })
            window.location.reload()
        }
    }

    const deleteComment = async commentId => {
        await fetch(`${process.env.REACT_APP_SERVER_URL}/articles/${articleId}/comments/${commentId}`, {
            method: "DELETE",
            credentials: "include",
        })
        window.location.reload()
    }

    if(article.length === 0){
        return(
            <main className="article">
                <h1>Loading...</h1>  
            </main>       
        )    
    }

    const commentForm = (
        <div>
            {currentUser ? <div>
                <h4>What did you think of this article? Leave a comment!</h4>
                {error ? <div className="alert alert-danger alert-dismissible" role="alert">
                    Comment cannot be empty!
                    <button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div> 
                : null}
                <form onSubmit={createComment}>
                    <div className="col-sm-8 form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea id="comment" value={comment} placeholder="Enter comment..." onChange={e => {setComment(e.target.value)}}/>    
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
            : <h4>Log in or sign up to leave a comment!</h4>}
        </div>
    )

    let comments
    if (article.artComments.length === 0){
        comments = (
            <div>
                <h4>No comments yet!</h4>
            </div>
        )
    } else {
        comments = article.artComments.map((comment, key) => {
        let commentAuthor
        if (comment.user_id === currentUser?.user_id || currentUser?.role === "admin"){
            commentAuthor = (
                <button onClick={() => deleteComment(comment.comment_id)}>Delete Comment</button>
            )
        }
            return (
                <div key={key}>
                    <h4>{comment.comAuthor.first_name} {comment.comAuthor.last_name}:</h4>
                    <h5>{comment.comment}</h5>
                    {commentAuthor}
                </div>    
            )
            
        })
    }

    let authorAccess
    if (currentUser?.user_id === article.user_id || currentUser?.role === "admin"){
        authorAccess = (
            <div>
                <button><Link to={`/articles/${articleId}/edit`}>Edit Article</Link></button>
                <button onClick={deleteArticle}>Delete Article</button>    
            </div>
        )
    }

    return(
        <main className="article">
            <h1 className="articlehead">{article.title}</h1>
            <h4>Written by: {article.artAuthor.first_name} {article.artAuthor.last_name}</h4>
            <p className="para">{article.content}</p>
            {authorAccess}
            <h4>Comments:</h4>
            {comments}
            {commentForm}
        </main> 
    )
}