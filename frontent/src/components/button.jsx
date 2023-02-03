const Button = props => {
	return (
		<button
			onClick={(e) => {
				props.function(e)
			}}
			type={props.type}>
			{props.text}
		</button>
	)
}
export default Button
