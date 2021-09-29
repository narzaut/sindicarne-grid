import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Grid } from './components/Grid'
import { Auth } from './components/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
	
	return (
    <>
			<Header />
			<Router>
      	<Switch>
      	  <Route exact path="/"> 	
						<Grid />
					</Route>
      	  <Route path="/auth">
						<Auth />
					</Route>
      	</Switch>
    	</Router>
			<Footer />
			
		</>
  );
}

export default App;