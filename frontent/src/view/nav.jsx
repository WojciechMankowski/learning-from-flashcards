import { Link } from "react-router-dom"
import Card from "../components/card"
const Menu = params => {
	return (
		<nav className="nav">
			<ul>
				<li><Link to={"/"}>Home</Link></li>
				<li><Link to={"/login"}>Logowanie</Link></li>
			</ul>
			
			
		</nav>
	)
}
export default Menu
