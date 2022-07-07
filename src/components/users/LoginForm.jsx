import React from 'react'

const LoginForm = () => {
  return (
    <main>
      <h1>Login</h1>
    <form>
        <div className="row">
            <div className="col-sm-6 form-group">
                <label htmlFor='email'>Email</label>
                <input type="email" value="email" name='email' id='email' className="form-control" required/>
            </div>
            <div className="col-sm-6 form-group">
                <label htmlFor='password'>Email</label>
                <input type="password" value="password" name='password' id='password' className="form-control" required/>
            </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Login" />
    </form>
    </main> 
  )
}

export default LoginForm
