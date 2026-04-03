<template>
	<div id="toc">
		<div id="toc_title">Table of Contents</div>
		<ul>
			<li
				v-for="link of document.body.toc.links"
				:key="link.id"
				class="toc2"
				>
				<nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
				<ul>
					<li
						v-for="link of link.children"
						:key="link.id"
						class="toc3"
						>
						<nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
						<ul>
							
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: 'TableOfContents',
	props: {
		document: Object
	}
}
</script>

<style scoped>
	#toc_title {
		font-size: 1.4em;
		color: var(--light-subtle);
		padding: 8px 0;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	ul li a {
		display: block;
		width: 100%;
		padding: 4px;
		padding-left: 16px;
		word-break: break-word;
	}
	li a.nuxt-link-exact-active {
		text-decoration: underline;
	}
	a:hover {
		background-color: var(--accent);
		color: var(--dark-hover);
	}
	li.toc2 > a {
		font-weight: bold;
		padding-left: 8px;
	}
	li.toc3 > a {
		padding-left: 20px;
	}
	@media only screen and (max-width: 600px) {
		#toc {
			padding: 12px;
		}
		#toc_title {
			padding-top: 50px;
		}
	}
</style>>
