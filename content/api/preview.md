---
title: Preview
---

# Preview
## Preview
Extends: [Deletable](misc#deletable)

Previews are 3D viewports, that can either be used as a viewport for the user, or as an offscreen view to record media.

### new Preview( options )
Creates a new Preview

##### Arguments:
* `options`: PreviewOptions
	* `id`: *string*
	* `antialias`: *boolean* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| canvas | [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) |  |
| height | *number* |  |
| width | *number* |  |
| node | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| isOrtho | *boolean* | True if the preview is in orthographic camera mode |
| angle | `null` or *number* | Angle, when in a specific side view |
| camera | [THREE.PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) or [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera) |  |
| camPers | [THREE.PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) |  |
| camOrtho | [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/en/cameras/OrthographicCamera) |  |
| controls | *any* |  |
| annotations | *any* |  |
| renderer | [THREE.WebGLRenderer](https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer) |  |
| background | [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/preview.d.ts#L53) |  |
| raycaster | [Raycaster](#Raycaster) |  |
| mouse | [Vector2](#Vector2) |  |

### delete()


### raycast( event )
##### Arguments:
* `event`: [MouseEvent](#MouseEvent)

Returns: `false` or [RaycastResult](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/preview.d.ts#L17)

### render()


### setProjectionMode( orthographic )
##### Arguments:
* `orthographic`: *boolean*

Returns: [Preview](preview#preview-1)

### setFOV( fov )
##### Arguments:
* `fov`: *number*


### setLockedAngle( angle )
##### Arguments:
* `angle`: *number*

Returns: [Preview](preview#preview-1)

### loadAnglePreset( angle_preset )
##### Arguments:
* `angle_preset`: AnglePreset
	* `position`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/outliner.d.ts#L3)
	* `target`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/outliner.d.ts#L3) (Optional)
	* `rotation`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/outliner.d.ts#L3) (Optional)
	* `projection`: `"perspective"` or `"unset"` or `"orthographic"`
	* `zoom`: *number* (Optional)
	* `focal_length`: *number* (Optional)
	* `lockedAngle`: *number* (Optional)

Returns: [Preview](preview#preview-1)

### newAnglePreset()
Opens a dialog to create and save a new angle preset


Returns: [Preview](preview#preview-1)

### getFacingDirection()

Returns: `"east"` or `"west"` or `"south"` or `"north"`

### getFacingHeight()

Returns: `"middle"` or `"up"` or `"down"`

### occupyTransformer()

Returns: [Preview](preview#preview-1)

### showContextMenu( event )
##### Arguments:
* `event`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: [Preview](preview#preview-1)

### loadBackground()


### all
Static Property

Type: Array of [Preview](preview#preview-1)

List of all previews


### selected
Static Property

Type: [Preview](preview#preview-1)

The last used preview



## animate()
#### Global Function



