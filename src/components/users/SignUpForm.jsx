import { useState } from "react"

const SignUpForm = () => {
	const [username, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)
  
	const verification = async e => {
	  e.preventDefault()
	  try {
		// fetch request to get user data w/ username
		//compare passwords
		//redirect page
	  } catch (error) {
		//setError true, reset username/password values
	  }
	}

  return (
    <main>
			<h1>Sign Up</h1>
			<form>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input value= 'firstName' id="firstName" className="form-control"  name="firstName" required/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input value='lastName' className="form-control" id="lastName" name="lastName" required />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input type="email" value='email' className="form-control" id="email" name="email" required/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="password">Password</label>
						<input type="password" value='password' className="form-control" id="password" name="password" required/>
					</div>
				</div>
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
  )
}

export default SignUpForm
