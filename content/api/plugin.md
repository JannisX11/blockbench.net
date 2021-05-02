---
title: Plugin
---

# Plugin

## Creating a plugin

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
* `about: String` Longer Plugin description or instructions, can be unfolded in the store
* `icon: String` Blockbench icon string, see [Blockbench#icons](blockbench.md#icons)
* `version: String` Version number for your plugin using [semver](https://semver.org) 
* `variant: String` Variant of Blockbench which supports your plugin. Can be `desktop`, `web` or `both`
* `min_version: String` Minimum compatible Blockbench version 
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
To test your plugin, you can load it from the plugin menu using the button in the title bar, or you can simply drag and drop it into Blockbench. Use the Plugin menu or press Ctrl/Cmd + J to reload it.


## Submitting your plugin

For testing or internal use you can load the plugin from the file. If you think your plugin can be useful for a larger group of users, you can submit it to the [blockbench-plugins repository](https://www.github.com/JannisX11/blockbench-plugins).

To submit a plugin, fork the repository and add your plugin to the /plugins folder. Then add your plugin to the plugins.json file using the same ID and metadata as in your plugin file. When you are done, create a pull request and wait for it to be merged. Use the same process to submit updates and changes to your plugin.
