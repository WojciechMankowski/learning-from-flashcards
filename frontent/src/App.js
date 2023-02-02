// TODO widoki: menu, logowanie, rejestracja, dodawanie nowych zestawów, dodawanie nowych fiszek, edycja, nauka

import Card from "./components/card"
import { connectToAPI } from "./helpers/connectApi"
// TODO kompomenty: input, select, przycisk,
// TODO funkcja łączenia z api
function App() {
  const connect = connectToAPI("GET", "")
  connect.then(res=> console.log(res))
	return (
		<div className="App">
      <Card/>
		</div>
	)
}

export default App
