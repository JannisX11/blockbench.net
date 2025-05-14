export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	ssr: true,


	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
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
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'alternate icon', type: 'image/png', href: '/favicon.png' }
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

	generate: {
		fallback: true,
		exclude: [
			/^\/downloads/,
			/^\/plugins/
		],
		routes: [
			'/wiki/api/action',
			'/wiki/api/animation_controller',
			'/wiki/api/animation',
			'/wiki/api/blockbench',
			'/wiki/api/canvas',
			'/wiki/api/codec',
			'/wiki/api/collection',
			'/wiki/api/cube',
			'/wiki/api/dialog',
			'/wiki/api/display_mode',
			'/wiki/api/format',
			'/wiki/api/group',
			'/wiki/api/interface',
			'/wiki/api/keyframe',
			'/wiki/api/menu',
			'/wiki/api/mesh',
			'/wiki/api/misc',
			'/wiki/api/mode',
			'/wiki/api/outliner',
			'/wiki/api/painter',
			'/wiki/api/panel',
			'/wiki/api/plugin',
			'/wiki/api/preview',
			'/wiki/api/project',
			'/wiki/api/screencam',
			'/wiki/api/settings',
			'/wiki/api/shared_actions',
			'/wiki/api/texture_group',
			'/wiki/api/texture_layers',
			'/wiki/api/textures',
			'/wiki/api/timeline',
			'/wiki/api/undo',
			'/wiki/api/util',
			'/wiki/api/validator',
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
		},
        download: true,
        base64: false
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
