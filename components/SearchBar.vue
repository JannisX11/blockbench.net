<template>
	<div class="search_bar">
		<input type="text" placeholder="Search..." :value="modelValue" @input="change($event.target.value)">
		<div :title="modelValue ? 'Search' : 'Clear'" :class="{clickable: !!modelValue}" @click="change('')">
			<fa v-if="!modelValue" icon="magnifying-glass" />
			<fa v-else icon="xmark" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
    props: {
        modelValue: String
    },
    methods: {
        change(text) {
            this.$emit('update:modelValue', text)
        }
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
