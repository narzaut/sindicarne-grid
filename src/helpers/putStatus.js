import { authenticate  } from "./authenticate"

export const putStatus = async (  id, currentStatus ) => {
	const token = await authenticate('narz');
	let datas;
	if (token.ok != true)	return token.message
	await fetch(`//localhost:3030/postulantes/${id}/status`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"x-auth-token": token.token
			},
			body: JSON.stringify({
				"status": currentStatus == true ? "active" : "inactive",
			})
		})
		.then(res => res.json())
		.then(data => {datas = data})
	return datas
}
