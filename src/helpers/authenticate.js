export const authenticate = async () => {
	let token;

	await fetch(`https://api.sindicarne.com.ar/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: "narz"
		})	
	})
	.then(response => {
		return response.json()
	})
	.then(json => {
		if (json.ok == true) {
			token = json.token
		} else if (json.ok == false){
			token = false
		}
	
	})
	.catch(error => {
		token = error
	})
	return token
}