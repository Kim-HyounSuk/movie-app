import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='/movie/:id' element={<Home />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
