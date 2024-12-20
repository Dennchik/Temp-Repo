import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionSongWriting = ({baseUrl}) => {
	const isHomepage = location.pathname === '/';
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useEffect(() => {
		if (!isMobile) {
			animateTitles(
				'.service-description__title',
				'.service-description__title',
				'.service-description__title',
				'=150',
				'=150',
			);
			refreshScrollTrigger();
		}
	}, [location.pathname, isHomepage]);

	const getPath = (fileName) => {
		return `${baseUrl}/${fileName}`;
	};

	return (
		<div className="service-description">
			<div className="service-description__column">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services bg"
											 src={getPath(
												 'img/parallax/sound/fotoram_bg_01.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath(
												 'img/parallax/sound/fotoram_bg_01.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body top-box">
					<div className="service-description__content _container">
						<h1 className="service-description__title">
							Сонграйтинг
						</h1>
						<div className="service-description__description">
							<div className="service-description__row">
								<div className="service-description__row-col">
									<p><i className="icon-piano _icon"></i>
										Если вам нужна мелодия для&nbsp;фильма или&nbsp;рекламы
										на&nbsp;телевидении, наши специалисты создадут
										ее&nbsp;в&nbsp;соответствии с&nbsp;требованиями
										заказчика. Мы также можем написать слова и&nbsp;создать
										музыкальную композицию в&nbsp;радиоформате.
									</p>
									<p><i className="icon-piano _icon"></i>Наши авторы
										работают в&nbsp;разных направлениях:
										от&nbsp;классического до&nbsp;народного
										и&nbsp;авторского. Мы&nbsp;можем создать музыку
										для&nbsp;любого проекта, будь то&nbsp;фильм,
										реклама или&nbsp;корпоративное мероприятие.
									</p>
									<p><i className="icon-piano _icon"></i>В&nbsp;студии
										звукозаписи вы&nbsp;можете приобрести готовую песню,
										заказать создание музыки у&nbsp;профессиональных
										композиторов и&nbsp;аранжировщиков. Наши музыканты
										работают
										в&nbsp;различных жанрах: от&nbsp;популярной эстрады
										до&nbsp;авангарда. Они могут написать слова
										и&nbsp;создать
										музыкальную композицию в&nbsp;любом стиле,
										от&nbsp;классического до&nbsp;народного
										и&nbsp;авторского.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<h2>Цены на&nbsp;создание песни (песни на&nbsp;заказ, авторские
								проекты, корпоративные гимны)</h2>
							<div className="service-description__row">
								<div className="service-description__row-col">
									<h3>пакет 1&nbsp;- 100&nbsp;000₽</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>написание текста</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>написание мелодии</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>авторская аранжировка
												<span>(до&nbsp;40&nbsp;дорожек)</span>;
											</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>звукозапись</p></li>
										<li><i className="icon-check _icon"></i>
											<p>мастеринг и&nbsp;сведение</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>передача авторских прав</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>до 3&nbsp;правок</p>
										</li>
									</ul>
								</div>
								<div className="service-description__row-col">
									<h3>Пакет 2&nbsp;- 125&nbsp;000₽</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>написание текста</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>написание мелодии</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>авторская аранжировка
												<span>(до&nbsp;60&nbsp;дорожек)</span></p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>бек вокалисты</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>звукозапись;</p></li>
										<li><i className="icon-check _icon"></i>
											<p>сведение и&nbsp;мастеринг</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>дизайн обложки;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>дистрибуция на&nbsp;цифровые площадки</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>передача авторских прав</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>до&nbsp;5&nbsp;правок</p>
										</li>
									</ul>
								</div>
								<div className="service-description__row-col">
									<h3>пакет 3&nbsp;- от&nbsp;200&nbsp;000₽</h3>
									<ul>
										<li><i className="icon-check _icon"></i>
											<p>написание текста;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>написание мелодии;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>авторская аранжировка
												<span>(до&nbsp;100&nbsp;дорожек)</span>
												живые инструменты;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>сессионные
												музыканты;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>бек вокалисты;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>звукозапись;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>сведение и мастеринг;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>дизайн обложки;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>дистрибуция на цифровые площадки;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>съемка видео Reels для&nbsp;презентация релиза;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>передача авторских прав;</p>
										</li>
										<li><i className="icon-check _icon"></i>
											<p>правки без&nbsp;ограничений.</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionSongWriting.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};