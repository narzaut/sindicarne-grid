import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

export const GlobalContext = createContext();

export const Provider = (props) => {
	const [modalPostulante, setModalPostulante] = useLocalStorage('modalPostulante', { status: false, currentId: 0 })

	return (
		<GlobalContext.Provider value={{ modalPostulanteState: [modalPostulante, setModalPostulante] }}>
			{props.children}
		</GlobalContext.Provider>
	)

}