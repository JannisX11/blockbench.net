---
title: Plugins Introduction
---

# Creating a Plugin

Download Blockbench on [blockbench.net](https://blockbench.net)

Welcome to the official Blockbench documentation. If you want to create a custom plugin, this is the place to start.

## First Steps

### Prerequisites

To create a Blockbench plugin, you need basic knowledge of Javascript and Git, a working text editor like Sublime Text or VSCode and of course Blockbench.

### Creating the plugin

In this example we are going to create a small silly plugin that will randomize the height of all selected cubes.

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
	author: 'Yourname',
	description: 'This plugin can randomize the height of all selected cubes',
	icon: 'bar_chart',
	version: '0.0.1',
	variant: 'both'
});
```
The variant tells Blockbench where the plugin can be used. In this case it can be used in both the web app and the desktop app. The icon uses a material icon string. You can learn more about icons here: [Blockbench#icons](blockbench#icons)



### Result

If you have followed the steps above, you should end up with something like this:

```javascript
(function() {
	var button;

	Plugin.register('height_randomizer', {
		title: 'Height Randomizer',
		author: 'Yourname',
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
					Undo.finishEdit('randomize cube height');
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