<template>
	<div id="page_flow">
		<content class="content error_page">
			<img src="~assets/error.png" />
			<h1>{{ (error.statusCode == 404 || error.statusCode == 500) ? 'Sorry, we could not find this page 😕' : error.message }}</h1>
			<p>{{ error.statusCode }}</p>
		</content>
	</div>
</template>

<script>
import HeaderBar from './../components/HeaderBar'
import FooterBar from './../components/FooterBar'

export default {
    props: ['error'],
	components: {HeaderBar, FooterBar},
	methods: {
		getE() {
			return JSON.stringify(this.error)
		}
	}
}
</script>

<style>


#page_flow {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
.content.error_page {
	margin-top: var(--header-height);
	scroll-margin-top: var(--header-height);
	text-align: center;
	margin-top: calc(34vh - 230px);
}
.error_page p {
	font-size: 1.5em;
	color: var(--light-subtle);
}
.error_page img {
	max-width: 100%;
}

 
</style>
