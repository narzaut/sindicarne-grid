import React, {useState} from "react";
import { useHistory } from "react-router";
import { isTokenExpired } from "../helpers/isTokenExpired";
export function AccountItem({ type, editable, description, value, icon }) {
  const [newValue, setNewValue] = useState(value)
	const [editMode, setEditMode] = useState(false)
	const [saveButton, setSaveButton] = useState(false)
	const [error, setError] = useState()
	const [hidden, setHidden] = useState(true)
	const [showPassword, setShowPassword] = useState(false)
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
			<div className='w-64 flex flex-col pb-2  rounded-xl text-gray-700 border-b-2 border-green px-4'>
				<span className='font-bold'>
					<i className={"text-gray-700 " + icon}></i>
					<span className='pl-2'>{description}</span>
				</span>
				<div className='relative flex '>
					<div className='flex relative'>
						<input type={!showPassword && type == 'password' ? 'password' : 'text'} disabled={ editMode == false ?  true : false } onChange={(e) => {console.log('entro');!e.target.value.match(regex)  || e.target.value.length < 6 || e.target.value == value || e.target.value == '' ? setHidden(true) : setHidden(false); setNewValue(e.target.value)} } value={newValue} className=' pl-2 outline-none bg-transparent text-gray-800 ' />
						{type == 'password' && editMode && <div onClick={() => setShowPassword(!showPassword)} className={`fadeIn absolute cursor-pointer select-none right-10 text-xl ${!showPassword ? 'fas fa-eye ' : 'fas fa-eye-slash'} hover-text-green transition`}></div>}
					</div>
					<div className='flex flex-col gap-6'>
						<div
						
							onClick={() => {
								setEditMode(!editMode);
								
								(newValue != '') && setHidden(true)
								
								editMode == false ? 
									 setNewValue('') 
								: 
									setNewValue(value)}
							} 
							className='-ml-2 flex text-sm select-none cursor-pointer hover-text-green transition'
							
						>
							<i className={`fas fa-pencil-alt text-xl  `}/>
							<p className='pl-1'>{editMode ? 'Cancelar' : 'Editar'}</p>
						</div>
						
					</div>
					
				</div>
				
			</div>
			<div className='mb-1  pl-2 text-sm	text-gray-800'>
				{editMode && hidden  ?
					type == 'user' ?
						<div className='pt-2 font-bold'>
							<p>El usuario debe contener: </p>
							<p className='pl-2'>- Al menos 6 dígitos </p>
							<p className='pl-2'>- Al menos una letra minúscula </p>
							<p className='pl-2'>- Solo letras y números </p>
						</div>
					: type == 'password' ?
						<div className='pt-2 font-bold'>
							<p>La contraseña debe contener: </p>
							<p className='pl-2'>- Al menos 6 dígitos </p>
							<p className='pl-2'>- Al menos una letra minúscula </p>
							<p className='pl-2'>- Al menos un número decimal </p>
						</div>
					: type == 'email' ?
						<div className='pt-2 font-bold'>
							<p className='pl-2'>- Debe ser un email válido  </p>
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