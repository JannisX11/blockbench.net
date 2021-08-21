<template>
	<ul class="plugin_tag_list">
		<li v-for="tag in tags" :style="{backgroundColor: getTagColor(tag)}" :class="{dark_text: getTagDarkText(tag)}" :key="tag">{{tag}}</li>
	</ul>
</template>

<script>
export default {
	name: 'PluginTags',
	props: {
		tags: Array
	},
	methods: {
		getTagColor(tag) {
			let lowercase = tag.toLowerCase();
			if (lowercase.substr(0, 9) == 'minecraft') {
				return 'var(--color-tag-mc)'
			}
		},
		getTagDarkText(tag) {
			let lowercase = tag.toLowerCase();
			if (lowercase.substr(0, 9) == 'minecraft') {
				return true;
			}
		}
	}
}
</script>

<style scoped>

	.plugin_tag_list {
		padding: 0;
		margin-bottom: 5px;
		line-height: 0;
		margin-left: -4px;
		--color-tag-mc: #73e473;
		--color-tag-misc: var(--accent);
	}
	.plugin_tag_list li {
		display: inline-block;
		background-color: var(--color-tag-misc);
		color: white;
		height: 24px;
		padding: 2px 10px;
		border-radius: 5px;
		font-size: 0.94em;
		margin: 2px;
		white-space: nowrap;
		overflow: hidden;
		line-height: normal;
		list-style: none;
	}
	.plugin_tag_list li.dark_text {
		color: black;
	}
</style>>
