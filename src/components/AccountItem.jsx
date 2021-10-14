import React, {useState} from "react";
import { useHistory } from "react-router";
import { isTokenExpired } from "../helpers/isTokenExpired";
import { useWindowSize } from '../hooks/useWindowSize';

export function AccountItem({ type, editable, description, value, icon }) {
  const [newValue, setNewValue] = useState(value)
	const [editMode, setEditMode] = useState(false)
	const [saveButton, setSaveButton] = useState(false)
	const [error, setError] = useState()
	const [hidden, setHidden] = useState(true)
	const [showPassword, setShowPassword] = useState(false)
	const window = useWindowSize()
	let history = useHistory
	
	//validation
	const regex = 
		type == 'user' ?
			/^(?=.*[a-z])[a-zA-Z0-9]{6,}$/
		: type == 'password' ?
			/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/
		: type == 'email' ?
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/
		:
			''
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
		<div className='mb-4'>
			<div className='fadeIn w-64 card-shadow glass p-2 flex flex-col pb-2  rounded text-gray-700 border-b-2 border-green '>
				<span className='font-bold border-b-2 border-gray-500 rounded flex justify-between '>
					<div>
						<i className={"text-gray-700 " + icon}></i>
						<span className='pl-2'>{description}</span>
					</div>
					
					<div className='flex flex-col gap-6 '>
						<div
						
							onClick={() => {
								setEditMode(!editMode);
								
								(newValue != '') && setHidden(true)
								
								editMode == false ? 
									 setNewValue('') 
								: 
									setNewValue(value)}
							} 
							className=' lg:-ml-2 flex text-xs lg:text-sm select-none cursor-pointer hover-text-green transition'
							
						>
							<i className={`fas fa-pencil-alt text-lg transition ${editMode && 'text-green'}`}/>
							<p className='pl-1  overflow-hidden'>{window.width > 540 && (editMode   ? 'Cancelar' : 'Editar')}</p>
						</div>
						
					</div>
				</span>
				<div className='relative flex pt-2'>
					<div className='flex relative '>
						<input type={!showPassword && type == 'password' ? 'password' : 'text'} disabled={ editMode == false ?  true : false } onChange={(e) => {console.log('entro');!e.target.value.match(regex)  || e.target.value.length < 6 || e.target.value == value || e.target.value == '' ? setHidden(true) : setHidden(false); setNewValue(e.target.value)} } value={newValue} className=' pl-2 outline-none bg-transparent text-gray-800 ' />
						{type == 'password' && editMode && <div onClick={() => setShowPassword(!showPassword)} className={`fadeIn absolute cursor-pointer select-none right-10 text-xl ${!showPassword ? 'fas fa-eye ' : 'fas fa-eye-slash'} hover-text-green transition`}></div>}
					</div>
					
					
				</div>
				
			</div>
			<div className='mb-1  pl-2 text-sm	text-gray-700 '>
				{editMode && hidden  ?
					type == 'user' ?
						<div className='pt-2 font-bold fadeIn'>
							<p>El <span className='text-green'>usuario</span> debe contener: </p>
							<p className='pl-2'><span className='text-green'>*</span> Al menos 6 dígitos </p>
							<p className='pl-2'><span className='text-green'>*</span> Al menos una letra minúscula </p>
							<p className='pl-2'><span className='text-green'>*</span> Solo letras y números </p>
						</div>
					: type == 'password' ?
						<div className='pt-2 font-bold fadeIn'>
							<p>La <span className='text-green'>contraseña</span> debe contener: </p>
							<p className='pl-2'><span className='text-green'>*</span> Al menos 6 dígitos </p>
							<p className='pl-2'><span className='text-green'>*</span> Al menos una letra minúscula </p>
							<p className='pl-2'><span className='text-green'>*</span> Al menos un número decimal </p>
						</div>
					: type == 'email' ?
						<div className='pt-2 font-bold fadeIn'>
							<p className='pl-2'><span className='text-green'>*</span> Debe ser un <span className='text-green'>email</span> válido  </p>
						</div>
					:
						''
				:
					''
				}
			</div>
			<div 
				onClick={() => console.log(newValue)}
				className={`${hidden && 'hidden'} text-gray-600 items-center justify-center transition hover-text-green press-animation flex  select-none cursor-pointer`}
			>
				<i className='text-3xl  far fa-save    font-bold text-shadow-sm  	 ' ></i>
				<p className='pl-1 font-bold uppercase '>Guardar</p>
			</div>
		</div>
  );
}