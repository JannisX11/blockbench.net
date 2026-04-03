<template>
	<div id="navigation_sidebar" :class="{folded: !show_menu}">
		<div id="mobile_sidebar_toggle" @click="show_menu = !show_menu">
			<fa icon="bars" />
		</div>
		<nav id="navigation_wrapper">

			<div id="nav_title">Blockbench Wiki</div>

			<SearchBar v-model="search_term" />

			<ul class="nav_sections" @click="show_menu = false">

				<li v-for="category in categories" :key="category.id">

					<nuxt-link no-prefetch :to="{ name: 'wiki', params: {  } }">{{ category.title }}</nuxt-link>
					<div class="category_fold_button" v-if="category.pages && category.pages.length" @click="category.folded = !category.folded">
						<fa :icon="category.folded ? 'angle-right' : 'angle-down'" />
					</div>
					<ul class="nav_pages" v-if="!category.folded">
						<li v-for="page in category.pages" :key="page.id">
							<nuxt-link no-prefetch :to="'/wiki' + page.path" :title="page.description">{{ page.title }}</nuxt-link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const search_term = ref('')
const show_menu = ref(true)

const { data } = await useAsyncData('data', () => {
	let colletion = queryCollection('content').order('id', 'ASC');
	return colletion.select('title', 'path', 'description', 'id').all();
})

const categories = ref([
	{ id: 'home', title: 'Home', folded: false, pages: [] as any[] },
	{ id: 'guides', title: 'Guides', folded: false, pages: [] as any[] },
	{ id: 'blockbench', title: 'Blockbench', folded: false, pages: [] as any[] },
	{ id: 'docs', title: 'Documentation', folded: false, pages: [] as any[] }
])


const updateSearch = async () => {
	const pages = data.value;
	if (!pages) return;
	for (let category of categories.value) {
		category.pages.splice(0, Infinity);
	}
	let lower_case = search_term.value.toLowerCase();

	for (let page of pages) {
		let category_id = page.path.split('/')[1];
		let cat = categories.value.find(c => c.id == category_id);
		if (cat) {
			if (lower_case) {
				if (
					!page.title.toLowerCase().includes(lower_case) &&
					!page.description.toLowerCase().includes(lower_case)
				) continue;
			}
			cat.pages.push(page);
		}
	}
}
watchEffect(updateSearch);
watch(search_term, () => {
	updateSearch();
})

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
		border-right: 1px solid var(--light-border);
	}
	ul.nav_sections > li {
		margin: 20px 0;
		position: relative;
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
	ul.nav_pages > li a.router-link-active {
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

	.category_fold_button {
		position: absolute;
		height: 30px;
		width: 30px;
		padding: 4px;
		top: 0;
		right: 0;
		text-align: center;
		cursor: pointer;
		font-size: 18px;
	}
	.category_fold_button:hover {
		background-color: var(--accent);
		color: var(--dark-hover);
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
			z-index: 10;
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

