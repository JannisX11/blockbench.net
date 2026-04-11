<template>
	<div class="content_wrapper">
		<TableOfContents v-if="doc?.body.toc" :document="doc" />
		<div class="content">
			<ContentRenderer v-if="doc" :value="doc" />
			<div v-else>Page content not found</div>
			<div class="contributors-container" v-if="doc?.meta.authors">
				<h4>Authors</h4>
				<ul>
					<li v-for="author in doc.meta.authors" :key="author">
						<a :href="`https://github.com/${author}`">
							<img class="contributor_avatar" width="24px" :src="avatars[author] ?? 'empty'" />
							{{ author }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">

const route = useRoute();
const { data: doc } = await useAsyncData(
	route.path,
	() => queryCollection('content').path(route.path.substring(5)).first(),
	{watch: [() => route.path]}
);

const description = computed(() => doc ? doc.value?.description : 'Blockbench Wiki');

const avatars = ref<Record<string, string>>({})

watchEffect(async () => {
	const authors = doc.value?.meta.authors
	if (!Array.isArray(authors)) return;

	const entries = await Promise.all(
		authors.map(async username => {
			const res = await fetch(`https://api.github.com/users/${username}`)
			const user = await res.json()
			return [username, user.avatar_url]
		})
	)

	avatars.value = Object.fromEntries(entries)
})

definePageMeta({
	layout: 'wiki',
});

useHead({
	title: `${doc.value?.title} - Blockbench Wiki`,
	meta: [
		{ name: 'description', content: description },
		// Open Graph
		{ property: 'og:title', content: `${doc.value?.title} - Blockbench Wiki` },
		{ property: 'og:description', content: description },
		// Twitter Card
		{ name: 'twitter:title', content: `${doc.value?.title} - Blockbench Wiki` },
		{ name: 'twitter:description', content: description },
		{ name: 'og:image', property: 'og:image', content: 'https://www.blockbench.net/images/wiki/wiki.png' },
		{ name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' }
	]
});
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