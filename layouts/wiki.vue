<template>
	<div id="page_flow" class="page_flow_wiki">
		<HeaderBar />
		<div id="wiki_wrapper">
			<NavigationSidebar />
			<nuxt class="content" />
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



 
</style>
