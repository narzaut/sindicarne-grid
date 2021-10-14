import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState'
//HELPERS
import { getPostulante } from '../helpers/getPostulante';
import { putStatus } from '../helpers/putStatus';
import { getPostulantes } from '../helpers/getPostulantes';
import { capitalize } from '../helpers/capitalize';
import { arrangeDate } from '../helpers/arrangeDate';
import { formatDni } from '../helpers/formatDni';
import { formatCel } from '../helpers/formatCel';
import { isTokenExpired } from '../helpers/isTokenExpired';
//Custom component
import { InfoItem } from './InfoItem';

export function PostulanteInfo() {
	const { id } = useParams()
	const { tokenState, postulantesState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	const [postulantes, setPostulantes] = postulantesState
	const [postulante, setPostulante] = useState(null)
	const [currentStatus, setCurrentStatus] = useState(null)
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) history.replace('/login');
		const postulante = await getPostulante(token, id)
		setPostulante(postulante)
		setCurrentStatus(postulante && postulante.activoPostulante == 1 ? true : postulante && postulante.activoPostulante == 0 ? false : null)
	}, [])


	const [editMode, setEditMode] = useState(false)
	const [saveButton, setSaveButton] = useState(false)
	const [error, setError] = useState()
	let history = useHistory();

	const handleSave = async () => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (!token || await isTokenExpired(token) == true) history.replace('/login')
		
		const putResponse = await putStatus(token, postulante.idPostulante, currentStatus)
		if (putResponse && putResponse.status == 200){
			setEditMode(false)
			setError(false)
			setPostulantes(await getPostulantes(token))
		} else {
			setError(true)
		}
	}
	return (
		postulante && postulante.idPostulante ?
		<div className='px-10 py-6 fadeIn h-full flex flex-col items-center text-left '>
			<div className=''>
				<div className='pb-8 flex items-center justify-center'>
					<p className='text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min'>POSTULANTE</p>
				</div>
				<InfoItem icon={'fas fa-user'} description='Nombre' value={capitalize(postulante.nombrePostulante)} />
				<InfoItem icon={'fas fa-id-card'} description='DNI' value={formatDni(postulante.dniPostulante)} />
				<InfoItem icon={'fas fa-calendar-alt'} description='Fecha de nacimiento' value={arrangeDate(postulante.fnacimientoPostulante)} />
				<InfoItem icon={'fas fa-envelope'} description='Email' value={postulante.emailPostulante.toLowerCase()} />
				<InfoItem icon={'fas fa-phone-alt'} description='Teléfono / Celular' value={formatCel(postulante.telPostulante)} />
				<InfoItem icon={'fas fa-building'} description='Empresa' value={capitalize(postulante.empresaPostulante)} />
				<InfoItem icon={'fas fa-users'} description='Grupo familiar' value={postulante.estadocivil == 0 ? 'No' : 'Si'} />
				<div className='flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4'>
					<div className='flex justify-between'>
						<span className='font-bold'>
							<i className={"text-gray-700 fas fa-users"}></i>
							<span className='pl-2 '>{'Estado'}</span>
						</span>
						<span onClick={ () => {setEditMode(!editMode); setSaveButton(false); setError(null); setCurrentStatus(postulante.activoPostulante) }} className={`transition cursor-pointer outline-none text-xs hover-press-animation shadow-2xl select-none ${editMode == true ? 'text-green ' : 'text-blue'}`}><i className={`fas fa-pencil-alt text-xl  `}/>Editar</span>
					</div>
					<div className='flex  pl-2 pt-4 pb-2 justify-between '>
						<div className='flex'>
							{currentStatus == true ?
								<p className='transition duration-500 text-shadow-sm text-red-300 font-bold'>No archivado</p>
							: currentStatus == false ?
								<p className='transition duration-500 text-shadow-sm text-green-300 font-bold'>Archivado</p>
							:
								<p className='transition duration-500 text-shadow-sm text-yellow-200 font-bold'>Cargando...</p>
							}
						</div>
						{editMode == true ?
							<div 								
								className="flex transition fadeIn  "
							>
								<label 
									htmlFor="toogleA"
									className="flex items-center cursor-pointer"									
								>
									<div 
										className="relative"
									>
										<input onClick = {() => {
											setCurrentStatus(!currentStatus)
											setSaveButton(saveButton == true ? false : true)
										}} 
										id="toogleA" type="checkbox" className="sr-only " />
										<div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
										<div className={`dot absolute w-6 h-6 ${currentStatus == true ? ' bg-red-300 ' : ' bg-green-300'} rounded-full shadow -left-1 -top-1 transition`}></div>
									</div>
								</label>
							</div>
						:
							''	
						}			
					</div>
					{error == true ? <span className='flex items-center justify-center text-red-400 font-semibold text-xs text-shadow-sm uppercase py-1'><i className="fas fa-times"></i><p className='pl-2'>Intente más tarde</p></span> : error == false ? <p className='flex items-center justify-center text-green-400 font-semibold text-shadow-sm text-sm'><i className="fas fa-check"></i><p className='pl-2'>Se actualizó el estado</p></p> : ''}
				</div>
				
			</div>
			<div className='flex w-full justify-between px-4'>
				<Link to='/postulante' className='cursor-pointer h-12 w-12  text-center transition fadeIn transition relative'>
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
			postulante && postulante.status ?
				<p className='py-10 text-center '>No se encontró lo que buscaba.</p>
			:
				<div>
					<p>ERROR!</p>
					<Link to='/postulante'>Volver</Link>
				</div>
	);
}