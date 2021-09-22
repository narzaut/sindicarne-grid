import React from 'react';
import Avatar from 'react-avatar';
export const Postulante = ({ postulante }) => {
	console.log(postulante)
	return (
		<div className=' w-80 lg:w-96 p-6 text-center  flex items-center  justify-center '>
			<div className='w-1/6 select-none	'>
				<Avatar className='text-shadow rounded-full card-shadow font-bold' name={postulante.nombrePostulante} size="50" />
			</div>
			<div className='ml-6 w-4/6 text-left  '>
				<p className='font-bold '>
					{postulante.nombrePostulante}
				</p>
				<p>
					DNI: <span className='font-bold'>{postulante.dniPostulante}</span>
					
				</p>
				<p>
					Estado: {postulante.activoPostulante == 1 ? <span className='text-green-600  font-bold'>Activo</span> : 'Inactivo'}
				</p>
			</div>
			<div className='text-center w-24'>
				<p className='text-sm '><i class="fas fa-info-circle text-base text-blue text-shadow-sm "></i> Ver más</p>
			</div>

		</div>
	)
}