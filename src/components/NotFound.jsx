import React from "react";
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className='py-10 h-full fadeIn transition flex  flex-col w-full   items-center justify-center '>
			<div className='flex flex-col  items-center justify-center text-center'>
				<p className='text-8xl '>404</p>
				<p className='mt-2'>La página no ha sido encontrada</p>
				<Link to='/postulantes' className='bg-green  mt-4 px-4 py-2 rounded text-gray-100' >Volver</Link>
			</div>
		</div>
	)
}