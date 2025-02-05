---
title: Menu
---

# Menu
## Menu
Extends: [Deletable](misc#deletable)

Extended by: [BarMenu](menu#barmenu)

Use the Menu class to create a context menu. Menus can contain custom entries and hierarchy, or existing actions and tools.

### new Menu( id, template[, options] )
Creates a new context menu

##### Arguments:
* `id`: *string*
* `template`: Array of [MenuItem](https://github.com/JannisX11/blockbench-types/blob/8049169/types/menu.d.ts#L19) or [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/menu.d.ts#L36)
* `options`: MenuOptions (Optional)
	* `onOpen`: Function (Optional)
	* `onClose`: Function (Optional)
	* `keep_open`: *boolean* (Optional)
	* `searchable`: *boolean* (Optional)
	* `class`: *string* (Optional)

### new Menu( template[, options] )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| structure | Array of [MenuItem](https://github.com/JannisX11/blockbench-types/blob/8049169/types/menu.d.ts#L19) |  |

### open( position[, context] )
Opens the menu somewhere

##### Arguments:
* `position`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [MouseEvent](#MouseEvent) - Position where to open the menu. Can be a mouse event, or a node that the menu is spawned below.
* `context`: *any* (Optional) - Context for the click events inside the menu

Returns: [Menu](menu#menu-1)

### hide()
Closes the menu if it's open


Returns: [Menu](menu#menu-1)

### addAction( action[, path] )
Adds an action to the menu structure

##### Arguments:
* `action`: [Action](action#action-1) - Action to add
* `path`: *string* or *number* (Optional) - Path pointing to the location. Use the ID of each level of the menu, or index within a level, separated by a point. For example,  `export.0`  places the action at the top position of the Export submenu.


### removeAction( path )
##### Arguments:
* `path`: *string* or [Action](action#action-1) - Path pointing to the location. Use the ID of each level of the menu, or index within a level, or item ID, separated by a point. For example,  `export.export_special_format`  removes the action "Export Special Format" from the Export submenu.


### delete()



## BarMenu
Extends: [Menu](menu#menu-1)

Creates a new menu in the menu bar

### new BarMenu( id, structure[, condition] )
Creates a new BarMenu

##### Arguments:
* `id`: *string*
* `structure`: Array of [MenuItem](https://github.com/JannisX11/blockbench-types/blob/8049169/types/menu.d.ts#L19)
* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| type | `"bar_menu"` |  |
| id | *string* |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| name | *string* |  |
| structure | Array of [MenuItem](https://github.com/JannisX11/blockbench-types/blob/8049169/types/menu.d.ts#L19) |  |

### open( position[, context] )
Opens the menu somewhere

##### Arguments:
* `position`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [MouseEvent](#MouseEvent) - Position where to open the menu. Can be a mouse event, or a node that the menu is spawned below.
* `context`: *any* (Optional) - Context for the click events inside the menu

Returns: [BarMenu](menu#barmenu)

### hide()
Closes the menu if it's open


Returns: [BarMenu](menu#barmenu)

### addAction( action[, path] )
Adds an action to the menu structure

##### Arguments:
* `action`: [Action](action#action-1) - Action to add
* `path`: *string* or *number* (Optional) - Path pointing to the location. Use the ID of each level of the menu, or index within a level, separated by a point. For example,  `export.0`  places the action at the top position of the Export submenu.


### removeAction( path )
##### Arguments:
* `path`: *string* or [Action](action#action-1) - Path pointing to the location. Use the ID of each level of the menu, or index within a level, or item ID, separated by a point. For example,  `export.export_special_format`  removes the action "Export Special Format" from the Export submenu.


### highlight( action )
Visually highlights an action within the menu, until the user opens the menu

##### Arguments:
* `action`: [Action](action#action-1)


### delete()



## MenuBar
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| menus | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/menu.d.ts#L82) |  |

### addAction( action[, path] )
Adds an action to the menu structure

##### Arguments:
* `action`: [Action](action#action-1) - Action to add
* `path`: *string* (Optional) - Path pointing to the location. Use the ID of each level of the menu, or index or group within a level, separated by a point. For example,  `file.export.0`  places the action at the top position of the Export submenu in the File menu.


### removeAction( path )
##### Arguments:
* `path`: *string* - Path pointing to the location. Use the ID of each level of the menu, or index or group within a level, or item ID, separated by a point. For example,  `export.export_special_format`  removes the action "Export Special Format" from the Export submenu.


### update()
Update the menu bar



