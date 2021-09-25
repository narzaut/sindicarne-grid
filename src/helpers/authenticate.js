export const authenticate = async (user) => {
	let token;

	await fetch(`//localhost:3030/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: user
		})	
	})
	.then(response => {
		return response.json()
	})
	.then(json => {
		if (json.ok == true) {
			token = json
		} else if (json.ok == false){
			token = json
		}
	
	})
	.catch(error => {
		token = error
	})
	return token
}