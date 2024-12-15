<template>
	<div class="content_wrapper">
		<TableOfContents v-if="!doc.hidetoc" :document="doc" />
		<div class="content">
			<nuxt-content :document="doc" />
			<div class="contributors-container" v-if="doc.authors">
				<h4>Authors</h4>
				<ul>
					<li v-for="author in doc.authors" :key="author">
						<a :href="`https://github.com/${author}`">
							<img class="contributor_avatar" width="24px" :src="avatars[author]" />
							{{ author }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>


export default {
	layout: 'wiki',
	async asyncData({$content, params}) {
		const doc = await $content(params.pathMatch || 'index').fetch();
		const avatars = {};
		if (doc.authors) {
			doc.authors.forEach(async (username) => {
				avatars[username] = '';
				let response = await fetch(`https://api.github.com/users/${username}`)
				let user = await response.json();
				avatars[username] = user.avatar_url;
			});
		}
		return {
			doc,
			avatars
		};
	},
	head() {
		let description = this.doc.description;
		if (!description) {
			// defaults
			if (this.doc.path.includes('/api/')) {
				description = 'Blockbench API Reference';
			} else {
				description = 'Blockbench Wiki';
			}
		}
		return {
			title: `${this.doc.title} - Blockbench Wiki`,
			meta: [
				{ hid: 'description', name: 'description', content: description },
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: `${this.doc.title} - Blockbench Wiki` },
				{ hid: 'og:description', property: 'og:description', content: description },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: `${this.doc.title} - Blockbench Wiki` },
				{ hid: 'twitter:description', name: 'twitter:description', content: description },
				{ hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://www.blockbench.net/images/wiki/wiki.png' },
				{ hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
			]
		}
	}
}
</script>

<style>
	.contributors-container {
		border-top: 1px solid var(--light-border);
		margin-top: 50px;
	}
	.contributors-container ul {
		padding: 0;
	}
	.contributors-container li {
		display: inline-block;
		padding: 4px 5px;
	}
	.contributors-container li img {
		border-radius: 50%;
		vertical-align: bottom;
	}

</style>