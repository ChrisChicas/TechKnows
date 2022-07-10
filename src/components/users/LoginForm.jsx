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

    <div className='container'>
		<h3 className='my-4 mx-16 text-3xl font-bold'>Login</h3>  
		<form className="mx-10" onSubmit={verification}>
				<>{error ? <div className="alert alert-danger alert-dismissible" role="alert">
									Username already exists.
									<button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									</div> 
									: null}</>
			<ul className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
				<li className="py-2 pl-2 border border-slate-300">
					<label className="text-blue" htmlFor="firstname">Username: </label>
					<input
					className="border-2 rounded-lg border-stone-300"
					value={username}
          onChange={e => {setUserName(e.target.value)}}
					type="text"
					id="firstname"
					name="firstname"
					required
					/>
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="text-blue" htmlFor="password">Password: </label>
					<input
					className="border-2 rounded-lg border-stone-300"
					value={password}
					onChange={e => {setPassword(e.target.value)}}
					id="password"
					name="password"
					required
					/>
									
				</li>
			</ul>
			<button 
					className="hover:bg-indigo-500 my-4 inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg"
					type="submit">
					Login
			</button>
		</form>
		</div>

  )
}

export default LoginForm
