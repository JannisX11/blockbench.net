<template>
	<div>
		<div class="content">
							
			<h1>Downloads</h1>
			
			<h3>Thank you for using Blockbench!</h3>
			<p>Choose the installation method for your system. Once installed, you will receive the latest updates automatically.</p>
			<p>If you need help getting started, check out the <nuxt-link to="/quickstart">Quickstart Guide</nuxt-link>.</p>

			<p id="update_title"><b>{{ type }}: </b><span>{{ name }}</span></p>

			<div id="install_options">
				<section>

					<div id="install_os_section">
					
						<div class="install_os">
							<fa :icon="['fab', 'windows']" />
							<h3>Windows</h3>
							<a class="blockbench_download win64" :href="`${path}/v${version}/Blockbench_${version}.exe`" target="_blank" rel="noopener">
								<label>Installer</label>
							</a>
							<a class="blockbench_download portable" :href="`${path}/v${version}/Blockbench_${version}_portable.exe`" target="_blank" rel="noopener">
								<label>Portable</label>
							</a>
						</div>

						<div class="install_os">
							<fa :icon="['fab', 'linux']" />
							<h3>Linux</h3>
							<a class="blockbench_download linux" :href="`${path}/v${version}/Blockbench_${version}.deb`" target="_blank" rel="noopener">
								<label>Debian/Ubuntu Package</label>
							</a>
							<a class="blockbench_download linux_rpm" :href="`${path}/v${version}/Blockbench_${version}.rpm`" target="_blank" rel="noopener">
								<label>RPM Package</label>
							</a>
							<a class="blockbench_download linux_portable" :href="`${path}/v${version}/Blockbench_${version}.AppImage`" target="_blank" rel="noopener">
								<label>AppImage</label>
							</a>
							<a class="blockbench_download linux_portable" :href="`https://flathub.org/apps/details/net.blockbench.Blockbench`" target="_blank" rel="noopener">
								<label>Flatpak (Flathub)</label>
							</a>
						</div>

						<div class="install_os">
							<fa :icon="['fab', 'apple']" />
							<h3>macOS</h3>
							<a class="blockbench_download mac" :href="`${path}/v${version}/Blockbench_arm64_${version}.dmg`" target="_blank" rel="noopener">
								<label>Apple silicon</label>
							</a>
							<a class="blockbench_download mac" :href="`${path}/v${version}/Blockbench_x64_${version}.dmg`" target="_blank" rel="noopener">
								<label>Intel chip</label>
							</a>
						</div>
						
					</div>

					<center><p>Or check the <a href="https://github.com/JannisX11/blockbench/releases" target="_blank" rel="noopener">Github release page</a> for pre releases and older versions.</p></center>

					<h4>Updates</h4>
					<p>Blockbench updates to the latest version automatically! </p>
					<p>To update the desktop app, you can alternatively download and run the installer again. Running the installer will just change the installed Blockbench version, it won't touch and user preferences and models.</p>

				</section>

				<img src="~assets/wiki/download.png" alt="Image of a computer, a phone, and a tablet, running Blockbench." />

				<section>
					<h4>Mobile App</h4>
					<p>Are you using a mobile device? Blockbench is available as a progressive web app! That means that you can install it directly from the browser, without the need to use an APK or go through an app store:</p>
					<ul>
						<li>On Android, go to&nbsp;<a href="https://web.blockbench.net/">web.blockbench.net</a>&nbsp;in Chrome. A pop-up will appear, asking you whether to add Blockbench.</li>
						<li>On iOS, open&nbsp;<a href="https://web.blockbench.net/">web.blockbench.net</a>&nbsp;in Safari. Press the share button and select “Add to Home Screen”</li>
					</ul>

					<h4>Windows 7 & 8</h4>
					<p>The last version that runs on Windows 7 and 8 (and Windows 10 32-bit) is Blockbench 4.6.5. To use Blockbench on Windows 7 or 8, download the version from the <a target="_blank" href="https://www.blockbench.net/downloads#v4.6.5">4.6.5 download page</a> and disable Automatic Updates in File > Preferences > Settings > Application.</p>
				</section>
			</div>

			<h3>System Requirements</h3>
			<div class="column_left">
				<h4>Minimum</h4>
				<ul>
					<li>
						Desktop App
						<ul>
							<li><b>Windows</b> 10 or newer (64 bit)</li>
							<li><b>macOS</b> 10.15 (Catalina) or newer</li>
							<li><b>Ubuntu</b> 12.04, Debian 8, Fedora 21 or newer</li>
							<li>2+ GB of empty storage space</li>
						</ul>
					</li>
					<li>4 GB RAM</li>
					<li>1280 x 720 display</li>
					<li>Intel HD Graphics 4000 or Nvidia/AMD equivalent, or newer</li>
				</ul>
			</div>
			<div class="column_right">
				<h4>Recommended</h4>
				<ul>
					<li>Windows, macOS, or Linux computer</li>
					<li>Mouse and keyboard</li>
					<li>8 GB RAM</li>
					<li>1920 x 1080 display</li>
					<li>10 GB of empty storage space</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
const path = 'https://github.com/JannisX11/blockbench/releases/download';

const data = {
	path,
	version: '1.0.0',
	name: '',
	type: 'Latest Version',
};

export default {
	data() {return data},
	async fetch(context) {
		data.version = '1.1.1';
		if (typeof location != 'undefined' && location.hash.length > 5 && location.hash.substr(1, 1) == 'v') {
			
			data.version = location.hash.substr(2)
			data.name = location.hash.substr(2)
			data.type = 'Selected Version';

		} else if (typeof location != 'undefined' && (location.hash.substr(1, 4) == 'beta' || location.hash.substr(1, 4) == 'pre')) {
			let response = await fetch('https://api.github.com/repos/JannisX11/blockbench/releases?per_page=1');
			let [release] = await response.json();

			data.version = release.tag_name.replace(/^v/, '')
			data.name = release.name
			data.type = 'Latest Prerelease'

		} else {
			let response = await fetch('https://api.github.com/repos/JannisX11/blockbench/releases/latest');
			let release = await response.json();

			data.version = release.tag_name.replace(/^v/, '')
			data.name = release.name
			data.type = 'Latest Version'
		}
	},
	head: {
		title: 'Downloads - Blockbench',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ hid: 'description', name: 'description', content: 'Download the latest version of Blockbench - for Windows, mac, and Linux' },
		],
	}
}
</script>

<style scoped>
	#install_options > img {
		display: block;
		margin: auto;
		max-width: 100%;
	}
	#install_os_section {
		display: flex;
		margin-bottom: 20px;
	}
	.install_os {
		text-align: center;
		flex-basis: 0;
		flex-grow: 1;
		margin: 12px;
		transition: transform 120ms ease;
	}
	.install_os > :first-child { /* ICON */
		text-align: center;
		display: block;
		width: 100%;
		height: 80px;
		margin-bottom: 10px;
	}
	.install_os a {
		display: block;
		width: 100%;
		padding: 8px;
		color: inherit;
		text-decoration: none;
		transition: transform 120ms ease;
	}
	.install_os a:first-of-type {
		background-color: var(--accent);
		color: var(--dark-hover);
	}
	.install_os a:hover {
		transform: scale(1.06);
	}
	a.blockbench_download > * {
		cursor: inherit;
	}
	.column_left,
	.column_right {
		float: left;
		width: 50%;
	}
	@media only screen and (max-width: 600px) {
		#install_options {
			display: flex;
			flex-direction: column-reverse;
		}
		#install_os_section {
			flex-direction: column;
		}
		.column_left,
		.column_right {
			float: none;
			width: auto;
		}
	}
</style>
