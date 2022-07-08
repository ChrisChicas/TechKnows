import { useState } from "react"

const LoginForm = () => {
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
      <h1>Login</h1>
    <form onSubmit={verification}>
        {error ? <div className="alert alert-danger alert-dismissible" role="alert">
          Username or Password Incorrect.
          <button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div> 
          : null}
        <div className="row">
            <div className="col-sm-6 form-group">
                <label htmlFor='username'>Username</label>
                <input type="text" value={username} id='username' className="form-control" placeholder="Enter Username" onChange={e => {setUserName(e.target.value)}} required/>
            </div>
            <div className="col-sm-6 form-group">
                <label htmlFor='password'>Password</label>
                <input type="password" value={password} id='password' className="form-control" placeholder="Enter Password" onChange={e => {setPassword(e.target.value)}} required/>
            </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Login" />
    </form>
    </main> 
  )
}

export default LoginForm
