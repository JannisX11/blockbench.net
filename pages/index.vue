<template>
	<div>
		<section class="download">
			<content class="content">
				<img id="main_logo" src="~assets/blockbench_logo_text_white.svg" alt="Blockbench" height="72px" />

				<h3>A boxy 3D model editor</h3>

				<div class="buttons">
					<button><a href="/downloads">Download</a></button>
					<button class="webapp"><a href="https://web.blockbench.net" target="_blank" rel="noopener">Open Web App</a></button>
				</div>

				<img id="front_page_app" src="~assets/front_page_app.png" />
			</content>
		</section>
		
		<section class="showcase">
			<content class="content">
				<h2>Made in Blockbench!</h2>
				<iframe title="Sketchfab Model Gallery" width="1000" height="720" src="https://sketchfab.com/playlists/embed?collection=98346534947c4e229ced71854c9ede1a&autostart=0"
					frameborder="0" allow="autoplay; fullscreen; vr" allowvr=""
					allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""
				></iframe>
			</content>
		</section>

		<section class="users">
			<content class="content">
				<h2>Who's using Blockbench</h2>
				<div id="blockbench_user_list">
					<a href="https://noxcrew.com" target="_blank" rel="noopener">
						<img src="~assets/companies/noxcrew.png" alt="Noxcrew Logo">
						Noxcrew
					</a>
					<a href="https://minecraft.net" target="_blank" rel="noopener">
						<img src="~assets/companies/mojang.png" alt="Mojang Studios Logo">
						Mojang Studios
					</a>
					<a href="https://www.cyclone.games" target="_blank" rel="noopener">
						<img src="~assets/companies/cyclone.svg" alt="Cyclone Logo">
						Cyclone
					</a>
					<a href="https://everbloomgames.com/" target="_blank" rel="noopener">
						<img src="~assets/companies/everbloom.svg" alt="Everbloom Games Logo">
						Everbloom Games
					</a>
					<a href="https://sparkuniverse.com" target="_blank" rel="noopener">
						<img src="~assets/companies/spark.png" alt="Spark Universe Logo">
						Spark Universe
					</a>
					<a href="https://www.gamemodeone.com" target="_blank" rel="noopener">
						<img src="~assets/companies/mojang.png" alt="Gamemode One Logo">
						Gamemode One
					</a>
					<a href="https://orevillestudios.com" target="_blank" rel="noopener">
						<img src="~assets/companies/oreville_studios_logo.svg" alt="Oreville Studios Logo">
						Oreville Studios
					</a>
					<p>...and many more!</p>
				</div>
			</content>
		</section>
		
		<section class="features">
			<content class="content split">
				<div class="text_body">
					<h3>Model Editing</h3>
					<p>Blockbench puts all the tools at your disposal to make creating boxy models as easy as possible.</p>
					<p>Simply resize, rotate and arrange cuboid shapes to form your own model.</p>
				</div>
				<div>
					<img src="~assets/features/flower_pot.png" />
				</div>
			</content>

			<content class="content split">
				<div>
					<img src="~assets/features/texturing.png" />
				</div>
				<div class="text_body">
					<h3>Texturing Tools</h3>
					<p>Create, edit and paint texture right inside the program. Create or import palettes, paint, or draw shapes.</p>
					<p>Blockbench can automatically create a UV map and template for your model so that you can start painting right away.</p>
					<p>You can paint directly on the model in 3D space, use the 2D texture editor, or connect your favorite external image editor or pixel art software.</p>
				</div>
			</content>

			<content class="content split">
				<div class="text_body">
					<h3>Animations</h3>
					<p>Blockbench comes with a powerful animation editor. Rig your model, then use position, rotation and scale keyframes to bring it to life. Use the graph editor to fine-tune your creation.</p>
					<p>Animations can later be exported to Minecraft: Bedrock Edition, rendered in Blender or Maya, or shared on Sketchfab.</p>
				</div>
				<div>
					<img src="~assets/features/flower_pot.png" />
				</div>
			</content>

			<content class="content split">
				<div>
					<img src="~assets/features/flower_pot.png" />
				</div>
				<div class="text_body">
					<h3>Plugins</h3>
					<p>Customize Blockbench with the built-in plugin store.</p>
					<p>Plugins extend the functionality of Blockbench beyond what it's already capable of. They add new tools, support for new export formats, or model generators.</p>
					<p>You can also create your own plugin to extend Blockbench or to support your own format.</p>
				</div>
			</content>

			<content class="content split">
				<div class="text_body">
					<h3>Free & Open Source</h3>
					<p>Customize Blockbench with the built-in plugin store. Or create your own plugin and add a new feature or new format.</p>
				</div>
				<div>
					<img src="~assets/features/open_source.png" />
				</div>
			</content>
		</section>
	</div>
</template>

<script>

export default {
	beforeMount() {
		document.body.style.setProperty('--scroll', 0);
		window.addEventListener('scroll', () => {
			document.body.style.setProperty('--scroll', window.pageYOffset / window.innerHeight);
		}, false);
	},
	
}
</script>

<style scoped>

	.content {
		padding: 0px;
		width: min(var(--max-page-width), 100%);
		background-color: transparent;
	}
	section {
		padding: 40px 0;
	}
	@media only screen and (max-width: 600px) {
		.content {
			padding: 12px 0;
		}
	}

	section.download {
		background-color: var(--dark-background);
		background-image: url('~assets/background.png');
		background-size: cover;
		color: white;
		text-align: center;
		padding-top: 100px;
	}
	section.download .content {
		perspective: 1000px;
	}
	section.download h3 {
		font-weight: 300;
	}
	section.download .buttons {
		text-align: center;
		padding: 20px;
	}
	#main_logo {
		max-width: 100%;
	}
	#front_page_app {
		width: min(100%, 1000px);
		box-shadow: 0 0 20px #000000bb;
		transform: rotateX(calc(10deg - 60deg * var(--scroll)));
		margin-bottom: -120px;
		transition: transform 800ms ease;
	}
	#front_page_app:hover {
		transform: scale(1.08);
	}
	section.download button {
		transition: padding 150ms ease-in-out;
	}
	section.download button:hover {
		padding-right: 34px;
		padding-left: 34px;
	}
	section.download button.webapp {
		background-color: transparent;
		border: 2px solid var(--dark-text);
	}
	button a {
		text-decoration: none;
		color: inherit;
	}
	button a:hover {
		text-decoration: none;
	}



	section.showcase {
		padding-top: 100px;
		background-color: var(--dark-background);;
		color: var(--dark-text);
	}
	iframe {
		width: 100%;
		height: min(75vh, 640px);
		box-shadow: 0 0 8px #00000070;
	}

	section.users {
		background-color: var(--light-background);
	}
	#blockbench_user_list > a {
		display: inline-block;
		height: 110px;
		min-width: 220px;
		margin: 8px;
		padding: 16px;
		text-align: center;
		color: var(--light-subtle);
		transition: background-color 300ms ease;
	}
	#blockbench_user_list {
		text-align: center;
	}
	#blockbench_user_list > a:hover {
		background-color: var(--light-ui);
	}
	#blockbench_user_list > a > img {
		height: 60px;
		display: block;
		margin: auto;
		margin-bottom: 4px;
	}


	section.features {
		background-color: var(--light-ui);
		box-shadow: 0 0 20px #dddedf;
	}
	.content.split {
		display: flex;
		padding: 0;
		border-bottom: 1px solid var(--light-border);
		min-height: 360px;
	}
	.content.split > * {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 50%;
	}
	.content.split > * > img {
		max-width: 100%;
		max-height: 100%;
		display: block;
		margin: auto;
		max-height: 360px;
	}
	.text_body {
		padding: 20px 32px;
	}
	section.features p {
		font-size: 1.1em;
		color: var(--light-subtle);
	}
	@media only screen and (max-width: 600px) {
		.content.split {
			flex-direction: column;
		}
	}

</style>
