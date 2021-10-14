import React, { useState } from "react";
export const getPostulante = async (token, id) => {
	let datas ;

	if (!token ||	 token.ok != true)	return datas
	
	await fetch(`//localhost:3030/postulante/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token.token
		}
	})
	.then(response => response.json())
	.then(data => { datas = data })
	return datas
}
