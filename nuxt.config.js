// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	target: 'static',
	ssr: true,

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

	routeRules: {
		// Temporary redirect using a 307 status code
		"/translations": {
			redirect: "https://blockbench.net/wiki/blockbench/localization",
		},
		"/faq": {
			redirect: "https://blockbench.net/wiki/blockbench/faq",
		},
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

	modules: [
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode'
	],

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

	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	devServer: {
		port: 3005
	}
})
