
import jwt_decode from 'jwt-decode'
export const isTokenExpired = async () => {

	const token = JSON.parse(localStorage.getItem('token'))
	if (!token) return false
	var decodedToken=await jwt_decode(token.token);



	if (decodedToken.exp < Date.now() / 1000){
		return true
	} 
	return false
}