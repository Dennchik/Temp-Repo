import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import returnToSavedPosition from '../../modules/return-position.js';
import { applyParallax } from '../../animations/animations.jsx';

import { Header } from '../../components/layouts/Header.jsx';
import { ServiceSound } from '../../components/categories/ServiceSound.jsx';
import { Answers } from '../../components/sections/Answers.jsx';
import { Footer } from '../../components/layouts/Footer.jsx';
import { MenuFloat } from '../../components/layouts/Menu-float.jsx';
import { FormModal } from '../../components/layouts/FormModal.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '..';

function SoundPage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useGSAP(
		() => {
			// create the smooth scroller FIRST!
			if (!isMobile) {
				const smoother = ScrollSmoother.create({
					wrapper: '#wrapper',
					content: '#content',
					smooth: 1.5,
					effects: true,
					smoothTouch: 0.1,
				});
				return () => {
					smoother.kill(); // Удаляем Smooth при размонтировании
				};
			}
		},
	);

	useEffect(() => {
		if (!isMobile) {
			applyParallax('.material-parallax');
		}
		returnToSavedPosition();
	}, []);

	// Переход к якорю из URL
	useEffect(() => {
		const hash = window.location.hash; // Получаем якорь из URL
		if (hash) {
			const element = document.querySelector(hash); // Находим элемент по якорю
			if (element) {

				const offsetTop = element.getBoundingClientRect().top + window.scrollY;
				window.scrollTo({
					top: offsetTop + 234, // Добавляем корректировку отступа
					behavior: 'smooth', // Плавная прокрутка
				});
			}
		}
	}, []);

	return (
		<>
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__categories">
							<ServiceSound baseUrl={baseUrl} isHomePage={true} />
						</section>
						<section className="main-content__questions" id="answers">
							<Answers baseUrl={baseUrl} />
						</section>
						<footer className="main-content__footer" id="footer">
							<Footer baseUrl={baseUrl} isHomePage={true} />
						</footer>
					</div>
				</div>
			</main>
			<div className="page__menu-float">
				<MenuFloat baseUrl={baseUrl} />
			</div>
			<div className="page__aside" id="scrollButton">
				<i className="icon-angle-down _button"></i>
			</div>
			<section className="page__form-modal" aria-modal="true">
				<FormModal />
			</section>
		</>
	);
}

export default SoundPage;