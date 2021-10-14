import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
//HELPERS
import { arrangeDate } from '../helpers/arrangeDate';
import { capitalize } from '../helpers/capitalize';
import { formatDni } from '../helpers/formatDni';
import { formatCel } from '../helpers/formatCel';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';

export const Postulante = ({ postulantes, postulante }) => {
	let history = useHistory()
	return (
		<div className='  w-80 lg:w-full   px-6 lg:p-0 lg:py-4 text-center  flex items-center  justify-center '>
			<div className='w-1/6 lg:w-1/8 select-none	'>
				<Avatar className='text-shadow rounded-full card-shadow font-bold ' name={postulante.nombrePostulante} size="50" />
			</div>
			<div className=' ml-2 lg:ml-0 w-4/6 lg:w-1/8 text-left flex flex-col items-center '>
				<p className='font-bold  text-center '>
					{capitalize(postulante.nombrePostulante)}
				</p>
				<span className='lg:invisible lg:h-0'>
					DNI: <span className='font-bold'>{formatDni(postulante.dniPostulante)}</span>

				</span>
				<span className='lg:invisible lg:h-0'>
					Estado: {postulante.activoPostulante == 1 ? <span className='text-red-300 text-shadow-sm font-bold'>Sin archivar</span> : <span className='text-green-300 text-shadow-sm font-bold'>Archivado</span>}
				</span>
			</div>
			<div className='lg:w-1/8   w-0 invisible lg:visible'>
				{formatDni(postulante.dniPostulante)}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{formatCel(postulante.telPostulante)}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{arrangeDate(postulante.fnacimientoPostulante)}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{capitalize(postulante.empresaPostulante)}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{postulante.activoPostulante == 1 ? <p className='text-red-300 font-bold text-shadow-sm'>No archivado</p> : <p className='text-green-300 font-bold text-shadow-sm'>Archivado</p>}
			</div>
			<div className='text-center lg:w-1/8 w-1/6  flex  justify-center'>
			<div 
					className='flex text-xs cursor-pointer items-center text-blue hover-text-green transition	select-none'
					onClick={() => {
						postulantes.map((postulantee, index) => {
							if (postulantee.idPostulante == postulante.idPostulante){
								history.push(`/postulantes/${postulante.idPostulante}`)
							}
						})
					}}
				>
					<i className="pr-1 fas fa-info-circle text-base   "></i> VER
				</div>
			</div>

		</div>
	)
}