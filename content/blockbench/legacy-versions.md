---
title: Legacy Versions
description: Blockbench version history and changelogs prior to switching to Github Releases
---

# Legacy Versions

This page lists the versions and changelogs prior to switching to Github Releases.

<p style="padding: 4px 10px;
	border: 1px solid #e88080;
	background-color: #ffdede;
	color: black;"><b>Warning: </b> This page is no longer updated!</p>
<p>You can find the latest Blockbench updates on <a href="https://github.com/JannisX11/blockbench/releases">github.com/JannisX11/blockbench/releases</a>.</p>

<h3><span class="ez-toc-section" id="341"></span>3.4.1<span class="ez-toc-section-end"></span></h3>
10 Mar 2020
<h5>Bugfixes</h5>
<ul>
	<li>Textures in UV Editor don’t update correctly when replacing textures</li>
	<li>Issue with keyframe order in the glTF exporter</li>
	<li>Axis control gizmo centers a frame too late in animations</li>
	<li>Panda skin model does not load</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/540">#540</a></span>&nbsp;Small Movement offsets after opening display menu</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/541">#541</a></span>&nbsp;Right clicking a cube and making it hidden on animation tab has no use</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/542">#542</a></span>&nbsp;Editing a texture externally breaks its UV editor</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/544">#544</a></span>&nbsp;Texture reset when load .bbmodel</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/545">#545</a></span>&nbsp;Perspective view grid isn’t hidden when on paint mode</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/546">#546</a></span>&nbsp;Odd behaviour with large brush/eraser scales</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/547">#547</a></span>&nbsp;Axis control wont change position when moving a locator</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/549">#549</a></span>&nbsp;Loading cubes with UV defined for any face breaks other faces without UV</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
 	<li><a class="link" href="https://blockbench.net/downloads/#v3.4.1">Download Page</a></li>
</ul>

<h3><span class="ez-toc-section" id="340_-_The_Paint_Tool_Update"></span>3.4.0 – The Paint Tool Update<span class="ez-toc-section-end"></span></h3>
4 Mar 2020
<h5>Changes</h5>
<ul>
	<li>Added Rectangle/Circle paint tool</li>
	<li>Added texture selection and copy/paste tool</li>
	<li>Added mirror paint option</li>
	<li>Sketchfab uploader now supports animations</li>
	<li>Added glTF export format</li>
	<li>Added Camera Angle Presets</li>
	<li>Added mute toggle for animation channels</li>
	<li>New Transform Space selector</li>
	<li>Added length modes to GIF Recorder</li>
	<li>Extended Paint Bucket color mode: Global Colors and Connected Colors</li>
	<li>Added support for more palette formats: ACT, ACO, ASE</li>
	<li>Removed .bbpalette export in favor of more common .gpl palette format</li>
	<li>Added two new palette presets</li>
	<li>Unlocked animations for Free format</li>
	<li>Added buttons to scale tool to scale around element pivot or selection center</li>
	<li>Keybindings are now displayed in description tooltips</li>
	<li>Restyled toolbar select widget</li>
	<li>Added new Skin Mode templates: Evocation Fang, Hoglin, Piglin, Chest, Bell, Blaze</li>
	<li>Base grid is now hidden in Paint mode</li>
	<li>Removed noise brush option</li>
	<li>Added Shading toggle to the view menu</li>
	<li>New icon for Move tool</li>
	<li>Added new settings category “Interface”</li>
	<li>Added Developer submenu</li>
	<li>Added more event hooks</li>
	<li>Updated to Electron 8.0.2</li>
	<li>Updated to Three.JS 114</li>
	<li>Various performance improvements</li>
</ul>
<h5>Bugfixes</h5>
<ul>
	<li>GIF recorder renders black colors as transparent</li>
	<li>Exported GIFs have a black outline</li>
	<li>Drag handler extensions are case sensitive</li>
	<li>Drag handlers don’t read binary files correctly</li>
	<li>Number Sliders use cube grid resolution by default</li>
	<li>Confirm button in pop-up color pickers is offset</li>
	<li>Transform gizmo visually messes up after using rescale gizmo</li>
	<li>Cannot use phantom model template in Skin Mode</li>
	<li>UV mapping issue when generating templates</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/508">#508</a></span>&nbsp;Gif Compression</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/517">#517</a></span>&nbsp;Project Resolution for 2nd Template Textures</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/521">#521</a></span>&nbsp;Nothing is rendering.</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/524">#524</a></span>&nbsp;When opening a .bbmodel with multiple textures, assigned textures are reset</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/527">#527</a></span>&nbsp;Saved as text background box doesn’t scale depending on name length</li>
	<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/528">#528</a></span>&nbsp;Setting cull face to None causes it to immediately reset when UV editor is closed</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
 	<li><a class="link" href="https://blockbench.net/downloads/#v3.4.0">Download Page</a></li>
</ul>

<h3><span class="ez-toc-section" id="331_-_A_Bugfix_Update"></span>3.3.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
25 Jan 2020
<h5>Changes</h5>
<ul>
	<li>Added new skin templates: Ender Dragon, Iron Golem, Boat, Minecart, Java Edition Fox</li>
	<li>Palettes can now be imported from PNG graphics</li>
	<li>Added clear button to file inputs in dialogs</li>
</ul>
<h5>Bugfixes</h5>
<ul>
	<li>Cube counter is no longer in outliner toolbar</li>
	<li>UV Editor Menu doesn’t open without elements selected</li>
	<li>GUI front lighting remains visible in edit mode</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
 	<li><a class="link" href="https://blockbench.net/downloads/#v3.3.1">Download Page</a></li>
</ul>

<h3><span class="ez-toc-section" id="330_-_The_Skin_Update"></span>3.3.0 – The Skin Update<span class="ez-toc-section-end"></span></h3>
<p>23 Jan 2020</p>
<h5>Changes</h5>
<ul>
<li>Added Skin editing mode</li>
<li>Added Help Menu</li>
<li>Added animation timeline markers</li>
<li>Added Front GUI Light option for item models</li>
<li>Added axis color indicators to number sliders</li>
<li>Transform offsets are now displayed in the status bar</li>
<li>Added actions to move keyframes back and forth</li>
<li>Added pre-particle effect script input for animations</li>
<li>Previous/Next Keyframe Beyframe buttons are now restricted to the current animator and channel</li>
<li>Added link to Sketchfab setup guide to Sketchfab upload success dialog</li>
<li>Painting tools now use a crosshair cursor</li>
<li>Brush now shows the brush target around the cursor in the UV editor panel</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/439">#439</a></span>&nbsp;add Box UV toggle for OptiFine JPM</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/496">#496</a></span>&nbsp;Downscale exported OBJ models by 16</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/509">#509</a></span>&nbsp;Option to use BoxUV templates on non box uv models</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/511">#511</a></span>&nbsp;Load background from clipboard</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Double clicking number slider doesn’t instantly reset value</li>
<li>Empty submenus are not hidden</li>
<li>JSON compiler doesn’t correctly write tab characters</li>
<li>Animated textures are not displayed correctly in UV editor</li>
<li>Cube pivots at default values are not exported in bedrock format</li>
<li>Incorrect parent class in exported 1.14 modded entity models</li>
<li>Box UV isn’t available in OptiFine Part format</li>
<li>Timeline box selection doesn’t scroll the timeline very smoothly</li>
<li>Fixed an issue with the dev-plugin folder path</li>
<li>Creating a template does not save uv mirroring into undo point</li>
<li>Pasting elements doesn’t update element rotation</li>
<li>Pasting locators does not create a unique name</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/452">#452</a></span>&nbsp;Line brush bleeds over UV region</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/459">#459</a></span>&nbsp;AutoUV resets UV mirrors</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/505">#505</a></span>&nbsp;UV overlay doesn’t resize itself correctly when zoomed in</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.3.0">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="322_-_A_Bugfix_Update"></span>3.2.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>22. Dec. 2019</p>
<h5>Changes</h5>
<ul>
<li>Improved plugin loading speed</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>UV editor sometimes uses incorrect vertical snapping resolution</li>
<li>Face UV templates do not generate texture for faces smaller than 0.5 pixel</li>
<li>Cannot use rotate gizmo in display gui due to flat angles</li>
<li>Issue with painting grid on invisible cubes</li>
<li>Display sliders disappear while using paint tools</li>
<li>Z-Axis is inverted in bedrock legacy model export</li>
<li>Keybindings for select widgets do not work correctly</li>
<li>Custom accent text color does not work</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/445">#445</a></span>&nbsp;OptiFine JPM- importing a missing face isn’t transparent</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/446">#446</a></span>&nbsp;OptiFine JEM- exporting messes up the UVs</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/447">#447</a></span>&nbsp;OptiFine JEM- some UVs are imported wrong</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/493">#493</a></span>&nbsp;Center pivot doesn’t work correctly when on multiple parent folders</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/497">#497</a></span>&nbsp;Hidden separators re-appear when resetting toolbar</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/501">#501</a></span>&nbsp;Texture appears as unsaved when opening a bbmodel</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/502">#502</a></span>&nbsp;Issue with JEM submodel translation</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.2.2">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="321_-_The_Countdown_Update"></span>3.2.1 – The Countdown Update<span class="ez-toc-section-end"></span></h3>
<p>17. Dec. 2019</p>
<h5>Changes</h5>
<ul>
<li>Added method to add setting categories</li>
<li>Added method to delete settings</li>
<li>Added setting to disable hover highlighting</li>
<li>Timelapse recorder now picks up numbering where the previous timelapse ended</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Display settings slots involving a cube reference do not load</li>
<li>Keyframe click boxes are larger than keyframes</li>
<li>Bar Select scrolling doesn’t trigger update method</li>
<li>UV coordinates on block models get exported incorrectly</li>
<li>Cube highlights are visible in screenshots</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/500">#500</a></span>&nbsp;Name sanitizing in outliner is not global</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.2.1">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="320_-_The_Color_Update"></span>3.2.0 – The Color Update<span class="ez-toc-section-end"></span></h3>
<p>15 Dec. 2019</p>
<h5>Changes</h5>
<ul>
<li>Color Palettes</li>
<li>Custom CSS Editor</li>
<li>New Theme format</li>
<li>Added Timelapse Recorder</li>
<li>Checkerboard background for UV Editor and Preview</li>
<li>Java Model (.java) import</li>
<li>Added cube highlighting</li>
<li>Added action to create a keyframe</li>
<li>Added instructions channel for animations</li>
<li>Keybind conflicts are now highlighted</li>
<li>Color Picker tool can now pick colors from background image</li>
<li>Added tabbing functionality to Outliner and slider text inputs</li>
<li>Slider inputs now support mathematical expressions</li>
<li>Improved user experience on touch devices</li>
<li>Added stylus support with pressure and tilt sensitivity</li>
<li>Added labels for toolbar widgets such as sliders</li>
<li>Ctrl + S can now save project files if the model was loaded from a project</li>
<li>Project files now include textures by default</li>
<li>Bedrock entity models now prompt to load the linked textures</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/479">#479</a></span>&nbsp;Scroll support for list selectors</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/413">#413</a></span>&nbsp;Feedback on remove blank faces</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/438">#438</a></span>&nbsp;add double clicking to the folder icon to open and close</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/471">#471</a></span>&nbsp;Bone support for free models</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/475">#475</a></span>&nbsp;Don’t run line brush if the line goes through 2 cubes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/488">#488</a></span>&nbsp;Dragging animation files into blockbench</li>
<li>Increased dragging threshold for panels</li>
<li>Added setting to deactivate format size limits</li>
<li>Support for 1.14 modded entity format</li>
<li>Added file inputs to dialog form API</li>
<li>Added API for custom settings</li>
<li>Updated Electron to 6.1.4</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/467">#467</a></span>&nbsp;Update Jimp.js to 0.8.5</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/468">#468</a></span>&nbsp;Update Sortable js to 1.10.1</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/469">#469</a></span>&nbsp;Update to Jquery 3.4.1</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>UV reverse select ignores uv editor offset</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/407">#407</a></span>&nbsp;Broken vertex snapping on rotated cubes/groups</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/431">#431</a></span>&nbsp;“Button” color selection tab at incorrect location on Layout settings</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/451">#451</a></span>&nbsp;Copy doesn’t work while on paint mode</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/453">#453</a></span>&nbsp;Add model imports same texture again when it already exists</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/455">#455</a></span>&nbsp;Rotated elements wont move relative to the group when using arrow keys</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/458">#458</a></span>&nbsp;Player Display Sides Swapped (Minor)</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/463">#463</a></span>&nbsp;Particle not exported if unused in the model (Minor, but a little annoying)</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/470">#470</a></span>&nbsp;Shift clicking object wont open folder path on bedrock mode</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/472">#472</a></span>&nbsp;Smoother snapping with arrow keys</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/474">#474</a></span>&nbsp;Duplicating cube in wireframe mode makes it invisible</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/437">#437</a></span>&nbsp;Non square textures are not properly supported when using per-face-UV</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/473">#473</a></span>&nbsp;Planes get resized incorrectly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/478">#478</a></span>&nbsp;Change north arrow color with grid color</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/484">#484</a></span>&nbsp;UV backround color is sometimes incorrect</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/486">#486</a></span>&nbsp;Deleted faces of Optifine Part get recreated when reloading</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/487">#487</a></span>&nbsp;Adding a .json on free model converts project into a java/block model</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/489">#489</a></span>&nbsp;Camera locks into place in “Quad-View”</li>
<li>Backups are not compressed</li>
<li>Bone Z axis is inverted</li>
<li>Event ‘process_chat_message’ doesn’t use the correct chat message instance</li>
<li>Scaling incorrectly scales formats with integer only cube sizes.</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.2.0">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="311_-_A_Bugfix_Update"></span>3.1.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>5 Sep. 2019</p>
<h5>Changes</h5>
<ul>
<li>You can now copy and paste keyframes of multiple bones at once</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/443">#443</a></span>&nbsp;The GIF recorder now hides grids and gizmos</li>
<li>Added warning message about saving java entity models only as class file</li>
<li>Creating new groups will now add them next to single selected elements instead of around them</li>
<li>Update to Electron 6.0.7</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Cannot delete animation update variable</li>
<li>Particles and sounds from animations do not get imported</li>
<li>Alt tool remains selected after Alt-tabbing out of the window</li>
<li>Locators cannot be moved using sliders</li>
<li>Locators display in global space</li>
<li>Locators can be selected in animation mode</li>
<li>Cannot correctly drag UV selection in box UV models with non-square textures</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/404">#404</a></span>&nbsp;Animations from previous versions are deleted</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/406">#406</a></span>&nbsp;Broken inflating tool</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/407">#407</a></span>&nbsp;Broken vertex snapping on rotated cubes/groups</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/416">#416</a></span>&nbsp;Fullscreen icon and rotation information are stacked on UV editor</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/420">#420</a></span>&nbsp;Painting on missing textures is possible</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/423">#423</a></span>&nbsp;Blockbench project model doesn’t save Project texture resolution</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/424">#424</a></span>&nbsp;Move axis rotated on groups that contain rotated cubes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/426">#426</a></span>&nbsp;AutoUV doesn’t work on elements that are larger than 16 units</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/427">#427</a></span>&nbsp;UV info text not locked on camera view</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/428">#428</a></span>&nbsp;Windows taskbar includes textures on recent list</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/430">#430</a></span>&nbsp;Screen jittering when hovering last keybind setting</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/432">#432</a></span>&nbsp;Cancel button on Display skin resets skin</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/440">#440</a></span>&nbsp;Wrong UV on valid OptiFine JPM</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/441">#441</a></span>&nbsp;Toggling Wireframe shows what was hidden</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/442">#442</a></span>&nbsp;Popup top bar wont work when on top of main top bar</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/444">#444</a></span>&nbsp;Slight offset on perspective views after opening .bbmodel files</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.1.1">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="310_-_The_Timeline_Update"></span>3.1.0 – The Timeline Update<span class="ez-toc-section-end"></span></h3>
<p>17 Aug. 2019</p>
<h5>Changes</h5>
<ul>
<li>Timeline now supports multiple bones at once</li>
<li>Added rectangular keyframe selector</li>
<li>Added sound and particle keyframes</li>
<li>Added improved JPM import/exporter</li>
<li>Control-click on the palette will now remove colors</li>
<li>Added maximum recent projects setting</li>
<li>Action Control now displays keybindings</li>
<li>Double clicking on num slider now resets it to 0</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/398">#398</a></span>&nbsp;Select models by texture</li>
<li>Added function to reverse keyframe order</li>
<li>Flipping now works on keyframes</li>
<li>Made quad view and side views accessible in animation mode</li>
<li>Paint Mode no longer resets animation poses</li>
<li>Style menu now uses built-in color pickers</li>
<li>Design improvements</li>
<li>New font, now consistend across all devices</li>
<li>Bedrock legacy format now has an individual icon</li>
<li>Plugins now support all icon types</li>
<li>Pivot tool gizmo now has a centerpiece to distinguish it from regular gizmo</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>App sometimes does not relaunch after update</li>
<li>Save button does not ask to save new animations</li>
<li>Vertex snap does not calculate offset correctly in entity models</li>
<li>Inflate slider ignores size limit</li>
<li>Orthographic side grids are visible in screenshots</li>
<li>Shift clicking in paint mode would select bone</li>
<li>Positions of invisible cubes were not always calculated correctly</li>
<li>Orthographic quad viewport camera angles are offset</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/389">#389</a></span>&nbsp;Using SHIFT key to draw straight lines selects cubes while in paint mode</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/390">#390</a></span>&nbsp;Auto UV grid wont detect 48x</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/392">#392</a></span>&nbsp;When canceling a save blockbench will save it as undefined.json</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/393">#393</a></span>&nbsp;Modifying the layout crashes the app</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/395">#395</a></span>&nbsp;Remove blank faces doesn’t work</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/396">#396</a></span>&nbsp;Multi-selection on Mac is done with Ctrl rather than Command</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/397">#397</a></span>&nbsp;Line brush doesn’t work sometimes correctly when clicking near face side</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.1.0">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="306_-_A_Bugfix_Update"></span>3.0.6 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>1 Aug. 2019</p>
<h5>Changes</h5>
<ul>
<li>Added help message for automatic updates that fail due to an unreliable internet connection</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Cannot open bedrock legacy models</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.6">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="305_-_The_Resolution_Update"></span>3.0.5 – The Resolution Update<span class="ez-toc-section-end"></span></h3>
<p>1 Aug. 2019</p>
<h5>Changes</h5>
<ul>
<li>Brought back changed resolution dialog</li>
<li>Project texture size now affects auto UV mapping</li>
<li>Added 128x and 256x UV grid options</li>
<li>Pivot Tool now works in Animation Mode</li>
<li>Added action to duplicate animations</li>
<li>Added action to toggle painting grid</li>
<li>Bedrock models now render as double side again</li>
<li>Blockmodels now save the origin even if there is no rotation</li>
<li>Shift + left click now selects entire bones</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Issues with per-face UV mapping on Bedrock models</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/385">#385</a></span>&nbsp;Bedrock 1.12.0 format rotated cubes have inverse Z rotation ingame</li>
<li>Inflate does not count towards canvas restriction</li>
<li>Vertex Snap and Pivot Tool ignore canvas restriction</li>
<li>Undoing keyframe changes can create ghost keyframes</li>
<li>UV rotation option is visible on Bedrock models</li>
<li>Issues with transform gizmo orientation</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.5">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="304_-_A_Bugfix_Update"></span>3.0.4 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>26 Jul. 2019</p>
<h5>Changes</h5>
<ul>
<li>Locators now work in Bedrock Legacy models</li>
<li>Creating new models now opens the Project dialog</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>UV editor is visible in Modded Java mode when an empty bone is selected</li>
<li>Default folder for new textures is “blocks” instead of “block”</li>
<li>Deleting elements while hovering over the transform gizmo breaks canvas interaction</li>
<li>Origin and vertex gizmos don’t always scale with view</li>
<li>Cubes cannot be resized to 0 if the size is smaller than the interval</li>
<li>Creating elements causes problems in Sessions due to stringified data structure</li>
<li>Box UV toggle it not hidden in modes where it should be disabled</li>
<li>Export path of .java models is not remembered</li>
<li>Inflate slider does not appear in right order in size toolbar</li>
<li>Auto size in UV menu does not respect rotation</li>
<li>Resetting UV face does not fully update preview</li>
<li>Generating template with multi assigned textures does not correctly configure UV mirror</li>
<li>Fixed typo in issue template</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/374">#374</a></span>&nbsp;Grid is too high in other modes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/382">#382</a></span>&nbsp;RendererModels aren’t initialized in the correct order when exporting a modded entity to .java</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.4">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="303_-_A_Bugfix_Update"></span>3.0.3 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>21. Jul. 2019</p>
<h5>Changes</h5>
<ul>
<li>Space bar now swaps between alt tools</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Double update notification</li>
<li>Bedrock model cube names are not supported by model format</li>
<li>Overwrite does not save animations</li>
<li>Issues in animation after removing bones</li>
<li>Pasting groups does not correctly set up bone structure</li>
<li>Animation mode overwrites custom particles and sounds</li>
<li>Inflate slider is not present by default</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/370">#370</a></span>&nbsp;Blockbench doesn’t open model when Blockbench is already open</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/379">#379</a></span>&nbsp;Exporting Bedrock Entities</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/378">#378</a></span>&nbsp;File extensions are not automatically added on Linux</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.3">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="302_-_A_Bugfix_Update"></span>3.0.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>19. Jul. 2019</p>
<h5>Changes</h5>
<ul>
<li>Added Element Panel for desktop devices</li>
<li>Added Add Locator button to edit menu</li>
<li>Reverted save keybindings to old defaults</li>
<li>Moved “Free” model format to bottom of list to help people who don’t read</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Inputs in the scale dialog are not aligned</li>
<li>Dialogs on mobile app spawn offcentered</li>
<li>Cube names in bedrock models are not imported</li>
<li>Clipboard does not work for groups</li>
<li>Removing elements via X button doesn’t delete full selection</li>
<li>Area Selection tool selects invisible cubes</li>
<li>Template generator assigns spots multiple times</li>
<li>Plugin loader does not correctly load new local plugins</li>
<li>Button to select scale overflow does not always work</li>
<li>Main preview on mobile app sometimes disappears after using sidebar</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/372">#372</a></span>&nbsp;move the camera origin to the center in other modes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/342">#342</a></span>&nbsp;Download archive keybind on desktop app version.</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/362">#362</a></span>&nbsp;.OBJ export wont export images nor .mtl file</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/364">#364</a></span>&nbsp;Theme settings go over border when zoomed in</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/368">#368</a></span>&nbsp;Overwrite model and settings on same default keybind (CTRL/CMD+E)</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.2">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="301_-_A_Bugfix_Update"></span>3.0.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>17. Jul. 2019</p>
<h5>Bugfixes</h5>
<ul>
<li>Window does not display on Mac</li>
<li>Unable to create groups</li>
<li>Keybinds are converted to Mac format on Windows</li>
<li>Cannot move rotated cubes on world axis</li>
<li>Not centered transform controls caused by origin offset on not-rotated cubes</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.1">Download Page</a></li>
</ul>
<h2 id="3.0"><span class="ez-toc-section" id="300_-_The_Format_Update"></span>3.0.0 – The Format Update<span class="ez-toc-section-end"></span></h2>
<p>17 Jul. 2019</p>
<h5>Changes</h5>
<ul>
<li>Added Start Screen</li>
<li>Added format system. Each format is tailored for a specific output.</li>
<li>Added 1.12 bedrock model format, supporting per-cube-rotations</li>
<li>Added per-face UV for Bedrock and OptiFine entity models</li>
<li>Added Locators</li>
<li>New frameless design</li>
<li>New custom UI layout for mobile devices</li>
<li>You can now display multiple animations simultaneously</li>
<li>Added crossbow to display mode</li>
<li>Added search bar to settings and keybindings menu</li>
<li>Added button to turn UV mapping</li>
<li>Added model stats window (simply click on the element counter)</li>
<li>Side views now show a grid</li>
<li>Added line brush: Press shift to draw lines</li>
<li>Added wireframe enabled/disabled message</li>
<li>Added support for extra mouse buttons</li>
<li>Added desktop notifications</li>
<li>Made timeline snappier</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/300">#300</a></span>&nbsp;Clickable link on chat</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/314">#314</a></span>&nbsp;Action to remove all faces with blank texture</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/313">#313</a></span>&nbsp;Swap UV scales button</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/305">#305</a></span>&nbsp;Save Edit Sessions username to local storage</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/336">#336</a></span>&nbsp;Compress texture without creating duplicate textures for co-located UVs</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/339">#339</a></span>&nbsp;Painting grid</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/354">#354</a></span>&nbsp;Minimum noise opacity slider</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/358">#358</a></span>&nbsp;Allow adding multiple models at once</li>
</ul>
<h5>Internal Changes</h5>
<ul>
<li>Updated Electron to 5.0.6</li>
<li>Updated ThreeJS to 105</li>
<li>Updated VueJS to 2.6.10</li>
<li>Updated to Fontawesome 5.8</li>
<li>Switched to MolangJS</li>
<li>Added support for other element types in the outliner</li>
<li>Modular feature system for model formats</li>
<li>Improved the plugin API</li>
<li>Markdown support for plugin descriptions, dialogs etc.</li>
<li>Project files and backups are now compressed using lzutf8.js</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Flipping a bone creates broken undo point</li>
<li>Deleting a texture from hard drive unloads that texture</li>
<li>Rotation gizmo in animation mode limited to 360° range</li>
<li>CMD key on MacOS cannot be used for keybindings</li>
<li>Resetting a keyframe does not update Molang text boxes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/356">#356</a></span>&nbsp;Rel. Auto UV abbreviation messing up search function</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/309">#309</a></span>&nbsp;Cannot drag UV area outside of UV box when zoomed in</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/349">#349</a></span>&nbsp;Non zoomed UV can be dragged</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/302">#302</a></span>&nbsp;No exit/cancel button on extrude image</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/304">#304</a></span>&nbsp;Extrude Image dialog has old style dropdown</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/303">#303</a></span>&nbsp;Extruded image wont find image path on webapp</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/325">#325</a></span>&nbsp;Entity .bbmodel gets saved as bedrock entity model with quick save</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/317">#317</a></span>&nbsp;Undo doesn’t work after pasting an animation keyframe value</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/340">#340</a></span>&nbsp;Cannot rename animations, cubes or groups with F2</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/337">#337</a></span>&nbsp;Painting after editing a texture on other program will undo edits made in that</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/348">#348</a></span>&nbsp;Grid resolution affects paint tool settings</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/342">#342</a></span>&nbsp;Download archive keybind on desktop app version</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/310">#310</a></span>&nbsp;Doubleclicking visibility button activates renaming</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/320">#320</a></span>&nbsp;Blockbench’s MoLang parser is case sensitive</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/327">#327</a></span>&nbsp;Pressing enter on Sketchfab upload description will submit model instead of changing row</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/332">#332</a></span>&nbsp;Play animation button wont appear when importing texture containing an animation</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v3.0.0">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="267_-_A_Bugfix_Update"></span>2.6.7 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>29 Jun. 2019</p>
<h5>Bugfixes</h5>
<ul>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/301">#301</a></span>&nbsp;Counter clockwise rotate rotates UV incorrectly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/311">#311</a></span>&nbsp;Incorrect UV rotating/mirroring with cube rotate</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/321">#321</a></span>&nbsp;Animation “Override” option is saved incorrectly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/322">#322</a></span>&nbsp;Animation update variable isn’t saved</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/324">#324</a></span>&nbsp;Invalid .bbmodel files with saving</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/328">#328</a></span>&nbsp;Exported Animations Broken?</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/333">#333</a></span>&nbsp;Scale tool wont cancel UV correctly on entity mode</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/334">#334</a></span>&nbsp;Scale keyframe only saves the x value</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/347">#347</a></span>&nbsp;Pasting textures cannot be undone on entity mode</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v2.6.7">Download Page</a></li>
</ul>
<h3><span class="ez-toc-section" id="266_-_The_Chat_Update_2"></span>2.6.6 – The Chat Update (2)<span class="ez-toc-section-end"></span></h3>
<p>12 Apr. 2019</p>
<h5>Bugfixes</h5>
<ul>
<li>Edit Session syncing only works one way</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/299">#299</a></span>&nbsp;Session wont end when webapp host closes Blockbench</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://blockbench.net/downloads/#v2.6.6">Download Page</a></li>
</ul>
<h3 id="2.6.5"><span class="ez-toc-section" id="265_-_The_Chat_Update"></span>2.6.5 – The Chat Update<span class="ez-toc-section-end"></span></h3>
<p>12 Apr. 2019</p>
<h5>Changes</h5>
<ul>
<li>Added Chat</li>
<li>Action Control now displays keybindings while holding ALT</li>
<li>Various improvements to sessions</li>
<li>Improved Sketchfab uploader</li>
<li>Added project export format to file menu</li>
<li>Added Markdown link support to dialog texts</li>
<li>Added select type to dialog form api</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li style="list-style-type: none;">
<ul>
<li>Creating templates doesn’t correctly sync in sessions</li>
<li>Moving multiple keyframes does not work correctly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/293">#293</a></span>&nbsp;Download archive doesn’t save textures</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/291">#291</a></span>&nbsp;Scale gets increased while dragging UV</li>
</ul>
</li>
</ul>
<p>users</p>
<ul>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/290">#290</a></span>&nbsp;Extruded textures wont be applied nor updated to session clients</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/289">#289</a></span>&nbsp;Project options aren’t shared on sessions</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/288">#288</a></span>&nbsp;Cube color or texture changes wont update for other users</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/286">#286</a></span>&nbsp;Cube and group renaming gets interrupted by actions by other</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/282">#282</a></span>&nbsp;Unable to change UV Grid</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.5/Blockbench_2.6.5.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.5/Blockbench_2.6.5_amd64.deb">Linux Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.5/Blockbench_32bit_2.6.5.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.5/Blockbench_2.6.5.dmg">macOS Installer</a></li>
</ul>
<h3 id="2.6"><span class="ez-toc-section" id="260_-_The_Connection_Update"></span>2.6.0 – The Connection Update<span class="ez-toc-section-end"></span></h3>
<p>07 Apr. 2019</p>
<h5>Changes</h5>
<ul>
<li>Edit Sessions: Collaborate with users all over the world</li>
<li>Added Sketchfab uploader</li>
<li>Made UV Editor zoomable and tweaked design</li>
<li>Added Color Selector panel</li>
<li>Added form function to dialog API</li>
<li>Added reverse selection through clicking in the UV editor</li>
<li>Added option to change the center when using the scale interface</li>
<li>Option to define keybindings for sliders and dropdown menus</li>
<li>Scale animations now work on all axes individually</li>
<li>Added backup recovery dialog</li>
<li>Added button to reset values of selected keyframes</li>
<li>Turntable option for the GIF recorder</li>
<li>Action Control now displays the description of the selected action</li>
<li>Saving now also saves animation if possible</li>
<li>Added setting to show element colors in the outliner</li>
<li>Textures now display specific error messages</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/267">#267</a></span>&nbsp;Option to generate texture to the nearest power of 2</li>
<li>New Language: Portuguese</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Moving the origin of a bone without selecting the content displays incorrect positions</li>
<li>Undo doesn’t reliably work for animations</li>
<li>Scrollbars use default OS design on Firefox</li>
<li>Pulled Bow display slot uses wrong position</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/245">#245</a></span>&nbsp;Negative cubes are displayed incorrectly on display mode</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/260">#260</a></span>&nbsp;Face Borders inaccurate for paint tool</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/261">#261</a></span>&nbsp;Textures reset to default naming when loading a model</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/263">#263</a></span>&nbsp;Ghost cubes after undoing added model</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/268">#268</a></span>&nbsp;Template generator creates black template if color isn’t transparent</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/270">#270</a></span>&nbsp;Selected cubes wont be unselected after selecting a group</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/273">#273</a></span>&nbsp;Toggle UV Overlay glitch</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/274">#274</a></span>&nbsp;Color picker appears at wrong location if applied to UV window toolbars</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/276">#276</a></span>&nbsp;Color palette offset if using zoom</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/277">#277</a></span>&nbsp;Undo wont update on paint tools with opened models</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/278">#278</a></span>&nbsp;Delete button doesn’t delete empty folders</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/281">#281</a></span>&nbsp;Model disappears when going to display mode while moving camera</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.0/Blockbench_2.6.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.0/Blockbench_2.6.0_amd64.deb">Linux Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.0/Blockbench_32bit_2.6.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.6.0/Blockbench_2.6.0.dmg">macOS Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="251_-_The_Texture_Crisis_Update"></span>2.5.1 – The Texture Crisis Update<span class="ez-toc-section-end"></span></h3>
<p>11 Mar. 2019</p>
<h5>Bugfixes</h5>
<ul>
<li>Importing block models does not import textures</li>
<li>Texture namespace does not load into texture menu</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/261">#261</a></span>&nbsp;Textures reset to default naming when loading a model</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/264">#264</a></span>&nbsp;Texture delete button not translated</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.1/Blockbench_2.5.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.1/Blockbench_2.5.1_amd64.deb">Linux Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.1/Blockbench_2.5.1.dmg">macOS Installer</a></li>
</ul>
<h3 id="2.5"><span class="ez-toc-section" id="250_-_The_Dragging_Update"></span>2.5.0 – The Dragging Update<span class="ez-toc-section-end"></span></h3>
<p>09 Mar. 2019</p>
<h5>Changes</h5>
<ul>
<li>Added Pivot Tool</li>
<li>Added animation timeline bar</li>
<li>Added animation playback speed slider and back/forth buttons</li>
<li>Improved drag &amp; drop in outliner</li>
<li>Added texture resolution label</li>
<li>New file format for Blockbench backups</li>
<li>Added zip archive exporter for web app</li>
<li>OptiFile JEM Models now support nested bones</li>
<li>Added inflate for block/item mode</li>
<li>Added interface for keybind recording</li>
<li>Allow drawing on cubes with a depth of 0</li>
<li>Improved rendering on high DPI screens</li>
<li>Screenshots taken in GUI Slot display mode will now be cropped to the slot size</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Fill tool on Cube-mode does not work with dragging</li>
<li>Copy-pasting filled groups does not work</li>
<li>Missing undo registration for UV-pasting</li>
<li>Box-UV-Overlay disappears after dragging</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/259">#259</a></span>&nbsp;Paint tool doesn’t work correctly when painting over transform indicators</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/246">#246</a></span>&nbsp;Undo doesn’t work while UV window or full view is active</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/256">#256</a></span>&nbsp;Flip tool doesn’t paste faces correctly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/257">#257</a></span>&nbsp;Removing transparent face takes 2 undo actions</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/248">#248</a></span>&nbsp;UV copy paste text missing from full view window</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/251">#251</a></span>&nbsp;Can’t export to OBJ | Cannot read property ‘id’ of undefined</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/252">#252</a></span>&nbsp;Animation texture not playing on cubes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/255">#255</a></span>&nbsp;Extruded textures don’t have their textures</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.0/Blockbench_2.5.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.0/Blockbench_32bit_2.5.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.0/Blockbench_2.5.0.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.5.0/Blockbench_2.5.0.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="240_-_The_Action_Control_Update"></span>2.4.0 – The Action Control Update<span class="ez-toc-section-end"></span></h3>
<p>03. Feb. 2019</p>
<h5>Changes</h5>
<ul>
<li>Press F to open Action Control: New interface to search and execute actions</li>
<li>Added modes for the fill tool</li>
<li>Added preview brightness option in the menu</li>
<li>Added toolbar below the UV editor for entity mode</li>
<li>Option to show all UV template overlays at once</li>
<li>Option to compress texture templates</li>
<li>Option in the scale window to select all clipping cubes</li>
<li>Blockbench now keeps local Plugins loaded after restart</li>
<li>Added option to apply texture to all blank faces</li>
<li>Dragging a bone in Entity mode now moves the bone origins</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Copy/Paste in text fields does not work on Mac</li>
<li>Origin to Geometry does not work with multiple elements</li>
<li>Opening a second instance of Blockbench resets user customizations</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/239">#239</a></span>&nbsp;Display scale reset button resets to 0 instead of 1</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/241">#241</a></span>&nbsp;Toggling wireframe on animation mode wont display modified frame correctly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/242">#242</a></span>&nbsp;Quad view opens in animation mode when using Tab keybind</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/237">#237</a></span>&nbsp;Display scale mirror inverts after saving</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#226</a></span>&nbsp;Eraser, fill &amp; color picker tools don’t work on UV editor window</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#224</a></span>&nbsp;Preview Skin Torso is displayed mirrored on front and back</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#240</a></span>&nbsp;Rotate tool doesn’t work on normal 1st person view</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#238</a></span>&nbsp;48x textures cannot be dragged to corners</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#236</a></span>&nbsp;Incorrect UV values with zoom</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#244</a></span>&nbsp;Fill tool wont fill subpixel areas correctly</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#225</a></span>&nbsp;Area select tool selects hidden cubes</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#227</a></span>&nbsp;Cant Export as Blockmodel or Save</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#222</a></span>&nbsp;East relative-auto-UV is upside down</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#230</a></span>&nbsp;Color picker doesn’t copy transparency values</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#231</a></span>&nbsp;Image editor error</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/2">#243</a></span>&nbsp;Group folders cannot be duplicated with keybinds</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.4.0/Blockbench_2.4.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.4.0/Blockbench_32bit_2.4.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.4.0/Blockbench_2.4.0.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.4.0/Blockbench_2.4.0.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="232_-_A_Bugfix_Update"></span>2.3.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>09. Jan. 2019</p>
<h5>Changes</h5>
<ul>
<li>Press Escape key to cancel changes made with the transform gizmo</li>
<li>Blockbench now draws plugins from the Github plugin repo instead of its web server</li>
<li>Update to Electron 4.0.1</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Dragging timeline marker only works within timeline head area</li>
<li>Issues with undoing keyframe edits</li>
<li>MacOS installer missing</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/217">#217</a></span>&nbsp;Lefthand display problem</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.2/Blockbench_2.3.2.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.2/Blockbench_32bit_2.3.2.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.2/Blockbench_2.3.2.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.2/Blockbench_2.3.2.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="231_-_A_Bugfix_Update"></span>2.3.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>29. Dec. 2018</p>
<h5>Changes</h5>
<ul>
<li>Blockbench now automatically detects and sets the format version for bedrock models</li>
<li>Added back scrolling on sliders</li>
<li>Tool shortcuts will now switch modes to allow selecting the tool</li>
<li>Library Updates: (Electron: 2.0.0 &gt; 4.0.0, VueJS: 2.5.16 &gt; 2.5.21)</li>
<li>Overall performance improvement caused by the Electron update. It is recommended to use the installer to update to this version.</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Rotation gizmo glitches with Restricted Rotations enabled</li>
<li>Origin duplication caused by the rotate tool/sliders</li>
<li>Transform &gt; Scale… does not change bone origins</li>
<li>Template generator does not work in entity mode</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.1/Blockbench_2.3.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.1/Blockbench_32bit_2.3.1.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.1/Blockbench_2.3.1_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="230_-_The_Tool_Update"></span>2.3.0 – The Tool Update<span class="ez-toc-section-end"></span></h3>
<p>27. Dec. 2018</p>
<h5>Changes</h5>
<ul>
<li>Added Rotation Tool</li>
<li>Added Modes</li>
<li>Transform Gizmos now work in Display and Animation Mode</li>
<li>Split Brush into 4 seperate tools</li>
<li>Made Brush about 24 times faster</li>
<li>The Texture Template Generator can now copy existing textures</li>
<li>Added function to automatically clear old backups (Can be changed in Settings)</li>
<li>Added Progress Bar for GIF Recording</li>
<li>Added Cancel-button for screenshots</li>
<li>Undo now works in Display Mode</li>
<li>Bones now automatically prevent duplicate names</li>
<li>Library updates: (Three.JS: r99)</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Invisible cubes reappear after using Transform &gt; Rotate</li>
<li>GIF recorder records while processing the GIF instead of before</li>
<li>Undo only saves one texture when painting across multiple in one strike</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/191">#191</a></span>&nbsp;Selection outline disappears in some viewing angles</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/206">#206</a></span>&nbsp;Grid smaller than 64 is not possible</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/208">#208</a></span>&nbsp;Export to .java entity model issue</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.0/Blockbench_2.3.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.0/Blockbench_32bit_2.3.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.0/Blockbench-2.3.0.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.3.0/Blockbench_2.3.0_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="222_-_A_Bugfix_Update"></span>2.2.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>16. Dec. 2018</p>
<h5>Changes</h5>
<ul>
<li>Added language: Swedish</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Blockmodel exporter broken</li>
<li>Interface resizers hidden</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/204">#204</a></span>&nbsp;Transparent faces won’t be copied when duplicating a cube</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.2/Blockbench_2.2.2.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.2/Blockbench_32bit_2.2.2.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.2/Blockbench-2.2.2.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.2/Blockbench_2.2.2_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="221_-_A_Bugfix_Update"></span>2.2.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>16. Dec. 2018</p>
<h5>Changes</h5>
<ul>
<li>Added X-Ray outline option</li>
<li>Performance improvements and other tweaks</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Block model rotations don’t export correctly after using Transform &gt; Rotate</li>
<li>Editing an animation marks the model as unsaved</li>
<li>Update Project Resolution message appears when it should not</li>
<li>Changing the grid resolution does not visually update the grid</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/197">#197</a></span>&nbsp;Head Preview of Player Model too low</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/198">#198</a></span>&nbsp;Vertex snap cubes wont be hidden when taking a model screenshot</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/200">#200</a></span>&nbsp;Can’t Copy/Paste in Display Mode</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.1/Blockbench_2.2.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.1/Blockbench_32bit_2.2.1.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.1/Blockbench-2.2.1.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.1/Blockbench_2.2.1_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="220_-_The_GIF_Update"></span>2.2.0 – The GIF Update<span class="ez-toc-section-end"></span></h3>
<p>2. Dec. 2018</p>
<h5>Changes</h5>
<ul>
<li>Added GIF recorder</li>
<li>Added .java class model exporter</li>
<li>Made keyframes snap to other keyframes</li>
<li>Added mirror option to display mode</li>
<li>New menu to change background position</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Origin indicator does not work for empty groups</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/195">#195</a></span>&nbsp;Paint tools color selector doesn’t open from correct location</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/196">#196</a></span>&nbsp;UV editor toolbar menu breaks</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/77">#77</a></span>&nbsp;Image Extrusion Error</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/183">#183</a></span>&nbsp;Keyframe creation buttons are displayed wrongly with different interface zoom settings</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/181">#181</a></span>&nbsp;Can’t delete groups</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/186">#186</a></span> Preview skin overlay is too big</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/138">#138</a></span> Unable to use brush on some faces</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.0/Blockbench_2.2.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.0/Blockbench_32bit_2.2.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.0/Blockbench-2.2.0.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.2.0/Blockbench_2.2.0_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="210_-_The_Animation_Update"></span>2.1.0 – The Animation Update<span class="ez-toc-section-end"></span></h3>
<p>11. Nov. 2018</p>
<h5>Changes</h5>
<ul></ul>
<ul>
<li>Added animation interface</li>
<li>Player reference model now supports layers and slim arms</li>
<li>Added material option for bones</li>
<li>Added back keybindings to switch camera angles</li>
<li>Added new languages: Chinese and Polish</li>
<li>Added loading error message</li>
<li>Option to Alt+click on an action to change it’s keybind</li>
<li>Improved performance</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Transform controls are often not positioned at the element</li>
<li>Exporting an already saved texture corrupts file</li>
<li>Pressing Enter in the color picker does not save current texture to the palette</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/51">#51</a></span>&nbsp;Inner cube textures don’t render inside an outer cube with transparent texture</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/126">#126</a></span>&nbsp;The UV of the reference models are wrong</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/157">#157</a></span>&nbsp;Player skin broken with skin is slim/Alex</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/161">#171</a></span>&nbsp;Quad view top right pane resets</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/176">#167</a></span>&nbsp;Visibility of groups is saved</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/161"><span class="text-gray-light">#177</span></a>&nbsp;Rescale selection doesn’t restore (Unable to change rescale axis)</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.1.0/Blockbench_2.1.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.1.0/Blockbench_32bit_2.1.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.1.0/Blockbench-2.1.0.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.1.0/Blockbench_2.1.0_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="202_-_A_Bugfix_Update"></span>2.0.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>23. Oct. 2018</p>
<h5>Changes</h5>
<ul></ul>
<ul>
<li>Added bone parenting support for entity models</li>
<li>Added new languages: French and Russian</li>
<li>Menu bar menues now close when clicking on the menu bar text again.</li>
<li>Added keybinds to move cubes relative to the viewer (removed in 2.0.0)</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Brush line does not connect when moving to fast</li>
<li>Auto UV mapping issues</li>
<li>Brush offset in the UV editor on higher resolutions</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/161"><span class="text-gray-light">#161</span></a>&nbsp;Cube name exports even when at default value</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/141"><span class="text-gray-light">#159</span></a>&nbsp;Issue with UV Size slider</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/150"><span class="text-gray-light">#150</span></a>&nbsp;Missing Convert Model translation</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/165">#16</a>5</span>&nbsp;Updating textures only works 10 times after start</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/144"><span class="text-gray-light">#144</span></a>&nbsp;Can’t export as Optifine JPM</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/155"><span class="text-gray-light">#155</span></a>&nbsp;Particle texture causes error on model import</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/164"><span class="text-gray-light">#164</span></a>&nbsp;Invisible cubes don’t update when wireframe mode is changed</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/151"><span class="text-gray-light">#151</span></a>&nbsp;UV dialog sliders are stacked in entity mode</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/167"><span class="text-gray-light">#167</span></a>&nbsp;Missing textures cause model to break</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/170">#17</a>0</span>&nbsp;Complex rotations don’t import</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.2/Blockbench_2.0.2.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.2/Blockbench_32bit_2.0.2.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.2/Blockbench-2.0.2.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.2/Blockbench_2.0.2_amd64.deb">Linux Installer</a></li>
</ul>
<h3><span class="ez-toc-section" id="201_-_A_Bugfix_Update"></span>2.0.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>18. Oct. 2018</p>
<h5>Changes</h5>
<ul></ul>
<ul>
<li>Removed unsupported mobile tab system in favor of the desktop website</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Import dialog on macOS does not work with file extensions</li>
<li>Unable to export entity model</li>
<li>Color Picker does not save transparent textures</li>
<li>Color Picker does not change the template color</li>
<li>Missing translation for UV keybinding category</li>
<li>Error when displaying animated texture</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/141"><span class="text-gray-light">#143</span></a>&nbsp;Import Style button does not work (+Export)</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.1/Blockbench_2.0.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.1/Blockbench_32bit_2.0.1.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.1/Blockbench-2.0.1.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.1/Blockbench_2.0.1_amd64.deb">Linux Installer</a></li>
</ul>
<h2><span class="ez-toc-section" id="200_-_The_Action_Update"></span>2.0.0 – The Action Update<span class="ez-toc-section-end"></span></h2>
<p>17. Oct. 2018</p>
<h5>Features</h5>
<ul>
<li>Language Option (English, Dutch, German, Japanese, Spanish, more coming soon)</li>
<li>Quad Preview</li>
<li>Customizable Interface and Toolbars</li>
<li>Area Selector</li>
<li>New Optifine entity exporter</li>
<li>New Rotation System, allows fine rotations for OBJ Models</li>
<li>Entity Mode Preview Icons</li>
<li>Color Palette for the Color Picker</li>
<li>Automated Backups</li>
<li>Plugin Information Cards</li>
<li>Texture Namespace support</li>
<li>Option to select Default Image Editor for Textures</li>
<li>Option to change the Display Mode Skin</li>
</ul>
<h5>Changes</h5>
<ul>
<li>Optifine model import support</li>
<li>Improved Auto UV System</li>
<li>TGA Import Support</li>
<li>Move Relative Option now available in Entity Mode</li>
<li>Removed the bitmap/link system for textures, now handles mode automatically</li>
<li>Option to change the location of all loaded texture at once</li>
<li>Enabled double side rendering for display and entity mode</li>
<li>Improved template texture generator, now also available for block models</li>
<li>Settings and Keybindings are now sorted in categories</li>
<li>New, clearer design for context menues and tooltips</li>
<li>Added new custom icons</li>
</ul>
<h5>Technical Changes</h5>
<ul>
<li>Complete rewrite of the undo system</li>
<li>New “Action” system that handles all keybinds, toolbars and menues</li>
<li>New import, export and file drop API.</li>
<li>Library updates: (Electron: 1.8.4 &gt; 2.0.0, Three.JS: 84 &gt; 92, FileSaver: &gt; 1.3.8)</li>
</ul>
<h5>Bugfixes</h5>
<ul>
<li>Copy and pasting UV faces does not work properly in Entity Mode</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/141"><span class="text-gray-light">#141</span></a>&nbsp;Invisible Cube when switching visibility in wireframe mode</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/141"><span class="text-gray-light">#140</span></a>&nbsp;An error occurs when view a zero-sized cube in wireframe mode</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/125"><span class="text-gray-light">#125</span></a>&nbsp;Large context menues are partly unreachable</li>
<li><span class="text-gray-light"><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/118">#11</a>8</span>&nbsp;Move/Scale not working properly when a bone is rotated</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/135"><span class="text-gray-light">#135</span></a>&nbsp;Web App Files incompatible with PC version</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/124"><span class="text-gray-light">#124</span></a>&nbsp;Apply on all Slots isn’t applying to all slots</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/120"><span class="text-gray-light">#120</span></a>&nbsp;vertex snapping and wireframe mode throw errors when an element is selected and you do an action</li>
<li><a class="link-gray-dark" target="_blank" rel="noopener noreferrer" href="https://github.com/JannisX11/blockbench/issues/121"><span class="text-gray-light">#121</span></a>&nbsp;Optifine’s entity model don’t export with rotation</li>
<li>Exporting an entity model does not update the status bar</li>
<li>While using the drag tool cubes exceed the 3x3x3 limit.</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.0/Blockbench_2.0.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.0/Blockbench_32bit_2.0.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.0/Blockbench-2.0.0.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v2.0.0/Blockbench_2.0.0_amd64.deb">Linux Installer</a></li>
</ul>
<h3 id="1.11.6"><span class="ez-toc-section" id="1116_-_A_Bugfix_Update"></span>1.11.6 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>7. May 2018</p>
<h5>Changes</h5>
<ul class="list">
<li>Added new JSON exporter</li>
<li>Improved JSON importer</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Fixed updating issues with invisible elements</li>
<li>Converting entity model to block model does not work</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.6/Blockbench_1.11.6.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.6/Blockbench_32bit_1.11.6.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.6/Blockbench-1.11.6.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.6/Blockbench_1.11.6_amd64.deb">Linux Installer</a></li>
</ul>
<div class="textbox wow fadeInUp">
<h3 id="1.11.5"><span class="ez-toc-section" id="1115_-_More_Than_A_Bugfix_Update"></span>1.11.5 – More Than A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>28. Apr. 2018</p>
<h5>Changes</h5>
<ul class="list">
<li>If textures of entity models are missing, Blockbench now uses textures from the default path.</li>
<li>Added cube count in entity model import list</li>
<li>Enabled auto UV for models with no defined UV coordinates</li>
<li>UV Shift now affects all elements for consistency</li>
<li>The resize tool now scales relative to the previous size</li>
<li>Added more error dialogs for invalid model files</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Unable to merge block models via Add &gt; Model</li>
<li>UV mapping in entity mode does not round numbers correctly</li>
<li>UV shifting does not update the preview</li>
<li>Opening texture folders does not work</li>
<li>Resolution does not default to 64×64 in entity mode</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/101" rel="noopener noreferrer">#113</a><span>&nbsp;</span>OBJ exporter does not export transparent faces correctly</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.5/Blockbench_1.11.5.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.5/Blockbench_32bit_1.11.5.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.5/Blockbench-1.11.5.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.5/Blockbench_1.11.5_amd64.deb">Linux Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.11.2"><span class="ez-toc-section" id="1112_-_The_2nd_FPS_Update"></span>1.11.2 – The 2nd FPS Update<span class="ez-toc-section-end"></span></h3>
<p>16. Apr. 2018</p>
<h5>Changes</h5>
<ul class="list">
<li>Improved performance</li>
<li>Added stretched bow reference to the display editor (First Person Shooter)</li>
<li>Changed 3D helper and gizmo colors</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>In entity mode the bone origin is not flipped correctly on the X axis</li>
<li>UV mapping on the down side if flipped in entity mode</li>
<li>Z-Fighting in the armor stand model in display mode</li>
<li>‘Apply To All Faces’ does not correctly update the preview</li>
<li>Entering numbers manually in the UV editor does not update the preview</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.2/Blockbench_1.11.2.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.2/Blockbench_32bit_1.11.2.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.2/Blockbench-1.11.2.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.2/Blockbench_1.11.2_amd64.deb">Linux Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.11.1"><span class="ez-toc-section" id="1111_-_A_Bugfix_Update"></span>1.11.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<p>5. Apr. 2018</p>
<h5>Changes</h5>
<ul class="list">
<li>Added painting in the UV editor</li>
<li>Individial sizes for the main and the single UV dialog.</li>
<li>Copy/Pasting after clicking the preview now handles Faces instead of cubes</li>
<li>Added Texture option to the context menu of cubes</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Mirror property in bedrock models does not export correctly</li>
<li>Creating a template texture for bedrock models does not work</li>
<li>UV Window shrinks when clicking “All” button</li>
<li>3rd person arm slots use the wrong offset</li>
<li>UV offest numbers in entity mode don’t adapt when the resolution changes</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.1/Blockbench_1.11.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.1/Blockbench_32bit_1.11.1.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.1/Blockbench-1.11.1.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.1/Blockbench_1.11.1_amd64.deb">Linux Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.11.0"><span class="ez-toc-section" id="1110_-_The_Paint_Update"></span>1.11.0 – The Paint Update<span class="ez-toc-section-end"></span></h3>
<p>28. Mar. 2018</p>
<h5>Changes</h5>
<ul class="list">
<li>Made it possible to edit textures inside Blockbench!</li>
<li>Added brush tool</li>
<li>Added blank texture generator with template option</li>
<li>Ported Vertex Snapping by SirBenet into Blockbench</li>
<li>Added “Recent Projects” menu</li>
<li>Made screenshots crop automatically</li>
<li>Added option to screenshot the whole program (Desktop only)</li>
<li>Added button in Project dialog to convert entity/block models</li>
<li>Added warning message for loading textures from outside the pack</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/101" rel="noopener noreferrer">#101</a><span>&nbsp;</span>Added Inflate property for entity models</li>
<li>Improved copy/paste</li>
<li>Added “mirror”-option for entity models</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/105" rel="noopener noreferrer">#105</a><span>&nbsp;</span>Hide installed plugins in the `Available` tab</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/71" rel="noopener noreferrer">#71</a><span>&nbsp;</span>Elements remain outside of the 3×3 box even if unrestricted mode was disabled</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/72" rel="noopener noreferrer">#72</a><span>&nbsp;</span>Some tooltips do not allign with screen resolution</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/102" rel="noopener noreferrer">#102</a><span>&nbsp;</span>Blockbench ignores visibility options on load</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/106" rel="noopener noreferrer">#106</a><span>&nbsp;</span>Drag/Scale don’t cancel moving viewpoint in smartphone</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/107" rel="noopener noreferrer">#107</a><span>&nbsp;</span>Groups inside bones don’t export in entity mode</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/108" rel="noopener noreferrer">#108</a><span>&nbsp;</span>Linux plugins can’t be installed</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/110" rel="noopener noreferrer">#110</a><span>&nbsp;</span>Keybind for reloading plugins doesn’t work</li>
<li>Bones are mirrored in entity mode</li>
<li>UV Dialog is not draggable in entity mode</li>
<li>Elements in the outliner cannot be dragged by the name</li>
<li>Dragging elements in rotated bones sometimes inverts direction</li>
<li>Can’t scroll outliner while dragging an element</li>
</ul>
<h5>API Changes</h5>
<ul class="list">
<li>Added functions to edit textures (Painter.edit())</li>
<li>Added “JIMP”, a library to edit images</li>
<li>Added plugin api for custom tools</li>
<li>Added oldest compatible Blockbench version property for plugins</li>
<li>Plugins are now saved in user data folder. (Windows: appdata/roaming/<br>blockbench/plugins)</li>
<li>The “selected” array now stores cubes instead of indexes</li>
<li>Texture mapping for entity mode is now stored in cube.uv_offset</li>
<li>Added Canvas.raycast() function, returns information about what the user is hovering over in the preview</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.0/Blockbench_1.11.0.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.0/Blockbench_32bit_1.11.0.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.11.0/Blockbench_1.11.0_amd64.deb">Linux Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.10.3"><span class="ez-toc-section" id="1103_-_A_Bugfix_Update"></span>1.10.3 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Plugins now update automatically when you launch Blockbench</li>
<li>Changed button label of the text prompt from “Save” to “Confirm”</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/93" rel="noopener noreferrer">#93</a><span>&nbsp;</span>The button “Origin to Geometry” does not work as expected</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/91" rel="noopener noreferrer">#91</a><span>&nbsp;</span>“Restricted Canvas” option has the wrong description</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/90" rel="noopener noreferrer">#90</a><span>&nbsp;</span>The changelog content doesn’t fit in the changelog window</li>
<li>Ambient occlusion disables itself</li>
<li>Splash screen does not show up reliably</li>
<li>Groups disable the export toggle when imported from a model file</li>
<li>Blockbench does not pick model name from file name</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.3/Blockbench_1.10.3.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.3/Blockbench_32bit_1.10.3.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.3/Blockbench-1.10.3.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.3/Blockbench_1.10.3_amd64.deb">Linux Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.10.2"><span class="ez-toc-section" id="1102_-_A_Bugfix_Update"></span>1.10.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>New option to disable 3×3 block restriction</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/89" rel="noopener noreferrer">#89</a><span>&nbsp;</span>Saving doesn’t work with specific display settings</li>
<li>Display tab is still accessible in entity mode</li>
<li>Auto Updater doesn’t work on macOS</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.2/Blockbench_1.10.2.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.2/Blockbench_32bit_1.10.2.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.2/Blockbench-1.10.2.dmg">macOS Installer</a></li>
<li><a class="link" href="https://github.com/JannisX11/blockbench/releases/download/v1.10.2/Blockbench_1.10.2_amd64.deb">Linux Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.10.1"><span class="ez-toc-section" id="1101_-_A_Bugfix_Update"></span>1.10.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>In entity mode, a new bone is now automatically created when you add a new cube</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Bedrock exporter sometimes write texture resolution as string</li>
<li>Java exporter omits display settings if scale is unchanged</li>
<li>Moving the origin of a bone does not update it’s cubes</li>
<li>Auto UV does not trigger when moving elements</li>
<li>Blockbench does not properly remove plugins when an error occurs</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.10.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_32bit_1.10.1.exe">Windows 32bit Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.10.0"><span class="ez-toc-section" id="1100_-_The_Bedrock_Update"></span>1.10.0 – The Bedrock Update<span class="ez-toc-section-end"></span></h3>
<p>7. Nov. 2017</p>
<h5>Changes</h5>
<ul class="list">
<li>Accurate texture preview for Bedrock entities</li>
<li>Rotating bones is now possible</li>
<li>Model backup function if mobs.json is invalid</li>
<li>Added messageBox to API</li>
<li>Made the animation for the “ground” display slot smoother</li>
<li>Added Tip button to show random tipps and tricks about Blockbench</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/74" rel="noopener noreferrer">#74</a><span>&nbsp;</span>Added button to reload test plugins</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Scale gizmo does not adapt to rotation of cubes</li>
<li>Deleting a texture always removes the first texture</li>
<li>Changing the visibility of elements does not update sometimes</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.10.0.exe">Windows 64bit Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.9.1"><span class="ez-toc-section" id="191_-_The_FPS_Update"></span>1.9.1 – The FPS Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Increased FPS by 200%</li>
<li>Fine-tuned display-mode views</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Importing a model with a missing texture creates an infinite loop</li>
<li>Fixed multiple tiny bugs in the Dialog API</li>
<li>Relative Auto UV button in the UV dialog toolbar doesn’t work</li>
<li>Fixed multiple bugs on the rotation panel with switched sidebars</li>
<li>Theme CSS does not load on program start</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/70" rel="noopener noreferrer">#70</a><span>&nbsp;</span>Axis rotation dropdown menu is rendered through the “File” menu</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.9.1.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_32bit_1.9.1.exe">Windows 32bit Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.9"><span class="ez-toc-section" id="19_-_The_UV_Update"></span>1.9 – The UV Update<span class="ez-toc-section-end"></span></h3>
<p>28. Aug. 2017</p>
<h5>Changes</h5>
<ul class="list">
<li>Added new UV mapping window</li>
<li>Added support for animated textures</li>
<li>Screenshots from within the program</li>
<li>Added new display mode references, such as armor stands, zombies and different inventory locations</li>
<li>Added splashscreen</li>
<li>Added entity mode to disable block model limitations</li>
<li>Rotating more than 45° with the rotation slider will now use calculated rotations</li>
<li>Added keybind to swap move and scale tool (spacebar)</li>
<li>Added sub menus to context menus</li>
<li>Improved save warning message</li>
<li>Made file dialogs stick to the main window in the desktop app</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Dragging a group into itself causes it to disappear</li>
<li>Sliders don’t update when moving a cube</li>
<li>Undo does not save auto uv property</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/59" rel="noopener noreferrer">#59</a></li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.9.0.exe">Windows 64bit Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.8.2"><span class="ez-toc-section" id="182_-_A_Bugfix_Update"></span>1.8.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Changed the icon for dragging a texture</li>
<li>Dialogs can’t be moved behind the window frame</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>.obj export does not work</li>
<li>Plugin dialog does not adapt screen size</li>
<li>Plugins sometimes don’t load correctly</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/59" rel="noopener noreferrer">#59</a><span>&nbsp;</span>Error when exporting with groups disabled</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.8.2.exe">Windows 64bit Installer</a></li>
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_32bit_1.8.2.exe">Windows 32bit Installer</a></li>
<li><a class="link" href="file:///P://blockbench.net/api/installers/Blockbench_1.8.2.dmg">macOS Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.8.1"><span class="ez-toc-section" id="181_-_A_Bugfix_Update"></span>1.8.1 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Added lots of reset buttons to the keybind menu</li>
<li>Added onInstall event for plugins</li>
<li>Dragging an element into the outliner now moves it to the bottom if it has already been in the root layer</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/56" rel="noopener noreferrer">#56</a><span>&nbsp;</span>Added link to bugtracker in the “About” tab</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Canvas rotation keybind does not work by default</li>
<li>Plugin menu breaks if the program can not connect to the api</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/54" rel="noopener noreferrer">#54</a><span>&nbsp;</span>Status bar switch does not work</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/46" rel="noopener noreferrer">#57</a><span>&nbsp;</span>UV tool menu stays on the left side in mirror mode</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.8.1.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.8"><span class="ez-toc-section" id="18_-_The_Plugin_Update"></span>1.8 – The Plugin Update<span class="ez-toc-section-end"></span></h3>
<p>1. Aug. 2017</p>
<h5>Changes</h5>
<ul class="list">
<li>Added Plugin Library! You can submit your own plugins</li>
<li>Added group hierarchy</li>
<li>Added context menus</li>
<li>New Icon</li>
<li>Made dialogs draggable</li>
<li>Added importing and exporting layouts</li>
<li>Added more options for layouts</li>
<li>Added option to unselect when clicking in the canvas background</li>
<li>Improved canvas control keybindings</li>
<li>Added warning message for unsupported browsers</li>
<li>Improved menu bar</li>
<li>Added search bar to Bedrock model import dialog</li>
<li>Added warning message for capital texture names</li>
<li>Added settings to mirror the layout</li>
<li>Improved mobile layout</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/36" rel="noopener noreferrer">#36</a><span>&nbsp;</span>Added menu option to hide the status bar</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Changing the source of a texture in the web app changes previous textures aswell</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/46" rel="noopener noreferrer">#46</a><span>&nbsp;</span>Number rounding</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://blockbench.net/api/installers/Blockbench_1.8.0.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.7"><span class="ez-toc-section" id="17_-_The_Rainbow_Update"></span>1.7 – The Rainbow Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Totally improved scale control</li>
<li>Tidied up UV panel</li>
<li>Added shading</li>
<li>Improved support for mirrored UV mapping</li>
<li>Added tabs for edit / display mode</li>
<li>Tweaked ‘File’ menu</li>
<li>Split up ‘Edit’ menu into ‘Edit’ and ‘Transform’</li>
<li>Added ‘Invert Selection’ Menu</li>
<li>Unused controls are hidden when nothing is selected</li>
<li>Added cursors for brush tool</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/3" rel="noopener noreferrer">#3</a><span>&nbsp;</span>Added different colors for untextured elements</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/32" rel="noopener noreferrer">#32</a><span>&nbsp;</span>Moving elements with the arrow keys now adapts to the camera position</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/41" rel="noopener noreferrer">#41</a><span>&nbsp;</span>Added 3×3 outline box</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/36" rel="noopener noreferrer">#36</a><span>&nbsp;</span>Added menu option to hide the status bar</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Undo/Redo breaks group links</li>
<li>Brush works outside of boundaries</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/45" rel="noopener noreferrer">#45</a><span>&nbsp;</span>Editing sometimes does not correctly update the preview</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://server.zofenia.de/blockbench/api/download/blockbench%201.7.0%20Setup.exe">Windows Installer</a></li>
<li><a class="link" href="http://www.mediafire.com/file/sutlu727k3qcv9a/blockbench_mac_1.7.zip">Mac OS App</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.6.5"><span class="ez-toc-section" id="165_-_A_Bugfix_Update"></span>1.6.5 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Tweaked controls</li>
<li>Added ‘Remove Rotation’ button</li>
<li>Added button to reload updates</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/13" rel="noopener noreferrer">#13</a><span>&nbsp;</span>Button to sort elements</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/30" rel="noopener noreferrer">#30</a><span>&nbsp;</span>Ability to customize the credit comment</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/20" rel="noopener noreferrer">#20</a><span>&nbsp;</span>Added usage for shift key for various UV buttons</li>
<li>Optimized performance when working with lots of elements</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Obj-export crashes</li>
<li>Incorrect UV mapping of player skin in display settings</li>
<li>Scale tool doesn’t work when object is 0 wide</li>
<li>Inactive axis is visible in side view</li>
<li>Offset of rotated, rescaled elements slightly off</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/40" rel="noopener noreferrer">#40</a><span>&nbsp;</span>Incorrect slider/input behaviour in Firefox</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/igxv7vks0b9g7pm/blockbench+Setup+1.6.5.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.6"><span class="ez-toc-section" id="16_-_The_Flow_Update"></span>1.6 – The Flow Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Added 3-axis control tool for moving and scaling elements</li>
<li>Added customizable backgrounds</li>
<li>Added Optifine .jpm export</li>
<li>Combined all texture settings into one texture menu</li>
<li>Added update notification</li>
<li>Added option to broadcast every action in the status bar</li>
<li>Changed cullface setting from toggle to dropdown menu</li>
<li>Added full 3×3 grid</li>
<li>Added sections in keybinding menu</li>
<li>Tweaked UV tools</li>
<li>Added anti-aliasing</li>
<li>Added menu entry to rotate on Z axis</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/29" rel="noopener noreferrer">#29</a><span>&nbsp;</span>Strange cursor behaviour in display scale input</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/34" rel="noopener noreferrer">#34</a><span>&nbsp;</span>Crash when clicking on external links</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/35" rel="noopener noreferrer">#35</a><span>&nbsp;</span>Status bar gap</li>
<li>Rolling uses wrong origin</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/7vnkrm7xn93su37/blockbench+Setup+1.6.0.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.5"><span class="ez-toc-section" id="15_-_The_Last_Update"></span>1.5 – The Last Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Added update menu</li>
<li>Added project menu</li>
<li>Added status bar</li>
<li>Added wireframe mode</li>
<li>Improved zoom-options</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/25" rel="noopener noreferrer">#25</a><span>&nbsp;</span>After removing a texture the texture still persists in the UV Editor</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/28" rel="noopener noreferrer">#28</a><span>&nbsp;</span>UV window closes when clicking undo or redo</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/31" rel="noopener noreferrer">#31</a><span>&nbsp;</span>Arrow key in text field moves element</li>
<li>Entity model cube origin does not load correctly</li>
<li>Entity model uv uses numbers 0-16</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/01ba11z8232ojwb/blockbench+Setup+1.5.0.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.4.2"><span class="ez-toc-section" id="142_-_A_Bugfix_Update"></span>1.4.2 – A Bugfix Update<span class="ez-toc-section-end"></span></h3>
<h5>Bugfixes</h5>
<ul class="list">
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/16" rel="noopener noreferrer">#16</a><span>&nbsp;</span>No layout option for highlighted menu</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/19" rel="noopener noreferrer">#19</a><span>&nbsp;</span>Can’t rename groups</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/21" rel="noopener noreferrer">#21</a><span>&nbsp;</span>Cleared side textures aren’t the same</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/22" rel="noopener noreferrer">#22</a><span>&nbsp;</span>Dragged models don’t appear in windows application name</li>
<li><a class="link" target="_blank" href="https://github.com/JannisX11/blockbench/issues/23" rel="noopener noreferrer">#23</a><span>&nbsp;</span>“Extrude from texture” dialogue doesn’t close</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/lapf1dyy204chu8/blockbench+Setup+1.4.2.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.4"><span class="ez-toc-section" id="14_-_The_UI_Update"></span>1.4 – The UI Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Added custom color menu</li>
<li>Tweaked lots of little things around the UI</li>
<li>Face-lifted settings menu</li>
<li>Massive performance increase when working with lots of elements</li>
<li>Added multi-level texture folder support</li>
<li>Added center menu</li>
<li>Added roll function to rotate around X axis</li>
<li>Added entity model import</li>
<li>Entity model export can now modify mobs.json file</li>
<li>Added keybindings to move elements</li>
<li>Filename displays in window title</li>
<li>Open with… Blockbench support</li>
<li>Importing and exporting groups</li>
<li>Added option to hide the grid</li>
<li>UV editor now changes color to be more visible on different backgrounds</li>
<li>Added texture export to .OBJ export</li>
<li>Re-arranged import and export buttons</li>
<li>Added message box to display feedback</li>
<li>Added interface zoom menu</li>
<li>Changed order of faces in UV editor</li>
<li>Changed UV copy system</li>
<li>Added cube properties menu</li>
<li>Added more buttons to edit and delete textures</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Fixed undo system and added redo function</li>
<li>Fixed: Colors of axis-helpers don’t match Minecraft</li>
<li>Fixed slider inaccuracy on screen edges</li>
<li>Fixed display scale input not updating preview</li>
<li>Fixed: Clear side would not update texture in UV editor</li>
<li>Fixed texture error icons not updating</li>
<li>Fixed possible texture ID overlapping when importing models</li>
<li>Fixed particle texture going missing when importing from JSON file</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/bpup4fh8ji6u9ut/blockbench+Setup+1.4.0.exe">Windows Installer</a></li>
</ul>
</div>
<div class="textbox wow fadeInUp">
<h3 id="1.3"><span class="ez-toc-section" id="13_-_The_Texture_Update"></span>1.3 – The Texture Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Added Image Extrusion, converts textures into models</li>
<li>Added Selection Creator</li>
<li>Added large grid option</li>
<li>Added missing texture icon</li>
<li>The grid now adapts the grid size from the settings</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Fixed the misterious UV Rotation bug</li>
<li>Tweaked and fixed the file loader in the web app</li>
<li>Missing textures now also work as intended in the desktop app</li>
<li>Fixed number duplication when changing group-origins</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/bblln3ll2a5q226/blockbench+Setup+1.3.0.exe">Windows Installer</a></li>
<li><a class="link" href="http://www.mediafire.com/file/b54774dj66a8ne0/blockbench+mac+1.3.0.zip">Mac Installer</a></li>
</ul>
</div>
<h3 id="1.2"><span class="ez-toc-section" id="12_-_The_First_Update"></span>1.2 – The First Update<span class="ez-toc-section-end"></span></h3>
<h5>Changes</h5>
<ul class="list">
<li>Official Discord for Blockbench and other related things: http://discord.gg/fZQbxbg</li>
<li>Added View menu and new camera angles</li>
<li>Added arrows for block translation, scaling and origin</li>
<li>Made rotation slider update instantly</li>
<li>Changed missing-texture textures, makes more sense now!</li>
</ul>
<h5>Bugfixes</h5>
<ul class="list">
<li>Fixed null bug in entity model export</li>
<li>Fixed cube context menu being hidden when on the bottom of the list</li>
<li>Fixed cancel button in scale-dialog</li>
<li>Fixed texture thumbnails not updating instantly when re-opening textures</li>
</ul>
<h5>Downloads</h5>
<ul class="list">
<li><a class="link" href="http://www.mediafire.com/file/em78a4sk9wjwdb7/blockbench+Setup+1.2.0.exe">Windows Installer</a></li>
</ul>
<h2 id="1.1.1"><span class="ez-toc-section" id="111_-_The_Original"></span>1.1.1 – The Original<span class="ez-toc-section-end"></span></h2>
<p>5. May. 2017</p>
<h5>Downloads</h5>
<ul class="list">
	<li><a class="link" href="http://www.mediafire.com/file/ke51stesm8ea0ga/blockbench+Setup+1.1.1.exe">Windows Installer</a></li>
</ul>
