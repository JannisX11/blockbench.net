<template>
	<div id="navigation_sidebar">
		<nav id="navigation_wrapper">

			<div id="nav_title">Blockbench Wiki</div>

			<SearchBar :value="''" />

			<ul class="nav_sections">
				<li>
					<nuxt-link to="/wiki">Home</nuxt-link>
				</li>
				<li>
					<a>Guides</a>
					<ul class="nav_pages">
						<li><nuxt-link to="/wiki/guides/minecraft-modeling-texturing-tips">Minecraft-Style Modeling Tips</nuxt-link></li>
					</ul>
				</li>
				<li>
					<nuxt-link to="/wiki/api/index">Plugin API</nuxt-link>
					<ul class="nav_pages">
						<li><nuxt-link to="/wiki/api/index">Plugin</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/preview">Preview</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/actions">Actions</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/blockbench">Blockbench</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/formats">Formats</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/menu">Menu</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/modes">Modes</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/outliner">Outliner</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/plugin">Plugin</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/property">Property</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/textures">Textures</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/theme">Theme</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/ui">UI</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/undo">Undo</nuxt-link></li>
						<li><nuxt-link to="/wiki/api/utility">Utility</nuxt-link></li>
					</ul>
				</li>
			</ul>
		</nav>
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
		width: 280px;
		background-color: var(--light-ui);
		margin-right: 5px;
		padding-top: 30px;
	}
	#navigation_wrapper {
		position: sticky;
		top: var(--header-height);
	}

	#nav_title {
		font-size: 1.8em;
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
	li {
		margin-bottom: 1px;
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
	ul.nav_pages > li a.nuxt-link-exact-active {
		background-color: var(--accent);
		color: var(--dark-hover);
	}
	a:hover {
		background-color: var(--accent);
		color: var(--dark-hover);
	}

	.search_bar {
		margin: 20px 0;
	}
	
</style>>
