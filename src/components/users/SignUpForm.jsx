import React from 'react'

const SignUpForm = () => {
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
