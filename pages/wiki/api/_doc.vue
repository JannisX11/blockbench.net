<template>
	<div class="wiki">
		<NavigationSidebar />
		<div class="content">
			<nuxt-content :document="doc" />
		</div>
	</div>
</template>

<script>


export default {
	async asyncData({$content, params}) {
		const doc = await $content('api/' + params.doc).fetch();
		return {doc}
	}
}
</script>

<style>

</style>