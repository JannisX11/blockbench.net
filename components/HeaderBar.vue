<template>
	<div id="header">
		<div id="navigation">

			<nuxt-link id="home_link" to='/'>
				<img src="~assets/blockbench_logo_text_white.svg" height="32px" />
			</nuxt-link>

			<div id="mobile_menu_toggle" @click="show_menu = !show_menu">
				<fa icon="bars" />
			</div>

			<ul id="menu" :class="{folded: !show_menu}">
				<li><nuxt-link to='/download'>Download</nuxt-link></li>
				<li><nuxt-link to='/home'>Home</nuxt-link></li>
				<li><a href="https://twitter.com/blockbench" target="_blank"><fa :icon="['fab', 'twitter']" /></a></li>
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
		padding: 13px;
	}
	#menu {
		display: flex;
		padding: 0;
	}

	#menu li {
		flex: 0 0 auto;
		margin: 0 12px;
	}
	#menu li a {
		height: 100%;
		display: block;
		padding: 10px;
		padding: 22px 12px;
	}
	#menu li a.nuxt-link-exact-active {
		border-bottom: 3px solid var(--accent);
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
		}
		#menu.folded {
			display: none;
		}
		#menu li {
			height: 48px;
		}
		#menu li a {
			padding: 15px 12px;
		}
		#menu li a.nuxt-link-exact-active {
			border-bottom: none;
			border-left: 3px solid var(--accent);
		}
	}
</style>>
