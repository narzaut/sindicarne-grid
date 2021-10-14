import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

export const GlobalContext = createContext();

export const Provider = (props) => {
	const [token, setToken] = useLocalStorage('token', null)
	const [postulantes, setPostulantes] = useState(null)
	return (
		<GlobalContext.Provider value={{  postulantesState: [postulantes, setPostulantes], tokenState: [token, setToken] }}>
			{props.children}
		</GlobalContext.Provider>
	)

}