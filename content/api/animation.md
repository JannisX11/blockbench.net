---
title: Animation
---

# Animation
## AnimationItem
Extended by: [_Animation](animation#animation-1), [AnimationController](animation_controller#animationcontroller)

<reference path="./blockbench.d.ts"/>

### new AnimationItem()
Creates a new AnimationItem



### getUndoCopy( [options, save] )
##### Arguments:
* `options`: *any* (Optional)
* `save`: *any* (Optional)

Returns: [AnimationOptions](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L9)

### all
Static Property

Type: Array of [_Animation](animation#animation-1)


### selected
Static Property

Type: `null` or [_Animation](animation#animation-1)



## Animation
Extends: [AnimationItem](animation#animationitem)

<reference path="./blockbench.d.ts"/>

### new _Animation( [data] )
Creates a new Animation

##### Arguments:
* `data`: AnimationOptions (Optional)
	* `name`: *string* (Optional)
	* `uuid`: *string* (Optional)
	* `path`: *string* (Optional)
	* `loop`: `"once"` or `"loop"` or `"hold"` (Optional)
	* `override`: *boolean* (Optional)
	* `anim_time_update`: *string* (Optional)
	* `blend_weight`: *string* (Optional)
	* `length`: *number* (Optional)
	* `snapping`: *number* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| uuid | *string* |  |
| loop | `"once"` or `"loop"` or `"hold"` |  |
| override | *boolean* |  |
| anim_time_update | *string* |  |
| blend_weight | *string* |  |
| length | *number* |  |
| snapping | *number* |  |
| loop_delay | *string* |  |
| start_delay | *string* |  |
| path | *string* |  |
| playing | *boolean* |  |
| saved | *boolean* |  |
| time | *number* |  |
| effects | [EffectAnimator](animation#effectanimator) |  |
| markers | Array of [TimelineMarker](animation#timelinemarker) |  |
| animators | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L87) |  |
| saved_name | *string* |  |
| selected | *boolean* |  |
| type | *string* |  |

### extend( [data] )
##### Arguments:
* `data`: AnimationOptions (Optional)
	* `name`: *string* (Optional)
	* `uuid`: *string* (Optional)
	* `path`: *string* (Optional)
	* `loop`: `"once"` or `"loop"` or `"hold"` (Optional)
	* `override`: *boolean* (Optional)
	* `anim_time_update`: *string* (Optional)
	* `blend_weight`: *string* (Optional)
	* `length`: *number* (Optional)
	* `snapping`: *number* (Optional)

Returns: [_Animation](animation#animation-1)

### getUndoCopy( [options, save] )
##### Arguments:
* `options`: [See types]() (Optional)
* `save`: *any* (Optional)

Returns: [AnimationUndoCopy](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L21)

### compileBedrockAnimation()
Compiles the JSON tree of the animation for the Minecraft Bedrock Edition animation format.


Returns: *any*

### save()

Returns: *undefined* or [_Animation](animation#animation-1)

### select()

Returns: *undefined* or [_Animation](animation#animation-1)

### setLength( [length] )
##### Arguments:
* `length`: *number* (Optional)


### createUniqueName( references )
##### Arguments:
* `references`: Array of [_Animation](animation#animation-1)

Returns: *any*

### rename()

Returns: [_Animation](animation#animation-1)

### togglePlayingState( state )
##### Arguments:
* `state`: *any*

Returns: *any*

### showContextMenu( event )
##### Arguments:
* `event`: *any*

Returns: [_Animation](animation#animation-1)

### getBoneAnimator( [node] )
Returns (if necessary creates) the animator of a specific outliner node of this animation

##### Arguments:
* `node`: [OutlinerNode](outliner#outlinernode) (Optional)

Returns: [BoneAnimator](animation#boneanimator)

### add( [undo] )
Adds the animation to the current project and to the interface

##### Arguments:
* `undo`: *boolean* (Optional) - If true, the addition of the animation will be registered as an edit

Returns: [_Animation](animation#animation-1)

### remove( undo[, remove_from_file] )
##### Arguments:
* `undo`: *boolean*
* `remove_from_file`: *boolean* (Optional)

Returns: [_Animation](animation#animation-1)

### getMaxLength()

Returns: *number*

### setLoop( value, undo )
##### Arguments:
* `value`: *any*
* `undo`: *any*


### calculateSnappingFromKeyframes()
Calculate the snapping value that the animation should use, based on the time codes of the keyframes that it holds. Directly updates the value, but also returns it as a number (snaps per second)


Returns: *number*

### propertiesDialog()
Opens the properties dialog



### all
Static Property

Type: Array of [_Animation](animation#animation-1)


### selected
Static Property

Type: `null` or [_Animation](animation#animation-1)



## Animator
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| open | *boolean* |  |
| MolangParser | [Molang](#Molang) |  |
| possible_channels | Array of *unknown* |  |
| motion_trail | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) |  |
| motion_trail_lock | *boolean* |  |
| particle_effects | *any* |  |
| animations | Array of [_Animation](animation#animation-1) |  |
| selected | [_Animation](animation#animation-1) or *undefined* |  |

### showDefaultPose( [no_matrix_update] )
##### Arguments:
* `no_matrix_update`: *boolean* (Optional)


### resetParticles()


### showMotionTrail( [target] )
##### Arguments:
* `target`: [Group](group#group-1) (Optional)


### preview( [in_loop] )
Updates the preview based on the current time

##### Arguments:
* `in_loop`: *boolean* (Optional)


### loadParticleEmitter( path, content )
##### Arguments:
* `path`: *string*
* `content`: *string*


### loadFile( file[, animation_filter] )
Import a Bedrock animation file

##### Arguments:
* `file`: *any* - File any
* `animation_filter`: Array of *string* (Optional) - List of names of animations to import


### resetLastValues()


### autocompleteMolang( text, position, type )
##### Arguments:
* `text`: *string*
* `position`: *number*
* `type`: *string*

Returns: Array of [MolangAutoCompletionItem](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L95)


## GeneralAnimator
Extended by: [BoneAnimator](animation#boneanimator), [NullObjectAnimator](animation#nullobjectanimator), [EffectAnimator](animation#effectanimator)

### new GeneralAnimator( uuid, animation, name )
Creates a new GeneralAnimator

##### Arguments:
* `uuid`: `null` or *string*
* `animation`: [_Animation](animation#animation-1)
* `name`: *string*


| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| keyframes | Array of [_Keyframe](keyframe#keyframe-1) |  |
| animation | [_Animation](animation#animation-1) |  |
| expanded | *boolean* |  |
| selected | *boolean* |  |
| channels | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L160) |  |
| muted | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L163) |  |

### select()

Returns: [GeneralAnimator](animation#generalanimator)

### addToTimeline()

Returns: [GeneralAnimator](animation#generalanimator)

### addKeyframe( data[, uuid] )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number* (Optional)
	* `uniform`: *boolean* (Optional)
	* `interpolation`: *string* (Optional)
	* `bezier_linked`: *boolean* (Optional)
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
* `uuid`: *string* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### createKeyframe()

Returns: [_Keyframe](keyframe#keyframe-1)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L155)

### toggleMuted( channel )
##### Arguments:
* `channel`: *string*

Returns: [GeneralAnimator](animation#generalanimator)

### scrollTo()

Returns: [GeneralAnimator](animation#generalanimator)

### GeneralAnimator.addChannel( channel, options )
##### Arguments:
* `channel`: *string*
* `options`: AddChannelOptions
	* `name`: *string* (Optional)
	* `transform`: *boolean* (Optional)
	* `mutable`: *boolean* (Optional)
	* `max_data_points`: *number* (Optional)



## BoneAnimator
Extends: [GeneralAnimator](animation#generalanimator)

### new BoneAnimator( uuid, animation, name )
Creates a new BoneAnimator

##### Arguments:
* `uuid`: `null` or *string*
* `animation`: [_Animation](animation#animation-1)
* `name`: *string*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [_Keyframe](keyframe#keyframe-1) |  |
| animation | [_Animation](animation#animation-1) |  |
| expanded | *boolean* |  |
| selected | *boolean* |  |
| channels | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L160) |  |
| muted | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L163) |  |
| name | *string* |  |
| uuid | *string* |  |
| rotations | Array of [_Keyframe](keyframe#keyframe-1) |  |
| position | Array of [_Keyframe](keyframe#keyframe-1) |  |
| scale | Array of [_Keyframe](keyframe#keyframe-1) |  |

### select()

Returns: [BoneAnimator](animation#boneanimator)

### addToTimeline()

Returns: [BoneAnimator](animation#boneanimator)

### addKeyframe( data[, uuid] )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number* (Optional)
	* `uniform`: *boolean* (Optional)
	* `interpolation`: *string* (Optional)
	* `bezier_linked`: *boolean* (Optional)
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
* `uuid`: *string* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### createKeyframe()

Returns: [_Keyframe](keyframe#keyframe-1)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L155)

### toggleMuted( channel )
##### Arguments:
* `channel`: *string*

Returns: [BoneAnimator](animation#boneanimator)

### scrollTo()

Returns: [BoneAnimator](animation#boneanimator)

### BoneAnimator.addChannel( channel, options )
##### Arguments:
* `channel`: *string*
* `options`: AddChannelOptions
	* `name`: *string* (Optional)
	* `transform`: *boolean* (Optional)
	* `mutable`: *boolean* (Optional)
	* `max_data_points`: *number* (Optional)


### getGroup()

Returns: [Group](group#group-1)

### fillValues()


### pushKeyframe()


### doRender()

Returns: *boolean*

### displayRotation()


### displayPosition()


### displayScale()


### interpolate( channel[, allow_expression, axis] )
##### Arguments:
* `channel`: *string*
* `allow_expression`: *boolean* (Optional)
* `axis`: *string* (Optional)

Returns: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3)

### displayFrame( [multiplier] )
##### Arguments:
* `multiplier`: *number* (Optional)



## NullObjectAnimator
Extends: [GeneralAnimator](animation#generalanimator)

### new NullObjectAnimator( uuid, animation, name )
Creates a new NullObjectAnimator

##### Arguments:
* `uuid`: `null` or *string*
* `animation`: [_Animation](animation#animation-1)
* `name`: *string*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [_Keyframe](keyframe#keyframe-1) |  |
| animation | [_Animation](animation#animation-1) |  |
| expanded | *boolean* |  |
| selected | *boolean* |  |
| channels | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L160) |  |
| muted | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L163) |  |
| name | *string* |  |
| uuid | *string* |  |
| rotations | Array of [_Keyframe](keyframe#keyframe-1) |  |
| position | Array of [_Keyframe](keyframe#keyframe-1) |  |
| scale | Array of [_Keyframe](keyframe#keyframe-1) |  |

### select()

Returns: [NullObjectAnimator](animation#nullobjectanimator)

### addToTimeline()

Returns: [NullObjectAnimator](animation#nullobjectanimator)

### addKeyframe( data[, uuid] )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number* (Optional)
	* `uniform`: *boolean* (Optional)
	* `interpolation`: *string* (Optional)
	* `bezier_linked`: *boolean* (Optional)
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
* `uuid`: *string* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### createKeyframe()

Returns: [_Keyframe](keyframe#keyframe-1)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L155)

### toggleMuted( channel )
##### Arguments:
* `channel`: *string*

Returns: [NullObjectAnimator](animation#nullobjectanimator)

### scrollTo()

Returns: [NullObjectAnimator](animation#nullobjectanimator)

### NullObjectAnimator.addChannel( channel, options )
##### Arguments:
* `channel`: *string*
* `options`: AddChannelOptions
	* `name`: *string* (Optional)
	* `transform`: *boolean* (Optional)
	* `mutable`: *boolean* (Optional)
	* `max_data_points`: *number* (Optional)


### getElement()

Returns: [NullObject](outliner#nullobject)

### doRender()


### displayPosition()


### displayIK()


### displayFrame()



## EffectAnimator
Extends: [GeneralAnimator](animation#generalanimator)

### new EffectAnimator( uuid, animation, name )
Creates a new EffectAnimator

##### Arguments:
* `uuid`: `null` or *string*
* `animation`: [_Animation](animation#animation-1)
* `name`: *string*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [_Keyframe](keyframe#keyframe-1) |  |
| animation | [_Animation](animation#animation-1) |  |
| expanded | *boolean* |  |
| selected | *boolean* |  |
| channels | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L160) |  |
| muted | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L163) |  |
| name | *string* |  |
| uuid | *string* |  |
| rotations | Array of [_Keyframe](keyframe#keyframe-1) |  |
| position | Array of [_Keyframe](keyframe#keyframe-1) |  |
| scale | Array of [_Keyframe](keyframe#keyframe-1) |  |

### select()

Returns: [EffectAnimator](animation#effectanimator)

### addToTimeline()

Returns: [EffectAnimator](animation#effectanimator)

### addKeyframe( data[, uuid] )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number* (Optional)
	* `uniform`: *boolean* (Optional)
	* `interpolation`: *string* (Optional)
	* `bezier_linked`: *boolean* (Optional)
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L3) (Optional)
* `uuid`: *string* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### createKeyframe()

Returns: [_Keyframe](keyframe#keyframe-1)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/animation.d.ts#L155)

### toggleMuted( channel )
##### Arguments:
* `channel`: *string*

Returns: [EffectAnimator](animation#effectanimator)

### scrollTo()

Returns: [EffectAnimator](animation#effectanimator)

### EffectAnimator.addChannel( channel, options )
##### Arguments:
* `channel`: *string*
* `options`: AddChannelOptions
	* `name`: *string* (Optional)
	* `transform`: *boolean* (Optional)
	* `mutable`: *boolean* (Optional)
	* `max_data_points`: *number* (Optional)


### pushKeyframe( keyframe )
##### Arguments:
* `keyframe`: [_Keyframe](keyframe#keyframe-1)

Returns: [EffectAnimator](animation#effectanimator)

### displayFrame( [in_loop] )
##### Arguments:
* `in_loop`: *boolean* (Optional)


### startPreviousSounds()



## TimelineMarker
### new TimelineMarker()
Creates a new TimelineMarker



| Property | Type | Description |
| -------- | ---- | ----------- |
| color | *number* |  |
| time | *number* |  |

