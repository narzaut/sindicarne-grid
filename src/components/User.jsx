import React, { useContext, useImperativeHandle } from 'react';
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
				<Avatar className='text-shadow rounded-full card-shadow font-bold ' name={user.nombrePersona} size="50" />
			</div>
			<div className=' ml-2 lg:ml-0 w-4/6 lg:w-1/8 text-left flex flex-col items-center '>
				<p className='font-bold  text-center '>
					{user.nombrePersona}
				</p>
				<span className='lg:invisible lg:h-0'>
					DNI: <span className='font-bold'>{user.documentoPersona}</span>
				</span>
				<span className='lg:invisible lg:h-0'>
					{user.celPersona != 0 ? 
						<p>Cel: {user.celPersona}</p> 
					: user.telPersona != 0 ?
						<p>Tel: {user.telPersona}</p>
					: user.tellabPersona != 0 ?
						<p>Tel Lab: {user.tellabPersona}</p>
					: user.mailPersona ?
						<p>Mail: {user.mailPersona}</p>
					: !user.direccionPersona.includes('/') ?
						<p>Direccion: {user.direccionPersona}</p>
					:
						<p>Fecha de nacimiento: {user.fechanacPersona}</p>
					}
				</span>
			</div>
			<div className='lg:w-1/8   w-0 invisible lg:visible'>
				{user.documentoPersona}
			</div>
			<div className='h-full flex items-center justify-center lg:w-1/8  w-0 invisible lg:visible '>
				{user.mailPersona ? <p className='overflow-x-scroll'>{user.mailPersona}</p> : <p className=' text-red-400 text-shadow-sm'>NO</p>}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{!user.direccionPersona.includes('/') ? <p className='overflow-x-scroll'>{user.direccionPersona}</p> : <p className=' text-red-400 text-shadow-sm'>NO</p>}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{user.celPersona != 0 ? 
					<p>{user.celPersona}</p> 
				: user.telPersona != 0 ?
					<p>{user.telPersona}</p> 
				: user.tellabPersona != 0 ?
					<p>{user.tellabPersona}</p> 
				:
					<p className=' text-red-400 text-shadow-sm'>NO</p>
				}
			</div>
			<div className='lg:w-1/8  w-0 invisible lg:visible'>
				{	arrangeDate(user.fechanacPersona)}
			</div>
			<div className='text-center lg:w-1/8 w-1/6  flex  justify-center'>
			<div 
					className='flex text-xs cursor-pointer items-center text-blue hover-text-green transition	select-none'
					onClick={() => {
						users.map((u, index) => {
							if (u.idPersona == user.idPersona){
								history.push(`/usuario/${user.idPersona}`)
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