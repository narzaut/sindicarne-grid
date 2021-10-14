import React, { useContext, useEffect, useState } from 'react'
import { authenticate } from '../helpers/authenticate'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useHistory } from "react-router-dom";
import { isTokenExpired } from '../helpers/isTokenExpired';
import { GlobalContext } from '../context/GlobalState';
export const Auth = () => {
	const { tokenState } = useContext(GlobalContext)
	const [token, setToken] = tokenState
	const [user, setUser] = useState({
		username: '',
		password: ''
	})
	const [error, setError] = useState('')
	let history = useHistory();

	useEffect(async () => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (token && await isTokenExpired(token) == false) history.replace('/postulantes')
		if (await isTokenExpired(token) == true) setError('')
	}, [])

	const handleAuth = async (e) => {
		e.preventDefault()
		const auth = await authenticate(user)
		if (auth != null && auth.ok == true){
			setToken(auth)
			history.replace('/postulantes')
		} else {
			setError(auth.ok == false ? 'acceso denegado': 'error. intente más tarde.')
			setUser({
				username: '',
				password: ''
			})
		}
		
	}
	return (
		<div className='fadeInDown z-0 h-full flex items-center justify-center gap-4 flex-col   p-4 rounded '>
				<p className='border-b-4 border-green font-semibold text-lg text-gray-800'>INGRESO</p>
				<form onChange={() => setError(false)} onSubmit={handleAuth} className='flex flex-col'>

					<label className='flex flex-col'>
						<span>Usuario: </span>
						<input type='text' value={user.username} onChange={(e) => setUser({...user, username:e.target.value})} className='border-2 border-gray-500 outline-none  py-2 text-center focus-border-green' />
					</label>
					<label className='flex flex-col	pt-4'>
					<span>Contraseña: </span>
						<input type='password' value={user.password} onChange={(e) => setUser({...user, password:e.target.value})} className='border-2 border-gray-500 outline-none py-2 text-center'  />
					</label>
					<button className='text-center text-sm self-center mt-4 px-4 py-2 bg-green rounded  text-gray-200  transition border-4 hover:text-gray-800 border-transparen hover:bg-transparent hover-border-green'>CONTINUAR</button>
				</form>
				{error != '' ? <p className='fadeIn transition text-red-400 font-bold text-shadow-sm uppercase text-base'>{error}</p> : ''}
		</div>
	)
}