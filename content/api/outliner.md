---
title: Outliner
---

# Outliner
## elements
#### Global Variable

Type: Array of [OutlinerNode](outliner#outlinernode)


## OutlinerNode
Extended by: [OutlinerElement](outliner#outlinerelement), [Group](group#group-1)

### new OutlinerNode( uuid )
Creates a new OutlinerNode

##### Arguments:
* `uuid`: *string*


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | `"root"` or [Group](group#group-1) |  |
| menu | [Menu](menu#menu-1) |  |

### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [OutlinerNode](outliner#outlinernode)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [OutlinerNode](outliner#outlinernode)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [OutlinerNode](outliner#outlinernode)

### remove()
Removes the element.


Returns: [OutlinerNode](outliner#outlinernode)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [OutlinerNode](outliner#outlinernode)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

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

Returns: [OutlinerNode](outliner#outlinernode)

### getSaveCopy( [project] )
##### Arguments:
* `project`: *boolean* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### sanitizeName()

Returns: *string*

### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L63)



## OutlinerElement
Extends: [OutlinerNode](outliner#outlinernode)

Extended by: [Locator](outliner#locator), [NullObject](outliner#nullobject), [TextureMesh](outliner#texturemesh), [Cube](cube#cube-1), [Mesh](mesh#mesh-1)

### new OutlinerElement( data, uuid )
Creates a new OutlinerElement

##### Arguments:
* `data`: *any*
* `uuid`: *string*


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | `"root"` or [Group](group#group-1) |  |
| menu | [Menu](menu#menu-1) |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |

### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [OutlinerElement](outliner#outlinerelement)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [OutlinerElement](outliner#outlinerelement)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [OutlinerElement](outliner#outlinerelement)

### remove()
Removes the element.


Returns: [OutlinerElement](outliner#outlinerelement)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [OutlinerElement](outliner#outlinerelement)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

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

Returns: [OutlinerElement](outliner#outlinerelement)

### getSaveCopy( [project] )
##### Arguments:
* `project`: *boolean* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### sanitizeName()

Returns: *string*

### OutlinerElement.fromSave( data[, keep_uuid] )
##### Arguments:
* `data`: *any*
* `keep_uuid`: *boolean* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### OutlinerElement.registerType( constructor, id )
##### Arguments:
* `constructor`: *any*
* `id`: *string*


### select( [event, isOutlinerClick] )
##### Arguments:
* `event`: *any* (Optional)
* `isOutlinerClick`: *boolean* (Optional)

Returns: *void* or [OutlinerElement](outliner#outlinerelement)

### unselect( args )
##### Arguments:
* `args`: Array of *any*

Returns: *void* or [OutlinerElement](outliner#outlinerelement)

### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L63)


### animator
Static Property

Type: [BoneAnimator](animation#boneanimator)


### isParent
Static Property

Type: `false`


### types
Static Property

Type: [Record](#Record)


### all
Static Property

Type: Array of [OutlinerElement](outliner#outlinerelement)


### selected
Static Property

Type: Array of [OutlinerElement](outliner#outlinerelement)



## Locator
Extends: [OutlinerElement](outliner#outlinerelement)

### new Locator( options[, uuid] )
Creates a new Locator

##### Arguments:
* `options`: [LocatorOptions](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L86)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | `"root"` or [Group](group#group-1) |  |
| menu | [Menu](menu#menu-1) |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |
| name | *string* |  |

### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [Locator](outliner#locator)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Locator](outliner#locator)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [Locator](outliner#locator)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [Locator](outliner#locator)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [Locator](outliner#locator)

### remove()
Removes the element.


Returns: [Locator](outliner#locator)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [Locator](outliner#locator)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [Locator](outliner#locator)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Locator](outliner#locator)

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

Returns: [Locator](outliner#locator)

### getSaveCopy( [project] )
##### Arguments:
* `project`: *boolean* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### sanitizeName()

Returns: *string*

### Locator.fromSave( data[, keep_uuid] )
##### Arguments:
* `data`: *any*
* `keep_uuid`: *boolean* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### Locator.registerType( constructor, id )
##### Arguments:
* `constructor`: *any*
* `id`: *string*


### select( [event, isOutlinerClick] )
##### Arguments:
* `event`: *any* (Optional)
* `isOutlinerClick`: *boolean* (Optional)

Returns: *void* or [Locator](outliner#locator)

### unselect( args )
##### Arguments:
* `args`: Array of *any*

Returns: *void* or [Locator](outliner#locator)

### extend( options )
##### Arguments:
* `options`: [LocatorOptions](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L86)


### flip( axis, center )
##### Arguments:
* `axis`: *number*
* `center`: *number*

Returns: [Locator](outliner#locator)

### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L63)


### animator
Static Property

Type: [BoneAnimator](animation#boneanimator)


### isParent
Static Property

Type: `false`


### types
Static Property

Type: [Record](#Record)


### all
Static Property

Type: Array of [Locator](outliner#locator)


### selected
Static Property

Type: Array of [Locator](outliner#locator)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L101)


### hasSelected
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L103)



## NullObject
Extends: [OutlinerElement](outliner#outlinerelement)

### new NullObject( options[, uuid] )
Creates a new NullObject

##### Arguments:
* `options`: [NullObjectOptions](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L106)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | `"root"` or [Group](group#group-1) |  |
| menu | [Menu](menu#menu-1) |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |
| position | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L3) |  |
| ik_target | *string* |  |
| lock_ik_target_rotation | *boolean* |  |

### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [NullObject](outliner#nullobject)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [NullObject](outliner#nullobject)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [NullObject](outliner#nullobject)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [NullObject](outliner#nullobject)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [NullObject](outliner#nullobject)

### remove()
Removes the element.


Returns: [NullObject](outliner#nullobject)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [NullObject](outliner#nullobject)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [NullObject](outliner#nullobject)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [NullObject](outliner#nullobject)

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

Returns: [NullObject](outliner#nullobject)

### getSaveCopy( [project] )
##### Arguments:
* `project`: *boolean* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### sanitizeName()

Returns: *string*

### NullObject.fromSave( data[, keep_uuid] )
##### Arguments:
* `data`: *any*
* `keep_uuid`: *boolean* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### NullObject.registerType( constructor, id )
##### Arguments:
* `constructor`: *any*
* `id`: *string*


### select( [event, isOutlinerClick] )
##### Arguments:
* `event`: *any* (Optional)
* `isOutlinerClick`: *boolean* (Optional)

Returns: *void* or [NullObject](outliner#nullobject)

### unselect( args )
##### Arguments:
* `args`: Array of *any*

Returns: *void* or [NullObject](outliner#nullobject)

### extend( options )
##### Arguments:
* `options`: [NullObjectOptions](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L106)


### flip( axis, center )
##### Arguments:
* `axis`: *number*
* `center`: *number*

Returns: [NullObject](outliner#nullobject)

### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L63)


### animator
Static Property

Type: [BoneAnimator](animation#boneanimator)


### isParent
Static Property

Type: `false`


### types
Static Property

Type: [Record](#Record)


### all
Static Property

Type: Array of [NullObject](outliner#nullobject)


### selected
Static Property

Type: Array of [NullObject](outliner#nullobject)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L125)


### hasSelected
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L127)



## TextureMesh
Extends: [OutlinerElement](outliner#outlinerelement)

### new TextureMesh( options[, uuid] )
Creates a new TextureMesh

##### Arguments:
* `options`: [TextureMeshOptions](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L130)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | `"root"` or [Group](group#group-1) |  |
| menu | [Menu](menu#menu-1) |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |
| texture_name | *string* |  |
| local_pivot | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L3) |  |
| scale | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L3) |  |

### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [TextureMesh](outliner#texturemesh)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [TextureMesh](outliner#texturemesh)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [TextureMesh](outliner#texturemesh)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [TextureMesh](outliner#texturemesh)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [TextureMesh](outliner#texturemesh)

### remove()
Removes the element.


Returns: [TextureMesh](outliner#texturemesh)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [TextureMesh](outliner#texturemesh)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [TextureMesh](outliner#texturemesh)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [TextureMesh](outliner#texturemesh)

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

Returns: [TextureMesh](outliner#texturemesh)

### getSaveCopy( [project] )
##### Arguments:
* `project`: *boolean* (Optional)

Returns: [OutlinerNode](outliner#outlinernode)

### sanitizeName()

Returns: *string*

### TextureMesh.fromSave( data[, keep_uuid] )
##### Arguments:
* `data`: *any*
* `keep_uuid`: *boolean* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### TextureMesh.registerType( constructor, id )
##### Arguments:
* `constructor`: *any*
* `id`: *string*


### select( [event, isOutlinerClick] )
##### Arguments:
* `event`: *any* (Optional)
* `isOutlinerClick`: *boolean* (Optional)

Returns: *void* or [TextureMesh](outliner#texturemesh)

### unselect( args )
##### Arguments:
* `args`: Array of *any*

Returns: *void* or [TextureMesh](outliner#texturemesh)

### extend( options )
##### Arguments:
* `options`: [TextureMeshOptions](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L130)


### flip( axis, center )
##### Arguments:
* `axis`: *number*
* `center`: *number*

Returns: [TextureMesh](outliner#texturemesh)

### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### moveVector( offset, axis[, update] )
##### Arguments:
* `offset`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L3) or [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)
* `axis`: *number*
* `update`: *boolean* (Optional)


### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L63)


### animator
Static Property

Type: [BoneAnimator](animation#boneanimator)


### isParent
Static Property

Type: `false`


### types
Static Property

Type: [Record](#Record)


### all
Static Property

Type: Array of [TextureMesh](outliner#texturemesh)


### selected
Static Property

Type: Array of [TextureMesh](outliner#texturemesh)



## Outliner
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| root | Array of [OutlinerNode](outliner#outlinernode) |  |
| elements | Array of [OutlinerElement](outliner#outlinerelement) |  |
| selected | Array of [OutlinerElement](outliner#outlinerelement) |  |
| control_menu_group | Array of [MenuItem](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/menu.d.ts#L19) |  |
| buttons | [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L158) |  |


## markerColors
#### Global Variable

Type: Array of [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L168)


## compileGroups( undo[, lut] )
#### Global Function

##### Arguments:
* `undo`: *boolean*
* `lut`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/outliner.d.ts#L174) (Optional)

Returns: Array of *any*


## parseGroups( array[, import_reference, startIndex] )
#### Global Function

##### Arguments:
* `array`: Array of *any*
* `import_reference`: *any* (Optional)
* `startIndex`: *number* (Optional)


