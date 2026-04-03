// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	ssr: true,

	app: {
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
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
			]
		}
	},

	routeRules: {
		// Temporary redirect using a 307 status code
		"/translations": {
			redirect: "https://blockbench.net/wiki/blockbench/localization",
		},
		"/faq": {
			redirect: "https://blockbench.net/wiki/blockbench/faq",
		},
		"/wiki/**": {
			prerender: true
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'@/assets/css/main.css'
	],

	hooks: {
		// No prefetch to reduce Netlify token usage
		'build:manifest': (manifest) => {
			// This loops through the build manifest and removes 
			// the prefetch/preload flags from all assets
			for (const key in manifest) {
				const entry = manifest[key]
				entry.prefetch = false
				entry.preload = false
			}
		}
	},
	experimental: {
		defaults: {
			prefetch: false
		}
	},

	nitro: {
		prerender: {
			crawl: true,
			ignore: [
				'/plugins',
				'/downloads',
			]
		}
	},
	content: {
		highlight: {
			theme: {
				// Default theme (same as single string)
				default: 'github-dark',
				dark: 'github-dark',
			}
		},
		build: {
			markdown: {
				toc: {
					depth: 3
				}
			},
		}
	},

	modules: [
		'@nuxt/content',
		'@nuxtjs/mdc',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode'
	],

	vite: {
		build: {
			rollupOptions: {
				output: {
      				inlineDynamicImports: true,
					manualChunks: undefined
				}
			}
		},
		optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
				'@fortawesome/fontawesome-svg-core',
				'@fortawesome/vue-fontawesome',
				'@fortawesome/free-solid-svg-icons',
				'@fortawesome/free-brands-svg-icons',
			]
		}
	},

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
