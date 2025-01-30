---
title: Animation Controller
---

# Animation Controller
## AnimationControllerState
### new AnimationControllerState( controller[, options] )
Creates a new AnimationControllerState

##### Arguments:
* `controller`: [AnimationController](animation_controller#animationcontroller)
* `options`: AnimationControllerStateOptions (Optional)
	* `name`: *string* (Optional)
	* `animations`: Array of [StateAnimationInput](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L3) (Optional)
	* `transitions`: Array of *any* (Optional)
	* `sounds`: Array of *any* (Optional)
	* `particles`: Array of *any* (Optional)
	* `on_entry`: *string* (Optional)
	* `on_exit`: *string* (Optional)
	* `blend_transition`: *number* (Optional)
	* `blend_via_shortest_path`: *boolean* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| controller | [AnimationController](animation_controller#animationcontroller) |  |
| uuid | *string* |  |
| name | *string* |  |
| fold | [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L38) |  |
| muted | [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L46) |  |
| playing_sounds | Array of [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement) |  |
| animations | Array of [StateAnimation](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L14) |  |
| transitions | Array of *any* |  |
| sounds | Array of *any* |  |
| particles | Array of *any* |  |
| on_entry | *string* |  |
| on_exit | *string* |  |
| blend_transition | *number* |  |
| blend_via_shortest_path | *boolean* |  |

### extend( data )
##### Arguments:
* `data`: AnimationControllerStateOptions
	* `name`: *string* (Optional)
	* `animations`: Array of [StateAnimationInput](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L3) (Optional)
	* `transitions`: Array of *any* (Optional)
	* `sounds`: Array of *any* (Optional)
	* `particles`: Array of *any* (Optional)
	* `on_entry`: *string* (Optional)
	* `on_exit`: *string* (Optional)
	* `blend_transition`: *number* (Optional)
	* `blend_via_shortest_path`: *boolean* (Optional)


### getUndoCopy()

Returns: *any*

### compileForBedrock()

Returns: *any*

### select( [force] )
##### Arguments:
* `force`: *boolean* (Optional)


### unselect()


### playEffects()


### scrollTo()


### rename()


### remove( [undo] )
##### Arguments:
* `undo`: *boolean* (Optional)


### createUniqueName()


### addAnimation( [animation] )
##### Arguments:
* `animation`: [_Animation](animation#animation-1) (Optional)


### addTransition( [target_uuid] )
##### Arguments:
* `target_uuid`: *string* (Optional)


### addParticle( [options] )
##### Arguments:
* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L73) (Optional)


### addSound( [options] )
##### Arguments:
* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/animation_controller.d.ts#L74) (Optional)


### openMenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### getStateTime()
Returns the current animation time of the state in seconds


Returns: *number*


## AnimationController
Extends: [AnimationItem](animation#animationitem)

Animation Controllers are state machines used for Minecraft: Bedrock Edition models to control and blend between animations.

### new AnimationController( [data] )
Creates a new AnimationController

##### Arguments:
* `data`: AnimationControllerOptions (Optional)
	* `name`: *string* (Optional)
	* `uuid`: *string* (Optional)
	* `path`: *string* (Optional)
	* `initial_state`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| path | *string* |  |
| uuid | *string* |  |
| playing | *boolean* |  |
| saved | *boolean* |  |
| selected | *boolean* |  |
| saved_name | *string* |  |
| states | Array of [AnimationControllerState](animation_controller#animationcontrollerstate) |  |
| initial_state | *string* |  |
| selected_state | `null` or [AnimationControllerState](animation_controller#animationcontrollerstate) |  |

### extend( data )
##### Arguments:
* `data`: AnimationControllerOptions
	* `name`: *string* (Optional)
	* `uuid`: *string* (Optional)
	* `path`: *string* (Optional)
	* `initial_state`: *string* (Optional)

Returns: [AnimationController](animation_controller#animationcontroller)

### getUndoCopy()

Returns: *any*

### compileForBedrock()

Returns: *any*

### save()

Returns: *undefined* or [AnimationController](animation_controller#animationcontroller)

### select()

Returns: *undefined* or [AnimationController](animation_controller#animationcontroller)

### createUniqueName( references )
##### Arguments:
* `references`: Array of [AnimationController](animation_controller#animationcontroller)

Returns: *string* or *boolean*

### rename()

Returns: [AnimationController](animation_controller#animationcontroller)

### add( [undo] )
Adds the animation controller to the current project and to the interface

##### Arguments:
* `undo`: *boolean* (Optional) - If true, the addition of the animation controller will be registered as an edit

Returns: [AnimationController](animation_controller#animationcontroller)

### remove( [undo, remove_from_file] )
##### Arguments:
* `undo`: *boolean* (Optional)
* `remove_from_file`: *boolean* (Optional)

Returns: [AnimationController](animation_controller#animationcontroller)

### propertiesDialog()


### updatePreview()
Updates the preview of the controller, including updating the animations and switching states if preview mode is set to play



### togglePlayingState( [state] )
##### Arguments:
* `state`: *boolean* (Optional)

Returns: *boolean*

### showContextMenu( event )
##### Arguments:
* `event`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### all
Static Property

Type: Array of [_Animation](animation#animation-1)


### selected
Static Property

Type: `null` or [_Animation](animation#animation-1)


