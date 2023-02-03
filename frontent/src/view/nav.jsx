import { Link } from "react-router-dom"
import Card from "../components/card"
const Menu = params => {
	return (
		<nav>
			<Link to={"/"}>Home</Link>
			<Link to={"/login"}>Logowanie</Link>
		</nav>
	)
}
export default Menu
