import React, { useState, useEffect, useContext } from "react";
//HELPERS
import { getPostulantes } from '../helpers/getPostulantes'
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
									<SearchBar data={ postulantes }/>
								</div>
							</div>
							<div>
								{typeof postulantes == 'object' ?
									postulantes.length > 0 ? 
										filteredPostulantes								
											.map(postulante => postulante ? <Postulante postulante={postulante} /> : '')
									: 
										<p className='text-center px-10'>No hay postulantes cargados en la base de datos.</p>
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