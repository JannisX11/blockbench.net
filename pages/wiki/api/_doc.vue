<template>
	<div class="content_wrapper">
		<TableOfContents :document="doc" />
		<div class="content">
			<nuxt-content :document="doc" />
		</div>
	</div>
</template>

<script>


export default {
	layout: 'wiki',
	async asyncData({$content, params}) {
		const doc = await $content('api', params.doc).fetch();
		return {doc}
	}
}
</script>

<style>

</style>