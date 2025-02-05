---
title: Mesh
---

# Mesh
## MeshFace
Extends: [Face](cube#face)

### new MeshFace( mesh, data )
Creates a new MeshFace

##### Arguments:
* `mesh`: [Mesh](mesh#mesh-1)
* `data`: MeshFaceOptions
	* `texture`: [Texture](textures#texture) (Optional)
	* `vertices`: Array of *string*
	* `uv`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L23)


| Property | Type | Description |
| -------- | ---- | ----------- |
| texture | *undefined* or *string* or `false` |  |
| vertices | Array of *string* | The vertices that make up the face, as vertex keys. The vertices go around the face counter-clockwise when looking at the front side of the face. That also means that reversing the vertex order reverses the face direction. |
| mesh | [Mesh](mesh#mesh-1) |  |
| uv | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L32) |  |

### getTexture()

Returns: *undefined* or [Texture](textures#texture)

### getBoundingRect()
Returns a 2D rectangle around the UV face


Returns: *any*

### reset()


### getSaveCopy( [project] )
Returns a save copy of the face, ready for serialization. Set project to true to save for a bbmodel project file

##### Arguments:
* `project`: *boolean* (Optional)

Returns: *any*

### getUndoCopy()
Get a copy for undo tracking


Returns: [Face](cube#face)

### extend( data )
##### Arguments:
* `data`: MeshFaceOptions
	* `texture`: [Texture](textures#texture) (Optional)
	* `vertices`: Array of *string*
	* `uv`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L23)


### getNormal( normalize[, alt_tri] )
Returns the face normal in mesh space as calculated from the vertex positions

##### Arguments:
* `normalize`: *boolean* - If true, the values will be normalized.
* `alt_tri`: *boolean* (Optional) - On quads, if true, this will return the normal of the second tri instead of the first

Returns: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3)

### getOccupationMatrix( [texture_space, start_offset, matrix] )
Calculates which pixels the UV face occupies, and returns them as a map

##### Arguments:
* `texture_space`: *boolean* (Optional)
* `start_offset`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L4) (Optional)
* `matrix`: [OccupationMatrix](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L2) (Optional)

Returns: [OccupationMatrix](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L2)

### getUVIsland()
Get the keys of this face and all faces that are connected with it on the UV map


Returns: Array of *string*

### getAngleTo( other_face )
Returns the angle between two faces in degrees

##### Arguments:
* `other_face`: [MeshFace](mesh#meshface)

Returns: *number*

### invert()
Inverts the direction of the face



### isSelected()
Returns whether the face is selected


Returns: *boolean*

### getSortedVertices()
Returns the vertices of a quad in an order that creates a convex quad shape if possible. If the face has less than 4 vertices, it just returns the vertices in original order.


Returns: Array of *string*

### getAdjacentFace( side_index )
Get the adjacent face in the specified side

##### Arguments:
* `side_index`: *number*

Returns: `null` or [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L75)

### getFaceKey()
Returns the face key


Returns: *string*

### UVToLocal( uv )
Takes a UV coordinate and turns it into a 3D space coordinate in local space of the mesh. On quads, the first triangle is used for calculation, so the coordinates on warped quads may be inaccurate.

##### Arguments:
* `uv`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L4)

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### localToUV( vector )
Takes a 3D coordinate in local space of the mesh, and turns it into a coordinate on the UV map using barycentric coordinates. On quads, the first triangle is used for calculation, so the coordinates on warped quads may be inaccurate.

##### Arguments:
* `vector`: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

Returns: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L4)

### getCenter()
Get the face center by weight in local space


Returns: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3)


## Mesh
Extends: [OutlinerElement](outliner#outlinerelement)

### new Mesh( options[, uuid] )
Creates a new Mesh

##### Arguments:
* `options`: [MeshOptions](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L10)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| visibility | *boolean* |  |
| color | *number* |  |
| vertices | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L110) |  |
| faces | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L113) |  |
| seams | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L116) |  |
| name | *string* |  |
| uuid | *string* |  |
| export | *boolean* |  |
| locked | *boolean* |  |
| parent | [Group](group#group-1) or `"root"` |  |
| menu | [Menu](menu#menu-1) |  |
| selected | *boolean* |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |

### extend( options )
##### Arguments:
* `options`: [MeshOptions](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L10)

Returns: [Mesh](mesh#mesh-1)
### extend( data )
##### Arguments:
* `data`: MeshOptions
	* `name`: *string* (Optional)
	* `color`: *number* (Optional)
	* `visibility`: *boolean* (Optional)
	* `rotation`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `origin`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `vertices`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L16) (Optional)


### getSelectedVertices( can_write )
Get selected vertices as vertex keys

##### Arguments:
* `can_write`: *boolean* - If true, the array can safely be modified to update the selection

Returns: Array of *string*
### getSelectedVertices( can_write )
Get selected faces as face keys

##### Arguments:
* `can_write`: *boolean* - If true, the array can safely be modified to update the selection

Returns: Array of *string*

### getSelectedEdges( can_write )
Get selected edges as vertex key pairs

##### Arguments:
* `can_write`: *boolean* - If true, the array can safely be modified to update the selection

Returns: Array of Array

### setSeam( edge, value )
##### Arguments:
* `edge`: [MeshEdge](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L7)
* `value`: *any*


### getSeam( edge )
##### Arguments:
* `edge`: [MeshEdge](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L7)

Returns: [MeshSeamValue](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L9)

### getWorldCenter( [ignore_mesh_selection] )
##### Arguments:
* `ignore_mesh_selection`: *boolean* (Optional)

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### addVertices( ArrayVector3 )
##### Arguments:
* `ArrayVector3`: Array of [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3)

Returns: Array of *string*

### addFaces( MeshFace )
##### Arguments:
* `MeshFace`: Array of [MeshFace](mesh#meshface)

Returns: Array of *string*

### getUndoCopy( [aspects] )
##### Arguments:
* `aspects`: *any* (Optional)

Returns: *any*

### getSelectionRotation()

Returns: [THREE.Euler](https://threejs.org/docs/index.html#api/en/math/Euler)

### getCenter( global )
##### Arguments:
* `global`: *boolean*

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3)

### forAllFaces( callback )
##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L147)


### transferOrigin( origin[, update] )
##### Arguments:
* `origin`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3)
* `update`: *boolean* (Optional)


### setColor( color )
##### Arguments:
* `color`: *number*


### roll( axis, steps[, origin] )
##### Arguments:
* `axis`: *number*
* `steps`: *number*
* `origin`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)


### flip( axis )
##### Arguments:
* `axis`: *number*


### moveVector( offset, axis[, update] )
##### Arguments:
* `offset`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3)
* `axis`: *number*
* `update`: *boolean* (Optional)


### resize( val, axis, negative, allow_negative[, bidirectional] )
##### Arguments:
* `val`: *number*
* `axis`: *number*
* `negative`: *boolean*
* `allow_negative`: *boolean*
* `bidirectional`: *boolean* (Optional)


### applyTexture( texture[, faces] )
##### Arguments:
* `texture`: [Texture](textures#texture)
* `faces`: `true` or Array of *string* (Optional)


### init()
Initializes the node. This should always be called when creating nodes that will be used in the outliner.


Returns: [Mesh](mesh#mesh-1)

### addTo( [target] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Mesh](mesh#mesh-1)

### sortInBefore( [target, index_modifier] )
##### Arguments:
* `target`: [OutlinerNode](outliner#outlinernode) (Optional)
* `index_modifier`: *number* (Optional)

Returns: [Mesh](mesh#mesh-1)

### getParentArray()

Returns: Array of [OutlinerNode](outliner#outlinernode)

### showInOutliner()
Unfolds the outliner and scrolls up or down if necessary to show the group or element.


Returns: [Mesh](mesh#mesh-1)

### updateElement()
Updates the Vue node of the element. This is only necessary in some rare situations


Returns: [Mesh](mesh#mesh-1)

### remove()
Removes the element.


Returns: [Mesh](mesh#mesh-1)

### rename()
Marks the name of the group or element in the outliner for renaming.


Returns: [Mesh](mesh#mesh-1)

### saveName( [save] )
Saves the changed name of the element by creating an undo point and making the name unique if necessary.

##### Arguments:
* `save`: *boolean* (Optional)

Returns: [Mesh](mesh#mesh-1)

### createUniqueName( [others] )
Create a unique name for the group or element by adding a number at the end or increasing it.

##### Arguments:
* `others`: Array of [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [Mesh](mesh#mesh-1)

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

Returns: [Mesh](mesh#mesh-1)

### getSaveCopy( args )
##### Arguments:
* `args`: Array of *any*

Returns: [Record](#Record)

### sanitizeName()

Returns: *string*

### Mesh.fromSave( data[, keep_uuid] )
##### Arguments:
* `data`: *any*
* `keep_uuid`: *boolean* (Optional)

Returns: [OutlinerElement](outliner#outlinerelement)

### Mesh.registerType( constructor, id )
##### Arguments:
* `constructor`: *any*
* `id`: *string*


### select( [event, isOutlinerClick] )
##### Arguments:
* `event`: *any* (Optional)
* `isOutlinerClick`: *boolean* (Optional)

Returns: *void* or [Mesh](mesh#mesh-1)

### unselect( args )
##### Arguments:
* `args`: Array of *any*

Returns: *void* or [Mesh](mesh#mesh-1)

### all
Static Property

Type: Array of [Mesh](mesh#mesh-1)


### selected
Static Property

Type: Array of [Mesh](mesh#mesh-1)


### hasAny
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L165)


### hasSelected
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/mesh.d.ts#L167)


### properties
Static Property

Type: [Record](#Record)


### uuids
Static Property

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L64)


### animator
Static Property

Type: [BoneAnimator](animation#boneanimator)


### isParent
Static Property

Type: `false`


### types
Static Property

Type: [Record](#Record)


