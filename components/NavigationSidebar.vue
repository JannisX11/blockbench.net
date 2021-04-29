<template>
	<div id="navigation_sidebar">
		<div id="nav_title">Blockbench Wiki</div>
		<ul class="nav_sections">
			<li>
				<nuxt-link to="/wiki">Home</nuxt-link>
			</li>
			<li>
				<nuxt-link to="/">Tutorials</nuxt-link>
				<ul class="nav_pages">
					<li><nuxt-link to="/wiki/tutorials/test">Test</nuxt-link></li>
				</ul>
			</li>
			<li>
				<nuxt-link to="/wiki/api/index">API</nuxt-link>
				<ul class="nav_pages">
					<li><nuxt-link to="/wiki/api/index">Plugin</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/preview">Preview</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/actions">actions</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/blockbench">blockbench</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/formats">formats</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/menu">menu</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/modes">modes</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/outliner">outliner</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/plugin">plugin</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/property">property</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/textures">textures</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/theme">theme</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/ui">ui</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/undo">undo</nuxt-link></li>
					<li><nuxt-link to="/wiki/api/utility">utility</nuxt-link></li>
				</ul>
			</li>
		</ul>
		<!--
			Home
			API
				- stuff
					- headings
			Guides
				- MC Java
				- MC Bedrock
				- 

		-->
	</div>
</template>

<script>

export default {
	name: 'NavigationSidebar',
	data() { return {
		show_menu: false
	}}
}
</script>

<style scoped>

	#navigation_sidebar {
		position: fixed;
		width: 340px;
		background-color: var(--light-ui);
		margin-right: 5px;
		padding: 12px 0;
	}

	#nav_title {
		font-size: 1.4em;
		padding: 0 12px;
	}

	ul {
		list-style: none;
	}
	ul li a {
		display: block;
		width: 100%;
		padding: 4px;
		padding-left: 16px;
	}
	ul.nav_sections {
		padding-left: 0;
	}
	ul.nav_sections > li {
		margin: 20px 0;
	}
	ul.nav_sections > li > a {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 0.95em;
	}
	ul.nav_pages {
		padding-left: 0px;
	}
	ul.nav_pages > li > a {
		padding-left: 30px;
	}
	ul.nav_pages > li > a:hover {
		background-color: var(--accent);
		color: var(--dark-hover);
	}
	
</style>>
