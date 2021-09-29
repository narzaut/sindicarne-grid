import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//HELPERS
import { getPostulantes } from '../helpers/getPostulantes'
import { isTokenExpired } from '../helpers/isTokenExpired'
//CUSTOM COMPONENTS
import { Postulante } from './Postulante'
import { ModalPostulante } from './ModalPostulante'
import { GlobalContext } from '../context/GlobalState'
import { SearchBar } from "./SearchBar";

export const Grid = () => {
	const [loading, setLoading] = useState(true)
	const { modalPostulanteState, postulantesState, filteredPostulantesState } = useContext(GlobalContext)
  const [modalPostulante, setModalPostulante] = modalPostulanteState;
	const [postulantes, setPostulantes] = postulantesState
	const [filteredPostulantes, setFilteredPostulantes] = filteredPostulantesState 
	let history = useHistory();

	//CONSUMO API
	useEffect(async () => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (!token || await isTokenExpired() == true) history.replace('/auth')
		setPostulantes(await getPostulantes(token))
		if (postulantes) {
			setLoading(false)
		} 
		
	}, [])

	return (
		<div className='bg-gray-200 flex flex-col w-full flex-grow  items-center justify-center pb-10 mt-6'>
			<div className='fadeIn h-full rounded-md glass card-shadow w-5/6 lg:w-4/5	  pb-10 py-6 my-2 lg:my-6 flex flex-col items-center justify-center '>
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
									<SearchBar data={ postulantes }/>
								</div>
							</div>
							<div className='border-b-4 border-green shadow-lg mb-6 rounded-full  pb-2 lg:pt-8 flex w-full text-center invisible h-0 lg:h-auto lg:visible '>
								<p className='w-1/7 '></p>
								<p className='w-1/7 font-bold uppercase text-gray-800 text-sm'>Nombre</p>
								<p className='w-1/7 font-bold uppercase text-gray-800 text-sm'>DNI</p>
								<p className='w-1/7 font-bold uppercase text-gray-800 text-sm'>Teléfono / Celular</p>
								<p className='w-1/7 font-bold uppercase text-gray-800 text-sm'>Fecha de nacimiento</p>
								<p className='w-1/7 font-bold uppercase text-gray-800 text-sm'>Empresa</p>
								<p className='w-1/7 font-bold uppercase text-gray-800 text-sm'></p>
							</div>
							<div className='lg:w-full '>
								{typeof (postulantes == 'object' && typeof(filteredPostulantes) == 'object') ?
									filteredPostulantes.length > 0 ? 
										filteredPostulantes								
											.map(postulante => postulante && <Postulante postulante={postulante} />)
									: 
										<p className='text-center px-10 uppercase text-gray-800'>No se encontró</p>
								:
									<p className='text-center px-10'>Hubo un error. <br /> Intente nuevamente más tarde.</p>
								}
							</div>
						</div>
						:
						<ModalPostulante postulante={postulantes[modalPostulante.currentIndex]}/>
				}
			</div>
		</div>
	)
}