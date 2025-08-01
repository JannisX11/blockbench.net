<template>
	<div class="content">
		<h1>Welcome to the Wiki!</h1>

		<p>Welcome to the Blockbench Wiki, the central place for knowledge about Blockbench!</p>
		<p>If you are new to Blockbench, make sure to check out the <nuxt-link to="/quickstart">Quickstart Wizard</nuxt-link> to learn about the different formats and find beginner tutorials!</p>

		<img src="~assets/wiki/wiki.png" id="wiki_main_image" width="938" alt="Wiki Illustration" >

		<div id="wiki_recommendations">
			<nuxt-link to="/wiki/guides/blockbench-overview-tips">
				<h4>Overview & Tips</h4>
				<p>The fundamentals of Blockbench and how to use it efficiently</p>
			</nuxt-link>
			<nuxt-link to="/wiki/guides/model-rendering">
				<h4>Rendering Models</h4>
				<p>Make beautiful renders of your models!</p>
			</nuxt-link>
			<nuxt-link to="/wiki/docs/plugin">
				<h4>Creating a Plugin</h4>
				<p>Learn how to write, test, and submit a Blockbench plugin</p>
			</nuxt-link>
		</div>
	</div>
</template>

<script>


export default {
	layout: 'wiki',
	head() {
		return {
			title: `Blockbench Wiki`,
			meta: [
				{ hid: 'description', name: 'description', content: 'Welcome to the Blockbench Wiki, the central place for knowledge about Blockbench!' },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: `Blockbench Wiki` },
				{ hid: 'og:description', property: 'og:description', content: 'Welcome to the Blockbench Wiki, the central place for knowledge about Blockbench!' },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: `Blockbench Wiki` },
				{ hid: 'twitter:description', name: 'twitter:description', content: 'Welcome to the Blockbench Wiki, the central place for knowledge about Blockbench!' },
				// Img
				{ hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://www.blockbench.net/images/wiki/wiki.png' },
				{ hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
			]
		}
	}
}
</script>

<style>
	#wiki_wrapper #wiki_main_image {
		max-width: 112%;
	}
	#wiki_recommendations {
		padding: 0;
		margin: 30px -12px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	#wiki_recommendations a {
		padding: 2px 10px;
		border: 1px solid var(--light-border);
		width: 200px;
		flex-grow: 1;
		max-width: 300px;
		color: inherit;
		transition: transform 100ms ease, box-shadow 100ms ease, background 100ms ease;
	}
	#wiki_recommendations a:hover {
		text-decoration: none;
		transform: translateY(-3px);
		box-shadow: 0 0 16px rgb(0 0 0 / 7%);
	}
	#wiki_recommendations > a > h4 {
		color: var(--accent);
	}
	#wiki_recommendations > a:hover > h4 {
		text-decoration: underline;
	}
	#wiki_recommendations > a > p {
		text-decoration: none !important;
	}

</style>