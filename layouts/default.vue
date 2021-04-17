<template>
	<div>
		<HeaderBar />
		<nuxt id="content_wrapper" />
	</div>
</template>

<script>
import HeaderBar from './../components/HeaderBar'

export default {
	components: {HeaderBar}
}
</script>

<style>
html {
	font-family:
		Roboto,
		'Segoe UI',
		'Helvetica Neue',
		Arial,
		sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

body {
	--light-ui: white;
	--light-text: #444;

	--dark-ui: #233850;
	--dark-text: white;

	--accent: #3e90ff;

	--max-page-width: 1280px;
	--header-height: 64px;

	background-color: #ebeef2;
}

a {
	color: inherit;
	text-decoration: none;
}


#content_wrapper {
	margin: auto;
	margin-top: var(--header-height);
	scroll-margin-top: var(--header-height);
	max-width: var(--max-page-width);
}


 
</style>
