import { CurrentUser } from "../../contexts/currentUser"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()
  const {setCurrentUser} = useContext(CurrentUser)

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const verification = async e => {
    e.preventDefault()
	const response = await fetch(`${process.env.REACT_APP_API}/authentication`, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			password: password
		})
	})
	if (response.status === 200){
		const data = await response.json()
		setCurrentUser(data.user)
		localStorage.setItem("token", data.token)
		navigate("/")	
	} else {
		setError(true)
		setUserName("")
		setPassword("")
	}
}

  return (

    <div className='authforms'>
		<h2><u>Login</u></h2>  
		<form onSubmit={verification}>
			<>
				{error ? <div className="alert alert-danger alert-dismissible" role="alert">
					Username or password incorrect.
					<button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div> 
				: null}
			</>
			<div className="form-group">
				<label htmlFor="username">Username: </label>
				<input className="form-control" value={username} onChange={e => {setUserName(e.target.value)}} type="text" id="username" placeholder="Enter Username" required/>	
			</div>
			<div className="form-group">
				<label htmlFor="password">Password: </label>
				<input className="form-control" value={password} onChange={e => {setPassword(e.target.value)}} type="password" id="password" placeholder="Enter Password" required/>		
			</div>			
			<button className="btn btn-success" type="submit" value="Submit">Login</button>
		</form>
		</div>

  )
}

export default LoginForm
