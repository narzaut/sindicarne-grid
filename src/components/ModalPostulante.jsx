import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { InfoItem } from './InfoItem';
import { arrangeDate } from '../helpers/arrangeDate'
export function ModalPostulante({ postulante }) {
	const { modalPostulanteState } = useContext(GlobalContext)
	const [modalPostulante, setModalPostulante] = modalPostulanteState;
	arrangeDate(postulante.fnacimientoPostulante)
	return (
		<div className='fadeIn h-full flex flex-col items-center pt-2 text-left '>
			<div className=''>
				<div className='pb-8 flex items-center justify-center'>
					<p className='text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min'>INFO</p>
				</div>
				<InfoItem icon={'fas fa-user'} description='Nombre' value={ postulante.nombrePostulante }/>
				<InfoItem icon={'fas fa-id-card'} description='DNI' value = { postulante.dniPostulante} />
				<InfoItem icon={'fas fa-calendar-alt'} description='Fecha de nacimiento' value = { arrangeDate(postulante.fnacimientoPostulante)} />
				<InfoItem icon={'fas fa-envelope'} description='Email' value = { postulante.emailPostulante }/>
				<InfoItem icon={'fas fa-phone-alt'} description='Teléfono / Celular' value = { postulante.telPostulante }/>
				<InfoItem icon={'fas fa-building'} description='Empresa' value = { postulante.empresaPostulante }/>
				<InfoItem icon={'fas fa-users'} description='Grupo familiar' value = { postulante.estadocivil == 0 ? 'No' : 'Si' }/>	
			</div>
			<i className='fas fa-sign-out-alt text-green self-end pt-10 font-bold text-shadow-sm hover:text-blue-400 hover-press-animation	 text-3xl ' onClick={() => setModalPostulante({ ...modalPostulante, status: !modalPostulante.status })}></i>
		</div>
	);
}
/*
	<p>DNI: {postulante.dniPostulante}</p>
				<p>Fecha de nacimiento: {postulante.fnacimientoPostulante}</p>
				<p>Correo electrónico: {postulante.emailPostulante}</p>
				<p>Teléfono / Celular: {postulante.telPostulante}</p>
				<p>Empresa: {postulante.empresaPostulante}</p>
				<p>Grupo familiar: {postulante.estadocivil}</p>
				*/