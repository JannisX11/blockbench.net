---
title: Preview
---

# Preview

### new Preview( data )
Creates a new 3D viewport

* `data` Object
	* `id` Preview ID

#### Preview#canvas
HTML canvas element of the preview

#### Preview#isOrtho
Boolean. Whether the preview is in orthographic mode

#### Preview#camera
Currently active camera of the preview

#### Preview#camPers
Perspective Camera

#### Preview#camOrtho
OrthographicCamera

#### Preview#controls
Orbit controls

#### Preview#addAnnotation( key, node )
Adds an annotation to the preview

* `key: String` Identifier key for the annotation
* `node: HTML Node` Element to use as the annotation

#### Preview#removeAnnotation( key )
Remove an annotation

* `key: String` Identifier key of the annotation

#### Preview#removeAnnotation( key )
Remove an annotation

* `key: String` Identifier key of the annotation

#### Preview#resize()
Update the size of the preview

#### Preview#raycast( event )
Raycast into the 3D preview at the current event location

* `event: Event`
* `Returns: Boolean|Object` false if nothing is found, otherwise an object containing the information
	* `event: Event`
	* `type: String` Type of object that was found
	* `intersects: Array` List of all possible intersections
	* `cube: Cube` Object that was clicked on
	* `face: String` Face of the cube
	* `vertex: Object` Vertex if a vertex was found

#### Preview#setProjectionMode( orthographic: Boolean )
Sets the projection mode to orthographic is orthographic is true, otherwise sets it to perspective

#### Preview#setLockedAngle( angle: String )
Switches to one of the fixed orthographic side views

* `angle: String` Side at which the camera looks

#### Preview#loadAnglePreset( angle: String )
Switches to one of the fixed orthographic side views

* `angle: String` Side at which the camera looks

#### Preview#setFOV( fov: Number )
Sets the FOV angle of the camera

#### Preview#getFacingDirection()
Returns the direction that the camera is facing in

#### Preview#getFacingHeight()
Returns the height that the camera is facing in. Can be `down`, `middle` or `up`.

#### Preview#raycastMouseCoords( x, y )
Transfer the screen space mouse coordinates `x` and `y` to 3D space of the orthographic camera.

#### Preview#occupyTransformer()
Occupy the transformer gizmo and adjust the size to the current camera angle.

#### Preview#screenshot( options, callback )
Takes a screenshot of the preview.

* `options: Object` 
	* `crop: Boolean` Automatically crop the screenshot to the minimal size
	* `width: Number` Screenshot width
	* `height: Number` Screenshot height
* `callback: Function` 
	* `image: String` Base64 encoded image