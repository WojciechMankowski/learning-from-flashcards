const Button = props => {
	return (
		<button className="btn"
			onClick={(e) => {
				props.function(e)
			}}
			type={props.type} id={props.id}>
			{props.text} 
		</button>
	)
}
export default Button
