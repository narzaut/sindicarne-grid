import React, { useState } from "react";
export const getCuentas = async (token) => {
	let datas = [];

	if (!token ||	 token.ok != true)	return datas
	
	await fetch(`//localhost:3030/usuario`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token.token
		}
	})
	.then(response => response.json())
	.then(data => { datas = data })
	.catch(error => datas = false)
	return datas
}