---
title: Cube
---

# Cube
## Cube
Extends: [OutlinerElement](outliner#outlinerelement)

### new Cube( options[, uuid] )
Creates a new Cube

##### Arguments:
* `options`: [CubeOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L1)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| autouv | `0` or `2` or `1` | Auto UV setting, saved as an integer, where 0 means disabled, 1 means enabled, and 2 means relative auto UV (cube position affects UV) |
| shade | *boolean* | Enable or disable shading based on face normal |
| mirror_uv | *boolean* | UV mirror across the X axis when using Box UV |
| inflate | *number* | Inflate adds an inflation value to all sides equally |
| visibility | *boolean* | Visibility of the cube in the viewport |
| from | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| to | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| rotation | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| origin | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| faces | [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L44) |  |
| uv_offset | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) | UV position for box UV mode |
| uuid | *string* |  |
| name | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |

### extend( options )
##### Arguments:
* `options`: [CubeOptions](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L1)

Returns: [Cube](cube#cube-1)

### size( [axis, floored] )
Calculates and returns the size of a cube across a certain axis. If the axis argument is omitted, it returns all sizes as an array vector.

##### Arguments:
* `axis`: *number* (Optional)
* `floored`: *boolean* (Optional)

Returns: *number* or [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2)

### rotationAxis()


### getUndoCopy( [aspects] )
##### Arguments:
* `aspects`: *object* (Optional)


### getSaveCopy( [project] )
##### Arguments:
* `project`: *boolean* (Optional)


### roll( axis, steps, origin )
Rotate the cube around axis in 90 degree steps

##### Arguments:
* `axis`: *number* - Axis index
* `steps`: *number* - Number of steps
* `origin`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) - Rotation pivot


### flip( axis, center[, skipUV] )
##### Arguments:
* `axis`: *number*
* `center`: *number*
* `skipUV`: *boolean* (Optional)


### transferOrigin( origin[, update] )
Transfer the origin to a new position, while updating from and to to keep the same visual position.

##### Arguments:
* `origin`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2)
* `update`: *boolean* (Optional)


### getWorldCenter()

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### getGlobalVertexPositions()

Returns: Array of [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2)

### setUVMode( box_uv )
##### Arguments:
* `box_uv`: *boolean*


### setColor( color )
##### Arguments:
* `color`: *number*


### applyTexture( texture, faces )
##### Arguments:
* `texture`: [Texture](textures#texture)
* `faces`: `true` or Array of [CubeFaceDirection](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L112)


### mapAutoUV()


### moveVector( offset, axis[, update] )
##### Arguments:
* `offset`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2)
* `axis`: *number*
* `update`: *boolean* (Optional)


### resize( value, axis, negative[, allow_negative, bidirectional] )
##### Arguments:
* `value`: *number*
* `axis`: *number*
* `negative`: *boolean*
* `allow_negative`: *boolean* (Optional)
* `bidirectional`: *boolean* (Optional)


### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [Cube](cube#cube-1)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Cube](cube#cube-1)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [Cube](cube#cube-1)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [Cube](cube#cube-1)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [Cube](cube#cube-1)

### remove()
Removes the element.


Returns: [Cube](cube#cube-1)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [Cube](cube#cube-1)

### saveName()
Saves the changed name of the element by creating an undo point and making the name unique if necessary.


Returns: [Cube](cube#cube-1)

### createUniqueName()
Create a unique name for the group or element by adding a number at the end or increasing it.


Returns: [Cube](cube#cube-1)

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

Returns: [Cube](cube#cube-1)

### getMesh()

Returns: [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1)

### all
Static Property

Type: Array of [Cube](cube#cube-1)


### selected
Static Property

Type: Array of [Cube](cube#cube-1)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L84)


### hasSelected
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L86)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L58)


### fromSave
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L71)


### isParent
Static Property

Type: `false`



## Face
Extended by: [CubeFace](cube#cubeface), [MeshFace](mesh#meshface)

### new Face()
Creates a new Face



| Property | Type | Description |
| -------- | ---- | ----------- |
| texture | *string* or `false` |  |

### getTexture()

Returns: [Texture](textures#texture)

### getBoundingRect()
Returns a 2D rectangle around the UV face


Returns: *object*

### reset()


### getSaveCopy( [project] )
Returns a save copy of the face, ready for serialization. Set project to true to save for a bbmodel project file

##### Arguments:
* `project`: *boolean* (Optional)

Returns: *object*

### getUndoCopy()
Get a copy for undo tracking


Returns: [Face](cube#face)


## CubeFace
Extends: [Face](cube#face)

### new CubeFace( direction, data, cube )
Creates a new CubeFace

##### Arguments:
* `direction`: [CubeFaceDirection](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L112)
* `data`: CubeFaceOptions
	* `texture`: [Texture](textures#texture) (Optional)
	* `uv`: Array (Optional)
	* `rotation`: *number* (Optional)
	* `tint`: *number* (Optional)
	* `cullface`: `""` or [CubeFaceDirection](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L112) (Optional)
	* `material_name`: *string* (Optional)
	* `enabled`: *boolean* (Optional)
* `cube`: [Cube](cube#cube-1)


| Property | Type | Description |
| -------- | ---- | ----------- |
| texture | *string* or `false` |  |
| cube | [Cube](cube#cube-1) |  |
| direction | [CubeFaceDirection](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L112) |  |
| uv | Array |  |
| uv_size | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) |  |
| rotation | *number* |  |
| tint | *number* |  |
| cullface | `""` or [CubeFaceDirection](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L112) |  |
| material_name | *string* |  |
| enabled | *boolean* |  |

### getTexture()

Returns: [Texture](textures#texture)

### getBoundingRect()
Returns a 2D rectangle around the UV face


Returns: *object*

### reset()


### getSaveCopy( [project] )
Returns a save copy of the face, ready for serialization. Set project to true to save for a bbmodel project file

##### Arguments:
* `project`: *boolean* (Optional)

Returns: *object*

### getUndoCopy()
Get a copy for undo tracking


Returns: [Face](cube#face)

### extend( data )
##### Arguments:
* `data`: CubeFaceOptions
	* `texture`: [Texture](textures#texture) (Optional)
	* `uv`: Array (Optional)
	* `rotation`: *number* (Optional)
	* `tint`: *number* (Optional)
	* `cullface`: `""` or [CubeFaceDirection](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/cube.d.ts#L112) (Optional)
	* `material_name`: *string* (Optional)
	* `enabled`: *boolean* (Optional)

Returns: *any*

### getVertexIndices()

Returns: Array

