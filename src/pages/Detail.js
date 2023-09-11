import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailSlider from '../components/Detail/DetailSlider';
import style from './Detail.module.css';
import Loading from '../components/Loading';

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchCharacterFn = async () => {
		const response = await (
			await fetch(
				`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
			)
		).json();

		setData(response.data.results[0]);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchCharacterFn();
	}, []);

	return (
		<div className={style.container}>
			{isLoading ? (
				<Loading />
			) : (
				<div className={style.main}>
					<div className={style.title}>
						<div className={style.backBtn}>
							<svg
								onClick={() => navigate('/')}
								fill='none'
								stroke='currentColor'
								strokeWidth={1.5}
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 19.5L8.25 12l7.5-7.5'
								/>
							</svg>
						</div>
						<h1 className={style.name}>{data.name}</h1>
					</div>
					<img
						className={style.characterImg}
						src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
						alt={data.name}
					/>
					<div className={style.infoList}>
						<div>
							<h2>Comics</h2>
							<DetailSlider data={data.comics.items} />
						</div>
						<div>
							<h2>Series</h2>
							<DetailSlider data={data.series.items} />
						</div>
						<div>
							<h2>Stories</h2>
							<DetailSlider data={data.stories.items} />
						</div>
						<div>
							<h2>Events</h2>
							<DetailSlider data={data.events.items} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Detail;
