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
* `data`: *any*


### getUndoCopy()

Returns: [See types]()


## Keyframe
### new _Keyframe( options, uuid )
Creates a new Keyframe

##### Arguments:
* `options`: [KeyframeOptions](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L7)
* `uuid`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| animator | [GeneralAnimator](animation#generalanimator) |  |
| bezier_left_time | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/outliner.d.ts#L2) |  |
| bezier_right_time | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/outliner.d.ts#L2) |  |
| bezier_left_value | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/outliner.d.ts#L2) |  |
| bezier_right_value | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/outliner.d.ts#L2) |  |

### extend( data )
##### Arguments:
* `data`: [KeyframeOptions](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L7)

Returns: [_Keyframe](keyframe#keyframe-1)

### get( axis[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)
* `data_point`: *number* (Optional)

Returns: *string* or *number*

### calc( axis[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)
* `data_point`: *number* (Optional)

Returns: *number*

### set( axis, value[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)
* `value`: *any*
* `data_point`: *number* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### offset( axis, amount[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)
* `amount`: *any*
* `data_point`: *number* (Optional)


### flip( axis )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)

Returns: [_Keyframe](keyframe#keyframe-1)

### getLerp( other, axis, amount[, allow_expression] )
##### Arguments:
* `other`: *any*
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)
* `amount`: *any*
* `allow_expression`: *boolean* (Optional)

Returns: *number*

### getCatmullromLerp( before_plus, before, after, after_plus, axis, alpha )
##### Arguments:
* `before_plus`: [_Keyframe](keyframe#keyframe-1)
* `before`: [_Keyframe](keyframe#keyframe-1)
* `after`: [_Keyframe](keyframe#keyframe-1)
* `after_plus`: [_Keyframe](keyframe#keyframe-1)
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L10)
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

Returns: [Quaternion](#Quaternion) or [Euler](#Euler) or [Vector3](#Vector3)

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
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L39)
* `undo_tag`: *any*

Returns: Array of [_Keyframe](keyframe#keyframe-1)

### getUndoCopy( save )
##### Arguments:
* `save`: *any*

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/keyframe.d.ts#L40)

