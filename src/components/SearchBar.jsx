import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const SearchBar = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const { filteredPostulantesState } = useContext(GlobalContext)
	const [filteredPostulantes, setFilteredPostulantes] = filteredPostulantesState 
	
	useEffect(() => {
		setFilteredPostulantes(typeof(data) == 'object' && data.filter((postulante) => {
			if (searchTerm == '') {
				return postulante
			} else if (postulante.nombrePostulante.toLowerCase().includes(searchTerm.toLowerCase())) {
				return postulante
			} else if (postulante.dniPostulante.toLowerCase().includes(searchTerm.toLowerCase())) {
				return postulante
			} else {
				return false
			}
		}))
	}, [searchTerm])
	

	return(
		<div className='relative'>
			<input
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				type='text'
				onBlur={(e) => e.target.placeholder = 'Nombre / DNI'}
				onSelect={(e) => e.target.placeholder = ''}
				className='px-6 rounded border-2 py-2 border-gray-400 focus-border-green outline-none text-center w-full' placeholder='Nombre / DNI'
			/>
			{searchTerm != '' && <div onClick = {() => setSearchTerm('')} className='hover:text-red-400  transition fadeIn cursor-pointer select-none absolute top-1/2  transform -translate-y-1/2 right-3 font-bold text-xl text-gray-600'>X</div>}
		</div>
	)
	
}