<template>
	<div class="search_bar">
		<input type="text" v-model="value">
		<div :title="value ? 'Search' : 'Clear'" :class="{clickable: !!value}" @click="value = ''">
			<fa v-if="!value" icon="search" />
			<fa v-else icon="times" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	props: {
		value: String
	}
}
</script>

<style scoped>
	.search_bar {
		width: 100%;
		max-width: 400px;
		position: relative;
	}
	.search_bar input {
		width: 100%;
		padding-right: 30px;
	}
	.search_bar > div {
		position: absolute;
		color: var(--light-subtle);
		top: 7px;
		right: 7px;
		text-align: center;
		width: 18px;
	}
	.search_bar > div.clickable {
		cursor: pointer;
	}
	.search_bar > div:hover {
		color: var(--light-hover);
	}
</style>>
