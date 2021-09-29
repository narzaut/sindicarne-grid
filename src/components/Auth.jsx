import React, { useEffect, useState } from 'react'
import { authenticate } from '../helpers/authenticate'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useHistory } from "react-router-dom";
import { isTokenExpired } from '../helpers/isTokenExpired';
export const Auth = () => {
	const [token, setToken] = useLocalStorage('token', null)
	const [user, setUser] = useState({
		username: '',
		password: ''
	})
	const [error, setError] = useState('')
	let history = useHistory();

	useEffect(async () => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (token && await isTokenExpired() == false) history.replace('/')
		if (await isTokenExpired() == true) setError('El login expiró. Ingrese nuevamente.')
	}, [])

	const handleAuth = async (e) => {
		e.preventDefault()
		const auth = await authenticate(user)
		if (auth != null && auth.ok == true){
			setToken(auth)
			history.replace('/')
		} else {
			setError(auth.message)
			setUser({
				username: '',
				password: ''
			})
		}
		
	}
	return (
		<div className='flex items-center justify-center gap-4 flex-col  my-20 cursor-pointer p-4 rounded '>
				<form onChange={() => setError(false)} onSubmit={handleAuth} className='flex flex-col'>

					<label className='flex flex-col'>
						<span>Usuario: </span>
						<input type='text' value={user.username} onChange={(e) => setUser({...user, username:e.target.value})} className='border-2 border-gray-500 outline-none  py-2 text-center' />
					</label>
					<label className='flex flex-col	'>
					<span>Contraseña: </span>
						<input type='password' value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} className='border-2 border-gray-500 outline-none py-2 text-center'  />
					</label>
					<button className='text-center self-center mt-4 px-4 py-2 bg-gray-500 rounded '>Ingresar</button>
				</form>
				{error != '' ? <p>{error}</p> : ''}
		</div>
	)
}