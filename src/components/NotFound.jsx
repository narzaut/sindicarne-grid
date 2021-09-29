import React from "react";
export const NotFound = () => {
	return (
		<div className='fadeIn transition flex  flex-col w-full   items-center justify-center h-full'>
			<div className='text-center'>
				<p className='text-8xl pb-10'>404</p>
				<p className='pb-10'>La página no ha sido encontrada</p>
				<a className='bg-green px-4 py-2 rounded text-gray-100' href='https://sindicarne.com.ar'>Volver</a>
			</div>
		</div>
	)
}