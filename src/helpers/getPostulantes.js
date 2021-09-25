import { authenticate  } from "./authenticate"

export const getPostulantes = async () => {
	let datas;
	const token = await authenticate('narz')

	if (token.ok != true)	return token.message
	
	await fetch(`//localhost:3030/postulantes`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token.token
		}
	})
	.then(response => response.json())
	.then(data => { datas = data })
	return datas
}
