<template>
	<div>
		<nuxt-content :document="doc" />
	</div>
</template>

<script>


export default {
	layout: 'wiki',
	async asyncData({$content, params}) {
		console.log(params)
		const doc = await $content('guides', params.doc).fetch();
		console.log(doc)
		return {doc}
	}
}
</script>

<style>

</style>