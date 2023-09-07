import Slider from './components/Home/Slider';
import { dummyData } from './dummy-data';

const App = () => {
	return (
		<div className='App'>
			<Slider data={dummyData} />
		</div>
	);
};

export default App;
