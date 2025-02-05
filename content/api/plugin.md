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
	* `version`: *string* (Optional) - The version of the plugin.
	* `icon`: *string*
	* `tags`: Array (Optional) - Plugin tags that will show up in the plugin store. You can provide up to 3 tags.
	* `variant`: `"both"` or `"desktop"` or `"web"` - Where the plugin can be installed. Desktop refers to the electron app, web refers to the web app and PWA
	* `min_version`: *string* (Optional) - Minimum Blockbench version in which the plugin can be installed
	* `max_version`: *string* (Optional) - Maximum Blockbench version in which the plugin can be installed
	* `await_loading`: *boolean* (Optional) - Set to true if the plugin must finish loading before a project is opened, i. e. because it adds a format
	* `new_repository_format`: *boolean* (Optional) - Use the new repository format where plugin, iron, and about are stored in a separate folder
	* `contributes`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/plugin.d.ts#L45) (Optional) - Can be used to specify which features a plugin adds. This allows Blockbench to be aware of and suggest even plugins that are not installed.
	* `has_changelog`: *boolean* (Optional)
	* `deprecation_note`: *string* (Optional) - In combination with a "Deprecated" tag, this can be used to provide context on why a plugin is deprecated
	* `website`: *string* (Optional) - Link to the plugin's website
	* `repository`: *string* (Optional) - Link to the repository that contains the source for the plugin
	* `bug_tracker`: *string* (Optional) - Link to where users can report issues with the plugin
	* `contributors`: Array of *string* (Optional) - List of secondary contributors to the plugin, excluding the main author(s)
	* `onload`: Function (Optional)
	* `onunload`: Function (Optional)
	* `oninstall`: Function (Optional)
	* `onuninstall`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| installed | *boolean* |  |
| id | *string* |  |
| disabled | *boolean* |  |
| title | *string* |  |
| author | *string* |  |
| description | *string* | Description text in the plugin browser |
| about | *string* | The about text appears when the user unfolds the plugin in the plugin browser. It can contain additional information and usage instructions |
| icon | *string* |  |
| variant | `"both"` or `"desktop"` or `"web"` |  |
| version | *string* |  |
| min_version | *string* |  |
| max_version | *string* |  |
| tags | Array of *string* |  |
| contributes | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/plugin.d.ts#L117) | Can be used to specify which features a plugin adds. This allows Blockbench to be aware of and suggest even plugins that are not installed. |
| has_changelog | *boolean* |  |
| deprecation_note | *string* | In combination with a "Deprecated" tag, this can be used to provide context on why a plugin is deprecated |
| website | *string* | Link to the plugin's website |
| repository | *string* | Link to the repository that contains the source for the plugin |
| bug_tracker | *string* | Link to where users can report issues with the plugin |
| contributors | Array of *string* | List of secondary contributors to the plugin, excluding the main author(s) |

### extend( options )
##### Arguments:
* `options`: PluginOptions
	* `title`: *string*
	* `author`: *string*
	* `description`: *string* - Description text in the plugin browser
	* `about`: *string* (Optional) - The about text appears when the user unfolds the plugin in the plugin browser. It can contain additional information and usage instructions
	* `version`: *string* (Optional) - The version of the plugin.
	* `icon`: *string*
	* `tags`: Array (Optional) - Plugin tags that will show up in the plugin store. You can provide up to 3 tags.
	* `variant`: `"both"` or `"desktop"` or `"web"` - Where the plugin can be installed. Desktop refers to the electron app, web refers to the web app and PWA
	* `min_version`: *string* (Optional) - Minimum Blockbench version in which the plugin can be installed
	* `max_version`: *string* (Optional) - Maximum Blockbench version in which the plugin can be installed
	* `await_loading`: *boolean* (Optional) - Set to true if the plugin must finish loading before a project is opened, i. e. because it adds a format
	* `new_repository_format`: *boolean* (Optional) - Use the new repository format where plugin, iron, and about are stored in a separate folder
	* `contributes`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/plugin.d.ts#L45) (Optional) - Can be used to specify which features a plugin adds. This allows Blockbench to be aware of and suggest even plugins that are not installed.
	* `has_changelog`: *boolean* (Optional)
	* `deprecation_note`: *string* (Optional) - In combination with a "Deprecated" tag, this can be used to provide context on why a plugin is deprecated
	* `website`: *string* (Optional) - Link to the plugin's website
	* `repository`: *string* (Optional) - Link to the repository that contains the source for the plugin
	* `bug_tracker`: *string* (Optional) - Link to where users can report issues with the plugin
	* `contributors`: Array of *string* (Optional) - List of secondary contributors to the plugin, excluding the main author(s)
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
	* `version`: *string* (Optional) - The version of the plugin.
	* `icon`: *string*
	* `tags`: Array (Optional) - Plugin tags that will show up in the plugin store. You can provide up to 3 tags.
	* `variant`: `"both"` or `"desktop"` or `"web"` - Where the plugin can be installed. Desktop refers to the electron app, web refers to the web app and PWA
	* `min_version`: *string* (Optional) - Minimum Blockbench version in which the plugin can be installed
	* `max_version`: *string* (Optional) - Maximum Blockbench version in which the plugin can be installed
	* `await_loading`: *boolean* (Optional) - Set to true if the plugin must finish loading before a project is opened, i. e. because it adds a format
	* `new_repository_format`: *boolean* (Optional) - Use the new repository format where plugin, iron, and about are stored in a separate folder
	* `contributes`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/plugin.d.ts#L45) (Optional) - Can be used to specify which features a plugin adds. This allows Blockbench to be aware of and suggest even plugins that are not installed.
	* `has_changelog`: *boolean* (Optional)
	* `deprecation_note`: *string* (Optional) - In combination with a "Deprecated" tag, this can be used to provide context on why a plugin is deprecated
	* `website`: *string* (Optional) - Link to the plugin's website
	* `repository`: *string* (Optional) - Link to the repository that contains the source for the plugin
	* `bug_tracker`: *string* (Optional) - Link to where users can report issues with the plugin
	* `contributors`: Array of *string* (Optional) - List of secondary contributors to the plugin, excluding the main author(s)
	* `onload`: Function (Optional)
	* `onunload`: Function (Optional)
	* `oninstall`: Function (Optional)
	* `onuninstall`: Function (Optional)

Returns: [BBPlugin](plugin#bbplugin)

### hasImageIcon()

Returns: *boolean*

### getIcon()

Returns: *string*

### toggleDisabled()



## Plugins
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| all | Array of [BBPlugin](plugin#bbplugin) | All loaded plugins, including plugins from the store that are not installed |
| installed | Array of [PluginInstalledData](https://github.com/JannisX11/blockbench-types/blob/8049169/types/plugin.d.ts#L154) | Data about which plugins are installed |
| dialog | [Dialog](dialog#dialog-1) | The plugins window |
| api_path | *string* | The currently used path to the plugin API |

### devReload()
Dev reload all side-loaded plugins



