import Button from "./button";
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
				<Button text="Pokaż odpowieść" type="button" function={showAnser} id="answer"/>
				<div className="defult level">
					<Button text="Łatwe"/>
					<Button text="Średnie"/>
					<Button text="Trudne"/>
				</div>
			</div>
		</div>
	)
}
export default Card
