---
title: Mode
---

# Mode
## Mode
Extends: [KeybindItem](action#keybinditem)

### new Mode( id, options )
Creates a new Mode

##### Arguments:
* `id`: *string*
* `options`: ModeOptions
	* `name`: *string*
	* `default_tool`: *string* (Optional)
	* `selectElements`: *boolean* (Optional)
	* `hidden_node_types`: Array of *string* (Optional) - Hide certain types of nodes in the outliner, like cubes and meshes in animation mode
	* `hide_toolbars`: *boolean* (Optional)
	* `hide_sidebars`: *boolean* (Optional)
	* `hide_status_bar`: *boolean* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional)
	* `onSelect`: Function (Optional)
	* `onUnselect`: Function (Optional)


### delete()


### select()
Selects the mode



### unselect()
Unselects the mode



### trigger()
Activates the mode



### selected
Static Property

Type: [Mode](mode#mode-1)



## Modes
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| options | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/mode.d.ts#L31) |  |

