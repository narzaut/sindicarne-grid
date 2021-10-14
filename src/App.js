import React, { useState, useContext, useEffect} from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
	Redirect
} from "react-router-dom";
import { GlobalContext } from './context/GlobalState'
//CUSTOM COMPONENTS
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Auth } from './components/Auth'
import { PostulantesGrid } from './components/PostulantesGrid'
import { PostulanteInfo } from './components/PostulanteInfo'
import { UsersGrid } from './components/UsersGrid'
import { UserInfo } from './components/UserInfo'

import { NotFound } from './components/NotFound'

//HELPERS
import { getPostulantes } from './helpers/getPostulantes'
import { getUsers } from './helpers/getUsers'
import { isTokenExpired } from './helpers/isTokenExpired'
function App() {
	const [users, setUsers] = useState(null)
	const { tokenState, postulantesState} = useContext(GlobalContext)
	const [postulantes, setPostulantes] = postulantesState
	const [token, setToken] = tokenState
	
	useEffect(async () => {
		if (!token || await isTokenExpired(token)) return;
		setPostulantes(await getPostulantes(token))
		setUsers(await getUsers(token))
	}, [token])

	return (
		<Router>
    <div className='bg-gray-200 flex flex-col items-center justify-between h-screen overflow-y-scroll'>
			<Header />
			<div className='rounded w-5/6 my-10 card-shadow glass container flex justify-center items-center'>

      	<Switch>

					<Route exact path="/">
						<Redirect to="/login" />
					</Route>

					<Route path="/login">
						<Auth />
					</Route>

					<Route exact path="/postulante"> 	
						<PostulantesGrid postulantes={postulantes}/>
					</Route>
					
					<Route exact path="/postulante/:id"> 	
						<PostulanteInfo />
					</Route>

					<Route exact path="/usuario"> 	
						<UsersGrid />
					</Route>

					<Route exact path="/usuario/:id"> 	
						<UserInfo />
					</Route>

					<Route>
						<NotFound />
					</Route>
      	
				</Switch>
    	
			</div>
			<Footer />	
		</div>
		</Router>
  );
}

export default App;