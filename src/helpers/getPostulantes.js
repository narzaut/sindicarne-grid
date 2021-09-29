import React, { useState } from "react";
export const getPostulantes = async (token) => {
	let datas = [];

	if (!token ||	 token.ok != true)	return datas
	
	await fetch(`https://api.sindicarne.com.ar/postulantes`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token.token
		}
	})
	.then(response => response.json())
	.then(data => { datas = data })
	return datas
}
