---
title: Canvas
---

# Canvas
## Canvas
#### Namespace

A global namespace handling miscellaneous functionality related to the 3D preview

| Property | Type | Description |
| -------- | ---- | ----------- |
| materials | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L50) |  |
| emptyMaterials | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L53) |  |
| meshes | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L56) |  |
| bones | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L59) |  |
| scene | [THREE.Scene](https://threejs.org/docs/index.html?q=scene#api/en/scenes/Scene) | Main scene, shared across all tabs |
| gizmos | Array | List of the gizmos (control and UI elements) in the 3D scene |
| outlineMaterial | [THREE.LineBasicMaterial](https://threejs.org/docs/index.html?q=LineBasicMaterial#api/en/materials/LineBasicMaterial) | The material used for all selection outlines |
| meshOutlineMaterial | [THREE.LineBasicMaterial](https://threejs.org/docs/index.html?q=LineBasicMaterial#api/en/materials/LineBasicMaterial) |  |
| onionSkinEarlierMaterial | [THREE.LineBasicMaterial](https://threejs.org/docs/index.html?q=LineBasicMaterial#api/en/materials/LineBasicMaterial) |  |
| onionSkinLaterMaterial | [THREE.LineBasicMaterial](https://threejs.org/docs/index.html?q=LineBasicMaterial#api/en/materials/LineBasicMaterial) |  |
| wireframeMaterial | [THREE.MeshBasicMaterial](https://threejs.org/docs/index.html?q=MeshBasicMaterial#api/en/materials/MeshBasicMaterial) | The material used for the wireframe view |
| solidMaterial | [THREE.ShaderMaterial](https://threejs.org/docs/index.html?q=ShaderMaterial#api/en/materials/ShaderMaterial) |  |
| normalHelperMaterial | [THREE.ShaderMaterial](https://threejs.org/docs/index.html?q=ShaderMaterial#api/en/materials/ShaderMaterial) |  |
| uvHelperMaterial | [THREE.ShaderMaterial](https://threejs.org/docs/index.html?q=ShaderMaterial#api/en/materials/ShaderMaterial) |  |
| meshVertexMaterial | [THREE.PointsMaterial](https://threejs.org/docs/index.html?q=PointsMaterial#api/en/materials/PointsMaterial) |  |
| transparentMaterial | [THREE.MeshBasicMaterial](https://threejs.org/docs/index.html?q=MeshBasicMaterial#api/en/materials/MeshBasicMaterial) |  |
| gridMaterial | [THREE.LineBasicMaterial](https://threejs.org/docs/index.html?q=LineBasicMaterial#api/en/materials/LineBasicMaterial) | The material used for the grids |
| pivot_marker | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) |  |
| global_light_color | [THREE.Color](https://threejs.org/docs/index.html?q=color#api/en/math/Color) |  |
| global_light_side | *number* |  |
| face_order | Array |  |

### raycast( event )
Raycast on the currently selected preview

##### Arguments:
* `event`: [MouseEvent](#MouseEvent)

Returns: *any*

### withoutGizmos( cb )
Execute the callback function without any gizmos, grids and helpers visible

##### Arguments:
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L105)


### clear()
Clear all elements from the scene



### buildGrid()


### updateShading()


### updateView( options )
Updates selected aspects of the preview

##### Arguments:
* `options`: UpdateViewOptions -
	* `elements`: Array of [OutlinerElement](outliner#outlinerelement) (Optional) - List of elements to update
	* `element_aspects`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L10) (Optional) - Which aspects of the elements to update
	* `groups`: Array of [Group](group#group-1) (Optional) - Groups to update
	* `selection`: *boolean* (Optional) - Whether to update the selection (updates the selection outlines and interface)


### updateAll()
Regenerate all elements in the scene. Very unoptimized, use with care



### updateAllPositions()
Update the position and shape of all elements



### updateVisibility()
Update the visibility of all elements



### updateAllFaces( [texture] )
Update all faces in the scene

##### Arguments:
* `texture`: [Texture](textures#texture) (Optional) - Texture filter. If specified, only faces with this texture will be updated


### updateAllUVs()
Update all UV maps in the scene



### getRenderSide()
Returns the three.js render sides based on the current settings and state


Returns: *number*

### updateRenderSides()
Update render sides of all materials



### updateSelected( arr )
Redraw the selected elements in the scene

##### Arguments:
* `arr`: *any* - Optionally specify an array of elements to update


### updatePositions( [y] )
Update positions and shapes of the selected elements

##### Arguments:
* `y`: *number* (Optional)


### updateSelectedFaces()
Update the faces of all selected elements (material, UV map)



### updateUVs()
Update the UV maps of all selected elements



### updateAllBones()
Update the hierarchy and position of all bones



### updateOrigin()
Update the position of the origin / pivot point gizmo


Returns: *boolean*

### adaptObjectPosition( cube[, mesh] )
Update the position and shape of the specified cube

##### Arguments:
* `cube`: [Cube](cube#cube-1) - Cube to update
* `mesh`: [Mesh](mesh#mesh-1) (Optional) - Mesh instance of the cube


### adaptObjectFaceGeo( cube )
Update the geometry faces of the specified cube

##### Arguments:
* `cube`: *any* - Cube to update


### adaptObjectFaces( cube, mesh )
Update the faces (material) of the specified cube

##### Arguments:
* `cube`: *any* - Cube to update
* `mesh`: *any* - Mesh instance of the cube


### updateLayeredTextures()
Update the layered or not layered material of all elements



### updateUV( cube[, animation] )
Update the UV map of the specified cube

##### Arguments:
* `cube`: [Cube](cube#cube-1) - Cube to update
* `animation`: *boolean* (Optional) - Whether to display the current animated texture frame

Returns: *any*

### updateMarkerColorMaterials()
Update the materials of marker colors if new colors were added



### outlineObjects( arr )
Create an additional outline around the specified cubes

##### Arguments:
* `arr`: Array of [Cube](cube#cube-1) - List of cubes to outline


### getModelSize()
Calculate the size of the model, in the currently displayed shape. Returns [width, height] in blockbench units


Returns: Array


## TickUpdates
#### Namespace

Marks a specific aspect of the interface to be updated in the next tick. Useful to avoid an update function getting called multiple times in the same task.

| Property | Type | Description |
| -------- | ---- | ----------- |
| outliner | *undefined* or `true` |  |
| selection | *undefined* or `true` |  |
| main_uv | *undefined* or `true` |  |
| texture_list | *undefined* or `true` |  |
| keyframes | *undefined* or `true` |  |
| keyframe_selection | *undefined* or `true` |  |
| keybind_conflicts | *undefined* or `true` |  |


## NodePreviewController
### new NodePreviewController( type, options )
Creates a new NodePreviewController

##### Arguments:
* `type`:  or 
* `options`: NodePreviewControllerOptions
	* `mesh`: [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) (Optional) - NOTE: This option is just for type checking and should not be set in the options object. It should be set inside of the setup function via  `this.mesh` 

 ```
setup(element) {
   this.mesh = new THREE.Mesh()
}
```
	* `setup`: Function (Optional)
	* `remove`: Function (Optional)
	* `updateAll`: Function (Optional)
	* `updateTransform`: Function (Optional)
	* `updateVisibility`: Function (Optional)
	* `updateSelection`: Function (Optional)
	* `updateGeometry`: Function (Optional)
	* `updateUV`: Function (Optional)
	* `updateFaces`: Function (Optional)
	* `updatePaintingGrid`: Function (Optional)
	* `updateHighlight`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| type |  |  |
| events | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L256) |  |
| mesh | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) or [Mesh](mesh#mesh-1) |  |

### dispatchEvent( event_name, data )
##### Arguments:
* `event_name`: *string*
* `data`: [Record](#Record)


### on( event_name, cb )
Adds an event listener

##### Arguments:
* `event_name`: *string*
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L264)


### once( event_name, cb )
Adds a single-use event listener

##### Arguments:
* `event_name`: *string*
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L268)


### removeListener( event_name, cb )
Removes an event listener

##### Arguments:
* `event_name`: *string*
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/canvas.d.ts#L272)


### setup( element )
##### Arguments:
* `element`: [OutlinerNode](outliner#outlinernode)


### remove( element )
##### Arguments:
* `element`: [OutlinerNode](outliner#outlinernode)


### updateAll( element )
##### Arguments:
* `element`: [OutlinerNode](outliner#outlinernode)


### updateTransform( element )
##### Arguments:
* `element`: [OutlinerNode](outliner#outlinernode)


### updateVisibility( element )
##### Arguments:
* `element`: [OutlinerNode](outliner#outlinernode)


### updateSelection( element )
##### Arguments:
* `element`: [OutlinerNode](outliner#outlinernode)


### updateGeometry( instance )
##### Arguments:
* `instance`: [OutlinerNode](outliner#outlinernode)


### updateUV( instance )
##### Arguments:
* `instance`: [OutlinerNode](outliner#outlinernode)


### updateFaces( instance )
##### Arguments:
* `instance`: [OutlinerNode](outliner#outlinernode)


### updatePaintingGrid( instance )
##### Arguments:
* `instance`: [OutlinerNode](outliner#outlinernode)


### updateHighlight( instance, args )
##### Arguments:
* `instance`: [OutlinerNode](outliner#outlinernode)
* `args`: Array of *any*


