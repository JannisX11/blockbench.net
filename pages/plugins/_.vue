<template>
	<div class="content_wrapper">
		<div class="content">
			<h1>Blockbench Plugins</h1>

			<nuxt-link :to="'/plugins'">&lt; Back to plugin list</nuxt-link>

			<div class="plugin">

				<h2 class="title">{{ plugin.title }}</h2>
				<span class="version">{{ plugin.version }}</span>
				<p class="author">by {{ plugin.author }}</p>
				<p class="description">{{ plugin.description }}</p>

				<PluginTags :tags="plugin.tags" />

				<template v-if="about">
					<h4>About</h4>
					<p class="about" v-html="about.html"></p>
				</template>

				<p class="variant" v-if="plugin.variant == 'desktop'">Only for the desktop app</p>
				<p class="variant" v-if="plugin.variant == 'web'">Only for the web app</p>

				<p class="min_version" v-if="plugin.min_version">Requires Blockbench {{ plugin.min_version }} or newer</p>

				<p class="last_modified" v-if="last_modified">Last updated: {{ last_modified }}</p>

			</div>

			<h3>How to install the plugin</h3>

			<p>
				To install the plugin, open Blockbench and open file <b>File</b> menu in the top left corner.
				Select <b>Plugins...</b>. This will open the built-in plugin browser.
				Make sure you are in the <b>Available</b> tab, then search for the plugin. Once you have found it, press the <b>Install</b> button on the right hand side.
			</p>
		</div>
	</div>
</template>

<script>
import Markdown from '@nuxt/markdown'


export default {
	async asyncData({params}) {
		let plugin_id = params.pathMatch;
		let response = await fetch(`https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json`)
		const plugins = await response.json();

		let commits_response = await fetch(`https://api.github.com/repos/JannisX11/blockbench-plugins/commits?path=plugins/${plugin_id}.js`);
		let commits = await commits_response.json();
		let last_modified;
		if (commits && commits.length) {
			let then = Date.parse(commits[0].commit.committer.date) / 60000;
			let now = Date.now() / 60000;
			let minutes = now - then;

			if (minutes >= 525600) {
				last_modified = `${Math.floor(minutes / 525600)} years ago`

			} else if (minutes >= 43200) {
				last_modified = `${Math.floor(minutes / 43200)} months ago`

			} else if (minutes >= 10080) {
				last_modified = `${Math.floor(minutes / 10080)} weeks ago`

			} else if (minutes >= 1440) {
				last_modified = `${Math.floor(minutes / 1440)} days ago`

			} else if (minutes >= 60) {
				last_modified = `${Math.floor(minutes / 60)} hours ago`

			} else {
				last_modified = `${Math.floor(minutes)} minutes ago`

			}
		}

		let about;
		if (plugins[plugin_id].about) {
			let md = new Markdown({ toc: false, sanitize: false });
			about = await md.toMarkup(plugins[plugin_id].about);
		}

		return {
			plugins,
			plugin_id,
			last_modified,
			about,
			plugin: plugins[plugin_id]
		};
	},
	head() {
		return {
			title: `${this.plugin.title} - Blockbench Plugin`,
			meta: [
				{ hid: 'description', name: 'description', content: this.plugin.description },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: `${this.plugin.title} - Blockbench Wiki` },
				{ hid: 'og:description', property: 'og:description', content: this.plugin.description },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: `${this.plugin.title} - Blockbench Wiki` },
				{ hid: 'twitter:description', name: 'twitter:description', content: this.plugin.description }
			]
		}
	},
}
</script>

<style scoped>

	.plugin {
		display: block;
		border: 1px solid var(--light-border);
		min-height: 200px;
		padding: 16px 24px;
		margin: 24px 0px;
	}
	html.dark-mode .plugin {
		background: var(--dark-ui);
	}

	.plugin .title {
		display: inline-block;
		margin-bottom: 4px;
	}
	.plugin .version {
		margin-left: 10px;
		color: var(--light-subtle);
	}
	.plugin .author {
		color: var(--light-subtle);
	}
	.plugin .variant {
		color: var(--light-subtle);
	}
	.plugin .min_version {
		color: var(--light-subtle);
	}
	h4 {
		margin-bottom: 4px;
		margin-top: 20px;
	}

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

</style>