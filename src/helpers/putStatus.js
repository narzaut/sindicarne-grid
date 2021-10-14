export const putStatus = async (  token, id, currentStatus ) => {
	let datas = [];
	if (!token ||	 token.ok != true)	return datas
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
		.catch(err => {datas = err})
	return datas
}
