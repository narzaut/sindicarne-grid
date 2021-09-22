import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import Avatar from 'react-avatar';
export const Postulante = ({ postulante, index }) => {
	const { modalPostulanteState } = useContext(GlobalContext)
	const [modalPostulante, setModalPostulante] = modalPostulanteState;

	return (
		<div className=' w-80 lg:w-96 p-6 text-center  flex items-center  justify-center '>
			<div className='w-1/6 select-none	'>
				<Avatar className='text-shadow rounded-full card-shadow font-bold' name={postulante.nombrePostulante} size="50" />
			</div>
			<div className='ml-2 w-4/6  text-left flex flex-col items-center'>
				<p className='font-bold text-center'>
					{postulante.nombrePostulante}
				</p>
				<p>
					DNI: <span className='font-bold'>{postulante.dniPostulante}</span>

				</p>
				<p>
					Estado: {postulante.activoPostulante == 1 ? <span className='text-green-600  font-bold'>Activo</span> : 'Inactivo'}
				</p>
			</div>
			<div className='text-center w-1/6 '>
				<p className='flex text-xs cursor-pointer items-center' onClick={() => setModalPostulante({ ...modalPostulante, status: true, currentId: index })}><i class="pr-1 fas fa-info-circle text-base text-blue  "></i> VER</p>
			</div>

		</div>
	)
}