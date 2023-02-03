const Card = props => {
    const showAnser = () => { 
        const defult = [...document.querySelectorAll(".defult")]
        defult.forEach(element => element.classList.remove("defult"));
        const btn = document.querySelector("#answer")
        const question = document.querySelector(".question")
        btn.classList.add("defult")
        question.classList.add("defult")
     }
	return (
		<div className="container">
			<div className="question">
				<p>Hasło</p>
			</div>
			<div className="anser defult">
				<p>ODp</p>
			</div>

			<div>
				<button onClick={showAnser} id="answer">Pokaż odpowiedź</button>
				<div className="defult">
					<button>Powtórz</button>
					<button>Łatwe</button>
					<button>Średnie</button>
					<button>Trudne</button>
				</div>
			</div>
		</div>
	)
}
export default Card
