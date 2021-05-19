<template>
	<div id="page_flow">
		<HeaderBar />
		<div id="content_wrapper" class="error_page">
			<content class="content">
				<img src="~assets/error.png" />
				<h1>{{ error.statusCode }}</h1>
				<p>{{ error.message }}</p>
			</content>
		</div>
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
#content_wrapper.error_page {
	margin-top: var(--header-height);
	scroll-margin-top: var(--header-height);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}
#content_wrapper.error_page .content {
	text-align: center;
	margin-top: calc(34vh - 230px);
}
#content_wrapper.error_page .content p {
	font-size: 1.5;
	color: var(--light-subtle);
}
#content_wrapper.error_page .content img {
	max-width: 100%;
}

 
</style>
