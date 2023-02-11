---
title: Creating a Plugin
---

# Creating a Plugin

Welcome to the official Blockbench documentation. If you want to create a custom plugin, this is the place to start.

## Basics

### Prerequisites

To create a Blockbench plugin, you need basic knowledge of Javascript and Git, a working text editor like [VS Code](https://code.visualstudio.com), and of course Blockbench.

### Plugin file structure

Plugins consist of a Javascript file. To create a plugin, create a new Javascript file named `[plugin-id].js`. Inside this file, use the method Plugin.register to initialize the plugin, as seen in the example.

> **_NOTE:_**  the plugin ID must be the same as the file name minus extension.
```javascript
Plugin.register('plugin_id', {
	title: 'Plugin Name',
	author: 'Your Name',
	icon: 'icon',
	description: 'Your Description',
	version: '1.0.0',
	variant: 'both',
	onload() {
	}
});
```
* `title: String` Plugin title as shown in the store in Blockbench
* `author: String` Author name or names 
* `description: String` Plugin description for the store in Blockbench
* `about: String` Longer Plugin description or instructions, can be unfolded in the store. Supports Markdown
* `icon: String` Blockbench icon string, see [Blockbench#icons](blockbench#icons)
* `tags: String Array` Plugin tags that will be displayed in the store. You can have up to 3. Plugins specifically designed for Minecraft must one of the following tags: 'Minecraft', 'Minecraft: Java Edition', or 'Minecraft: Bedrock Edition'.
* `version: String` Version number for your plugin using [semver](https://semver.org) 
* `variant: String` Variant of Blockbench which supports your plugin. Can be `desktop`, `web` or `both`
* `min_version: String` Minimum compatible Blockbench version 
* `await_loading: String` Wait for the plugin to finish loading, before allowing Blockbench to do anything such as loading a project. This is useful for plugins that add formats and codecs when opening a file with Blockbench that requires those formats.
* `onload()` Runs whenever the plugin is loaded or after a reload
* `onunload()` Runs whenever the plugin unloads
* `oninstall()` Runs when the player installs the plugin
* `onuninstall()` Runs when the player uninstalls the plugin

If you want to declare variables that can be used anywhere within the plugin, you can wrap your whole within a self-invoking function and create variables like this:
```javascript
(function() {
	var plugin_variable_1;

	Plugin.register('plugin_id', {
		onload() {
			plugin_variable_1 = 'foo';
		},
		...
	});

})();
```


### API Autocomplete
You can use the [Blockbench typescript types](https://www.npmjs.com/package/blockbench-types) to get autocomplete support for the Blockbench API. This only works in [VS Code](https://code.visualstudio.com).
Types are required when using [Typescript](https://www.typescriptlang.org) to build a plugin, but they are also super helpful when using Javascript. Currently Blockbench types are also more up-to-date than the Wiki.
You can install the types from NPM via
```
npm i --save-dev blockbench-types
```


### Testing the plugin
To test your plugin, you can load it from the plugin menu using the button in the title bar, or you can simply drag and drop it into Blockbench. Use the Plugin menu or press Ctrl/Cmd + J to reload it.



## An example

In this example we are going to create a small silly plugin that will randomize the height of all selected cubes.

### Structure

First, create a new file named `height_randomizer.js`. Open the file and create a self-invoking function to create a scope for global variables. Inside the function, create the variable `button`.
```javascript
(function() {
	var button;
})();
```
Now we need to register the plugin. This process will give Blockbench all the required information to handle the plugin.
In case the user is offline or loads the plugin from the computer, this will also provide the plugin metadata such as name and author for the plugin store.

Write this code inside the function right after the button variable.
```javascript
Plugin.register('height_randomizer', {
	title: 'Height Randomizer',
	author: 'YourName',
	description: 'This plugin can randomize the height of all selected cubes',
	icon: 'bar_chart',
	version: '0.0.1',
	variant: 'both'
});
```

### Functionality
You can check the other pages to learn about interface functionality and different internal data types.

* In this case we are using an [Action](actions) to modify certain properties on a [Cube](outliner#cube).
* We use the [Undo](undo) API to register our changes.
* We use the [updateView](https://github.com/JannisX11/blockbench-types/blob/main/types/canvas.d.ts#L1) API to visually update the interface with our new changes


### Result

If you have followed the steps above, you should end up with something like this:

```javascript
(function() {
	var button;

	Plugin.register('height_randomizer', {
		title: 'Height Randomizer',
		author: 'YourName',
		description: 'This plugin can randomize the height of all selected cubes',
		icon: 'bar_chart',
		version: '0.0.1',
		variant: 'both',
		onload() {
			button = new Action('randomize_height', {
				name: 'Randomize Height',
				description: 'Randomize the height of all selected elements',
				icon: 'bar_chart',
				click: function() {
					Undo.initEdit({elements: Cube.selected});
					Cube.selected.forEach(cube => {
						cube.to[1] = cube.from[0] + Math.floor(Math.random()*8);
					});
					Canvas.updateView({
						elements: Cube.selected,
						element_aspects: {geometry: true},
						selection: true
					});
					Undo.finishEdit('Randomize cube height');
				}
			});
			MenuBar.addAction(button, 'filter');
		},
		onunload() {
			button.delete();
		}
	});

})();
```


## Submitting your plugin

For testing or internal use you can load the plugin from the file. If you think your plugin can be useful for a larger group of users, you can submit it to the [blockbench-plugins repository](https://www.github.com/JannisX11/blockbench-plugins).

To submit a plugin, fork the repository and add your plugin to the /plugins folder. Then add your plugin to the plugins.json file using the same ID and metadata as in your plugin file. When you are done, create a pull request and wait for it to be merged. Use the same process to submit updates and changes to your plugin.

Please make sure to read the submission requirements in [README.md](https://github.com/JannisX11/blockbench-plugins#readme) before submitting your plugin.
