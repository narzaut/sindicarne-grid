export const getRequest = async (token) => {
	const response = await fetch(`https://api.sindicarne.com.ar/postulantes`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token
		}
	})
	return response.json()
}