<template>
	<footer id="footer">
		<div id="footer_content">
			<a href="https://www.netlify.com" target="_blank" rel="noopener">
				This site is powered by <img id="netlify_logo" src="~assets/netlify-full-logo-dark.svg" alt="Deploys by Netlify" />
			</a>
			<nav>
				<nuxt-link to='/about'>About</nuxt-link>
				<nuxt-link to='/imprint'>Imprint & Privacy Policy</nuxt-link>
			</nav>
		</div>
	</footer>
</template>

<script>

export default {
	name: 'FooterBar',
	data() { return {
		show_menu: false
	}}
}
</script>

<style scoped>

	#footer {
		min-height: 42px;
		padding: 10px;
		background-color: var(--dark-ui);
		color: var(--dark-subtle);
	}
	#footer_content {
		max-width: var(--max-page-width);
		margin: auto;
	}
	nav {
		float: right;
	}
	nav > * {
		margin: 0 5px;
	}
	a:hover {
		color: var(--dark-hover);
	}
	#netlify_logo {
		vertical-align: text-top;
		height: 20px;
	}

	@media only screen and (max-width: 600px) {
		
		#footer {
			text-align: center;
		}
		nav {
			float: none;
			display: flex;
			justify-content: space-around;
			margin-top: 2px;
		}
	}
</style>>
