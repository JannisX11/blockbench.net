# Undo

## Creating an undo point

When modifying elements, textures, animations or anything else about the model, the changes need to be registered to the Undo system. This will a) create an Undo point to allow the user to undo the changes and b) synchronize the model to other users in an Edit Session. This can be achieved using Undo.initEdit and finishEdit.

#### Undo.initEdit( aspects )

Initializes an edit. Call this when you are about to do an edit, before changing anything.

* `aspects`. Which aspects of the model to save. See [#Aspects](#aspects)

#### Undo.finishEdit( edit_name[, aspects] )

Wraps up and saves an edit. Call this function after doing your edit.

* `action_name` Name of the performed edit.
* `aspects` Optional. If the set of aspects you are editing has changed, provide the changed aspects.

## Aspects

Aspects are used to tell Blockbench which parts of the model to save in an undo point. All aspects are within one `aspects` object. When adding or removing elements, textures etc., make sure the objects in question are stated in the first but not in the second aspects, or vice versa.

|Aspect 	|Description	|Example
|-----------|---------------|-
|selection	|If true, the element and group selection will be saved 	|`{selection: true}`
|elements	|Array of all elements (cubes and locators) to save.		|`{elements: [cube1, cube2, locator]}`
|outliner	|If true, the complete outliner structure will be saved. This includes group data like names etc. 	|`{outliner: true}`
|group		|A single group. 											|`{group: Group.selected}`
|textures	|An array of textures. 										|`{textures: [texture]}`
|bitmap		|If true, the content of the listed textures will be saved. |`{textures: [texture], bitmap: true}`
|uv_mode	|When true, saves the current UV mode and project resolution settings. 	|`{uv_mode: true}`
|animations	|Array of animations 										|`{animations: [Animator.selected]}`
|keyframes	|Array of animation keyframes 								|`{keyframes: [keyframe]}`
|display_slots	|Array of display slot ids 								|`{display_slots: ['thirdperson_righthand', 'head']}`
|uv_only	|If true, only UV and face information of cubes will be saved. 	|`{elements. Cube.selected, uv_only: true}`

## Example

```javascript
Undo.initEdit({elements: []});

var new_cube = new Cube({name: 'kevin'}).init();
var other_cube = new Cube({name: 'lars'}).init();

Undo.finishEdit('add new cubes', {elements: [new_cube, other_cube]});
```
