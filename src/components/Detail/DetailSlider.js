import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import style from './DetailSlider.module.css';
import Card from '../Home/Card';

const DetailSlider = ({ data }) => {
	const [isMouse, setIsMouse] = useState(false);
	const [OFFSET, setOFFSET] = useState(6);

	const maxPage = Math.ceil(data.length / OFFSET);
	const emptyData = OFFSET - (data.length % OFFSET);

	const resizeOffsetFn = () => {
		if (window.innerWidth >= 1650) {
			setOFFSET(6);
		} else if (window.innerWidth >= 1450 && window.innerWidth < 1650) {
			setOFFSET(5);
		} else if (window.innerWidth >= 1100 && window.innerWidth < 1450) {
			setOFFSET(4);
		} else if (window.innerWidth >= 768 && window.innerWidth < 1100) {
			setOFFSET(3);
		} else if (window.innerWidth >= 575 && window.innerWidth < 768) {
			setOFFSET(2);
		} else {
			setOFFSET(1);
		}
	};

	useEffect(() => {
		resizeOffsetFn();
		window.addEventListener('resize', resizeOffsetFn);
		return () => window.removeEventListener('resize', resizeOffsetFn);
	}, []);

	return (
		<div
			onMouseEnter={() => setIsMouse(true)}
			onMouseLeave={() => setIsMouse(false)}
			className={style.container}
		>
			<Swiper
				slidesPerView={1}
				spaceBetween={50}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				modules={[Pagination, Navigation]}
				className={style.swiper}
			>
				{Array.from({ length: maxPage }).map((_, pageIndex) => (
					<SwiperSlide className={style.swiperSlide} key={pageIndex}>
						{data
							.slice(pageIndex * OFFSET, (pageIndex + 1) * OFFSET)
							.map((movie, idx) => (
								<Card key={idx} title={movie.name} coverImage={''} />
							))}
						{pageIndex === maxPage - 1 && data.length % OFFSET > 0
							? Array.from({ length: emptyData }).map((_, index) => (
									<Card key={`empty-${index}`} title='Empty' coverImage='' />
							  ))
							: null}
					</SwiperSlide>
				))}
				<div
					className={`swiper-button-prev ${style.arrowBtn}`}
					style={isMouse ? {} : { display: 'none' }}
				>
					<svg
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
				<div
					className={`swiper-button-next ${style.arrowBtn}`}
					style={isMouse ? {} : { display: 'none' }}
				>
					<svg
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
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</div>
			</Swiper>
		</div>
	);
};
DetailSlider.propTypes = {
	data: PropTypes.array.isRequired,
};

export default DetailSlider;
