export const authenticate = async (user) => {
	let token;

	await fetch(`//localhost:3030/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: user.username,
			password: user.password
		})	
	})
	.then(response => {
		return response.json()
	})
	.then(json => {
		token = json
	
	})
	.catch(error => {
		token = error
	})
	return token
}