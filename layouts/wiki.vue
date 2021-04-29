<template>
	<div id="page_flow_wiki">
		<HeaderBar />
		<nuxt id="wiki_wrapper" />
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

#page_flow_wiki {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	--max-page-width: 100%;
}
#wiki_wrapper {
	margin-top: var(--header-height);
	scroll-margin-top: var(--header-height);
	flex-grow: 1;
	display: flex;
	flex-direction: row;
}
#wiki_wrapper .content {
	display: block;
	margin: 0 auto;
	padding: 20px 100px;
	width: min(var(--max-page-width), 100%);
	background-color: var(--light-ui);
	margin: 0;
	max-width: 1000px;
}


 
</style>
