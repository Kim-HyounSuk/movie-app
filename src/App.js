import Card from './components/Home/Card';
import { dummyData } from './dummy-data';

const App = () => {
	return (
		<div className='App'>
			<Card
				title={dummyData[0].title}
				coverImage={dummyData[0].medium_cover_image}
			/>
		</div>
	);
};

export default App;
