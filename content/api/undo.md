---
title: Undo
---

# Undo
## UndoSystem
### new UndoSystem()
Creates a new UndoSystem



### initEdit( aspects )
Starts an edit to the current project by saving the state of the provided aspects

##### Arguments:
* `aspects`: UndoAspects - Aspects to save
	* `selection`: *boolean* (Optional)
	* `elements`: Array of [OutlinerElement](outliner#outlinerelement) (Optional)
	* `outliner`: *boolean* (Optional) - Saves the entire outliner structure and hierarchy, including all groups. This is required when adding, or removing any elements, or changing their position in the outliner.
	* `group`: [Group](group#group-1) (Optional) - Saves an individual group, but not it's children or hierarchy position
	* `textures`: Array of [Texture](textures#texture) (Optional) - Textures to save
	* `texture_order`: *boolean* (Optional)
	* `selected_texture`: *boolean* (Optional) - Save which texture is selected
	* `settings`: [See types]() (Optional)
	* `uv_mode`: *boolean* (Optional)
	* `animations`: Array of [Animation](#Animation) (Optional)
	* `animation_controllers`: Array of [AnimationController](animation_controller#animationcontroller) (Optional)
	* `keyframes`: Array of [Keyframe](#Keyframe) (Optional)
	* `display_slots`: Array of *string* (Optional)
	* `exploded_view`: *boolean* (Optional)

Returns: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L50)

### finishEdit( action[, aspects] )
Finishes an edit by saving the state of the project after it was changed

##### Arguments:
* `action`: *string* - Description of the edit
* `aspects`: UndoAspects (Optional)
	* `selection`: *boolean* (Optional)
	* `elements`: Array of [OutlinerElement](outliner#outlinerelement) (Optional)
	* `outliner`: *boolean* (Optional) - Saves the entire outliner structure and hierarchy, including all groups. This is required when adding, or removing any elements, or changing their position in the outliner.
	* `group`: [Group](group#group-1) (Optional) - Saves an individual group, but not it's children or hierarchy position
	* `textures`: Array of [Texture](textures#texture) (Optional) - Textures to save
	* `texture_order`: *boolean* (Optional)
	* `selected_texture`: *boolean* (Optional) - Save which texture is selected
	* `settings`: [See types]() (Optional)
	* `uv_mode`: *boolean* (Optional)
	* `animations`: Array of [Animation](#Animation) (Optional)
	* `animation_controllers`: Array of [AnimationController](animation_controller#animationcontroller) (Optional)
	* `keyframes`: Array of [Keyframe](#Keyframe) (Optional)
	* `display_slots`: Array of *string* (Optional)
	* `exploded_view`: *boolean* (Optional)

Returns: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L50)

### cancelEdit()
Cancels an event before it was finished and reset the project to the state before



### addKeyframeCasualties( keyframes )
Add keyframes to the current edit that were indirectly removed by moving other keyframes to their position

##### Arguments:
* `keyframes`: Array of [Keyframe](#Keyframe) -


### undo( [remote] )
Undoes the latest edit

##### Arguments:
* `remote`: *boolean* (Optional)


### redo( [remote] )
Redoes the latest edit

##### Arguments:
* `remote`: *boolean* (Optional)

### redo( [remote] )
Redoes the latest edit

##### Arguments:
* `remote`: *boolean* (Optional)


### amendEdit( form, callback )
Provides a menu to amend the latest edit with slightly changed values

##### Arguments:
* `form`: AmendEditForm
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `type`: `"number"` (Optional)
	* `label`: *string*
	* `interval_type`: `"position"` or `"rotation"`
	* `getInterval`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L61) (Optional)
	* `value`: *string* or *number* (Optional)
	* `min`: *number* (Optional)
	* `max`: *number* (Optional)
	* `step`: *number* (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L104)

Returns: *any*

### loadSave( save, reference[, mode] )
Loads a specific undo save

##### Arguments:
* `save`: [UndoSave](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L29) - The undo save to load
* `reference`: [UndoSave](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L29) - The current undo save for reference
* `mode`: `"session"` (Optional) - The load save modes



## Undo
#### Global Variable

Type: [UndoSystem](undo#undosystem)

Blockbench's undo system of the current project to register edits to the project and switch between them

## Example



```javascript
Undo.initEdit({elements: []});

var new_cube = new Cube({name: 'kevin'}).init();
var other_cube = new Cube({name: 'lars'}).init();

Undo.finishEdit('add new cubes', {elements: [new_cube, other_cube]});
```

