<template>
	<div class="content">
		<h1>Blockbench Plugins</h1>

		<div>
			These are all plugins that are available to install in Blockbench through the built-in plugin store.
			<SearchBar v-model="search_term" />
		</div>

		<div id="plugin_list">
			<nuxt-link :to="'/plugins/' + plugin.id" class="plugin" v-for="plugin in filteredPlugins" :key="plugin.id">
				<h3 class="title">{{ plugin.title }}</h3><span class="version" v-if="plugin.version">v{{ plugin.version }}</span>
				<p class="author">by {{ plugin.author }}</p>
				<p class="description">{{ plugin.description }}</p>

				<PluginTags :tags="plugin.tags" />

				<p class="variant" v-if="plugin.variant == 'desktop'">Only for the desktop app</p>
				<p class="variant" v-if="plugin.variant == 'web'">Only for the web app</p>
			</nuxt-link>
		</div>
	</div>
</template>

<script>


export default {
	async asyncData({params}) {
		let response = await fetch(`https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json`)
		const plugin_data = await response.json();
		const plugins = [];
		for (let key in plugin_data) {
			plugin_data[key].id = key;
			plugins.push(plugin_data[key]);
		}
		
		const sort_collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
		plugins.sort((a, b) => sort_collator.compare(a.title, b.title));
		return {
			search_term: '',
			plugins,
			plugin: plugins[params.pathMatch]
		};
	},
	computed: {
		filteredPlugins() {
			let term = this.search_term.toUpperCase();

			return this.plugins.filter(plugin => {
				if (!term) return true;
				if (term.length > 0) {
					if (
						plugin.id.toUpperCase().includes(term) ||
						plugin.title.toUpperCase().includes(term) ||
						plugin.description.toUpperCase().includes(term) ||
						plugin.author.toUpperCase().includes(term)
					) {
						return true;
					}
				}
				return false;
			})
		}
	},
	head() {
		return {
			title: `Plugins - Blockbench`,
			meta: [
				{ hid: 'description', name: 'description', content: 'These are all plugins that are available to install in Blockbench through the built-in plugin store.' },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: `Plugins - Blockbench` },
				{ hid: 'og:description', property: 'og:description', content: 'These are all plugins that are available to install in Blockbench through the built-in plugin store.' },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: `Plugins - Blockbench` },
				{ hid: 'twitter:description', name: 'twitter:description', content: 'These are all plugins that are available to install in Blockbench through the built-in plugin store.' }
			]
		}
	}
}
</script>

<style scoped>

	.content {
		--max-content-width: 1280px;
	}

	.search_bar {
		float: right;
		margin-bottom: 20px;
	}

	#plugin_list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		grid-gap: 1rem;
	}
	#plugin_list .plugin {
		display: block;
		border: 1px solid var(--light-border);
		min-height: 200px;
		padding: 8px 16px;
		color: inherit;
		transition: transform 100ms ease, box-shadow 100ms ease, background 100ms ease;
	}
	#plugin_list .plugin:hover {
		text-decoration: none;
		transform: translateY(-3px);
		box-shadow: 0 0 16px #0001;
	}
	html.dark-mode #plugin_list .plugin:hover {
		background: var(--dark-ui);
	}
	#plugin_list .title {
		display: inline-block;
		margin-bottom: 0;
	}
	#plugin_list .version {
		margin-left: 10px;
		color: var(--light-subtle);
	}
	#plugin_list .author {
		color: var(--light-subtle);
		margin-bottom: 8px;
	}
	#plugin_list .variant {
		color: var(--light-subtle);
		margin-bottom: 2px;
	}


</style>>
