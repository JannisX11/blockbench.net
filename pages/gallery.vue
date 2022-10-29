<template>
	<div>
		<div class="content">
			
			<h1>Gallery</h1>

			<p>This page lists some of the best creations in Blockbench history, from contest winners to new technique and otherwise notable models.</p>

			<h4>Filter by Tag</h4>
			<ul id="filter_list">
				<li :class="{selected: filter == ''}" @click="filter = '';">All</li>
				<li :class="{selected: filter == 'splashart'}" @click="filter = 'splashart';">Splash Art</li>
				<li :class="{selected: filter == 'winner'}" @click="filter = 'winner';">Contest Winner</li>
				<li :class="{selected: filter == 'mesh'}" @click="filter = 'mesh';">Low-poly Mesh</li>
				<li :class="{selected: filter == 'minecraft'}" @click="filter = 'minecraft';">Minecraft</li>
				<li :class="{selected: filter == 'vehicle'}" @click="filter = 'vehicle';">Vehicle</li>
				<li :class="{selected: filter == 'city'}" @click="filter = 'city';">City</li>
				<li :class="{selected: filter == 'scifi'}" @click="filter = 'scifi';">Sci-Fi</li>
			</ul>

			<section v-if="showImage(['splashart', 'winner', 'mesh', 'vehicle', 'city'])">
				<img src="~assets/gallery/4.4.png" />
				<h2>Splash Art Contest 4.4 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/wackyblocks">Wacky</a>, September 2022</label>
				<p>The theme for the 11th Splash Art Contest was "Ice Cream Truck". Wacky entered and won the contest with 1730 votes, ahead of the second place by Eisenbart and Dankbarkeit with 1359 votes.</p>
				<p>The scene was created with Blockbench's mesh tools and rendered in Blender. It features a vivid city scene, animal characters, and many easter eggs and details to discover!</p>
			</section>
			
			<section v-if="showImage(['splashart', 'winner'])">
				<img src="~assets/gallery/4.3.png" />
				<h2>Splash Art Contest 4.3 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/MisterGriimm">MisterGriimm</a> and <a target="_blank" rel="noopener" href="https://twitter.com/MidnitePixel_">MidnitePixel</a>, July 2022</label>
				<p>The theme for the Splash Art Contest for 4.3 was "Aviation". MidnitePixel and MisterGriimm decided to take a bit of a different approach to the theme and created a model Leonardo da Vinci's flying machine, suspended from the roof of his workshop</p>
				<p>The beautiful colors and the lighting from the top are what made this submission stand out!</p>
			</section>

			<section v-if="showImage(['minecraft'])">
				<img src="~assets/gallery/spongebob.jpg" />
				<h2>SpongeBob SquarePants</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/pixelstoriez">Pixelstories</a>, July 2022</label>
				<p>The SpongeBob SquarePants DLC for Minecraft was released in July 2022, and of course the iconic characters were all modeled in Blockbench!</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'mesh'])">
				<img src="~assets/gallery/4.2.png" />
				<h2>Splash Art Contest 4.2 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/ShroomyArts">Shroomy</a> and <a target="_blank" rel="noopener" href="https://twitter.com/Redstone_mvv">RedstoneMvv</a>, March 2022</label>
				<p>The theme for the Splash Art Contest was "Cozy Cabin". Shroomy and RedstoneMvv created not only a cabin, but also an entire landscape around it.</p>
				<p>The entry over-all feels more like a painting than just a model, which made it perfect for the splash screen. This was also the first version where the splash art would show up on every start of the software, not just after the update!</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'mesh'])">
				<img src="~assets/gallery/4.1.png" />
				<h2>Splash Art Contest 4.1 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/MisterGriimm">MisterGriimm</a> and <a target="_blank" rel="noopener" href="https://twitter.com/MidnitePixel_">MidnitePixel</a>, December 2021</label>
				<p>The 4.1 update of Blockbench was set to release right before Chrismas, so naturally the theme would have to be "Santa's Sleigh"!</p>
				<p>MisterGriimm and MidnitePixel won this contest with their tiny christmas diorama inside a snow globe!</p>
				<p>This was the first and only Splash Art Contest where the voting took place by a closed jury, as an experiment. The jury would consist of Discord staff, Modeling Pros and VIPs, and everyone who submitted an entry.</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'mesh', 'city', 'vehicle'])">
				<img src="~assets/gallery/4.0.png" />
				<h2>Splash Art Contest 4.0 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Wackyblocks">Wacky</a>, October 2021</label>
				<p>The 7th Splash Art Contest was hosted during the beta phase of 4.0 and it's new mesh tools.
					Meshes were a very important feature in the update, so the Splash Art had to be modeled with meshes as a requirement. This also helped out with beta testing of the new features.
					Since meshes were an entirely new area for large parts of the community, there were only 3 submissions.
				</p>
				<p>
					Wacky's submission respected the theme "city", while also referencing the style of older Splash Arts with a vehicle prominently placed in the middle. All while making use of and showcasing the new mesh capabilities. 
				</p>
			</section>

			<section v-if="showImage(['splashart', 'mesh', 'city', 'vehicle'])">
				<img src="~assets/gallery/city_scene.jpg" />
				<h2>Masteriano's City Scene</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/MasterianoX">MasterianoX</a> and <a target="_blank" rel="noopener" href="https://twitter.com/hapico_lb">Hapico</a>, October 2021</label>
				<p>The City Scene for the 4.0 update Splash Screen contest by Masteriano and Hapico did not end up winning the contest, but that doesn't make it any less impressive!</p>
				<p>The scene it set in New York in the 1970s, and features many easter eggs and references to the Blockbench community. The entry was designed in part during a Spark Universe company retreat in Greece, so Masteriano decided to include a few of his colleagues as extras in the scene!</p>
			</section>

			<section v-if="showImage(['mesh'])">
				<img src="~assets/gallery/fox.png" />
				<h2>Low Poly Fox</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a>, October 2021</label>
				<p>The Low Poly Fox was created during development of the new Blockbench mesh tools. It was made as a test for the brand new model style and the color-only template generator.</p>
			</section>

			<section v-if="showImage(['vehicle', 'city'])">
				<img src="~assets/gallery/gas_station.jpg" />
				<h2>Gas Station</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/GrafischMC">Jelle</a>, August 2021</label>
				<p>The Gas Station was the first installment of Jelle's city scene series. The quality and attention-to-detail makes these scenes some of the best Blockbench models ever created!</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'vehicle', 'scifi'])">
				<img src="~assets/gallery/3.9.png" />
				<h2>Splash Art Contest 3.9 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/LorenOLoren1">Loren</a> and <a target="_blank" rel="noopener" href="https://twitter.com/Dxnkbarkeit">Dankbarkeit</a>, June 2021</label>
				<p>18 entries were submitted for the 6th Splash Art Contest with the theme "Off Road Pickup Truck". Ultimately, it was a head-to-head race between Wacky's submission, and this entry.
					Loren and Dankbarkeit's splash art ended up winning the contest with 636 votes, slightly ahead of Wacky with 575 votes.</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'scifi', 'vehicle'])">
				<img src="~assets/gallery/wacky_3.9.png" />
				<h2>Splash Art Contest 3.9: Wacky's Submission</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Wackyblocks">Wacky</a>, June 2021</label>
				<p>This was the first ever contest that Wacky joined but did not win. Still, the model is too good to not include in the gallery!</p>
			</section>

			<section v-if="showImage(['splashart', 'vehicle'])">
				<img src="~assets/gallery/3.8.png" />
				<h2>Splash Art for 3.8</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a>, March 2021</label>
				<p>I created this MB Trac with log trailer model personally as a new "figure-head model", for the 3.8 Splash Screen, as well as for various marketing screenshots, including the program screenshots on the website and the Github page.</p>
				<p>Fun fact: This was months before the Mesh update, so the low poly trees were actually created in Blender to fill out the background. The rest of the model was designed in Blockbench though.</p>
			</section>

			<section v-if="showImage(['winner', 'vehicle', 'scifi'])">
				<img src="~assets/gallery/wayfarer.png" />
				<h2>The Wayfarer</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Ycarx">Ycar</a>, January 2021</label>
				<p>In January, Sketchfab and Blockbench joined forces to create the first ever <a target="_blank" rel="noopener" href="https://sketchfab.com/blogs/community/sketchfab-blockbench-challenge-alien-moon-landing/">Sketchfab X Blockbench Modeling Challenge.</a>
					The 22 entries were judged by a jury, and Ycar's "Wayfarer" won! Wacky's and Jelle's submissions landed on second and third place, respectively. Ycar won a custom T-shirt, a 50$ Amazon gift card, and 6 months of Sketchfab Plus.
					The Model was also featured as a special Splash Screen on the Blockbench start screen for 3 weeks after the contest!
				</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'vehicle'])">
				<img src="~assets/gallery/3.7.png" />
				<h2>Splash Art Contest 3.7 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/GrafischMC">Jelle</a>, October 2020</label>
				<p>The theme for the 5th Splash Art Contest was "Snow Plow", continuing the series of construction and utility vehicles on splash screens. Jelle took it to the next level and submitted two snow plows in one!</p>
			</section>

			<section v-if="showImage([])">
				<img src="~assets/gallery/trading_post.jpg" />
				<h2>Trading Post</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Ycarx">Ycar</a>, October 2020</label>
				<p>The Trading Post was one in a series of models that Ycar created for the low-poly automation game <a target="_blank" rel="noopener" href="https://store.steampowered.com/app/860890/Factory_Town/">Factory Town</a>!</p>
				<p>Factory Town was the first notable game to use Blockbench models outside of the Minecraft ecosystem, which was a major step for the program. The models are also incredibly cute!</p>
			</section>

			<section v-if="showImage(['minecraft'])">
				<img src="~assets/gallery/goat.png" />
				<h2>Minecraft Goat</h2>
				<label>By <a target="_blank" rel="noopener" href="twitter.com/Mojang">Mojang Studios</a>, October 2020</label>
				<p>The Goat was one of the first vanilla Minecraft models that was created in Blockbench!
					It was first shown as part of the mountains biome in the community vote at Minecon Live 2019. After winning the vote, the Goat was added to Minecraft as part of the Caves and Cliffs Update, Part 1.</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'vehicle'])">
				<img src="~assets/gallery/3.6.jpg" />
				<h2>Splash Art Contest 3.6 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Wackyblocks">Wacky</a>, July 2020</label>
				<p>The Theme for this contest was "Fire Truck" with the only requirement being that it would not be an American-style fire engine.
					There was quite a lot of competition in this contest, with Nygma, TONG98 and DerBauersSohn submitting awesome entries, however ultimately Wacky's super detailed Scania fire engine won the contest with 709 votes!</p>
			</section>

			<section v-if="showImage(['splashart', 'vehicle'])">
				<img src="~assets/gallery/3.5.png" />
				<h2>Splash Art 3.5</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a>, April 2020</label>
				<p>The fuel truck for the 3.5 Splash Art was another repurposed model that I created. It's from the "Planes" map by Spark Universe. The truck fit nicely into the series of construction and utility vehicles on the splash screen.</p>
			</section>

			<section v-if="showImage(['splashart', 'vehicle'])">
				<img src="~assets/gallery/3.2.png" />
				<h2>Splash Art 3.2</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a>, December 2019</label>
				<p>Sometimes, the update is ready, and there is no time left to host a major contest or design a new model.
					For the 3.2 update, I was able to re-purpose a wheel loader model that I had made for a Minecraft Marketplace project at Spark Universe which was never released.
					I added different colored paint buckets into the bucket to represent "Colors", the theme of the 3.2 update. Then I placed it on a gravel terrain in Blender and created a render with the colors in the foreground.
				</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'vehicle'])">
				<img src="~assets/gallery/3.0.png" />
				<h2>Splash Art Contest 3.0 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Wackyblocks">Wacky</a>, July 2019</label>
				<p>The theme for the 3.0 Splash Art Contest was "forklift", or alternatively a telehandler or skid steer.
					Since the 3.0 update had model formats as its core feature, one of the requirements for the Splash Art was to show the forklift handling these formats, which would be represented as boxes.</p>
			</section>

			<section v-if="showImage(['splashart', 'winner', 'vehicle'])">
				<img src="~assets/gallery/2.6.png" />
				<h2>Splash Art Contest 2.6 Winner</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/Wackyblocks">Wacky</a>, April 2019</label>
				<p>This was the first Splash Art Contest ever! The process and rules were very different back then, but this one started the tradition of Splash Art Contests to determine the Splash Art for an update.
					The 2.6 update introduced P2P edit sessions and built-in Sketchfab uploading, so it was named the "Connection Update", and that also became the theme of the contest.</p>
				<p>This entry by Wacky depicts the Opportunity Mars rover that was launched back in 2003.</p>
			</section>

			<section v-if="showImage(['splashart', 'vehicle'])">
				<img src="~assets/gallery/2.0.png" />
				<h2>Splash Art 2.0</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a> and <a target="_blank" rel="noopener" href="https://twitter.com/LNeoX_Designs">LNeoX</a>, October 2018</label>
				<p>Version 2.0 was a big update for Blockbench, it featured multi-language support, a more extendable and customizable UI and backend, and quad view mode.
					So it needed something special for the Splash Screen! I created the truck model with the two cranes as a new "flagship-model" for Blockbench. LNeoX created a beautiful render.</p>
				<p>The Splash Art was used with a big 2 in the background as a teaser on Twitter, and on the Blockbench website. 2.0 would be the first and only update to launch along-side a blog post on the Blockbench website.</p>
			</section>

			<section v-if="showImage(['splashart', 'vehicle'])">
				<img src="~assets/gallery/red_excavator.png" />
				<h2>Red Excavator</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a>, August 2017</label>
				<p>This Red Excavator appeared on the first ever Blockbench splash screen, in version 1.9! The Splash Screen used to look surprisingly similar to the one in modern Blockbench versions, just a lot smaller.</p>
			</section>

			<section v-if="showImage(['minecraft', 'vehicle'])">
				<img src="~assets/gallery/unimog.png" />
				<h2>Unimog U2150</h2>
				<label>By <a target="_blank" rel="noopener" href="https://twitter.com/JannisX11">Jannis</a>, July 2017</label>
				<p>The Unimog was the first ever figure-head model for Blockbench. It was meant to showcase what's possible in Blockbench, and to be used in other marketing and documentation screenshots.</p>
				<p>The creation of this model can be seen as a <a target="_blank" rel="noopener" href="https://youtu.be/kzGEyI7bta4">timelapse on YouTube</a>. The model was created in Blockbench 1.7.</p>
				<p>Here, the model can be seen imported into a Minecraft world, as a Java Block/Item model, with shaders enabled.</p>
			</section>

		</div>
	</div>
</template>

<script>
/**
https://twitter.com/pixelstoriez/status/1551978151416172544
Wayfarer: https://twitter.com/blockbench/status/1360341166378676225
FactoryTown: https://twitter.com/Ycarx/status/1318018434949664768

 */
export default {
	head () {
		return {
			title: 'Gallery - Blockbench',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Blockbench Gallery and Hall of Fame'
				},
				{ hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://www.blockbench.net/images/gallery.png' },
			]
		}
	},
	data() {return {
		filter: ''
	}},
	methods: {
		showImage(tags = []) {
			return !this.filter || tags.includes(this.filter);
		}
	}
}
</script>


<style scoped>

	.content {
		--max-content-width: 1280px;
	}
	#filter_list {
		display: flex;
		list-style: none;
		padding: 0;
		gap: 12px;
	}
	#filter_list li {
		background-color: var(--light-background);
		padding: 10px 20px;
		cursor: pointer;
	}
	#filter_list li:hover {
		background-color: var(--accent);
		color: white;
	}
	#filter_list li.selected {
		background-color: var(--accent);
		color: white;
	}
	section {
		margin-top: 30px;
		margin-bottom: 50px;
		padding: 24px;
		padding-top: 0;
		background-color: var(--light-background);
	}
	img {
		width: calc(100% + 48px);
		margin-right: -24px;
		margin-left: -24px;
	}
	h2 {
		margin-bottom: 0;
	}
	label {
		color: var(--light-subtle);
		margin-bottom: 12px;
		display: block;
	}
</style>
