<template>
	<footer id="footer">
		<div id="footer_content">
			<nav>
				<nuxt-link no-prefetch to='/about'>About</nuxt-link>
				<nuxt-link no-prefetch to='/privacy-policy'>Privacy Policy</nuxt-link>
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
