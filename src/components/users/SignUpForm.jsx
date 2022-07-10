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

		<div className='container'>
		<h3 className='my-4 mx-16 text-3xl font-bold'>Sign Up</h3>  
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
					<label className="text-blue" htmlFor="firstname">Firstname: </label>
					<input
					className="border-2 rounded-lg border-stone-300"
					value={name.firstName}
					onChange={e => {setName({...name, firstName: e.target.value})}}
					type="text"
					id="firstname"
					name="firstname"
					required
					/>
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="text-blue" htmlFor="lastname">Lastname: </label>
					<input
					className="border-2 rounded-lg border-stone-300"
					value={name.lastName}
					onChange={e => {setName({...name, lastName: e.target.value})}}
					id="lastname"
					name="lastname"
					required
					/>
									
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="text-blue" htmlFor="username">Username: </label>
					<input
					className="border-2 rounded-lg border-stone-300 w-9/12"
					value={username}
					onChange={e => {setUserName(e.target.value)}}
					type="text"
					id="username"
					name="username"
					required
					/>
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="text-blue" htmlFor="password">Password: </label>
					<input
					className="border-2 rounded-lg border-stone-300 w-9/12"
					value={password}
					onChange={e => {setPassword(e.target.value)}}
					type="text"
					id="password"
					name="password"
					required
					/>
				</li>
			</ul>
			<button 
					className="hover:bg-indigo-500 my-4 inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg"
					type="submit">
					Submit
			</button>
		</form>
		</div>
  )
}

export default SignUpForm
