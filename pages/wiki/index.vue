<template>
	<div class="content">
		<h1>Welcome to the Wiki!</h1>

		<p>Welcome to the Blockbench Wiki, the centralized place for knowledge about Blockbench!</p>
		<p>If you are new to Blockbench, make sure to check out the <nuxt-link to="/quickstart">Quickstart Wizard</nuxt-link> to learn about the different formats and find beginner tutorials!</p>

		<img src="~assets/wiki/wiki.png" >
	</div>
</template>

<script>


export default {
	layout: 'wiki',
	head() {
		return {
			title: `Blockbench Wiki`,
		}
	}
}
</script>

<style>

</style>