---
title: Undo
---

# Undo
## UndoSystem
### new UndoSystem()
Creates a new UndoSystem



| Property | Type | Description |
| -------- | ---- | ----------- |
| history | Array of [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L100) |  |
| index | *number* |  |

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
	* `animations`: Array of [_Animation](animation#animation-1) (Optional)
	* `animation_controllers`: Array of [AnimationController](animation_controller#animationcontroller) (Optional)
	* `keyframes`: Array of [_Keyframe](keyframe#keyframe-1) (Optional)
	* `display_slots`: Array of *string* (Optional)
	* `exploded_view`: *boolean* (Optional)

Returns: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L100)

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
	* `animations`: Array of [_Animation](animation#animation-1) (Optional)
	* `animation_controllers`: Array of [AnimationController](animation_controller#animationcontroller) (Optional)
	* `keyframes`: Array of [_Keyframe](keyframe#keyframe-1) (Optional)
	* `display_slots`: Array of *string* (Optional)
	* `exploded_view`: *boolean* (Optional)

Returns: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L100)

### cancelEdit()
Cancels an event before it was finished and reset the project to the state before



### addKeyframeCasualties( keyframes )
Add keyframes to the current edit that were indirectly removed by moving other keyframes to their position

##### Arguments:
* `keyframes`: Array of [_Keyframe](keyframe#keyframe-1) -


### initSelection( [aspects] )
Starts a selection change in the current project

##### Arguments:
* `aspects`: UndoSelectionAspects (Optional) - Aspects to save
	* `texture_selection`: *boolean* (Optional)

Returns: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L100)

### finishSelection( action[, aspects] )
Finishes a selection change in the current project

##### Arguments:
* `action`: *string* - Description of the edit
* `aspects`: UndoSelectionAspects (Optional)
	* `texture_selection`: *boolean* (Optional)

Returns: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L100)

### cancelSelection( [revert_changes] )
Cancel the selection changes

##### Arguments:
* `revert_changes`: *boolean* (Optional) - If true, the already tracked selection changes will be reverted to the state before initSelection


### undo( [remote] )
Cancels an event before it was finished and reset the project to the state before

##### Arguments:
* `remote`: *boolean* (Optional)


### redo( [remote] )
Redoes the latest edit

##### Arguments:
* `remote`: *boolean* (Optional)


### amendEdit( form, callback )
Provides a menu to amend the latest edit with slightly changed values

##### Arguments:
* `form`: [InputFormConfig](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L110)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L160)


### closeAmendEditMenu()
Closes the amend edit menu



### loadSave( save, reference[, mode] )
Loads a specific undo save

##### Arguments:
* `save`: [UndoSave](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L33) - The undo save to load
* `reference`: [UndoSave](https://github.com/JannisX11/blockbench-types/blob/8049169/types/undo.d.ts#L33) - The current undo save for reference
* `mode`: `"session"` (Optional) - The load save modes



## Undo
#### Global Variable

Type: [UndoSystem](undo#undosystem)

Blockbench's undo system of the current project to register edits to the project and switch between them

## Example



```javascript
Undo.initEdit({elements: []});

let new_cube = new Cube({name: 'kevin'}).init();
let other_cube = new Cube({name: 'lars'}).init();

Undo.finishEdit('Add new cubes', {elements: [new_cube, other_cube]});
```

