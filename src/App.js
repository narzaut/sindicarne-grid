import React, { useState, useContext, useEffect} from 'react'
import { GlobalContext } from './context/GlobalState'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ModalPostulante } from './components/ModalPostulante'
import { Auth } from './components/Auth'
import { NotFound } from './components/NotFound'
import {
  HashRouter as Router,
  Switch,
  Route,
	Redirect
} from "react-router-dom";
import { PostulantesGrid } from './components/PostulantesGrid'
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
		
    <div className='bg-gray-200 flex flex-col items-center justify-between h-screen overflow-y-scroll'>
			{console.log(postulantes)}
			<Header />
			<div className='rounded w-5/6 my-10 card-shadow glass container flex justify-center items-center'>
			<Router>
      	<Switch>

					<Route exact path="/">
						<Redirect to="/auth" />
					</Route>

					<Route exact path="/postulantes"> 	
						<PostulantesGrid postulantes={postulantes}/>
					</Route>
					
					<Route exact path="/postulantes/:id"> 	
						<ModalPostulante  />
					</Route>

      	  <Route path="/auth">
						<Auth />
					</Route>

					<Route>
						<NotFound />
					</Route>
      	
				</Switch>
    	</Router>
			</div>
			<Footer />	
		</div>
  );
}

export default App;