
import jwt_decode from 'jwt-decode'
export const isTokenExpired = async (token) => {

	if (!token) return false
	const decodedToken = await jwt_decode(token.token);



	if (decodedToken.exp < Date.now() / 1000){
		return true
	} 
	return false
}