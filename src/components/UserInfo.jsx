import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState'
//HELPERS
import { getPersona } from '../helpers/getPersona';
import { putStatus } from '../helpers/putStatus';
import { getCuentas } from '../helpers/getCuentas';
import { capitalize } from '../helpers/capitalize';
import { arrangeDate } from '../helpers/arrangeDate';
import { formatDni } from '../helpers/formatDni';
import { formatCel } from '../helpers/formatCel';
import { isTokenExpired } from '../helpers/isTokenExpired';
import { censorPassword } from '../helpers/censorPassword';
//Custom component
import { InfoItem } from './InfoItem';
import { AccountItem } from './AccountItem';

import { getCuenta } from '../helpers/getCuenta';

export function UserInfo() {
	const { id } = useParams()
	const { tokenState, usersState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	const [users, setUsers] = usersState
	const [user, setUser] = useState(null)
	const [cuenta, setCuenta] = useState(null)
	const [editing, setEditing] = useState(false)
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) history.replace('/login');
		const usuario = await getPersona(token, id)
		setUser(usuario)
		const account = (usuario && usuario.idUsuario) ? await getCuenta(token, usuario.idUsuario) : null
		console.log(account)
		setCuenta(account)
	}, [])
	


	let history = useHistory();

	
	return (
		user && user.idPersona ?
		<div className='px-10  w-6/7 py-6 fadeIn h-full flex   justify-between  text-left '>
			<div className='w-1/2 flex flex-col items-center justify-center'>
				<div className='pb-8 flex items-center justify-center w-full '>
					<p className='text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min '>USUARIO</p>
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
				<div className='w-1/2 flex flex-col items-center '>
					<div className='pb-8 flex items-center justify-center w-full '>
						<p className='text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min '>CUENTA</p>
					</div>
					{cuenta && cuenta.id_usu ? 
						<div>
							<AccountItem type='user' icon={'fas fa-user'} description='Usuario' value={cuenta.nom_usu} />
							<AccountItem type='password' icon={'fas fa-key'} description='Contraseña' value={'**********'} />
							<AccountItem type='email' icon={'fas fa-envelope'} description='Email' value={user.mailPersona ? user.mailPersona.toLowerCase() : <p className=' text-red-400 text-shadow-sm'>No está cargado</p>} />
						</div>
					:
						<p className='text-red-400 text-shadow-sm'>No tiene cuenta</p>
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

	/*<div className='flex w-full justify-between px-4'>
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
			</div>*/