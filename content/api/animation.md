---
title: Animation
---

# Animation
## AnimationItem
Extended by: [_Animation](animation#animation-1), [AnimationController](animation_controller#animationcontroller)

### new AnimationItem()
Creates a new AnimationItem



### all
Static Property

Type: Array of [AnimationItem](animation#animationitem)


### selected
Static Property

Type: [AnimationItem](animation#animationitem)



## Animation
Extends: [AnimationItem](animation#animationitem)

### new _Animation( data )
Creates a new Animation

##### Arguments:
* `data`: AnimationOptions
	* `name`: *string* (Optional)
	* `loop`: `"once"` or `"hold"` or `"loop"` (Optional)
	* `override`: *boolean* (Optional)
	* `anim_time_update`: *string* (Optional)
	* `blend_weight`: *string* (Optional)
	* `length`: *number* (Optional)
	* `snapping`: *number* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| loop | `"once"` or `"hold"` or `"loop"` |  |
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
| markers | Array of [TimelineMarker](animation#timelinemarker) |  |
| animators | [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/animation.d.ts#L76) |  |
| saved_name | *string* |  |
| selected | *boolean* |  |
| type | *string* |  |
| uuid | *string* |  |

### extend( data )
##### Arguments:
* `data`: AnimationOptions
	* `name`: *string* (Optional)
	* `loop`: `"once"` or `"hold"` or `"loop"` (Optional)
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

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/animation.d.ts#L19)

### compileBedrockAnimation()
Compiles the JSON tree of the animation for the Minecraft Bedrock Edition animation format.


Returns: *object*

### save()

Returns: [_Animation](animation#animation-1)

### select()

Returns: [_Animation](animation#animation-1)

### setLength( length )
##### Arguments:
* `length`: *number*


### createUniqueName( references )
##### Arguments:
* `references`: Array of [Animation](#Animation)

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

### getBoneAnimator( group )
Returns (if necessary creates) the animator of a specific bone of the animation

##### Arguments:
* `group`: [OutlinerNode](outliner#outlinernode)

Returns: [BoneAnimator](animation#boneanimator)

### add( undo )
Adds the animation to the current project and to the interface

##### Arguments:
* `undo`: *any* - If true, the addition of the animation will be registered as an edit

Returns: [_Animation](animation#animation-1)

### remove( undo[, remove_from_file] )
##### Arguments:
* `undo`: *any*
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

Type: Array of [AnimationItem](animation#animationitem)


### selected
Static Property

Type: [AnimationItem](animation#animationitem)



## Animator
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| open | *boolean* |  |
| MolangParser | *object* |  |
| motion_trail | [THREE.Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) |  |
| motion_trail_lock | *boolean* |  |
| particle_effects | *object* |  |

### showDefaultPose( [no_matrix_update] )
##### Arguments:
* `no_matrix_update`: *boolean* (Optional)


### resetParticles()


### showMotionTrail( [target] )
##### Arguments:
* `target`: [Group](group#group-1) (Optional)


### preview()
Updates the preview based on the current time



### loadParticleEmitter( path, content )
##### Arguments:
* `path`: *string*
* `content`: *string*


### loadFile( file[, animation_filter] )
Import a Bedrock animation file

##### Arguments:
* `file`: *object* - File object
* `animation_filter`: Array of *string* (Optional) - List of names of animations to import

Returns: *any*


## GeneralAnimator
Extended by: [BoneAnimator](animation#boneanimator), [NullObjectAnimator](animation#nullobjectanimator), [EffectAnimator](animation#effectanimator)

### new GeneralAnimator( uuid, animation )
Creates a new GeneralAnimator

##### Arguments:
* `uuid`: *string*
* `animation`: [Animation](#Animation)


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [Keyframe](#Keyframe) |  |

### select()

Returns: [GeneralAnimator](animation#generalanimator)

### addToTimeline()

Returns: [GeneralAnimator](animation#generalanimator)

### addKeyframe( data, uuid )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number*
	* `uniform`: *boolean*
	* `interpolation`: *string*
	* `bezier_linked`: *boolean*
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
* `uuid`: *string*

Returns: [Keyframe](#Keyframe)

### createKeyframe()

Returns: [Keyframe](#Keyframe)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/animation.d.ts#L123)

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

Returns: *any*


## BoneAnimator
Extends: [GeneralAnimator](animation#generalanimator)

### new BoneAnimator( uuid, animation )
Creates a new BoneAnimator

##### Arguments:
* `uuid`: *string*
* `animation`: [Animation](#Animation)


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [Keyframe](#Keyframe) |  |
| name | *string* |  |
| uuid | *string* |  |
| rotations | Array of [Keyframe](#Keyframe) |  |
| position | Array of [Keyframe](#Keyframe) |  |
| scale | Array of [Keyframe](#Keyframe) |  |

### select()

Returns: [BoneAnimator](animation#boneanimator)

### addToTimeline()

Returns: [BoneAnimator](animation#boneanimator)

### addKeyframe( data, uuid )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number*
	* `uniform`: *boolean*
	* `interpolation`: *string*
	* `bezier_linked`: *boolean*
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
* `uuid`: *string*

Returns: [Keyframe](#Keyframe)

### createKeyframe()

Returns: [Keyframe](#Keyframe)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/animation.d.ts#L123)

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

Returns: *any*

### getGroup()

Returns: [Group](group#group-1)

### fillValues()


### pushKeyframe()


### doRender()

Returns: *boolean*

### displayRotation()


### displayPosition()


### displayScale()


### interpolate()


### displayFrame()



## NullObjectAnimator
Extends: [GeneralAnimator](animation#generalanimator)

### new NullObjectAnimator( uuid, animation )
Creates a new NullObjectAnimator

##### Arguments:
* `uuid`: *string*
* `animation`: [Animation](#Animation)


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [Keyframe](#Keyframe) |  |
| name | *string* |  |
| uuid | *string* |  |
| rotations | Array of [Keyframe](#Keyframe) |  |
| position | Array of [Keyframe](#Keyframe) |  |
| scale | Array of [Keyframe](#Keyframe) |  |

### select()

Returns: [NullObjectAnimator](animation#nullobjectanimator)

### addToTimeline()

Returns: [NullObjectAnimator](animation#nullobjectanimator)

### addKeyframe( data, uuid )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number*
	* `uniform`: *boolean*
	* `interpolation`: *string*
	* `bezier_linked`: *boolean*
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
* `uuid`: *string*

Returns: [Keyframe](#Keyframe)

### createKeyframe()

Returns: [Keyframe](#Keyframe)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/animation.d.ts#L123)

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

Returns: *any*

### getElement()

Returns: [NullObject](outliner#nullobject)

### doRender()


### displayPosition()


### displayIK()


### displayFrame()



## EffectAnimator
Extends: [GeneralAnimator](animation#generalanimator)

### new EffectAnimator( uuid, animation )
Creates a new EffectAnimator

##### Arguments:
* `uuid`: *string*
* `animation`: [Animation](#Animation)


| Property | Type | Description |
| -------- | ---- | ----------- |
| keyframes | Array of [Keyframe](#Keyframe) |  |
| name | *string* |  |
| uuid | *string* |  |
| particle | Array of [Keyframe](#Keyframe) |  |
| sound | Array of [Keyframe](#Keyframe) |  |
| timeline | Array of [Keyframe](#Keyframe) |  |

### select()

Returns: [EffectAnimator](animation#effectanimator)

### addToTimeline()

Returns: [EffectAnimator](animation#effectanimator)

### addKeyframe( data, uuid )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number*
	* `uniform`: *boolean*
	* `interpolation`: *string*
	* `bezier_linked`: *boolean*
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L2)
* `uuid`: *string*

Returns: [Keyframe](#Keyframe)

### createKeyframe()

Returns: [Keyframe](#Keyframe)

### getOrMakeKeyframe()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/animation.d.ts#L123)

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

Returns: *any*

### pushKeyframe( keyframe )
##### Arguments:
* `keyframe`: *any*

Returns: [EffectAnimator](animation#effectanimator)

### displayFrame( in_loop )
##### Arguments:
* `in_loop`: *any*

Returns: [EffectAnimator](animation#effectanimator)

### startPreviousSounds()



## TimelineMarker
### new TimelineMarker()
Creates a new TimelineMarker



| Property | Type | Description |
| -------- | ---- | ----------- |
| color | *number* |  |
| time | *number* |  |

