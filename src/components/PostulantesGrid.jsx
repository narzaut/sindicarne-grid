import React, { useContext, useState,  useEffect } from "react";
import { GlobalContext } from '../context/GlobalState'
import { useHistory } from 'react-router-dom'
import { SearchBar } from "./SearchBar";
import { Postulante } from './Postulante'
import { isTokenExpired } from "../helpers/isTokenExpired";

export const PostulantesGrid = ({ postulantes }) => {
	const { tokenState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	let history = useHistory()
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) history.replace('/login')
	}, [])	

	const [loading, setLoading] = useState(true)
	const [filteredPostulantes, setFilteredPostulantes] = useState(undefined)
	useEffect(() => {
		setFilteredPostulantes(postulantes)
	}, [postulantes])
	return(

			<div className='lg:px-10 flex flex-col h-full min-h-full fadeIn fadeOutflex w-full text-gray-800 items-center  '>
				
				<div className='py-4 flex flex-col items-center justify-center w-full'>
					<p className='  max-w-min font-bold  uppercase border-b-2 border-green text-lg'>Postulantes</p>
					<div className='w-3/4 lg:w-1/4 pt-4'>
						<SearchBar data={ postulantes } setFilteredPostulantes={ setFilteredPostulantes }/>
					</div>
				</div>
				<div className='border-b-4 border-green shadow-lg lg:mb-6  rounded-full  pb-2 lg:pt-8 flex w-full text-center invisible h-0 lg:h-auto lg:visible '>
					<p className='w-1/8 '></p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Nombre</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>DNI</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Teléfono / Celular</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Fecha de nacimiento</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Empresa</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Estado</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'></p>
				</div>
				<div className='lg:w-full '>
					{filteredPostulantes ?
						filteredPostulantes.length > 0 ? 
							filteredPostulantes								
								.map(postulante => postulante && <Postulante postulantes={postulantes} postulante={postulante} />)
						: 
							<div className='pb-12 py-8'>
								<p className='text-center px-10 uppercase text-gray-800'>No se encontró</p>
							</div>
					:
						<p className='text-center px-10'>Hubo un error. <br /> Intente nuevamente más tarde.</p>
					}
				</div>
			</div>
	)
}
