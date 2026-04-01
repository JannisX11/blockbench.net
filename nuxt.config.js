export default defineNuxtConfig({
	// Target: https://go.nuxtjs.dev/config-target
	//target: 'static',
	//ssr: true,

	meta: {
		title: 'Blockbench',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#212e3c' },
			{ hid: 'description', name: 'description', content: 'An easy to use 3D model editor for low-poly and pixel-art' },
			{ hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://blockbench.net/logo_banner.png' },
			{ hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@/assets/css/main.css'
	],


	generate: {
		fallback: true,
		exclude: [
			/^\/downloads/,
			/^\/plugins/
		],
		routes: [
			'/wiki/docs/bbmodel',
			'/wiki/docs/blockbench',
			'/wiki/docs/plugin',
			'/wiki/docs/property',
			'/wiki/docs/ui',
			'/wiki/docs/undo',
			'/wiki/docs/url-parameters',
			'/wiki/docs/utility',
			'/wiki/blockbench/faq',
			'/wiki/blockbench/formats',
			'/wiki/blockbench/legacy-versions',
			'/wiki/blockbench/localization',
			'/wiki/blockbench/logos',
			'/wiki/blockbench/themes',
			'/wiki/guides/bedrock-modeling',
			'/wiki/guides/blockbench-overview-tips',
			'/wiki/guides/emissive-textures-renders',
			'/wiki/guides/export-formats',
			'/wiki/guides/minecraft-particles-sounds',
			'/wiki/guides/minecraft-style-guide',
			'/wiki/guides/model-rendering',
		]
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
		'nuxt-svgo'
	],

	/*content: {
		
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-material-oceanic.css'
			}
		},
		tocDepth: 3
	},*/

	/*fontawesome: {
		component: 'fa',
		icons: {
			solid: true,
			brands: true
		}
	},*/

	colorMode: {
		preference: 'light'
	},

	googleFonts: {
		families: {
			'Nunito Sans': {
				wght: [300, 400, 500]
			}
		},
        download: true,
        base64: false
	},

	dir: {
		public: 'static'
	},

	compatibilityDate: '2026-04-01',
});
