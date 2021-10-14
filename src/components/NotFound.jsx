import React from "react";
import { useHistory } from 'react-router-dom';

export const NotFound = () => {
	let history = useHistory()
	return (
		<div className='py-10 h-full fadeIn transition flex  flex-col w-full   items-center justify-center '>
			<div className='flex flex-col  items-center justify-center text-center'>
				<p className='text-8xl '>404</p>
				<p className='mt-2'>La página no ha sido encontrada</p>
				<div onClick={() => history.goBack()} className='select-none cursor-pointer bg-green  mt-4 px-4 py-2 rounded text-gray-100' >Volver</div>
			</div>
		</div>
	)
}