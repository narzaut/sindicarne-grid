import React, { useContext, useState,  useEffect } from "react";
import { GlobalContext } from '../context/GlobalState'
import { useHistory } from 'react-router-dom'
import { UserSearchBar } from "./UserSearchBar";
import { User } from './User'
import { isTokenExpired } from "../helpers/isTokenExpired";
import { getCuentas } from "../helpers/getCuentas";
import { getPersonas } from "../helpers/getPersonas";


export const UsersGrid = () => {
	const { tokenState, usersState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	const [users, setUsers] = usersState
	const [gridItemsLimit, setGridItemsLimit] = useState(10)
	const [loading, setLoading] = useState(true)
	let history = useHistory()
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) history.replace('/login')
		const usuarios = await getPersonas(token)
		setUsers(usuarios)
	}, [])	

	const [filteredUsers, setFilteredUsers] = useState(undefined)
	useEffect(() => {
		setFilteredUsers(users)
		users != null && setLoading(false)
	}, [users])
	return(

			<div className=' lg:px-10 flex flex-col h-full min-h-full fadeIn fadeOutflex w-full text-gray-800 items-center  '>
				<div className='py-4 flex flex-col items-center justify-center w-full'>
					<p className='  max-w-min font-bold  uppercase border-b-2 border-green text-lg'>Usuarios</p>
					<div className='w-3/4 lg:w-1/4 pt-4'>
						<UserSearchBar data={ users } setFilteredUsers={ setFilteredUsers }/>
					</div>
				</div>
				<div className='border-b-4 border-green shadow-lg lg:mb-6  rounded-full  pb-2 lg:pt-8 flex w-full text-center invisible h-0 lg:h-auto lg:visible '>
					<p className='w-1/8 '></p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Nombre</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>DNI</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Email</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Dirección</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Cel</p>
					<p className='w-1/8 font-bold uppercase text-gray-800 text-sm'>Fecha de nacimiento</p>
					<p className='w-1/8 '></p>
					
				</div>
				<div className='lg:w-full '>
					{loading && 
						<div className='flex items-center justify-center text-2xl w-full text-center p-10'>
							<p className=' w-10 h-10 rounded-full border-l-4 border-t-4 border-r-4 animate-spin border-green'></p>
							<p className='pl-4'>CARGANDO...</p>
						</div>
					}

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
						<p className={`${loading && 'hidden '} text-center p-10`}>Hubo un error. <br /> Intente nuevamente más tarde.</p>
					}

					{filteredUsers && filteredUsers.length > gridItemsLimit &&
						<div onClick={() => setGridItemsLimit(gridItemsLimit+10)} className='py-4 font-bold  flex w-full items-center justify-center select-none cursor-pointer uppercase'>
							<p className='border-2 rounded border-green p-2 hover:border-transparent hover-bg-green hover:text-gray-200 transition'>Mostrar más </p>
						</div>
					}
				</div>
			</div>
	)
}
