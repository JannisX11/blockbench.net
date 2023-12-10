---
title: Plugin
---

# Plugin
## BBPlugin
A Blockbench plugin. "BBPlugin" is the Typescript alias to the regular name "Plugin", which is also valid in Javascript projects.

### new BBPlugin( id, options )
Creates a new BBPlugin

##### Arguments:
* `id`: *string*
* `options`: PluginOptions
	* `title`: *string*
	* `author`: *string*
	* `description`: *string* - Description text in the plugin browser
	* `about`: *string* (Optional) - The about text appears when the user unfolds the plugin in the plugin browser. It can contain additional information and usage instructions
	* `icon`: *string*
	* `tags`: Array (Optional) - Plugin tags that will show up in the plugin store. You can provide up to 3 tags.
	* `variant`: `"both"` or `"desktop"` or `"web"` - Where the plugin can be installed. Desktop refers to the electron app, web refers to the web app and PWA
	* `min_version`: *string* (Optional) - Minimum Blockbench version in which the plugin can be installed
	* `max_version`: *string* (Optional) - Maximum Blockbench version in which the plugin can be installed
	* `await_loading`: *boolean* (Optional) - Set to true if the plugin must finish loading before a project is opened, i. e. because it adds a format
	* `new_repository_format`: *boolean* (Optional) - Use the new repository format where plugin, iron, and about are stored in a separate folder
	* `onload`: Function (Optional)
	* `onunload`: Function (Optional)
	* `oninstall`: Function (Optional)
	* `onuninstall`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| installed | *boolean* |  |
| expanded | *boolean* |  |
| title | *string* |  |
| author | *string* |  |
| description | *string* | Description text in the plugin browser |
| about | *string* | The about text appears when the user unfolds the plugin in the plugin browser. It can contain additional information and usage instructions |
| icon | *string* |  |
| variant | `"both"` or `"desktop"` or `"web"` |  |
| min_version | *string* |  |
| max_version | *string* |  |
| tags | Array of *string* |  |

### extend( options )
##### Arguments:
* `options`: PluginOptions
	* `title`: *string*
	* `author`: *string*
	* `description`: *string* - Description text in the plugin browser
	* `about`: *string* (Optional) - The about text appears when the user unfolds the plugin in the plugin browser. It can contain additional information and usage instructions
	* `icon`: *string*
	* `tags`: Array (Optional) - Plugin tags that will show up in the plugin store. You can provide up to 3 tags.
	* `variant`: `"both"` or `"desktop"` or `"web"` - Where the plugin can be installed. Desktop refers to the electron app, web refers to the web app and PWA
	* `min_version`: *string* (Optional) - Minimum Blockbench version in which the plugin can be installed
	* `max_version`: *string* (Optional) - Maximum Blockbench version in which the plugin can be installed
	* `await_loading`: *boolean* (Optional) - Set to true if the plugin must finish loading before a project is opened, i. e. because it adds a format
	* `new_repository_format`: *boolean* (Optional) - Use the new repository format where plugin, iron, and about are stored in a separate folder
	* `onload`: Function (Optional)
	* `onunload`: Function (Optional)
	* `oninstall`: Function (Optional)
	* `onuninstall`: Function (Optional)

Returns: [BBPlugin](plugin#bbplugin)

### onload()


### onunload()


### oninstall()


### onuninstall()


### BBPlugin.register( id, options )
##### Arguments:
* `id`: *string*
* `options`: PluginOptions
	* `title`: *string*
	* `author`: *string*
	* `description`: *string* - Description text in the plugin browser
	* `about`: *string* (Optional) - The about text appears when the user unfolds the plugin in the plugin browser. It can contain additional information and usage instructions
	* `icon`: *string*
	* `tags`: Array (Optional) - Plugin tags that will show up in the plugin store. You can provide up to 3 tags.
	* `variant`: `"both"` or `"desktop"` or `"web"` - Where the plugin can be installed. Desktop refers to the electron app, web refers to the web app and PWA
	* `min_version`: *string* (Optional) - Minimum Blockbench version in which the plugin can be installed
	* `max_version`: *string* (Optional) - Maximum Blockbench version in which the plugin can be installed
	* `await_loading`: *boolean* (Optional) - Set to true if the plugin must finish loading before a project is opened, i. e. because it adds a format
	* `new_repository_format`: *boolean* (Optional) - Use the new repository format where plugin, iron, and about are stored in a separate folder
	* `onload`: Function (Optional)
	* `onunload`: Function (Optional)
	* `oninstall`: Function (Optional)
	* `onuninstall`: Function (Optional)

Returns: [BBPlugin](plugin#bbplugin)

