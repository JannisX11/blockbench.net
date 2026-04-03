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

<script setup>

const search_term = ref('')

// Fetch plugin list
const { data: plugins } = await useAsyncData('plugins', async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json'
  )
  const pluginData = await response.json()

  const list = Object.entries(pluginData).map(([id, item]) => ({
    ...item,
    id
  }))

  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })
  list.sort((a, b) => collator.compare(a.title, b.title))

  return list
})


// Filtered list
const filteredPlugins = computed(() => {
	const term = search_term.value.trim().toUpperCase()
	if (!term) return plugins.value || []

	return (plugins.value || []).filter(p => {
		return (
			p.id.toUpperCase().includes(term) ||
			p.title.toUpperCase().includes(term) ||
			p.description.toUpperCase().includes(term) ||
			p.author.toUpperCase().includes(term)
		)
	})
})

// Page metadata
useHead({
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
})
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
	html.dark #plugin_list .plugin:hover {
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
