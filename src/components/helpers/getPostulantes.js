import { authenticate  } from "./authenticate"

export const getPostulantes = async () => {
	let datas;
	const token = await authenticate()
	if (token == false) return false
	
	await fetch(`https://api.sindicarne.com.ar/postulantes`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token
		}
	})
	.then(response => response.json())
	.then(data => { datas = data })
	return datas
}
