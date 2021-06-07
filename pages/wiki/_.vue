<template>
	<div class="content_wrapper">
		<TableOfContents v-if="!doc.hidetoc" :document="doc" />
		<div class="content">
			<nuxt-content :document="doc" />
		</div>
	</div>
</template>

<script>


export default {
	layout: 'wiki',
	async asyncData({$content, params}) {
		const doc = await $content(params.pathMatch || 'index').fetch();
		return {doc};
	},
	head() {
		return {
			title: `${this.doc.title} - Blockbench Wiki`,
		}
	}
}
</script>

<style>

</style>