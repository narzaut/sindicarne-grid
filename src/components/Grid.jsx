import React, { useState, useEffect, useContext } from "react";
//HELPERS
import { getPostulantes } from '../helpers/getPostulantes'
//CUSTOM COMPONENTS
import { Postulante } from './Postulante'
import { ModalPostulante } from './ModalPostulante'
import { GlobalContext } from '../context/GlobalState'

export const Grid = () => {
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')
	const { modalPostulanteState, postulantesState } = useContext(GlobalContext)
  const [modalPostulante, setModalPostulante] = modalPostulanteState;
	const [postulantes, setPostulantes] = postulantesState

	//CONSUMO API
	useEffect(async () => {
		setPostulantes(await getPostulantes())
		if (postulantes) {
			setLoading(false)
		}
	}, [])

	return (
		<div className='flex flex-col w-full  items-center justify-center pb-10 mt-6'>
			<div className='fadeIn h-full rounded-md glass card-shadow w-5/6 lg:w-1/2   pb-10 py-6 my-2 lg:my-6 flex flex-col items-center justify-center '>
				{loading == true ?
					<div className='h-80 flex flex-col items-center justify-center gap-2'>
						<p className='uppercase text-semibold '>Cargando</p><div className=" lds-dual-ring-blue	text-shadow " />
					</div>
					:
					modalPostulante.status == false ?
						<div className='fadeIn fadeOutflex w-full text-gray-800 flex flex-col items-center justify-center '>
							<div className=' pb-4 flex flex-col items-center justify-center'>
								<p className=' max-w-min font-bold  uppercase border-b-2 border-green text-lg'>Postulantes</p>
								<div className='w-3/4 pt-4'>
									<input
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										type='text'
										onBlur={(e) => e.target.placeholder = 'Nombre / DNI'}
										onSelect={(e) => e.target.placeholder = ''}
										className='rounded border-2 py-2 border-gray-400 focus-border-green outline-none text-center w-full' placeholder='Nombre / DNI'
									/>
								</div>
							</div>
							<div>
								{typeof postulantes == 'object' ?
									postulantes.length > 0 ? 
										postulantes
											.filter((postulante) => {
												if (searchTerm == '') {
													return postulante
												} else if (postulante.nombrePostulante.toLowerCase().includes(searchTerm.toLowerCase())) {
													return postulante
												} else if (postulante.dniPostulante.toLowerCase().includes(searchTerm.toLowerCase())) {
													return postulante
												} else {
													return false
												}
											})
											.map(postulante => postulante ? <Postulante postulante={postulante} /> : <p>No se encuentra</p>)
									: 
									<p className='text-center px-10'>No hay postulantes cargados en la base de datos.</p>
								:
									<p className='text-center px-10'>Hubo un error. <br /> Intente nuevamente más tarde.</p>
								}
							</div>
						</div>
						:
						<ModalPostulante postulante={postulantes[0]}/>
				}
			</div>
		</div>
	)
}