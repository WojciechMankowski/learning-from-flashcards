
const Input = (props) => { 
    const enterACharacter = (event) => {
        props.set(event.target.value)
    }
    return <input type={props.type} onChange={enterACharacter}/>
 }
 export default Input