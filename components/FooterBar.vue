<template>
	<div id="footer">
	</div>
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
	}

	@media only screen and (max-width: 600px) {
	}
</style>>
