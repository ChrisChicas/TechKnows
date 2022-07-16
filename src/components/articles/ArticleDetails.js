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
            const response = await fetch(`${process.env.REACT_APP_API}/articles/${articleId}`)
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
        await fetch(`${process.env.REACT_APP_API}/articles/${articleId}`, {
            method: "DELETE",
            headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
			}
        })
        navigate("/articles")
    }

    const createComment = async e => {
        e.preventDefault()
        if (!comment){
            setError(true)
        } else {
            await fetch(`${process.env.REACT_APP_API}/articles/${articleId}/comments`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    comment: comment
                })
            })
            window.location.reload()
        }
    }

    const deleteComment = async commentId => {
        await fetch(`${process.env.REACT_APP_API}/articles/${articleId}/comments/${commentId}`, {
            method: "DELETE",
            headers: {
				"Authorization": `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
			}
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
                    <div className="form-group">
                        <textarea className="form-control" value={comment} placeholder="Enter comment..." onChange={e => {setComment(e.target.value)}}/>    
                    </div>
                    <input className="btn btn-success" type="submit" value="Submit" />
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
                <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteComment(comment.comment_id)}>Delete Comment</button>
            )
        }
            return (
                <div key={key}>
                    <h5>{comment.comAuthor.first_name} {comment.comAuthor.last_name}:</h5>
                    <blockquote className='blockquote'>
                        <p>{comment.comment}</p>    
                    </blockquote>
                    {commentAuthor}
                </div>    
            )
        })
    }

    let authorAccess
    if (currentUser?.user_id === article.user_id || currentUser?.role === "admin"){
        authorAccess = (
            <div className="row justify-content-center mx-auto">
                <button type="button" className="btn btn-primary"><Link to={`/articles/${articleId}/edit`}>Edit Article</Link></button>
                <button type="button" className="btn btn-danger" onClick={deleteArticle}>Delete Article</button>    
            </div>
        )
    }

    return(
        <div className="articlecontainer container-fluid">
            <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}><i className="fas fa-arrow-left"></i> Go Back</button>
            <h2 className="articletitle">{article.title}</h2>
            <h4 className="articleauth">Written by: {article.artAuthor.first_name} {article.artAuthor.last_name}</h4>
            <blockquote className='blockquote'>
                <p className="articlecontent">{article.content}</p>
            </blockquote>
            {authorAccess}
            <div className="comments">
                <h4><u>Comments:</u></h4>
                {comments}
                {commentForm}
            </div>
        </div> 
    )
}