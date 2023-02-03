import { useState } from "react"
import Input from "../components/input"
import Button from "../components/button"
import { getUser } from "../helpers/connectApi"
const Login = props => {
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")
	const [data, setData] = useState("")
	const [error, setError] = useState("")

	const login = () => {
		const URL = "http://127.0.0.1:8000/"
		const url = `${URL}user/${name}`
		fetch(url)
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.error(error))
		if (data.password !== password) {
			setError("Błądne dane")
		} else {
			window.location.replace("http://localhost:3000/")
		}
	}
	return (
		<form className="container ">
			{error}
			<label htmlFor="">
				Nazwa użytkownika <Input type={"teext"} set={setName} />
			</label>
			Hasło <Input type={"password"} set={setPassword} />
			<Button text="Zaloguj się" type="button" function={login} />
		</form>
	)
}
export default Login
