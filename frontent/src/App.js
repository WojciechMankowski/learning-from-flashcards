import Menu from "./view/nav"
import Card from "./components/card"
import Login from "./view/login"
import { connectToAPIGet } from "./helpers/connectApi"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import "./style/style.scss"
function App() {
	const [user, setUser] = useState({
		name: "",
		email: "",
	})
	const response = connectToAPIGet()
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/" element={<Card />}></Route>
				<Route path="/login" element={<Login setUser={setUser} />}></Route>
			</Routes>
		</Router>
	)
}

export default App
// TODO widoki: menu, logowanie, rejestracja, dodawanie nowych zestawów, dodawanie nowych fiszek, edycja, nauka
// TODO kompomenty: input, select, przycisk,
// TODO funkcja łączenia z api
