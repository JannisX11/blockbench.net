<template>
	<div class="content">
		<h1>Welcome to the Wiki!</h1>

		<p>Welcome to the Blockbench Wiki, the central place for knowledge about Blockbench!</p>
		<p>If you are new to Blockbench, make sure to check out the <nuxt-link to="/quickstart">Quickstart Wizard</nuxt-link> to learn about the different formats and find beginner tutorials!</p>

		<img src="~assets/wiki/wiki.png" id="wiki_main_image" width="938" alt="Wiki Illustration" >
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
	#wiki_wrapper #wiki_main_image {
		max-width: 112%;
	}

</style>