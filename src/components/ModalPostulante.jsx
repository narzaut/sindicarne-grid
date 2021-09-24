import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { InfoItem } from './InfoItem';
import { arrangeDate } from '../helpers/arrangeDate'
export function ModalPostulante({ postulante }) {
	const { modalPostulanteState } = useContext(GlobalContext)
	const [modalPostulante, setModalPostulante] = modalPostulanteState;
	const [status, setStatus] = useState(postulante.activoPostulante == 1 ? true : false)
	const [editMode, setEditMode] = useState(false)
	const [saveButton, setSaveButton] = useState(false)
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
					<div className='flex justify-between'>
						<span className='font-bold'>
							<i className={"text-gray-700 fas fa-users"}></i>
							<span className='pl-2'>{'Estado'}</span>
						</span>
						<span onClick={ () => {setEditMode(!editMode); setStatus(postulante.activoPostulante == 1 ? true : false); setSaveButton(false) }} className='hover-text-green transition cursor-pointer outline-none text-xs text-blue'><i className="fas fa-pencil-alt text-xl text-blue  "/>Editar</span>
					</div>
					<div className='flex  pl-2 pt-4 pb-2 justify-between '>
						<div className='flex'>
							{status == true ?
								<p className='transition duration-500 text-green-400 font-bold'>Activo</p>
							:
								<p className='transition duration-500 text-red-400 font-bold'>Inactivo</p>
							}
						</div>
						{editMode == true ?
							<div 
								
								class="flex transition fadeIn  "
							>
								<label 
									for="toogleA"
									class="flex items-center cursor-pointer"
									
								>
									<div 
										class="relative"
										
									>
										<input onClick = {() => {
											setStatus(!status)
											setSaveButton(saveButton == true ? false : true)
										}} 
										id="toogleA" type="checkbox" class="sr-only " />
										<div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
										<div class={`dot absolute w-6 h-6 ${status == true ? ' bg-green-400 ' : ' bg-red-400'} rounded-full shadow -left-1 -top-1 transition`}></div>
									</div>
								</label>
							</div>
						:
							''	
						}
						
					</div>
				</div>
			</div>
			<div className='flex w-full justify-between px-4'>
				<div className='h-12 w-12  text-center transition fadeIn transition relative'>
					<i className='transition fas fa-angle-double-left absolute left-0 right-0 text-blue  hover-text-green font-bold text-shadow-sm  press-animation	 text-4xl ' onClick={() => setModalPostulante({ ...modalPostulante, status: !modalPostulante.status })}></i>
					<p className='text-xs text-gray-800 absolute bottom-0 left-0 right-0'>Volver</p>
				</div>
				{(saveButton == true && editMode == true) ? 
					<div className='h-12 w-12 pt-1 text-center transition fadeIn transition relative'>
						<i className='transition far fa-save absolute text-blue left-0 right-0 hover-text-green font-bold text-shadow-sm  press-animation	 text-3xl ' onClick={() => setModalPostulante({ ...modalPostulante, status: !modalPostulante.status })}></i>
						<p className='text-xs text-gray-800 absolute bottom-0 left-0 right-0'>Guardar</p>
					</div>
				: 
					''
				}
			</div>
		
		</div>
	);
}