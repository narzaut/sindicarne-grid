import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const UserSearchBar = ({ data, setFilteredUsers, user, postulante}) => {
	const [searchTerm, setSearchTerm] = useState('')
	
	useEffect(() => {
		setFilteredUsers(data ? data.filter((user) => {
			if (searchTerm == '') {
				return user
			} else if (user.nombrePersona.toLowerCase().includes(searchTerm.toLowerCase())) {
				return user
			} else if (user.documentoPersona.toLowerCase().includes(searchTerm.toLowerCase())) {
				return user
			} else {
				return false
			}
		}): null)
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