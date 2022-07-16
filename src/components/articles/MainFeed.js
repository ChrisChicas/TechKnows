import { useEffect, useState, useContext } from "react"
import { CurrentUser } from "../../contexts/currentUser"
import { Link, useNavigate } from "react-router-dom"

export default function MainFeed(){
    const {currentUser} = useContext(CurrentUser)
    const [articles, setArticles] = useState([])
    const [pages, setPages] = useState(1)
    const navigate = useNavigate()
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/articles/?sort=${params.sort}&page=${params.page}`)
            if (response.status === 200){
                const data = await response.json()
                setArticles(data.articles)
                setPages(data.pages)    
            } else {
                navigate("/PageNotFound")
            }
        }
        fetchData()
    }, [params.sort, params.page, navigate])

    const formatArticles = articles.map((article, key) => {
        return(
            <div className="row justify-content-center mx-auto" key={key}>
                <Link className="mainart col-9" to={"/articles/" + article.article_id}>
                    <h2 className="text-capitalize"><u>{article.title}</u></h2>
                    <p className="text-truncate">{article.content}</p>
                </Link>               
            </div>   
        ) 
    })

    let loggedIn
    if (currentUser){
        loggedIn = (
            <div>
                <h4>Want to write your own article? <Link to="/articles/new">Create a new article here!</Link></h4>
            </div>
        )
    } else {
        loggedIn = (
            <div >
                <h4>Log in or sign up to create your own article!</h4>
            </div>
        )
    }

    let pageTotal = []
    for (let i=1; i <= pages; i++){
        pageTotal.push(i)
    }
    
    const formatPageTot = pageTotal.map((page, key) => {
        if (Number(params.page) === page){
            return <a className="pages active" key={key} href={`/articles/?sort=${params.sort}&page=${page}`}>{page}</a>
        } 
        return (
            <a className="pages" key={key} href={`/articles/?sort=${params.sort}&page=${page}`}>{page}</a>
        )
    })

    let displaySort = String(params.sort)
    const allowSort = ['General', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python']
    if (allowSort.includes(displaySort)){
    } else {
        displaySort = "Most Recent"
    }

    if(articles.length === 0){
        return(
            <div className="main container-fluid">
            <h2><u>No {displaySort} Articles Yet!</u></h2>
            {loggedIn}     
        </div>      
        )    
    }
    
    return(
        <div className="main container-fluid">
            <h2><u>{displaySort} Articles</u></h2>
            {formatArticles}
            {formatPageTot}
            {loggedIn}     
        </div>
    )
}