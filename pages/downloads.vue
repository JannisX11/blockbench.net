<template>
	<div>
		<div class="content">
							
			<h1>Downloads</h1>
			
			<h3>Thank you for using Blockbench!</h3>
			<p>Choose the installer for your operating system. Once installed, you will receive updates within the program.</p>
			<p>If you need help getting started, join the Blockbench Discord server: <a href="http://discord.blockbench.net" target="_blank" rel="noreferrer noopener" aria-label=" (opens in a new tab)">discord.blockbench.net</a></p>



			<p id="update_title"><b>{{ latest ? 'Latest Version' : 'Selected Version' }}: </b><span>{{ name }}</span></p>

			<div id="download_options">

			<a class="blockbench_download win64" :href="`${path}/v${version}/Blockbench_${version}.exe`" target="_blank">
				<fa :icon="['fab', 'windows']" />
				<h5>Windows</h5>
				<p>One-click Installer</p>
			</a>
			<a class="blockbench_download portable" :href="`${path}/v${version}/Blockbench_${version}_portable.exe`" target="_blank">
				<fa icon="box-open" />
				<h5>Windows</h5>
				<p>Portable Windows Version</p>
			</a>
			<a class="blockbench_download mac" :href="`${path}/v${version}/Blockbench_${version}.dmg`" target="_blank">
				<fa :icon="['fab', 'apple']" />
				<h5>macOS</h5>
				<p>DMG Image</p>
			</a>
			<a class="blockbench_download linux" :href="`${path}/v${version}/Blockbench_${version}.deb`" target="_blank">
				<fa :icon="['fab', 'ubuntu']" />
				<h5>Linux</h5>
				<p>Debian/Ubuntu Package</p>
			</a>
			<a class="blockbench_download linux_rpm" :href="`${path}/v${version}/Blockbench_${version}.rpm`" target="_blank">
				<fa :icon="['fab', 'redhat']" />
				<h5>Linux</h5>
				<p>RPM Package</p>
			</a>
			<a class="blockbench_download linux_portable" :href="`${path}/v${version}/Blockbench_${version}.AppImage`" target="_blank">
				<fa :icon="['fab', 'linux']" />
				<h5>Linux</h5>
				<p>AppImage</p>
			</a>

			</div>

			<p>Or check the <a href="https://github.com/JannisX11/blockbench/releases">Github release page</a> for other installers and older versions.</p>

			<h4>Mobile App</h4>
			<p>Are you using a mobile device? Blockbench is available as a progressive web app! That means that you can install it directly from the browser, without the need to use an APK or go through an app store:</p>
			<ul>
				<li>On Android, go to&nbsp;<a href="https://web.blockbench.net/">web.blockbench.net</a>&nbsp;in Chrome. A pop-up will appear, asking you whether to add Blockbench.</li>
				<li>On iOS, open&nbsp;<a href="https://web.blockbench.net/">web.blockbench.net</a>&nbsp;in Safari. Press the share button and select “Add to Home Screen”</li>
			</ul>

		</div>
	</div>
</template>

<script>
const path = 'https://github.com/JannisX11/blockbench/releases/download';

export default {
	data() {return {
		path,
		version: '1.0.0',
		name: '',
		latest: false,
	}},
	async fetch(context) {
		console.log('FETCH', context, typeof location)
		this.version = '1.1.1';
		if (typeof location != 'undefined' && location.hash.length > 5 && location.hash.substr(1, 1) == 'v') {
			
			this.version = location.hash.substr(2)
			this.name = location.hash.substr(2)

		} else {
			let response = await fetch('https://api.github.com/repos/JannisX11/blockbench/releases/latest');
			let release = await response.json();

			this.version = release.tag_name.replace(/^v/, '')
			this.name = release.name
			this.latest = true
		}
	},
	fetchKey: 'downloads',

	fetchOnServer: false
}
</script>

<style scoped>
	#download_options {
		column-count: 2;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	a.blockbench_download {
		margin: 8px;
		padding: 16px;
		margin-left: 0;
		color: inherit;
		display: block;
	}
	a.blockbench_download > :first-child {
		font-size: 34pt;
		float: left;
		width: 74px;
		margin-top: 2px;
		text-align: center;
		transition: width 120ms ease-in-out;
	}
	a.blockbench_download:hover {
		background-color: var(--accent);
		color: var(--dark-hover);
		text-decoration: none;
	}
	a.blockbench_download:hover > :first-child {
		width: 80px;
	}
	a.blockbench_download > h5 {
		margin-bottom: 0px !important;
	}
	a.blockbench_download > p {
		display: inline-block;
	}
	@media only screen and (max-width: 600px) {
		#download_options {
			column-count: 1;
		}
	}
</style>
