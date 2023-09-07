import Slider from '../components/Home/Slider';
import { dummyData } from '../dummy-data';
import style from './Home.module.css';

const Home = () => {
	return (
		<div className={style.container}>
			<h1 className={style.title}>📽️ Movie App</h1>
			<div className={style.main}>
				<Slider data={dummyData} />
			</div>
		</div>
	);
};

export default Home;
