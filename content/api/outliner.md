---
title: Outliner
---

# Outliner
## OutlinerNode
Extended by: [OutlinerElement](outliner#outlinerelement), [Group](group#group-1)

### new OutlinerNode()
Creates a new OutlinerNode



| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| name | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |

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

### saveName()
Saves the changed name of the element by creating an undo point and making the name unique if necessary.


Returns: [OutlinerNode](outliner#outlinernode)

### createUniqueName()
Create a unique name for the group or element by adding a number at the end or increasing it.


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

### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L58)



## OutlinerElement
Extends: [OutlinerNode](outliner#outlinernode)

Extended by: [Locator](outliner#locator), [NullObject](outliner#nullobject), [TextureMesh](outliner#texturemesh), [Cube](cube#cube-1), [Mesh](mesh#mesh-1)

### new OutlinerElement()
Creates a new OutlinerElement



| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| name | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
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

### saveName()
Saves the changed name of the element by creating an undo point and making the name unique if necessary.


Returns: [OutlinerElement](outliner#outlinerelement)

### createUniqueName()
Create a unique name for the group or element by adding a number at the end or increasing it.


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

### getMesh()

Returns: [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1)

### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L58)


### fromSave
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L71)


### isParent
Static Property

Type: `false`



## Locator
Extends: [OutlinerElement](outliner#outlinerelement)

### new Locator( options[, uuid] )
Creates a new Locator

##### Arguments:
* `options`: [LocatorOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L75)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| name | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |

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

### saveName()
Saves the changed name of the element by creating an undo point and making the name unique if necessary.


Returns: [Locator](outliner#locator)

### createUniqueName()
Create a unique name for the group or element by adding a number at the end or increasing it.


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

### getMesh()

Returns: [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1)

### extend( options )
##### Arguments:
* `options`: [LocatorOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L75)

Returns: *any*

### flip( axis, center )
##### Arguments:
* `axis`: *number*
* `center`: *number*

Returns: [Locator](outliner#locator)

### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L58)


### fromSave
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L71)


### isParent
Static Property

Type: `false`


### all
Static Property

Type: Array of [Locator](outliner#locator)


### selected
Static Property

Type: Array of [Locator](outliner#locator)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L90)


### hasSelected
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L92)



## NullObject
Extends: [OutlinerElement](outliner#outlinerelement)

### new NullObject( options[, uuid] )
Creates a new NullObject

##### Arguments:
* `options`: [NullObjectOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L96)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| name | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |
| position | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
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

### saveName()
Saves the changed name of the element by creating an undo point and making the name unique if necessary.


Returns: [NullObject](outliner#nullobject)

### createUniqueName()
Create a unique name for the group or element by adding a number at the end or increasing it.


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

### getMesh()

Returns: [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1)

### extend( options )
##### Arguments:
* `options`: [NullObjectOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L96)

Returns: *any*

### flip( axis, center )
##### Arguments:
* `axis`: *number*
* `center`: *number*

Returns: [NullObject](outliner#nullobject)

### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L58)


### fromSave
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L71)


### isParent
Static Property

Type: `false`


### all
Static Property

Type: Array of [NullObject](outliner#nullobject)


### selected
Static Property

Type: Array of [NullObject](outliner#nullobject)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L116)


### hasSelected
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L118)



## TextureMesh
Extends: [OutlinerElement](outliner#outlinerelement)

### new TextureMesh( options[, uuid] )
Creates a new TextureMesh

##### Arguments:
* `options`: [TextureMeshOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L122)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| name | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |
| texture_name | *string* |  |
| local_pivot | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| scale | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |

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

### saveName()
Saves the changed name of the element by creating an undo point and making the name unique if necessary.


Returns: [TextureMesh](outliner#texturemesh)

### createUniqueName()
Create a unique name for the group or element by adding a number at the end or increasing it.


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

### getMesh()

Returns: [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1)

### extend( options )
##### Arguments:
* `options`: [TextureMeshOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L122)

Returns: *any*

### flip( axis, center )
##### Arguments:
* `axis`: *number*
* `center`: *number*

Returns: [TextureMesh](outliner#texturemesh)

### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### moveVector( offset, axis[, update] )
##### Arguments:
* `offset`: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) or [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2)
* `axis`: *number*
* `update`: *boolean* (Optional)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L58)


### fromSave
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L71)


### isParent
Static Property

Type: `false`


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


## markerColors
#### Global Variable

Type: Array of [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L153)

