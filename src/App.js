import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Grid } from './components/Grid'
import { Auth } from './components/Auth'
import { NotFound } from './components/NotFound'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
	
	return (
    <div className='bg-gray-200 flex flex-col h-screen'>
			<Header />
			<Router>
      	<Switch>
      	  <Route exact path="/"> 	
						<Grid />
					</Route>
      	  <Route path="/auth">
						<Auth />
					</Route>
					<Route>
						<NotFound />
					</Route>
      	</Switch>
    	</Router>
			<Footer />
			
		</div>
  );
}

export default App;