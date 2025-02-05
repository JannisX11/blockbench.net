---
title: Group
---

# Group
## Group
Extends: [OutlinerNode](outliner#outlinernode)

### new Group( options )
Creates a new Group

##### Arguments:
* `options`: *string* or [GroupOptions](https://github.com/JannisX11/blockbench-types/blob/8049169/types/group.d.ts#L1)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| children | Array of [OutlinerNode](outliner#outlinernode) |  |
| origin | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| rotation | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| reset | *boolean* |  |
| shade | *boolean* |  |
| selected | *boolean* |  |
| visibility | *boolean* |  |
| autouv | `0` or `2` or `1` |  |
| isOpen | *boolean* |  |
| ik_enabled | *boolean* |  |
| ik_chain_length | *number* |  |
| texture | *string* |  |
| skin_original_origin | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| bedrock_binding | *string* |  |
| cem_animations | Array of *any* |  |
| cem_attach | *boolean* |  |
| cem_scale | *number* |  |
| mesh | [Mesh](mesh#mesh-1) |  |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
| menu | [Menu](menu#menu-1) |  |

### extend( options )
##### Arguments:
* `options`: [GroupOptions](https://github.com/JannisX11/blockbench-types/blob/8049169/types/group.d.ts#L1)

Returns: [Group](group#group-1)

### selectChildren( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: [Group](group#group-1)

### selectLow( highlight )
##### Arguments:
* `highlight`: *boolean*

Returns: [Group](group#group-1)

### select( [event, isOutlinerClick] )
##### Arguments:
* `event`: *any* (Optional)
* `isOutlinerClick`: *boolean* (Optional)

Returns: *void* or [Group](group#group-1)

### unselect()

Returns: *void* or [Group](group#group-1)

### matchesSelection()

Returns: *boolean*

### openUp()
Opens the group and all of its ancestor groups.


Returns: [Group](group#group-1)

### remove( [undo] )
Removes the group

##### Arguments:
* `undo`: *boolean* (Optional) - If true, an undo point will be created.

Returns: [Group](group#group-1)

### resolve()
Remove the group and leave all of its children in the parent array.


Returns: Array of [OutlinerNode](outliner#outlinernode)

### transferOrigin( origin )
Move the origin of a bone to a specific location without visually affecting the position of it's content.

##### Arguments:
* `origin`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3)

Returns: [Group](group#group-1)

### sortContent()
Sort the content of the group alphabetically. This will automatically create an undo point.


Returns: [Group](group#group-1)

### duplicate()
Duplicate the group


Returns: [Group](group#group-1)

### getSaveCopy()

Returns: *any*

### getChildlessCopy()

Returns: [Group](group#group-1)

### compile( undo )
##### Arguments:
* `undo`: *boolean*

Returns: *any*

### forEachChild( callback[, type, for_self] )
##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/group.d.ts#L103)
* `type`: *any* (Optional)
* `for_self`: *boolean* (Optional)


### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [Group](group#group-1)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Group](group#group-1)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [Group](group#group-1)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [Group](group#group-1)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [Group](group#group-1)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [Group](group#group-1)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [Group](group#group-1)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Group](group#group-1)

### isChildOf( group, max_levels )
Checks of the group or element is a child of 

`group`

.

##### Arguments:
* `group`: [Group](group#group-1)
* `max_levels`: *number* - The maximum number of generations that can be between the element and the group

Returns: *boolean*

### showContexnu( event )
Displays the context menu of the element

##### Arguments:
* `event`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) - Mouse event, determines where the context menu spawns.

Returns: [Group](group#group-1)

### sanitizeName()

Returns: *string*

### selected
Static Property

Type: *undefined* or [Group](group#group-1)

Returns the first selected group.
In the future this will return an array of selected groups instead.


### first_selected
Static Property

Type: *undefined* or [Group](group#group-1)

The first group in 

multi_selected


### multi_selected
Static Property

Type: Array of [Group](group#group-1)

A list of directly selected groups.


### all
Static Property

Type: Array of [Group](group#group-1)

All groups in the current project


### animator
Static Property

Type: [BoneAnimator](animation#boneanimator)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/group.d.ts#L45)


### preview_controller
Static Property

Type: [NodePreviewController](canvas#nodepreviewcontroller)


### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L64)


