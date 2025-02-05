---
title: Mode
---

# Mode
## Mode
Extends: [KeybindItem](action#keybinditem)

<reference path="./blockbench.d.ts"/>

### new Mode( id, options )
Creates a new Mode

##### Arguments:
* `id`: *string*
* `options`: ModeOptions
	* `id`: *string*
	* `name`: *string*
	* `icon`: *string* (Optional)
	* `default_tool`: *string* (Optional)
	* `selectElements`: *boolean* (Optional)
	* `category`: *string* (Optional)
	* `hidden_node_types`: Array of *string* (Optional) - Hide certain types of nodes in the outliner, like cubes and meshes in animation mode
	* `hide_toolbars`: *boolean* (Optional)
	* `hide_sidebars`: *boolean* (Optional)
	* `hide_status_bar`: *boolean* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional)
	* `onSelect`: Function (Optional)
	* `onUnselect`: Function (Optional)

### new Mode( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| variations | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/action.d.ts#L131) |  |
| id | *string* |  |
| name | *string* |  |

### delete()


### select()
Selects the mode



### unselect()
Unselects the mode



### trigger()
Activates the mode



### onSelect()


### onUnselect()


### selected
Static Property

Type: [Mode](mode#mode-1)



## Modes
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| options | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mode.d.ts#L43) |  |
| selected | [Mode](mode#mode-1) or `false` or *undefined* |  |
| animate | *boolean* or *undefined* |  |
| display | *boolean* or *undefined* |  |
| edit | *boolean* or *undefined* |  |
| paint | *boolean* or *undefined* |  |
| pose | *boolean* or *undefined* |  |

