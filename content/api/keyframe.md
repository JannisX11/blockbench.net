---
title: Keyframe
---

# Keyframe
## KeyframeDataPoint
### new KeyframeDataPoint( keyframe )
Creates a new KeyframeDataPoint

##### Arguments:
* `keyframe`: [_Keyframe](keyframe#keyframe-1)


### extend( data )
##### Arguments:
* `data`: [KeyframeDataPointData](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L1)


### getUndoCopy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L7)


## Keyframe
### new _Keyframe( options, uuid )
Creates a new Keyframe

##### Arguments:
* `options`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number* (Optional)
	* `uniform`: *boolean* (Optional)
	* `interpolation`: *string* (Optional)
	* `bezier_linked`: *boolean* (Optional)
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
* `uuid`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| animator | [GeneralAnimator](animation#generalanimator) |  |
| channel | *string* |  |
| data_points | Array of [KeyframeDataPoint](keyframe#keyframedatapoint) |  |
| time | *number* |  |
| color | *number* |  |
| uniform | *boolean* |  |
| interpolation | *string* |  |
| bezier_linked | *boolean* |  |
| bezier_left_time | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| bezier_right_time | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| bezier_left_value | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| bezier_right_value | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |

### extend( data )
##### Arguments:
* `data`: KeyframeOptions
	* `channel`: *string* (Optional)
	* `data_points`: Array of [See types]()
	* `time`: *number*
	* `color`: *number* (Optional)
	* `uniform`: *boolean* (Optional)
	* `interpolation`: *string* (Optional)
	* `bezier_linked`: *boolean* (Optional)
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### get( axis[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)
* `data_point`: *number* (Optional)

Returns: *string* or *number*

### calc( axis[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)
* `data_point`: *number* (Optional)

Returns: *number*

### set( axis, value[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)
* `value`: *any*
* `data_point`: *number* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### offset( axis, amount[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)
* `amount`: *any*
* `data_point`: *number* (Optional)


### flip( axis )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)

Returns: [_Keyframe](keyframe#keyframe-1)

### getLerp( other, axis, amount[, allow_expression] )
##### Arguments:
* `other`: *any*
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)
* `amount`: *any*
* `allow_expression`: *boolean* (Optional)

Returns: *number*

### getCatmullromLerp( before_plus, before, after, after_plus, axis, alpha )
##### Arguments:
* `before_plus`: [_Keyframe](keyframe#keyframe-1)
* `before`: [_Keyframe](keyframe#keyframe-1)
* `after`: [_Keyframe](keyframe#keyframe-1)
* `after_plus`: [_Keyframe](keyframe#keyframe-1)
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L25)
* `alpha`: *number*

Returns: *number*

### getArray( [data_point] )
##### Arguments:
* `data_point`: *number* (Optional)

Returns: Array of *string* or *number*

### getFixed( [data_point, get_quaternion] )
##### Arguments:
* `data_point`: *number* (Optional)
* `get_quaternion`: *boolean* (Optional)

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) or [THREE.Quaternion](https://threejs.org/docs/index.html#api/en/math/Quaternion) or [THREE.Euler](https://threejs.org/docs/index.html#api/en/math/Euler)

### getTimecodeString()

Returns: *string*

### compileBedrockKeyframe()

Returns: *object*

### replaceOthers( save )
##### Arguments:
* `save`: *any*


### select( event )
##### Arguments:
* `event`: *any*

Returns: [_Keyframe](keyframe#keyframe-1)

### callPlayhead()

Returns: [_Keyframe](keyframe#keyframe-1)

### showContextMenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: [_Keyframe](keyframe#keyframe-1)

### remove()


### forSelected( callback, undo_tag )
##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L62)
* `undo_tag`: *any*

Returns: Array of [_Keyframe](keyframe#keyframe-1)

### getUndoCopy( save )
##### Arguments:
* `save`: *any*

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/keyframe.d.ts#L63)


## updateKeyframeSelection()
#### Global Function



