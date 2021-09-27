import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import Avatar from 'react-avatar';
export const Postulante = ({ postulante }) => {
	const { modalPostulanteState, postulantesState } = useContext(GlobalContext)
	const [modalPostulante, setModalPostulante] = modalPostulanteState;
	const [postulantes, setPostulantes] = postulantesState

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
					Estado: {postulante.activoPostulante == 1 ? <span className='text-green-500  font-bold'>Activo</span> : <span className='text-red-500  font-bold'>Inactivo</span>}
				</p>
			</div>
			<div className='text-center w-1/6 '>
				<p 
					className='flex text-xs cursor-pointer items-center'
					onClick={() => {
						postulantes.map((postulantee, index) => {
							if (postulantee.idPostulante == postulante.idPostulante){
								setModalPostulante({ ...modalPostulante, status: true, currentIndex: index })
								
							}
						})
					}}
				>
					<i className="pr-1 fas fa-info-circle text-base text-blue  "></i> VER
				</p>
			</div>

		</div>
	)
}