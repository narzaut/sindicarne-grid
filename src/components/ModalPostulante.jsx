import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { InfoItem } from './InfoItem';
import { arrangeDate } from '../helpers/arrangeDate'
export function ModalPostulante({ postulante }) {
	const { modalPostulanteState } = useContext(GlobalContext)
	const [modalPostulante, setModalPostulante] = modalPostulanteState;
	return (
		<div className='fadeIn h-full flex flex-col items-center pt-2 text-left '>
			<div className=''>
				<div className='pb-8 flex items-center justify-center'>
					<p className='text-center  text-xl font-bold text-gray-800 border-b-2 border-green max-w-min'>INFO</p>
				</div>
				<InfoItem icon={'fas fa-user'} description='Nombre' value={postulante.nombrePostulante} />
				<InfoItem icon={'fas fa-id-card'} description='DNI' value={postulante.dniPostulante} />
				<InfoItem icon={'fas fa-calendar-alt'} description='Fecha de nacimiento' value={arrangeDate(postulante.fnacimientoPostulante)} />
				<InfoItem icon={'fas fa-envelope'} description='Email' value={postulante.emailPostulante} />
				<InfoItem icon={'fas fa-phone-alt'} description='Teléfono / Celular' value={postulante.telPostulante} />
				<InfoItem icon={'fas fa-building'} description='Empresa' value={postulante.empresaPostulante} />
				<InfoItem icon={'fas fa-users'} description='Grupo familiar' value={postulante.estadocivil == 0 ? 'No' : 'Si'} />
				<div className='flex flex-col pb-2 mb-4 rounded-xl text-gray-700 border-b-2 border-green px-4'>
					<span className='font-bold'>
						<i className={"text-gray-700 fas fa-users"}></i>
						<span className='pl-2'>{'Estado'}</span>
					</span>

					<div className='flex flex-col pl-2 justify-center'>
						<div className='flex justify-between'>
							{postulante.activoPostulante == 1 ?
								<p className='text-green-400 font-bold'>Activo</p>
							:
								<p className='text-red-400 font-bold'>Inactivo</p>
							}
							<span className='hover-text-green transition cursor-pointer outline-none text-xs text-blue'><i className="fas fa-pencil-alt text-xl text-blue  "/>Editar</span>
						</div>
					</div>
				</div>
			</div>
			<i className='transition fas fa-angle-double-left text-blue  self-start pl-4 hover-text-green pt-10 font-bold text-shadow-sm  press-animation	 text-4xl ' onClick={() => setModalPostulante({ ...modalPostulante, status: !modalPostulante.status })}></i>
		</div>
	);
}