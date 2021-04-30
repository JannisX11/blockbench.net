<template>
	<div id="page_flow" class="page_flow_wiki">
		<HeaderBar />
		<div id="wiki_wrapper">
			<NavigationSidebar />
			<nuxt/>
		</div>
		<FooterBar />
	</div>
</template>

<script>
import HeaderBar from './../components/HeaderBar'
import FooterBar from './../components/FooterBar'

export default {
	components: {HeaderBar, FooterBar}
}
</script>

<style>

	#page_flow {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#wiki_wrapper {
		margin: auto;
		margin-top: var(--header-height);
		scroll-margin-top: var(--header-height);
		max-width: var(--max-page-width);
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	#wiki_wrapper .content {
		display: block;
		margin: 0 auto;
		padding: 20px;
		width: min(var(--max-content-width), 100%);
		background-color: var(--light-ui);
	}

	/* TOC */
	@media only screen and (min-width: 800px) {
		#wiki_wrapper .content_wrapper {
			--toc-width: 212px;
			flex-grow: 1;
		}
		#wiki_wrapper .content_wrapper .content {
			float: left;
			width: calc(100% - var(--toc-width));
		}
		#wiki_wrapper .content_wrapper #toc {
			float: right;
			width: var(--toc-width);
			position: sticky;
			top: var(--header-height);
			margin-top: 44px;
		}
		#wiki_wrapper .content_wrapper #toc > ul {
			max-height: calc(100vh - 120px);
			overflow-y: auto;
		}
	}

	#wiki_wrapper h1 {
		text-align: initial;
	}

	#wiki_wrapper .content img {
		max-width: 100%;
	}

	h1, h2, h3 {
		scroll-margin: 64px;
		scroll-padding: 64px;
	}

 
</style>
