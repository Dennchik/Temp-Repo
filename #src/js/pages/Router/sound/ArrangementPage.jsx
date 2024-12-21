import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Offer } from '../../../components/chunks/Offer.jsx';

import returnToSavedPosition from '../../../modules/return-position.js';
import { applyParallax } from '../../../animations/animations.jsx';

import { Header } from '../../../components/layouts/Header.jsx';
import {
	SectionArrangement
} from '../../../components/categories/sound/SectionArrangement.jsx';
import { Footer } from '../../../components/layouts/Footer.jsx';
import { MenuFloat } from '../../../components/layouts/Menu-float.jsx';
import { FormModal } from '../../../components/layouts/FormModal.jsx';

gsap.registerPlugin(useGSAP, ScrollSmoother);
const baseUrl = '../..';

function ArrangementPage() {
	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	useGSAP(
		() => {
			if (!isMobile) {
				const smoother = ScrollSmoother.create({
					wrapper: '#wrapper',
					content: '#content',
					smooth: 1.5,
					effects: true,
					smoothTouch: 0.1,
				});
				return () => {
					smoother.kill();
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

	return (
		<>
			<header className="page__header">
				<Header baseUrl={baseUrl} />
			</header>
			<main className="page__main-content">
				<div className="main-content" id="wrapper">
					<div className="main-content__content" id="content">
						<section className="main-content__body">
							<SectionArrangement baseUrl={baseUrl} isHomePage={true} />
						</section>
						<section className="main-content__offer gradient-neon-color">
							<Offer baseUrl={baseUrl} />
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
			<section className="page__form-modal">
				<FormModal />
			</section>
		</>
	);
}

export default ArrangementPage;