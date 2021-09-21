import React from 'react';
import Avatar from 'react-avatar';
export const Postulante = ({ postulante }) => {
	console.log(postulante)
	return (
		<div className='p-4  w-full flex items-center gap-6 '>
			<div className='w-1/6 '>
				<Avatar className='text-shadow  card-shadow font-bold'round={true} name={postulante.nombrePostulante} size="50" />
			</div>
			<div className='w-4/6 text-center '>
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
			<div className='w-1/6 '>
				<i class="fas fa-info-circle text-2xl text-blue text-shadow-sm "></i>
			</div>

		</div>
	)
}