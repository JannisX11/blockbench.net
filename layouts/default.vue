<template>
	<div id="page_flow" class="page_flow">
		<HeaderBar />
		<slot></slot>
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
.page_flow > div {
	margin-top: var(--header-height);
	scroll-margin-top: var(--header-height);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
}
.content {
	display: block;
	margin: 0 auto;
	padding: 20px;
	width: min(var(--max-content-width), 100%);
	background-color: var(--light-ui);
}

 
</style>
