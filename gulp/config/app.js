import { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import pugbem from 'gulp-pugbem';
import TerserPlugin from 'terser-webpack-plugin';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const app = {
	isProd: isProd,
	isDev: isDev,

	webpack: {
		// mode: isProd ? 'production' : 'development',
		mode: 'production',
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						keep_fnames: true, // сохраняем имена функций
						keep_classnames: true, // сохраняем имена классов
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
			],
			runtimeChunk: 'single',
		},

		entry: {
			main: {import: ['./#src/js/main.js']},
			index: {
				import: ['./#src/js/pages/index.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			about: {
				import: ['./#src/js/pages/about.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			services: {
				import: ['./#src/js/pages/services.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			sound: {
				import: ['./#src/js/pages/sound.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			video: {
				import: ['./#src/js/pages/video.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			text: {
				import: ['./#src/js/pages/text.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			events: {
				import: ['./#src/js/pages/events.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			development: {
				import: ['./#src/js/pages/development.jsx'],
				dependOn: ['react-vendors', 'anime-vendors', 'swiper-bundle'],
				filename: '[name].min.js'
			},
			songwriting: {
				import: ['./#src/js/pages/services/sound/songwriting.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'sound-recording': {
				import: ['./#src/js/pages/services/sound/sound-recording.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			arrangement: {
				import: ['./#src/js/pages/services/sound/arrangement.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			distribution: {
				import: ['./#src/js/pages/services/sound/distribution.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'session-musicians': {
				import: ['./#src/js/pages/services/sound/session-musicians.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'sound-design': {
				import: ['./#src/js/pages/services/sound/sound-design.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'audio-podcasts': {
				import: ['./#src/js/pages/services/sound/audio-podcasts.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'voice-acting': {
				import: ['./#src/js/pages/services/sound/voice-acting.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			promotion: {
				import: ['./#src/js/pages/services/sound/promotion.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			mastering: {
				import: ['./#src/js/pages/services/sound/mastering.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-recording': {
				import: ['./#src/js/pages/services/video/video-recording.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-podcasts': {
				import: ['./#src/js/pages/services/video/video-podcasts.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-clips': {
				import: ['./#src/js/pages/services/video/video-clips.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-design': {
				import: ['./#src/js/pages/services/video/video-design.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-presentation': {
				import: ['./#src/js/pages/services/video/video-presentation.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-production': {
				import: ['./#src/js/pages/services/video/video-production.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-redaction': {
				import: ['./#src/js/pages/services/video/video-redaction.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'video-reportage': {
				import: ['./#src/js/pages/services/video/video-reportage.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'text-song': {
				import: ['./#src/js/pages/services/text/text-song.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'text-scenarios': {
				import: ['./#src/js/pages/services/text/text-scenarios.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'events-festival': {
				import: ['./#src/js/pages/services/events/events-festival.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'events-leader': {
				import: ['./#src/js/pages/services/events/events-leader.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'events-dj': {
				import: ['./#src/js/pages/services/events/events-dj.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'events-animators': {
				import: ['./#src/js/pages/services/events/events-animators.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'events-rent': {
				import: ['./#src/js/pages/services/events/events-rent.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'dev-sites': {
				import: ['./#src/js/pages/services/development/dev-sites.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'dev-booklets': {
				import: ['./#src/js/pages/services/development/dev-booklets.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			'create-collections': {
				import: ['./#src/js/pages/services/development/create-collections.jsx'],
				dependOn: ['react-vendors', 'anime-vendors'],
				filename: '[name].min.js'
			},
			//! depend On - vendors
			'react-vendors': {
				import: ['react', 'react-dom', 'react-router-dom', 'prop-types'],
				filename: 'vendors/[name].min.js',
			},

			'anime-vendors': {
				import: ['gsap', 'gsap/ScrollSmoother', 'gsap/ScrollTrigger'],
				filename: 'vendors/[name].min.js',
			},

			'swiper-bundle': {
				import: ['swiper/bundle'],
				filename: 'vendors/[name].min.js',
			},

			// 'video-vendors': {
			// 	import: ['video.js'], // Название для отдельного chunks
			// },
		},
		// output: {
		// 	filename: '[name].min.js',
		// },
		output: {
			filename: (pathData) => {
				// Проверяем имя chunk
				if (pathData.chunk.name === 'runtime') {
					return 'vendors/[name].min.js'; // runtime попадает в vendors/
				}
				return '[name].min.js'; // Остальные файлы остаются в текущем формате
			},
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								api: 'modern-compiler',
								sassOptions: {
									// Your sass options
								},
							},
						}
					],
				},
				// {
				// 	test: /\.scss$/,
				// 	exclude: /node_modules/,
				// 	use: [
				// 		'style-loader',
				// 		'css-loader',
				// 		'sass-loader'   // компилирует Sass в CSS
				// 	]
				// },
			],
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			// разрешаем импорт файлов с расширениями .js и .jsx
		},
	},

	scss: {
		outputStyle: 'expanded',
		silenceDeprecations: ['legacy-js-api'],
		api: 'modern-compiler',
		options: {
			sassOptions: {
				quietDeps: false,
			},
		},
	},
	pug: {
		pretty: true,
		plugins: [pugbem]
	},
	htmlMin: {
		collapseWhitespace: true
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	csso: {
		restructure: true,
		sourceMap: true
	},
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'Android >= 4',
			'last 3 versions',
			'Firefox >= 24',
			'Safari >= 6',
			'Opera >= 12'
		]
	},
	fonter: {
		// formats: ['ttf', 'woff', 'eot', 'svg'],

		formats: ['ttf', 'woff', 'svg'],
	},
	svgMin: {
		js2svg: {
			indent: 4,
			pretty: true
		}
	},
	cheerio: {
		run: function ($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: {xmlMode: true}
	},
	svgSprite: {
		shape: {
			id: {
				separator: '--',
				pseudo: '~',
				whitespace: '_'
			},
			dimension: { // Set maximum dimensions
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: { // Add padding
				padding: 0
			},
			transform: [{
				svgo: {
					plugins: [
						'cleanupAttrs',
						'convertColors',
						'removeEmptyAttrs'
					]
				}
			}],
		},
		mode: {
			defs: {
				dest: './',
				sprite: './sprite.svg',
			},
		},
	},
	imageMin: (
		[
			svgo({
				plugins: [
					{optimizationLevel: 5},
					{progessive: true},
					{interlaced: true},
					{removeViewBox: false},
					{removeUselessStrokeAndFill: false},
					{cleanupIDs: false}
				],
			}),
			gifsicle({interlaced: true}),
			optipng({optimizationLevel: 3}),
			mozjpeg({quality: 75, progressive: true}),
		]),
	include: {
		prefix: '@@',
		basepath: '@#src'
	},
}; 