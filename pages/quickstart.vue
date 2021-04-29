<template>
	<div>
		<content class="content">
			<h1>Quickstart</h1>

			<div class="quickstart_page">
				<template v-if="page == 'java_block'">
					<h4 class="suggestion">The following format was suggested for you:</h4>
					<h2>Java Block/Item</h2>
					<p>In Minecraft Java Edition, you can modify block and item models using regular resource packs</p>

					<h3>Quick Info</h3>
					<ul>
						<li>Discord Help Channel: <a href="https://discord.gg/hbaee9s" class="channel">#help-vanilla-java-block-item</a></li>
						<li>Model files are saved as .json</li>
						<li>Display settings can be used to change how the model is positioned as an item in specific environments</li>
					</ul>

					<h3>Caveats</h3>
					<ul>
						<li>Rotations are limited to 22.5 degree steps and one axis per element</li>
						<li>The model is limited to a size of 3 by 3 by 3 blocks. Display settings can make item models larger though</li>
						<li>This format does not support animations in vanilla Minecraft. If you are creating a mod, you can use <a href="https://geckolib.com/en/latest/">GeckoLib</a> to animate models. If not, the only way to animate is to switch out the model using commands or animated textures.</li>
					</ul>

					<h3>Tutorials</h3>
					<ul>
						<li><a target="_blank" href="https://www.youtube.com/watch?v=aaJ8XgMAOno">Modeling and Implementation Tutorial</a></li>
						<li><a target="_blank" href="https://www.youtube.com/watch?v=dFRRinZMNNM">Modeling and Implementation Tutorial with OptiFine CIT</a></li>
						<li><a target="_blank" href="https://www.youtube.com/watch?v=wm-giZnkUk4&list=PL9GkT_XFhyAJNg2EZvvp1X25oMdy1jfRW">Comprehensive Resource Pack and Model Tutorial Playlist (Not including Blockbench)</a></li>
					</ul>
				</template>

				<template v-if="page == 'bedrock'">
					<h4 class="suggestion">The following format was suggested for you:</h4>
					<h2>Bedrock Model</h2>
					<p>The Bedrock Model format can currently only be used to create entity models</p>

					<h3>Quick Info</h3>
					<ul>
						<li>Discord Help Channel: <a href="https://discord.gg/kWSDpjg" class="channel">#help-bedrock-edition</a></li>
						<li>Files are saved with the extension .geo.json</li>
						<li>Models are structured using bones, which can be animated when used in entities</li>
						<li>Models are referenced using the Geometry Name as defined in the Project Settings</li>
						<li>If experimental features are enabled on your works, models can be used for custom blocks as well</li>
					</ul>

					<h3>Caveats</h3>
					<ul>
						<li>On entities, each model can only have one texture</li>
					</ul>

					<h3>Tutorials</h3>
					<ul>
						<li><a target="_blank" href="https://www.youtube.com/playlist?list=PLjl_U0ndTXFc--5aIGQhcKQd8pOa99iK-">Everbloom Blockbench Tutorials</a></li>
						<li><a target="_blank" href="https://www.youtube.com/watch?v=xoybMf05Jl8">Dragnoz Add-Entity and Modeling Tutorial</a></li>
						<li><a target="_blank" href="https://bedrock.dev/1.15.0.0/1.15.0.51">Bedrock Addon Documentation</a></li>
					</ul>
				</template>

				<template v-if="page == 'cem'">
					<h4 class="suggestion">The following format was suggested for you:</h4>
					<h2>OptiFine Entity (CEM)</h2>
					<p>Entities cannot be remodeled in vanilla Minecraft, but with the mod OptiFine installed, you can.</p>

					<h3>Quick Info</h3>
					<ul>
						<li>Discord Help Channel: <a href="https://discord.gg/JEFW7h4" class="channel">#help-optifine</a></li>
						<li>Files are saved with the extension .jem</li>
						<li>Individual parts of the model can be changed using the format "OptiFine Part" (.jpm), but it is recommended to just use JEM</li>
						<li>The easiest way to get started is to use a template from the "CEM Template Loader" Blockbench plugin</li>
					</ul>

					<h3>Caveats</h3>
					<ul>
						<li>Users without OptiFine installed won't see the model</li>
						<li>Models are limited to the bones that the entity already had</li>
						<li>Bone pivots are locked, so it is a good idea to leave them untouched</li>
						<li>Animations can only be changed manually using a text editor, and only support math expressions</li>
					</ul>

					<h3>Tutorials</h3>
					<ul>
						<li><a target="_blank" href="https://youtu.be/2FHti73k2Ek">CEM Modeling Tutorial</a></li>
						<li><a target="_blank" href="https://www.youtube.com/watch?v=Y9tbKb_fgqg">CEM Random Model Tutorial</a></li>
						<li><a target="_blank" href="https://github.com/sp614x/optifine/tree/master/OptiFineDoc/doc">OptiFine Resource Pack Documentation</a></li>
					</ul>
				</template>

				<template v-if="page == 'modded_entity'">
					<h4 class="suggestion">The following format was suggested for you:</h4>
					<h2>Modded Entity</h2>
					<p>Mods for Minecraft: Java Edition can use custom entity and armor models.</p>

					<h3>Quick Info</h3>
					<ul>
						<li>Discord Help Channel: <a href="https://discord.gg/Z4cpaSQ" class="channel">#help-modded-java</a></li>
						<li>Files are saved with the extension .java</li>
						<li>Models are written in Java code instead of dedicated data structures like all other Blockbench export formats</li>
						<li>Blockbench animations can be loaded with <a href="https://geckolib.com/en/latest/">GeckoLib</a></li>
					</ul>

					<h3>Caveats</h3>
					<ul>
						<li>Implementing models requires coding knowledge.</li>
						<li>The size of elements is limited to full integers.</li>
						<li>Only bones can be rotated, not cubes.</li>
					</ul>

					<h3>Tutorials</h3>
					<ul>
						<li><a target="_blank" href="https://youtu.be/2FHti73k2Ek">CEM Modeling Tutorial</a></li>
						<li><a target="_blank" href="https://discord.mcmoddev.com/">Mod Development Discord Server</a></li>
					</ul>
				</template>

				<template v-if="page == 'generic'">
					<h4 class="suggestion">The following format was suggested for you:</h4>
					<h2>Generic Model</h2>
					<p>This format can be used to create custom models for the use in Blender, in games and game engines or just for showcase on Sketchfab. It unlocks most of the restrictions from dedicated Minecraft formats</p>

					<h3>Quick Info</h3>
					<ul>
						<li>Discord Help Channel: <a href="https://discord.gg/eGDN6nE" class="channel">#help-non-mc-models</a></li>
						<li>Models can be exported as .obj or .gltf</li>
					</ul>

					<h3>Caveats</h3>
					<ul>
						<li>Models are still limited to cubes</li>
					</ul>

					<h3>Tutorials</h3>
					<ul>
						<li><a target="_blank" href="https://www.youtube.com/playlist?list=PLjl_U0ndTXFc--5aIGQhcKQd8pOa99iK-">Everbloom Blockbench Tutorials</a></li>
					</ul>
				</template>

				<template v-if="page == 'skin'">
					<h4 class="suggestion">The following format was suggested for you:</h4>
					<h2>Skin</h2>
					<p>Minecraft Skins and entity textures can be created and changed in Blockbench on a 3D template</p>

					<h3>Quick Info</h3>
					<ul>
						<li>This format is meant to only change the texture, not the model</li>
					</ul>
				</template>

				<template v-if="page == 'bedrock_item'">
					<h2>Bedrock Item / Block</h2>
					<p>Sorry, it is not yet possible to change item models in Minecraft: Bedrock Edition.</p>
				</template>





				<template v-if="page == 'q_game'">
					<p>This Website will guide you to the correct Blockbench format for your model as well as important information, tutorials and resources!</p>
					<p></p>
					<h2>Platform</h2>
					<p>Which target platform do you want to create a model for?</p>

					<div class="answer" @click="loadPage('q_java_type')">Minecraft: Java Edition</div>
					<div class="answer" @click="loadPage('q_bedrock_type')">Minecraft: Bedrock Edition</div>
					<div class="answer" @click="loadPage('generic')">Blender / Game Engine</div>
					<div class="answer" @click="loadPage('generic')">Just for fun</div>
				</template>

				<template v-if="page == 'q_java_type'">
					<h2>Model Type</h2>
					<p>What kind of asset do you want to change?</p>

					<div class="answer" @click="loadPage('java_block')">Block Model</div>
					<div class="answer" @click="loadPage('java_block')">Item Model</div>
					<div class="answer" @click="loadPage('q_java_entity')">Entity or Armor Model</div>
					<div class="answer" @click="loadPage('skin')">My Minecraft skin or an entity texture</div>
				</template>

				<template v-if="page == 'q_bedrock_type'">
					<h2>Model Type</h2>
					<p>What kind of asset do you want to change?</p>

					<div class="answer" @click="loadPage('bedrock')">Block Model</div>
					<div class="answer" @click="loadPage('bedrock_item')">Item Model</div>
					<div class="answer" @click="loadPage('bedrock')">Entity / Mob Model</div>
					<div class="answer" @click="loadPage('skin')">My Minecraft skin or an entity texture</div>
				</template>

				<template v-if="page == 'q_java_entity'">
					<h2>Mods</h2>
					<p>You need to use mods to change entity models in MC: Java Edition. Which of the following applies to you?</p>

					<div class="answer" @click="loadPage('cem')">I can use OptiFine to view the changed model, and I want to change an entity model</div>
					<div class="answer" @click="loadPage('modded_entity')">I am creating a custom mod</div>

					<p>If none of these options apply to you, unfortunately that means that there is no way to realize your idea at the moment. Minecraft by itself does not allow custom entity or armor models.</p>
				</template>
			</div>

			<button @click="backPage()">Back</button>

		</content>
	</div>
</template>

<script>
const default_page = 'q_game';

export default {
	data() {return {
		page: default_page,
		history: [],
	}},
	methods: {
		loadPage(page) {
			this.history.push(this.page);
			this.page = page;
		},
		backPage() {
			let page = this.history.pop() || default_page;
			this.page = page;
		}
	}
}
</script>

<style scoped>
		p {
			margin: 16px 0;
		}
		h3 {
			margin-top: 16px;
			margin-bottom: 4px;
		}
		li {
			margin-left: 25px;
		}
		.quickstart_page {
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.answer {
			padding: 10px 20px 10px 20px;
			font-size: 1.16em;
			cursor: pointer;
		}
		.answer::before{
			content: "❯";
			display: inline-block;
			width: 20px;
		}
		.answer:hover {
			background-color: var(--accent);
			color: var(--dark-hover)
		}
		a.channel {
			color: #3e90ff;
			font-weight: 600;
		}
		.suggestion {
			margin-bottom: 28px;
			color: var(--dark-text);
			background-color: var(--dark-ui);
			font-weight: 300;
			margin: 15px -20px;
			padding: 20px;
		}
</style>>

</style>