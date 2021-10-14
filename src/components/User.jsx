import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
//HELPERS
import { arrangeDate } from '../helpers/arrangeDate';
import { capitalize } from '../helpers/capitalize';
import { formatDni } from '../helpers/formatDni';
import { formatCel } from '../helpers/formatCel';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';

export const User = ({ users, user }) => {
	let history = useHistory()
	return (
		<div className='  w-80 lg:w-full   px-6 lg:p-0 lg:py-4 text-center  flex items-center  justify-center '>
			<div className='w-1/6 lg:w-1/8 select-none	'>
				<Avatar className='text-shadow rounded-full card-shadow font-bold ' name={user.nom_usu} size="50" />
			</div>
			<div className=' ml-2 lg:ml-0 w-4/6 lg:w-1/8 text-left flex flex-col items-center '>
				<p className='font-bold  text-center '>
					{user.id_usu}
				</p>
				<span className='lg:invisible lg:h-0'>
					ID: <span className='font-bold'>{user.id_usu}</span>
				</span>
				<span className='lg:invisible lg:h-0'>
					Nombre: {user.nom_usu}
				</span>
			</div>
			<div className='lg:w-1/8   w-0 invisible lg:visible'>
				{user.nom_usu}
			</div>.
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{user.nom_usu}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{user.nom_usu}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{user.nom_usu}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{	user.nom_usu}
			</div>
			<div className='text-center lg:w-1/8 w-1/6  flex  justify-center'>
			<div 
					className='flex text-xs cursor-pointer items-center text-blue hover-text-green transition	select-none'
					onClick={() => {
						users.map((u, index) => {
							if (u.id_usu == user.id_usu){
								history.push(`/usuario/${user.id_usu}`)
							}
						})
					}}
				>
					<i className="pr-1 fas fa-info-circle text-base   "></i> VER
				</div>
			</div>

		</div>
	)
}