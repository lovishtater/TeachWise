import store from './store';
import { Provider } from 'react-redux';
import Signup from './views/Signup';

function App() {
	return (
		<Provider store={store}>
			{/* <div className="App">Home Route</div> */}
			<Signup />
		</Provider>
	);
}

export default App;
