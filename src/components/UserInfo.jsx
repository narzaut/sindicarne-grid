import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState'
//HELPERS
import { getPersona } from '../helpers/getPersona';
import { putStatus } from '../helpers/putStatus';
import { getUsers } from '../helpers/getUsers';
import { capitalize } from '../helpers/capitalize';
import { arrangeDate } from '../helpers/arrangeDate';
import { formatDni } from '../helpers/formatDni';
import { formatCel } from '../helpers/formatCel';
import { isTokenExpired } from '../helpers/isTokenExpired';
//Custom component
import { InfoItem } from './InfoItem';

export function UserInfo() {
	const { id } = useParams()
	const { tokenState, usersState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	const [users, setUsers] = usersState
	const [user, setUser] = useState(null)
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) history.replace('/login');
		const usuario = await getPersona(token, id)
		setUser(usuario)
	}, [])


	const [editMode, setEditMode] = useState(false)
	const [saveButton, setSaveButton] = useState(false)
	const [error, setError] = useState()
	let history = useHistory();

	const handleSave = async () => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (!token || await isTokenExpired(token) == true) history.replace('/login')
		
	/*	const putResponse = await putStatus(token, postulante.idPostulante, currentStatus)
		if (putResponse && putResponse.status == 200){
			setEditMode(false)
			setError(false)
			setPostulantes(await getPostulantes(token))
		} else {
			setError(true)
		}*/
	}
	return (
		user && user.idPersona ?
		<div className='px-10 py-6 fadeIn h-full flex flex-col items-center text-left '>
			<div className=''>
				<div className='pb-8 flex items-center justify-center'>
					<p className='text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min'>INFO</p>
				</div>
				<InfoItem icon={'fas fa-user'} description='Nombre' value={capitalize(user.nombrePersona)} />
				<InfoItem icon={'fas fa-id-card'} description='DNI' value={formatDni(user.documentoPersona)} />
				<InfoItem icon={'fas fa-calendar-alt'} description='Fecha de nacimiento' value={arrangeDate(user.fechanacPersona)} />
				<InfoItem icon={'fas fa-envelope'} description='Email' value={user.mailPersona ? user.mailPersona.toLowerCase() : <p className=' text-red-400 text-shadow-sm'>No está cargado</p>} />
				<InfoItem icon={'fas fa-phone-alt'} description='Teléfono / Celular' value={user.telPersona != 0 ? formatCel(user.telPersona) : user.celPersona != 0 ? formatCel(user.celPersona) : user.tellabPersona != 0 ? formatCel(user.tellabPersona) : <p className=' text-red-400 text-shadow-sm'>No está cargado</p>} />
				<InfoItem icon={'fas fa-map-pin'} description='Dirección' value={!user.direccionPersona.includes('/') ? capitalize(user.direccionPersona) : <p className=' text-red-400 text-shadow-sm'>No está cargada</p>} />
				<InfoItem icon={'fas fa-venus-mars'} description='Sexo' value={user.sexoPersona.toLowerCase() == 'm' ? 'Masculino' : 'Femenino'} />
				<InfoItem icon={'fas fa-id-card'} description='Cuil' value={user.cuilPersona && user.cuilPersona != 0 ? user.cuilPersona : <p className=' text-red-400 text-shadow-sm'>No está cargado</p>} />

				
				
			</div>
			<div className='flex w-full justify-between px-4'>
				<Link to='/usuario' className='cursor-pointer h-12 w-12  text-center transition fadeIn transition relative'>
					<i className='transition fas fa-angle-double-left absolute left-0 right-0 text-blue  hover-text-green font-bold text-shadow-sm  press-animation	 text-4xl ' ></i>
					<p className='text-xs text-gray-800 absolute bottom-0 left-0 right-0'>Volver</p>
				</Link>
				{(saveButton == true && editMode == true) ? 
					<div onClick = {handleSave} className='h-12 w-12 pt-1 text-center transition fadeIn transition relative'>
						<i className='transition far fa-save absolute text-blue left-0 right-0 hover-text-green font-bold text-shadow-sm  press-animation	 text-3xl ' ></i>
						<p  className='text-xs text-gray-800 absolute bottom-0 left-0 right-0'>Guardar</p>
					</div>
				: 
					''
				}
			</div>
		</div>
		:
			user && user.status ?
				<p className='py-10 text-center '>No se encontró lo que buscaba.</p>
			:
				<div>
					<p>ERROR!</p>
					<Link to='/usuario'>Volver</Link>
				</div>
	);
}