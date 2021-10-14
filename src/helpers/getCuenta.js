import React, { useState } from "react";
export const getCuenta = async (token, id) => {
	let datas ;

	if (!token ||	 token.ok != true)	return datas
	
	await fetch(`//localhost:3030/usuario/${id}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-auth-token': token.token
		}
	})
	.then(response => response.json())
	.then(data => { 
		
		if (data && data.id_usu > 0){
			datas = data
			return
		}
		datas = false
	 })
	.catch(error => {
	
		datas = false
	})
	return datas
}
