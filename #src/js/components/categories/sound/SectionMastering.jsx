import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils/index.js';
import {
	animateTitles,
	refreshScrollTrigger
} from '../../../animations/animations.jsx';

//* ----------------------------------------------------------------------------
export const SectionMastering = ({baseUrl}) => {
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
											 src={getPath('img/main/service/fotoram_bg_15.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_15.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className='service-description__title mastering-title'>Сведение
							и&nbsp;мастеринг
						</div>
						<div className="service-description__description">
							<div className="service-description__row">
								<h2>Сведение включает в&nbsp;себя:</h2>
								<ul className="service-description__sub-items">
									<li><i className="icon-check _icon"></i>Полное сведение
										дорожек вашего голоса и&nbsp;бита;
									</li>
									<li><i className="icon-check _icon"></i>Тональную коррекцию
										голоса (auto-tune);
									</li>
									<li><i className="icon-check _icon"></i>Частотную,
										динамическую и&nbsp;пространственную обработку;
									</li>
									<li><i className="icon-check _icon"></i>Ритмическую коррекцию;
									</li>
									<li><i className="icon-check _icon"></i>Дикторы
										для&nbsp;аудиокниг
									</li>
									<li><i className="icon-check _icon"></i>Работу
										с&nbsp;инструменталом;
									</li>
									<li><i className=""></i>Саунд-дизайн проекта, создание
										различных эффектов на&nbsp;голосе.
									</li>
								</ul>
								<h3>Цены:</h3>
								<ul className="service-description__sub-items">
									<li><i className="icon-check _icon"></i>Сведение - <span>4990 рублей</span>.
									</li>
									<li><span>* 490 рублей</span> за каждую дорожку свыше 15 штук.
									</li>
								</ul>

							</div>
							<div className="service-description__row">
								<h2>Мастеринг включает в себя:</h2>
								<ul className="service-description__sub-items">
									<li><i className="icon-check _icon"></i>Лимитирование и
										компрессия финального материала;
									</li>
									<li><i></i>Эквализация, улучшение стерео;</li>
									<li><i></i>Приведение всего релизу к одному звучанию.</li>
									<h3>Цены:</h3>
									<li><i></i>Мастеринг - <span>2&nbsp;490&nbsp;руб</span>.</li>
									<h3>Сроки выполнения:</h3>
									<li><i className="icon-check _icon"></i>до 5 дней;</li>
									<li><i className="icon-check _icon"></i>24 часа (х2&nbsp;от
										стоимости&nbsp;услуги).
									</li>
									<p className="service-description__ps">Если у&nbsp;вас есть
										какие-либо вопросы или&nbsp;вы хотите заказать наши услуги,
										пожалуйста, нажмите
										кнопку &quot;Заказать&quot; или&nbsp;свяжитесь с&nbsp;нами
										в&nbsp;ЛС сообщества.</p>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<p><span>Профессиональное сведение музыки</span> - это один
									из&nbsp;ключевых этапов создания вашей композиции. Именно
									на&nbsp;этом этапе мы определяем характер звучания музыки
									и&nbsp;ее &quot;внешний вид&quot;.Когда вы&nbsp;написали
									песню, подобрали к&nbsp;ней аранжировку и&nbsp;записали все
									дорожки вокала, песня еще не&nbsp;готова. Наступает момент
									сведения. Сведение музыки&nbsp;- это сложный процесс, который
									включает в&nbsp;себя коррекцию неточностей, допущенных
									при&nbsp;записи, подбор необходимых сэмплов (звуковых
									фрагментов), частотную и&nbsp;динамическую обработку всех
									дорожек, а&nbsp;также пространственную обработку.</p>
								<p><span>Цель сведения&nbsp;</span>- сделать так, чтобы
									все&nbsp;дорожки зазвучали как&nbsp;единое целое, придав
									звучанию песни нужный характер. Если&nbsp;вы хотите заказать
									сведение музыки, сделайте это&nbsp;в&nbsp;нашей студии! Хотя
									сведение музыки&nbsp;- это&nbsp;технически сложный процесс,
									он&nbsp;также является творческим. Один и&nbsp;тот&nbsp;же
									проект по&nbsp;характеру звучания может быть
									как &qout;попсовым&qout;,
									так&nbsp;и&nbsp;более &qout;электронным&qout; или&nbsp;&quot;хип-хоповым&quot;.
									В&nbsp;этом плане сведение дает вам творческий простор.</p>
								<p><span>Сведение </span>- это&nbsp;основной этап работы
									над&nbsp;композицией, и&nbsp;не&nbsp;стоит
									им&nbsp;пренебрегать. Мы занимаемся сведением композиций любой
									сложности и&nbsp;в&nbsp;любом стиле. Мы работаем
									как&nbsp;с&nbsp;проектами, записанными в&nbsp;нашей студии,
									так&nbsp;и&nbsp;с любыми другими вашими проектами.</p>
								<p><i className="icon-musical-notes _icon"></i>
									Комфортная и расслабляющая атмосфера в&nbsp;нашей студии
									позволит вам полностью погрузиться в&nbsp;творческий процесс
									и&nbsp;получить именно тот&nbsp;результат, который вам
									нужен.Объемное звучание записи включает в&nbsp;себя такие типы
									работ, как&nbsp;создание объема от&nbsp;помещения,
									в&nbsp;котором находятся музыкальные инструменты
									и&nbsp;звуковые источники, пространственные отражения,
									разборчивость каждого музыкального элемента и&nbsp;чистота
									музыкальных инструментов. Каждый инструмент должен звучать
									чисто и&nbsp;естественно и&nbsp;не&nbsp;должен смешиваться
									с&nbsp;другими. Это один из&nbsp;основных факторов качества
									сведения музыки.</p>
								<p><i className="icon-musical-notes _icon"></i>
									Также важно создать музыкальное равновесие между
									инструментами и&nbsp;создать тембральную окраску всего
									проекта. Кроме&nbsp;того, собственное звуковое индивидуальное
									звучание каждого инструмента должно подчеркиваться.
									Инструменты должны не&nbsp;только находиться в&nbsp;балансе
									по&nbsp;частотам, но&nbsp;и&nbsp;быть грамотно расставлены
									по&nbsp;панораме. Нелинейные искажения, резонансы
									и&nbsp;помехи должны отсутствовать (конечно, если
									это&nbsp;не&nbsp;является идеей вашего проекта). Звукорежиссер
									при&nbsp;сведении музыки должен обязательно исправить
									интонационные ошибки исполнителя, выровнять темп
									и&nbsp;ритмичность, создать полную слаженность и&nbsp;единство
									музыкальных инструментов, а&nbsp;также выправить вокал (тюнинг
									вокала).</p>
								<p><i className="icon-musical-notes _icon"></i>
									Сведение музыки при&nbsp;высоком уровне громкости может
									негативно повлиять на&nbsp;ваше восприятие. Поэтому важно
									сохранять невысокий уровень звука. В&nbsp;этом случае ваше
									восприятие будет более реалистичным, и&nbsp;качество сведения
									значительно вырастет. Самый лучший вариант&nbsp;- периодически
									менять уровень громкости. Многие звукорежиссеры
									для&nbsp;дополнительного мониторинга предпочитают сводить
									в&nbsp;режиме MONO или&nbsp;проверять качество сведения
									в&nbsp;наушниках или&nbsp;на&nbsp;бытовой акустике,
									или&nbsp;в&nbsp;машине. Дополнительный финальный контроль
									на&nbsp;этих источниках, несомненно, заставит посмотреть
									на&nbsp;вашу работу под&nbsp;новым углом. Однако сведение
									исключительно в&nbsp;mono или в&nbsp;наушниках категорически
									запрещается. Эти источники склонны изменять ряд частот,
									а&nbsp;следовательно, итог вашей работы будет не&nbsp;очень
									качественным.</p>
								<p><i className="icon-musical-notes _icon"></i>
									Самый лучший вариант - обратиться к&nbsp;профессионалам.
									Это выйдет дешевле, быстрее и&nbsp;эффективнее. Заказать
									сведение музыки можно у&nbsp;нас недорого.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="service-description__column">
				<div className="material-parallax parallax">
					<div className="parallax__image">
						<picture>
							{isWebpSupported() ? (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_16.webp')}
											 alt="image" />
								)
								: (
									<img className="parallax__image-services bg"
											 src={getPath('img/main/service/fotoram_bg_16.png')}
											 alt="image" />
								)}
						</picture>
					</div>
				</div>
				<div className="service-description__body">
					<div className='service-description__content _container'>
						<div className="service-description__description">
							<div className="service-description__row">
								<p>🎧 Во время мастеринга важно, чтобы звукорежиссер (а точнее,
									мастеринг-инженер) посмотрел на микс свежим взглядом. Ведь в
									процессе работы над сведением, фонограмма может стать
									настолько привычной для звукорежиссера, что он не сможет в
									полной мере оценить достоинства и недостатки сведения. Поэтому
									рекомендуется, чтобы сведение и мастеринг проводили разные
									люди (но, конечно, из любого правила есть исключения). Слух
									мастеринг-инженера должен по-своему воспринимать фонограмму –
									сразу слышать достоинства и недостатки общего частотного и
									динамического баланса.</p>
								<p>🎧 Акустически наша контрольная комната для мастеринга
									подходит лучше всего. Это подтверждается измерениями, которые
									проводились независимыми специалистами. Более того, нашу
									студию регулярно арендуют разные звукорежиссеры для сведения и
									мастеринга своих треков, и именно потому, что звучание нашей
									контрольной комнаты идеально подходит для промежуточной и
									финальной обработки треков.</p>
								<div className="service-description__ps">Итак, вы можете снять
									студию звукозаписи, где мастеринг ваших музыкальных треков
									будет проведен профессионально, качественно и по обоснованным
									ценам!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
SectionMastering.propTypes = {
	baseUrl: PropTypes.string.isRequired,
};