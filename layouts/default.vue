<template>
	<div id="page_flow">
		<HeaderBar />
		<nuxt id="content_wrapper" />
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
html {
	font-family:
		Montserrat,
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
	--light-background: #ebeef2;
	--light-text: #444;
	--light-hover: #233850;

	--dark-ui: #233850;
	--dark-background: #1d2125;
	--dark-text: #eeeeef;
	--dark-hover: white;

	--accent: #3e90ff;

	--max-page-width: 1200px;
	--header-height: 64px;

	background-color: #ebeef2;
	color: var(--light-text);
}

a {
	color: inherit;
	text-decoration: none;
}
h1, h2, h3 {
	margin-top: 10px;
	margin-bottom: 10px;
}
h1 {font-size: 2.4em;}
h2 {font-size: 2.0em;}
h3 {font-size: 1.7em;}
h4 {font-size: 1.5em;}
h5 {font-size: 1.3em;}

button {
	appearance: none;
	border: none;
	font-family: inherit;
	font-size: 0.92em;
	cursor: pointer;

	border-radius: 5px;
	padding: 20px 28px;
	background-color: var(--accent);
	color: var(--dark-hover);
	font-weight: bold;
	text-transform: uppercase;
	margin: 4px 0;
}

#page_flow {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
#content_wrapper {
	margin-top: var(--header-height);
	scroll-margin-top: var(--header-height);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}
.content {
	display: block;
	margin: auto;
	padding: 12px;
	max-width: var(--max-page-width);
}
@media only screen and (max-width: 600px) {
	.content {
		padding: 12px 0;
	}
}


 
</style>
