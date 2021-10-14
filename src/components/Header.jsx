import React, { useState } from "react";
import { useLocation, Link } from 'react-router-dom'
export function Header() {
	const location = useLocation()
	console.log(location)
  return (
		<div className='py-3 flex-col fadeInDown z-10 shadow-2xl border-b-8 border-green bg-header-blue w-full flex items-center justify-center '>
			<img alt='sindicato de la carne' className='w-2/3 md:w-2/4 lg:w-1/5' src={process.env.PUBLIC_URL + '/assets/logo.png'} />
			{ (location.pathname == '/postulante' || location.pathname == '/usuario') &&
				<div className='-mb-3 shadow-lg rounded-t flex justify-between w-full bg-header-blue text-gray-200 pt-4'>
					<Link to='/usuario' className='w-1/2 flex justify-center items-center py-3'>
						<div className='border-l-4 rounded-3xl border-r-4 px-4 border-green select-none cursor-pointer'>
							<p className={`rounded   text-shadow-sm transition border-green uppercase font-bold ${location.pathname == '/usuario' && 'text-green'}`}>Usuarios</p>
						</div>
					</Link>
					<Link to='/postulante' className='w-1/2 flex justify-center items-center py-3'>
						<div className='border-l-4 rounded-3xl  border-r-4 px-4 border-green select-none cursor-pointer'>
							<p className={`rounded border-green transition text-shadow-sm uppercase font-bold ${location.pathname == '/postulante' && 'text-green text-shadow'}`}>Postulantes</p>
						</div>
					</Link>
				</div>
			}
		</div>
  );
}
