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
	#wiki_wrapper table {
		display: block;
		overflow: auto;
		max-width: 100vw;
		margin: 0 -20px;
		margin-bottom: 10px;
		padding: 0px 20px;
	}
	#wiki_wrapper .nuxt-content-highlight {
		display: block;
		overflow: auto;
		max-width: 100vw;
		margin: 0 -20px;
		padding: 0px 20px;
	}
	.block-info {
		margin-bottom: 8px;
		padding: 14px 12px;
		background-color: var(--light-background);
		border-left: 10px solid var(--accent);
	}
	.block-warning {
		margin-bottom: 8px;
		padding: 14px 12px;
		background-color: var(--light-background);
		border-left: 10px solid #f53040e0;
	}

	/* TOC */
	@media only screen and (min-width: 800px) {
		#wiki_wrapper .content_wrapper {
			--toc-width: 212px;
			flex-grow: 1;
			overflow: hidden;
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
	}
	.nuxt-content > * {
		max-width: 100%;
	}

	@media only screen and (max-width: 800px) {
		#wiki_wrapper .content .nuxt-content > p > img {
			display: block;
			margin: 0 -20px;
			max-width: calc(100% + 40px);
		}
	}

 
</style>
