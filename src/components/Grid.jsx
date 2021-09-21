import React, { useState, useEffect } from "react";
import { authenticate } from "./helpers/authenticate";
import { getRequest } from './helpers/getRequest'
export const Grid = () => {
	const [postulantes, setPostulantes] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(async () => {
		const token = await authenticate()
		if (token != false){
			getRequest(token)
				.then(data => {
					if (data){	
						setPostulantes(data)
						setLoading(false)
					} else{
						console.log('err')
					}
				})
		}
	}, [])

	

	return (
		<div className='flex flex-col w-full  items-center justify-center pb-10 mt-6'>
			{loading == false ? <div class="lds-dual-ring	text-shadow border-red-400"/> : <span className='text-shadow'>INSCRIBIRSE</span>}
			<div className=' rounded-md glass card-shadow w-5/6 lg:w-1/2   pb-10 py-6 my-2 lg:my-6 flex flex-col items-center justify-center '>
				<button >asdasd</button>
			</div>
		</div>
	)
}