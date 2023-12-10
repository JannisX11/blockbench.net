---
title: Util
---

# Util
## Condition( condition )
#### Global Function

Tests if a condition is truthy of falsy. Returns true if the condition is unspecified

##### Arguments:
* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) - Boolean, function, object or anything else

Returns: *boolean*


## oneLiner
Wrapper for objects that tells the custom JSON exporter to write in one line

### new oneLiner( data )
Creates a new oneLiner

##### Arguments:
* `data`: *object*



## convertTouchEvent( event )
#### Global Function

If the input event is a touch event, convert touch event to a compatible mouse event

##### Arguments:
* `event`: [MouseEvent](#MouseEvent)

Returns: [MouseEvent](#MouseEvent)


## addEventListeners( element, events, func[, option] )
#### Global Function

Adds an event listener to an element, except that is supports multiple event types simultaneously

##### Arguments:
* `element`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) - Target Element
* `events`: *string* - Event types, separated by space characters
* `func`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/util.d.ts#L50) - Function
* `option`: *any* (Optional) - Option

Returns: *any*


## trimFloatNumber( value )
#### Global Function

##### Arguments:
* `value`: *number*

Returns: *string*


## getAxisLetter( axisNumber )
#### Global Function

##### Arguments:
* `axisNumber`: *number*

Returns: *string*


## getAxisNumber( axisLetter )
#### Global Function

##### Arguments:
* `axisLetter`: *string*

Returns: *number*


## Reusable
#### Namespace

Reusable data types that can be used by anything, but should not be used to store data between function calls. Can be used to save memory on frequent function calls.

| Property | Type | Description |
| -------- | ---- | ----------- |
| vec1 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec2 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec3 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec4 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec5 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec6 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec7 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| vec8 | [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) |  |
| quat1 | [THREE.Quaternion](https://threejs.org/docs/index.html#api/en/math/Quaternion) |  |
| quat2 | [THREE.Quaternion](https://threejs.org/docs/index.html#api/en/math/Quaternion) |  |
| euler1 | [THREE.Euler](https://threejs.org/docs/index.html#api/en/math/Euler) |  |
| euler2 | [THREE.Euler](https://threejs.org/docs/index.html#api/en/math/Euler) |  |


## Merge
#### Namespace

Merge the value under a certain key from one object into another

### number( target, source, key )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*


### string( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/util.d.ts#L80) (Optional)


### molang( target, source, key )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*


### boolean( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/util.d.ts#L82) (Optional)


### arrayVector( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/util.d.ts#L83) (Optional)


### arrayVector2( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/util.d.ts#L84) (Optional)



## Rectangle
### new Rectangle( start_x, start_y, width, height )
Creates a new Rectangle

##### Arguments:
* `start_x`: *number*
* `start_y`: *number*
* `width`: *number*
* `height`: *number*


| Property | Type | Description |
| -------- | ---- | ----------- |
| start_x | *number* |  |
| start_y | *number* |  |
| width | *number* |  |
| height | *number* |  |
| start | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) |  |
| w | *number* |  |
| h | *number* |  |
| end_x | *number* |  |
| end_y | *number* |  |
| area | *number* |  |

### fromCoords( x1, y1, x2, y2 )
##### Arguments:
* `x1`: *number*
* `y1`: *number*
* `x2`: *number*
* `y2`: *number*


### fromUnorderedCoords( x1, y1, x2, y2 )
##### Arguments:
* `x1`: *number*
* `y1`: *number*
* `x2`: *number*
* `y2`: *number*


### expandTo( x, y )
##### Arguments:
* `x`: *number*
* `y`: *number*


