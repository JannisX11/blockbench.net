export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'server',
	//ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Blockbench',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/main.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

  
	router: {
	},
  

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxt/content',
		'@nuxtjs/svg',
		'@nuxtjs/fontawesome',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode'
	],

	content: {
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-material-oceanic.css'
			}
		},
		tocDepth: 3
	},

	fontawesome: {
		component: 'fa',
		icons: {
			solid: true,
			brands: true
		}
	},

	googleFonts: {
		families: {
			'Nunito Sans': {
				wght: [300, 400, 500]
			}
		}
	},

	colorMode: {
		preference: 'light'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
