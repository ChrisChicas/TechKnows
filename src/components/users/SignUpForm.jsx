import { CurrentUser } from "../../contexts/currentUser"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
	const navigate = useNavigate()
	const {setCurrentUser} = useContext(CurrentUser)

	const [name, setName] = useState({
		firstName: "",
		lastName: ""
	})
	const [username, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)
  
	const verification = async e => {
	  e.preventDefault()
	  const response = await fetch(`${process.env.REACT_APP_API}/users`, {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${localStorage.getItem("token")}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username: username,
			password: password,
			first_name: name.firstName,
			last_name: name.lastName
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
		<h3><u>Sign Up</u></h3>  
		<form onSubmit={verification}>
			<>
				{error ? <div className="alert alert-danger alert-dismissible" role="alert">
					Username already exists.
					<button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div> 
				: null}
			</>
			<div className="form-group">
				<label htmlFor="firstname">First Name:</label>
				<input className="form-control" value={name.firstName} onChange={e => {setName({...name, firstName: e.target.value})}} type="text" id="firstname" placeholder="Enter First Name" required/>
			</div>
			<div className="form-group">
				<label className="mr-2 text-blue" htmlFor="lastname">Last Name:</label>
				<input className="form-control" value={name.lastName} onChange={e => {setName({...name, lastName: e.target.value})}} type="text" id="lastname" placeholder="Enter Last Name" required/>
			</div>
			<div className="form-group">
				<label htmlFor="username">Username:</label>
				<input className="form-control" value={username} onChange={e => {setUserName(e.target.value)}} type="text" id="username" placeholder="Enter Desired Username" required/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password:</label>
				<input className="form-control" value={password} onChange={e => {setPassword(e.target.value)}} type="password" id="password" placeholder="Enter Desired Password" required/>
			</div>	
			<button className="btn btn-success" type="submit" value="Submit">Sign Up</button>
		</form>
		</div>
  )
}

export default SignUpForm
