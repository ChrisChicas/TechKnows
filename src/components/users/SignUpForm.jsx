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

		<div className='container'>
		<h3 className='my-4 mx-16 text-3xl font-bold'>Sign Up</h3>  
		<form className="mx-10" onSubmit={verification}>
				<>
					{error ? <div className="alert alert-danger alert-dismissible" role="alert">
						Username already exists.
						<button type="button" className="close" onClick={() => {setError(false)}} data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						</div> 
					: null}
				</>
			<ul className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
				<li className="py-2 pl-2 border border-slate-300">
					<label className="mr-2 text-blue" htmlFor="firstname">First Name: </label>
					<input
					className="border-2 rounded-lg border-stone-300"
					value={name.firstName}
					onChange={e => {setName({...name, firstName: e.target.value})}}
					type="text"
					id="firstname"
					placeholder="Enter First Name"
					required
					/>
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="mr-2 text-blue" htmlFor="lastname">Last Name: </label>
					<input
					className="border-2 rounded-lg border-stone-300"
					value={name.lastName}
					onChange={e => {setName({...name, lastName: e.target.value})}}
					type="text"
					id="lastname"
					placeholder="Enter Last Name"
					required
					/>
									
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="mr-2 text-blue" htmlFor="username">Username: </label>
					<input
					className="border-2 rounded-lg border-stone-300 w-9/12"
					value={username}
					onChange={e => {setUserName(e.target.value)}}
					type="text"
					id="username"
					placeholder="Enter Desired Username"
					required
					/>
				</li>
				<li className="py-2 pl-2 border border-slate-300">
					<label className="mr-2 text-blue" htmlFor="password">Password: </label>
					<input
					className="border-2 rounded-lg border-stone-300 w-9/12"
					value={password}
					onChange={e => {setPassword(e.target.value)}}
					type="password"
					id="password"
					placeholder="Enter Desired Password"
					required
					/>
				</li>
			</ul>
			<button 
					className="hover:bg-indigo-500 my-4 inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg"
					type="submit">
					Sign Up
			</button>
		</form>
		</div>
  )
}

export default SignUpForm
