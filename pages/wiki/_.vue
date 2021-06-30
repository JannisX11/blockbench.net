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
			meta: [
				{ hid: 'description', name: 'description', content: this.doc.description },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: `${this.doc.title} - Blockbench Wiki` },
				{ hid: 'og:description', property: 'og:description', content: this.doc.description },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: `${this.doc.title} - Blockbench Wiki` },
				{ hid: 'twitter:description', name: 'twitter:description', content: this.doc.description }
			]
		}
	}
}
</script>

<style>

</style>