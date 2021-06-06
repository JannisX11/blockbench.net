<template>
	<header>
		<div id="navigation">

			<nuxt-link id="home_link" to='/'>
				<img src="~assets/blockbench_logo_text_white.svg" alt="Blockbench" height="32px" />
			</nuxt-link>

			<div id="mobile_menu_toggle" @click="show_menu = !show_menu">
				<fa icon="bars" />
			</div>

			<nav id="menu" :class="{folded: !show_menu}" @click="show_menu = false">
				<nuxt-link to='/downloads'>Download</nuxt-link>
				<nuxt-link to='/quickstart'>Quickstart</nuxt-link>
				<nuxt-link to='/wiki'>Wiki</nuxt-link>
				<a class="menu_icon" href="https://twitter.com/blockbench" target="_blank" rel="noopener" title="Twitter"><fa :icon="['fab', 'twitter']" /></a>
				<a class="menu_icon" href="https://reddit.com/r/blockbench" target="_blank" rel="noopener" title="Reddit"><fa :icon="['fab', 'reddit-alien']" /></a>
				<a class="menu_icon" href="https://github.com/JannisX11/blockbench" target="_blank" rel="noopener" title="Github"><fa :icon="['fab', 'github']" /></a>
				<a class="menu_icon" href="http://discord.blockbench.net" target="_blank" rel="noopener" title="Discord"><fa :icon="['fab', 'discord']" /></a>

				<div class="menu_icon" id="color_mode_toggle" :title="colorThemeTitle" @click="toggleColorMode()">
					<fa :icon="['fa', ($colorMode.preference == 'dark' ? 'moon' : ($colorMode.preference == 'light' ? 'sun' : 'lightbulb'))]" />
				</div>
			</nav>

		</div>
	</header>
</template>

<script>

export default {
	name: 'HeaderBar',
	data() { return {
		show_menu: false
	}},
	computed: {
		colorThemeTitle() {
			let mode = this.$colorMode.preference;
			return 'Color Mode: ' + mode.substr(0, 1).toUpperCase() + mode.substr(1);
		}
	},
	methods: {
		toggleColorMode() {
			let modes = ['light', 'dark', 'system'];
			let index = modes.indexOf(this.$colorMode.preference) + 1;
			if (index >= modes.length) index = 0;
			this.$colorMode.preference = modes[index];
		}
	}
}
</script>

<style scoped>
	header {
		background-color: var(--dark-ui);
		position: fixed;
		top: 0;
		z-index: 10;
		height: var(--header-height);
		width: 100%;
		color: var(--dark-text);
	}
	
	#navigation {
		display: flex;
		height: 100%;
		max-width: var(--max-page-width);
		margin: auto;
		justify-content: space-between;
	}

	#home_link {
		padding: 14px;
		opacity: 0.9;
	}
	#home_link:hover {
		opacity: 1;
	}
	#menu {
		display: flex;
		padding: 0;
	}

	#menu > * {
		flex: 0 0 auto;
		margin: 0 4px;
		height: 100%;
		display: block;
		padding: 10px;
		padding: 22px 12px;
		border-bottom: 5px solid var(--accent);
		border-width: 0;
		transition: border-width 60ms ease;
		cursor: pointer;
	}
	#menu a.nuxt-link-active, #menu a:hover {
		border-bottom-width: 5px;
		color: var(--dark-hover);
	}
	#menu > :hover {
		color: var(--dark-hover);
	}
	#menu .menu_icon {
		margin-right: 0;
		width: 42px;
		text-align: center;
	}
	#menu .svg-inline--fa {
		font-size: 20px;
	}
	#color_mode_toggle {
		margin-left: 16px;
	}

	#mobile_menu_toggle {
		display: none;
		padding: 16px;
		font-size: 22px;
		cursor: pointer;
	}

	@media only screen and (max-width: 600px) {
		#mobile_menu_toggle {
			display: block;
		}
		#menu {
			display: block;
			position: absolute;
			top: 64px;
			background-color: var(--light-ui);
			color: var(--light-text);
			width: 100%;
			overflow: hidden;
			transform-origin: top;
			transition: transform 120ms ease;
			box-shadow: 0 0 4px #00000077;
		}
		#menu.folded {
			transform: scaleY(0);
		}
		#menu > * {
			height: 48px;
			padding: 15px 12px;
		}
		#menu > :hover {
			border-bottom: none;
			color: var(--light-hover);
		}
		#menu a.nuxt-link-active {
			border-bottom: none;
			border-left: 5px solid var(--accent);
			color: var(--light-hover);
		}
		#menu .menu_icon {
			display: inline-block;
		}
		#menu #color_mode_toggle {
			margin-right: 8px;
			float: right;
		}
	}
</style>>
