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

				<p class="deprecation_note" v-if="plugin.deprecation_note">{{ plugin.deprecation_note }}</p>

				<PluginTags :tags="plugin.tags" />

				<div v-if="about" class="about">
					<h4>About</h4>
					<p class="about" v-html="about.html"></p>
				</div>

				<p class="variant" v-if="plugin.variant == 'desktop'">Only for the desktop app</p>
				<p class="variant" v-if="plugin.variant == 'web'">Only for the web app</p>

				<p class="min_version" v-if="plugin.min_version">Requires Blockbench {{ plugin.min_version }} or newer</p>

				<p class="last_modified" v-if="last_modified">Last updated: {{ last_modified }}</p>

			</div>

			<h3>How to install the plugin</h3>

			<ol>
				<li>To install the plugin, start Blockbench and open file <b>File</b> menu in the top left corner.</li>
				<li>Select <b>Plugins...</b> to open the built-in plugin browser.</li>
				<li>Make sure you are in the <b>Available</b> tab, then search for the plugin.</li>
				<li>Once you have found it, press the <b>Install</b> button on the right hand side.</li>
			</ol>

		</div>
	</div>
</template>

<script>

import Markdown from '@nuxt/markdown'

/**
 * Compare two versions
 * @param {string} version1 
 * @param {string} version2 
 * @returns Whether version1 is higher/newer than version2
 */
 function compareVersions(version1, version2) {
	var arr1 = version1.split(/[.-]/);
	var arr2 = version2.split(/[.-]/);
	var i = 0;
	var num1 = 0;
	var num2 = 0;
	while (i < Math.max(arr1.length, arr2.length)) {
		num1 = arr1[i];
		num2 = arr2[i];
		if (num1 == 'beta') num1 = -1;
		if (num2 == 'beta') num2 = -1;
		num1 = parseInt(num1) || 0;
		num2 = parseInt(num2) || 0;
		if (num1 > num2) {
			return true;
		} else if (num1 < num2) {
			return false
		}
		i++;
	}
	return false;
}

export default {
	async asyncData({params}) {
		let plugin_id = params.pathMatch.replace(/[\\\/]+/, '');
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

		const plugin = plugins[plugin_id];
		if (plugin.min_version && !compareVersions('4.8.0', plugin.min_version)) {
			plugin.new_repository_format = true;
		}

		let about = plugin.about;
		if (!about && plugin.new_repository_format) {
			const api_path = 'https://cdn.jsdelivr.net/gh/JannisX11/blockbench-plugins/plugins';
			let url = `${api_path}/${plugin_id}/about.md`;
			let result = await fetch(url).catch(() => {
				console.error('about.md missing for plugin ' + plugin_id);
			});
			if (result && result.ok) {
				about = await result.text();
			}
		}

		if (about) {
			let md = new Markdown({ toc: false, sanitize: false });
			about = await md.toMarkup(about);
		}

		return {
			plugins,
			plugin_id,
			last_modified,
			about,
			plugin
		};
	},
	head() {
		return {
			title: `${this.plugin.title} - Blockbench Plugin`,
			meta: [
				{ hid: 'description', name: 'description', content: this.plugin.description },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: `${this.plugin.title} - Blockbench` },
				{ hid: 'og:description', property: 'og:description', content: this.plugin.description },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: `${this.plugin.title} - Blockbench` },
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
		margin: 24px -15px;
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
	.plugin .deprecation_note {
		margin-bottom: 8px;
		padding: 10px 12px;
		background-color: var(--light-background);
		border-left: 10px solid #f5a130e0;
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
	div.about {
		margin-top: 10px;
		margin-bottom: 10px;
	}

</style>
<style>

	p.about i.icon {
		display: none;
	}
	p.about img {
		max-width: 100%;
	}
	p.about h1, p.about h2 {
		padding-bottom: 12px;
	}
</style>
