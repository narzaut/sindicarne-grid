import React, { useState, useEffect } from "react";
//HELPERS
import { getPostulantes } from './helpers/getPostulantes'
//CUSTOM COMPONENTS
import { Postulante } from './Postulante'

export const Grid = () => {
	const [postulantes, setPostulantes] = useState([])
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')
	//CONSUMO API
	useEffect(async () => {
		setPostulantes(await getPostulantes())
		if (postulantes){
			setLoading(false)
		}
	}, [])

	return (
		<div className='flex flex-col w-full  items-center justify-center pb-10 mt-6'>
			<div className='fadeIn h-full rounded-md glass card-shadow w-5/6 lg:w-1/2   pb-10 py-6 my-2 lg:my-6 flex flex-col items-center justify-center '>	
				{loading == true ?
					<div className='flex flex-col items-center justify-center gap-2'>
						<p className='uppercase text-semibold '>Cargando</p><div className="fadeInDown lds-dual-ring-blue text-2xl	text-shadow "/>
					</div>
				: 
					<div className='flex w-full text-gray-800 flex flex-col items-center justify-center '>
						<div className=' pb-4 flex flex-col items-center justify-center'>
							<p className=' max-w-min font-bold  uppercase border-b-2 border-green text-lg'>Postulantes</p>
							<div className='w-3/4 pt-4'>
								<input
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									type='text'
									onBlur={(e) => e.target.placeholder='Nombre / DNI'}
									onSelect={(e) => e.target.placeholder = ''}
									className='border-2 py-2 border-gray-400 focus-border-green outline-none text-center w-full' placeholder='Nombre / DNI'
								/>
							</div>
						</div>
						{postulantes.
							filter((postulante) =>{
								if (searchTerm == ''){
									return postulante
								} else if (postulante.nombrePostulante.toLowerCase().includes(searchTerm.toLowerCase())){
									return postulante
								}else if (postulante.dniPostulante.toLowerCase().includes(searchTerm.toLowerCase())){
									return postulante
								}
							})
							.map( postulante => <Postulante postulante={ postulante } />
						)}
					</div>
				}
			</div>
		</div>
	)
}