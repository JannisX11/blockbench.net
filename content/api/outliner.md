---
title: Outliner
---

# Outliner

## Outliner management

### OutlinerNode()

Parent of all groups and elements in the outliner. All properties and methods can be used on groups and elements.

* `title` Title used for the hover tooltip
* `type` Type of the group or element
* `menu` Context menu of the group or element type.
* `selected` Array (or single object in case of group) or the selected elements of this type
* `all` Array of all groups or elements of this type

#### OutlinerNode#init()

Initializes the element so it can be used in the outliner.

#### OutlinerNode#addTo( destination )

Adds the element to a specific place in the outliner.
* `destination` Can be a group, element or undefined for the outliner root.

#### OutlinerNode#sortInBefore( destination: OutlinerNode, index_mod: Number )

Sorts the element in before another element.
* `destination` Reference group or element
* `index_mod` Modifier for the index. If 1, the element will be placed after (below) the destination.

#### OutlinerNode#getParentArray()

Returns the children array of the parent that the group or element is in.

#### OutlinerNode#showInOutliner()

Unfolds the outliner and scrolls up or down if necessary to show the group or element.

#### OutlinerNode#updateElement()

Updates the Vue node of the element. This is only necessary in some rare situations

#### OutlinerNode#remove()

Removes the element.

#### OutlinerNode#rename()

Marks the name of the group or element in the outliner for renaming.

#### OutlinerNode#saveName()

Saves the changed name of the element by creating an undo point and making the name unique if necessary.

#### OutlinerNode#createUniqueName()

Create a unique name for the group or element by adding a number at the end or increasing it.

#### OutlinerNode#isChildOf( group, max_levels )

Checks of the group or element is a child of `group`.
* `group` A group
* `max_levels` The maximum number of generations that can be between the element and `group`.

#### OutlinerNode#showContextMenu( event )

Displays the context menu of the element
* `event`. Mouse event, determines where the context menu spawns.


## Group

### new Group( data )

* `data` Object
	* `name` Group name
	* `children` Array of the groups content
	* `origin` Array of the group pivot point
	* `rotation` Array of the group rotation
	* `reset` If a bone, whether to reset the informations of inherited bones in bedrock edition.
	* `shade` Whether to shade the contents of the group
	* `selected` Whether the group is selected
	* `visibility` Whether the group is visible
	* `export` Whether to export the entire group
	* `autouv` Auto UV setting for the children. Can be 0, 1 or 2.
	* `parent` Parent group or `'root'`
	* `isOpen` Whether the group is currently opened in the outliner
	* `mesh` 3D representation of the group when using bone rig

### Group.selected

Static variable to get the currently selected groups. Note that children groups of this group can also have `selected` to make them appear selected in the outliner, but will not be treated as the primary selected group

#### Group#extend( data )

Modify data of the group.
* `data` Object of properties to apply to the group

#### Group#selectChildren( event )

Select the children of the group

#### Group#selectLow( highlight )

Select the group and its children without marking it the selected group.
* `highlight: Boolean` Whether to highlight the group in the selection color in the outliner. Default is true.

#### Group#unselect()

Unselects the group

#### Group#matchesSelection()

Returns true if the content of the group matches the current selection.

#### Group#openUp()

Opens the group and all of its ancestor groups.

#### Group#remove( undo )

Removes the group
* `undo` If true, an undo point will be created.

#### Group#resolve()

Remove the group and leave all of its children in the parent array.

#### Group#transferOrigin( origin )

Move the origin of a bone to a specific location without visually affecting the position of it's content.
* `origin: Array` Position of the new 3D origin

#### Group#sortContent()

Sort the content of the group alphabetically. This will automatically create an undo point.

#### Group#duplicate()

Duplicate the group

#### Group#getSaveCopy()

Returns a copy of the group that can be used to save the group to a JSON file.

#### Group#getChildlessCopy()

Returns a copy of the group without the children. Internally used by the duplicate function.

#### Group#compile( undo )

Generates a copy of the group that can be used for undo points or to save in block model files.
* `undo` Make the copy work for undo points.

#### Group#forEachChild( callback, type, for_self )

Run a funtion for each child of the group recursively.
* `callback` Function to run for each child. First argument is the child.
* `type` For which type to run the function. Can be `Group`, `OutlinerElement`, `Cube` etc. or undefined.
* `for_self` Whether to also run the function on itself.


## Cube

Cubes represent regular cubes in the outliner. Cubes inherit all properties and methods from OutlinerNode and OutlinerElement.

### new Cube( data ).init()

Creates a new cube and initializes it.

* `name: String` 
* `from: Array` First corner of the cube, relative to cube space
* `to: Array` Second corner of the cube
* `origin: Array` Cube pivot point
* `rotation: Array` Cube rotation
* `inflate: Number` Inflate value
* `uv_offset: Array[2]` Box UV offset coordinates
* `visibility: Boolean` 
* `autouv: Number` Auto UV setting. Can be 0, 1 or 2.
* `export: Boolean` Whether to include the cube in exported files.
* `mirror_uv: Boolean` Mirrors the UV on the X axis if using box UV
* `shade: Boolean` 
* `color: Number` Base cube color as shown when untextured or in the outliner. Number between 0 and 7 mapping to the 8 colors.
	* `0.` Light Blue
	* `1.` Yellow
	* `2.` Orange
	* `4.` Red
	* `4.` Purple
	* `5.` Blue
	* `6.` Green
	* `7.` Lime

* `parent: String` 
* `faces: Object` 

#### Cube#extend( data: Object )
Copies properties from data to the cube.

#### Cube#size( axis: Number, floored: Boolean )
Returns the size of the cube on a specific axis or as an array.

* `floored: Boolean` If true, the size will be floored to get the assumed size to calculate box UV.

#### Cube#rotationAxis()
Returns the first axis that the cube is rotated around. Useful if the format only supports one axis of rotation.

#### Cube#getMesh()
Returns the ThreeJS mesh instance of the cube.

#### Cube#remove()
Removes the cube.

#### Cube#getUndoCopy( aspects )
Returns a copy of the cube like it is used in Undo saves.

#### Cube#getUndoCopy( aspects )
Returns a copy of the cube like it is used in .bbmodel files.

#### Cube#roll( axis, steps, origin)
Rolls the Cube around an axis by steps of 90 degrees.

* `axis: Integer` Rotation axis
* `steps: Integer` Rotation steps. Each step is +90 degrees.
* `origin: Array` Origin for the rotation. Defaults to the cube's origin.

#### Cube#flip( axis, center, skipUV )
Flips the cube.

* `axis: Integer` Flip axis
* `center: Float` Coordinate of the flipping center
* `skipUV: Boolean` If true, the UV mapping of the cube won't be flipped.

#### Cube#transferOrigin( origin )

Move the origin of a bone to a specific location without visually affecting the position of it's content.

* `origin: Array` Position of the new 3D origin

#### Cube#getWorldCenter()
Returns the actual center of the cube in world space. Returns a ThreeJS Vector3.

#### Cube#setColor( index )
Assigns a marker color to the cube, out of 8 possible colors.

* `index: Integer` Index of default marker colors (ight_blue, yellow, orange, red, purple, blue, green, lime)

#### Cube#applyTexture( texture, faces )
Applies a texture to the cube.

* `texture: Texture`
* `faces: Array|Boolean` Faces to assign the texture to. If true, the texture is applied to all 6 faces. If omitted, the texture is applied to the currently selected face.

#### Cube#mapAutoUV()
Automatically map the UV of the cube depending on its current auto UV mode.

#### Cube#move( value, axis, move_origin )
Moves the cube by an amount on the specified axis.

* `value: Float` Distance to move the cube
* `axis: Integer` Axis to move the cube on
* `move_origin: Boolean` Whether to move the origin along with the element

#### Cube#moveVector( value, axis )
Move the cube by a specific vector in the cube's local space.

* `value: Vector3|Float` Movement distance
* `axis: Integer` If `value` is specified as a number, this is the movement axis.

#### Cube#resize( value, axis, negative, allow_negative )
Resizes the cube by a specified amount

* `value: Float` Resize value
* `axis: Integer` Resize axis
* `negative: Boolean` If true, the object is resized in the negative direction on the specified axis.
* `allow_negative: Boolean` If true, the function will allow negative cube sizes.



## Locator

### new Cube( data ).init()

Creates a new locator and initializes it.

* `name: String` 
* `from: Array` Position of the locator in local space
* `export: Boolean` Whether to include the locator in exported files.

#### Cube#extend( data: Object )
Copies properties from data to the locator.

#### Locator#getUndoCopy( aspects )
Returns a copy of the locator like it is used in Undo saves.

#### Locator#getUndoCopy( aspects )
Returns a copy of the locator like it is used in .bbmodel files.

#### Locator#flip( axis, center)
Flips the locator.

* `axis: Integer` Flip axis
* `center: Float` Coordinate of the flipping center

#### Locator.getWorldCenter()
Returns the position of the locator in world space as a ThreeJS Vector3.

#### Locator.move( value, axis )
Moves the locator by a specified amounted axis.

* `value: Float` Movement distance
* `axis: Integer` Movement axis
