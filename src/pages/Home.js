import { useEffect, useState } from 'react';
import Slider from '../components/Home/Slider';
import style from './Home.module.css';
import Loading from '../components/Loading';

const Home = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchMarvelFn = async () => {
		const response = await (
			await fetch(
				'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
			)
		).json();
		setData(response.data.results);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchMarvelFn();
	}, []);

	console.log(data.length);

	return (
		<div className={style.container}>
			<h1 className={style.title}>📽️ {`Marvel's Heroes`}</h1>
			<div className={style.main}>
				{isLoading ? <Loading /> : <Slider data={data} />}
			</div>
		</div>
	);
};

export default Home;
