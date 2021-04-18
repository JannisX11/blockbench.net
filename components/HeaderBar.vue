<template>
	<div id="header">
		<div id="navigation">

			<nuxt-link id="home_link" to='/'>
				<img src="~assets/blockbench_logo_text_white.svg" height="32px" />
			</nuxt-link>

			<div id="mobile_menu_toggle" @click="show_menu = !show_menu">
				<fa icon="bars" />
			</div>

			<ul id="menu" :class="{folded: !show_menu}" @click="show_menu = false">
				<li><nuxt-link to='/downloads'>Download</nuxt-link></li>
				<li><nuxt-link to='/faq'>FAQ</nuxt-link></li>
				<li><nuxt-link to='/quickstart'>Quickstart</nuxt-link></li>
				<li class="menu_icon"><a href="https://twitter.com/blockbench" target="_blank" title="Twitter"><fa :icon="['fab', 'twitter']" /></a></li>
				<li class="menu_icon"><a href="https://reddit.com/r/blockbench" target="_blank" title="Reddit"><fa :icon="['fab', 'reddit-alien']" /></a></li>
				<li class="menu_icon"><a href="http://discord.blockbench.net" target="_blank" title="Discord"><fa :icon="['fab', 'discord']" /></a></li>
			</ul>

		</div>
	</div>
</template>

<script>

export default {
	name: 'HeaderBar',
	data() { return {
		show_menu: false
	}}
}
</script>

<style scoped>
	#header {
		background-color: var(--dark-ui);
		position: fixed;
		top: 0;
		z-index: 10;
		height: var(--header-height);
		width: 100%;
		color: var(--dark-text);
	}
	
	li {
		list-style: none;
		padding: 0;
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

	#menu li {
		flex: 0 0 auto;
		margin: 0 8px;
	}
	#menu li a {
		height: 100%;
		display: block;
		padding: 10px;
		padding: 22px 12px;
	}
	#menu li:hover {
		color: var(--dark-hover);
	}
	#menu li a.nuxt-link-exact-active, #menu li a:hover {
		border-bottom: 5px solid var(--accent);
		color: var(--dark-hover);
	}
	#menu li.menu_icon {
		margin: 0;
		margin-left: 8px;
	}
	#menu .svg-inline--fa {
		font-size: 20px;
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
		}
		#menu.folded {
			transform: scaleY(0);
		}
		#menu li {
			height: 48px;
		}
		#menu li a {
			padding: 15px 12px;
		}
		#menu li:hover {
			color: var(--light-hover);
		}
		#menu li a:hover {
			border-bottom: none;
			color: var(--light-hover);
		}
		#menu li a.nuxt-link-exact-active {
			border-bottom: none;
			border-left: 5px solid var(--accent);
			color: var(--light-hover);
		}
		#menu li.menu_icon {
			display: inline-block;
		}
	}
</style>>
