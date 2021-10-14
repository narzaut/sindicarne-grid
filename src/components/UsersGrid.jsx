import React, { useContext, useState,  useEffect } from "react";
import { GlobalContext } from '../context/GlobalState'
import { useHistory } from 'react-router-dom'
import { SearchBar } from "./SearchBar";
import { User } from './User'
import { isTokenExpired } from "../helpers/isTokenExpired";
import { getUsers } from "../helpers/getUsers";

export const UsersGrid = () => {
	const { tokenState, usersState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	const [users, setUsers] = usersState
	const [gridItemsLimit, setGridItemsLimit] = useState(10)
	let history = useHistory()
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) history.replace('/login')
		const usuarios = await getUsers(token)
		setUsers(usuarios)
	}, [])	

	const [loading, setLoading] = useState(true)
	const [filteredUsers, setFilteredUsers] = useState(undefined)
	useEffect(() => {
		setFilteredUsers(users)
	}, [users])
	return(

			<div className='flex flex-col h-full min-h-full fadeIn fadeOutflex w-full text-gray-800 items-center  '>
				
				<div className='py-4 flex flex-col items-center justify-center w-full'>
					<p className='  max-w-min font-bold  uppercase border-b-2 border-green text-lg'>Usuarios</p>
					<div className='w-3/4 lg:w-1/4 pt-4'>
						<SearchBar data={ users } setFilteredPostulantes={ setFilteredUsers }/>
					</div>
				</div>
				<div className='border-b-4 border-green shadow-lg lg:mb-6  rounded-full  pb-2 lg:pt-8 flex w-full text-center invisible h-0 lg:h-auto lg:visible '>
					<p className='w-1/8 '></p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>ID</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Nombre</p>
					
				</div>
				<div className='lg:w-full '>
					{filteredUsers ?
						filteredUsers.length > 0 ? 
							filteredUsers
								.slice(0, gridItemsLimit)						
								.map((user, index) => {									
									return <User users={users} user={user} /> 																										
								})			 
						: 
							<div className='pb-12 py-8'>
								<p className='text-center px-10 uppercase text-gray-800'>No se encontró</p>
							</div>
					:
						<p className='text-center px-10'>Hubo un error. <br /> Intente nuevamente más tarde.</p>
					}

					{filteredUsers && filteredUsers.length > gridItemsLimit + 10 ?
						<div onClick={() => setGridItemsLimit(gridItemsLimit+10)} className='py-4 font-bold  flex w-full items-center justify-center select-none cursor-pointer uppercase'>
							<p className='border-2 rounded border-green p-2 hover:border-transparent hover-bg-green hover:text-gray-200 transition'>Mostrar más </p>
						</div>
					:
						''
					}
				</div>
			</div>
	)
}
