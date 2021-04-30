<template>
	<div id="navigation_sidebar" :class="{folded: !show_menu}">
		<div id="mobile_sidebar_toggle" @click="show_menu = !show_menu">
			<fa icon="bars" />
		</div>
		<nav id="navigation_wrapper">

			<div id="nav_title">Blockbench Wiki</div>

			<SearchBar :value="''" />

			<ul class="nav_sections" @click="show_menu = false">
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
		margin-right: 5px;
		padding-top: 30px;
		flex-shrink: 0;
	}
	#navigation_wrapper {
		position: sticky;
		top: var(--header-height);
		background-color: var(--light-ui);
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
	ul.nav_sections {
		padding-left: 0;
		max-height: calc(100vh - 186px);
		overflow-y: auto;
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
	#mobile_sidebar_toggle {
		display: none;
		position: absolute;
		background-color: var(--light-ui);
		z-index: 11;
		width: 38px;
		text-align: center;
		vertical-align: c;
		padding: 6px;
		font-size: 20px;
		top: 0;
		cursor: pointer;
		box-shadow: 0 0 3px #00000077;
	}

	.search_bar {
		margin: 20px 0;
	}

	@media only screen and (max-width: 600px) {
		#mobile_sidebar_toggle {
			display: block;
		}
		#navigation_sidebar {
			position: fixed;
			padding: 0;
			bottom: 0;
			top: var(--header-height);
		}
		#navigation_wrapper {
			display: block;
			top: 0;
			width: 100%;
			height: calc(100vh - var(--header-height));
			overflow: hidden;
			transform-origin: top;
			transition: transform 120ms ease;
			box-shadow: 0 0 4px #00000077;
			z-index: 10;
		}
		#navigation_sidebar.folded {
			width: 40px;
			height: 40px;
		}
		#navigation_sidebar.folded #navigation_wrapper {
			transform: scaleY(0);
		}
		#navigation_sidebar:not(.folded) #mobile_sidebar_toggle {
			box-shadow: none;
		}
		#nav_title {
			padding-left: 45px;
		}
	}
</style>

