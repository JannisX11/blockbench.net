<template>
	<footer id="footer">
		<div id="footer_content">
			© 2021 Jannis Petersen
			<nav>
				<nuxt-link to='/about'>Imprint & Privacy Policy</nuxt-link>
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
		min-height: 30px;
		background-color: var(--dark-ui);
		color: var(--dark-subtle);
	}
	#footer_content {
		max-width: var(--max-page-width);
		padding-top: 5px;
		padding-bottom: 0;
		margin: auto;
	}
	nav {
		float: right;
	}
	a:hover {
		color: var(--dark-hover);
	}

	@media only screen and (max-width: 600px) {
	}
</style>>
