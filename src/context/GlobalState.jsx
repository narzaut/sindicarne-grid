import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

export const GlobalContext = createContext();

export const Provider = (props) => {
	const [modalPostulante, setModalPostulante] = useState({ status: false, currentIndex: 0 })
	const [postulantes, setPostulantes] = useState([])
	const [filteredPostulantes, setFilteredPostulantes] = useState(postulantes)
	return (
		<GlobalContext.Provider value={{ filteredPostulantesState: [filteredPostulantes, setFilteredPostulantes], postulantesState: [postulantes, setPostulantes], modalPostulanteState: [modalPostulante, setModalPostulante] }}>
			{props.children}
		</GlobalContext.Provider>
	)

}