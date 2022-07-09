import { useState } from "react"

const SignUpForm = () => {
	const [name, setName] = useState({
		firstName: "",
		lastName: ""
	})
	const [username, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)
  
	const verification = async e => {
	  e.preventDefault()
	  try {
		// fetch request to post user data to db
		//redirect page
	  } catch (error) {
		//if username already exists, setError true, reset username/password values
	  }
	}

  return (
    <main>
			<h1>Sign Up</h1>
			<form onSubmit={verification}>
				{error ? <div className="alert alert-danger alert-dismissible" role="alert">
					Username already exists.
					<button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					</div> 
					: null}
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input value={name.firstName} id="firstName" className="form-control" placeholder="Enter First Name" onChange={e => {setName({...name, firstName: e.target.value})}} required/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input value={name.lastName} className="form-control" id="lastName" placeholder="Enter Last Name" onChange={e => {setName({...name, lastName: e.target.value})}} required />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">Username</label>
						<input type="text" value={username} className="form-control" id="username" placeholder="Enter Desired Username" onChange={e => {setUserName(e.target.value)}} required/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="password">Password</label>
						<input type="password" value={password} className="form-control" id="password" name="password" placeholder="Enter Desired Password" onChange={e => {setPassword(e.target.value)}} required/>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
  )
}

export default SignUpForm
