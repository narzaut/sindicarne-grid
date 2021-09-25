import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

export const GlobalContext = createContext();

export const Provider = (props) => {
	const [modalPostulante, setModalPostulante] = useLocalStorage('modalPostulante', { status: false, currentId: 0 })
	const [postulantes, setPostulantes] = useState([])
	return (
		<GlobalContext.Provider value={{ postulantesState: [postulantes, setPostulantes], modalPostulanteState: [modalPostulante, setModalPostulante] }}>
			{props.children}
		</GlobalContext.Provider>
	)

}