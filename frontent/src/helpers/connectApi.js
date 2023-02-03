const URL = "http://127.0.0.1:8000/"
export const connectToAPIGet = async () => {
	const URL = "http://127.0.0.1:8000/users"
	const result = await fetch(URL).then(res => res.json())
	console.log(result)
	return result
}
export const getUser = async (nameuser) => {
	
	const url = `${URL}user/${nameuser}`
	const response = await fetch('https://some-api.com/data');
	const data = await response.json();
	console.log(data);
	
	return data
}

