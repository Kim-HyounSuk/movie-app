import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/character/:id' element={<Detail />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
