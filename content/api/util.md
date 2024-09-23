---
title: Util
---

# Util
## Blockbench
#### Global Reference


## Condition( condition )
#### Global Function

Tests if a condition is truthy of falsy. Returns true if the condition is unspecified

##### Arguments:
* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) - Boolean, function, any or anything else

Returns: *boolean*
## Condition( condition, context )
#### Global Function

##### Arguments:
* `condition`: *undefined* or *boolean* or [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L127) - Input condition. Can be undefined, a boolean, a function or a condition any
* `context`: *any* - Reusable data types that can be used by anything, but should not be used to store data between function calls. Can be used to save memory on frequent function calls.

Returns: *boolean*


## Condition
#### Namespace

### mutuallyExclusive( a, b )
##### Arguments:
* `a`: *any*
* `b`: *any*

Returns: *boolean*


## oneLiner
Wrapper for anys that tells the custom JSON exporter to write in one line

### new oneLiner( [data] )
Creates a new oneLiner

##### Arguments:
* `data`: *any* (Optional)



## convertTouchEvent( event )
#### Global Function

If the input event is a touch event, convert touch event to a compatible mouse event

##### Arguments:
* `event`: [MouseEvent](#MouseEvent)

Returns: [MouseEvent](#MouseEvent)
## convertTouchEvent( event )
#### Global Function

##### Arguments:
* `event`: *any*

Returns: *any*


## addEventListeners( element, events, func[, option] )
#### Global Function

Adds an event listener to an element, except that is supports multiple event types simultaneously

##### Arguments:
* `element`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) - Target Element
* `events`: *string* - Event types, separated by space characters
* `func`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L59) - Function
* `option`: *any* (Optional) - Option

## addEventListeners( el, events, func, option )
#### Global Function

##### Arguments:
* `el`: *any*
* `events`: *any*
* `func`: *any*
* `option`: *any*



## compareVersions( string1, string2 )
#### Global Function

##### Arguments:
* `string1`: *any*
* `string2`: *any*

Returns: *boolean*


## removeEventListeners( el, events, func, option )
#### Global Function

##### Arguments:
* `el`: *any*
* `events`: *any*
* `func`: *any*
* `option`: *any*



## guid()
#### Global Function


Returns: *string*
## guid()
#### Global Function


Returns: *string*


## isUUID( s )
#### Global Function

##### Arguments:
* `s`: *any*

Returns: *any*


## bbuid( l )
#### Global Function

##### Arguments:
* `l`: *any*

Returns: *string*


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


## limitNumber( number, min, max )
#### Global Function

##### Arguments:
* `number`: *any*
* `min`: *any*
* `max`: *any*

Returns: *any*


## highestInObject( obj, inverse )
#### Global Function

##### Arguments:
* `obj`: *any*
* `inverse`: *any*

Returns: *string*


## getRectangle( a, b, c, d )
#### Global Function

##### Arguments:
* `a`: *any*
* `b`: *any*
* `c`: *any*
* `d`: *any*

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L80)


## doRectanglesOverlap( rect1, rect2 )
#### Global Function

##### Arguments:
* `rect1`: *any*
* `rect2`: *any*

Returns: *boolean*


## omitKeys( obj, keys[, dual_level] )
#### Global Function

##### Arguments:
* `obj`: *any*
* `keys`: *any*
* `dual_level`: *boolean* (Optional)

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L91)


## get( options, name, defaultValue )
#### Global Function

##### Arguments:
* `options`: *any*
* `name`: *any*
* `defaultValue`: *any*

Returns: *any*


## getKeyByValue( any, value )
#### Global Function

##### Arguments:
* `any`: *any*
* `value`: *any*

Returns: *any*


## onVueSetup( func )
#### Global Function

##### Arguments:
* `func`: *any*



## capitalizeFirstLetter( string )
#### Global Function

##### Arguments:
* `string`: *any*

Returns: *any*


## autoStringify( any )
#### Global Function

##### Arguments:
* `any`: *any*

Returns: *string*


## pluralS( arr )
#### Global Function

##### Arguments:
* `arr`: *any*

Returns: `""` or `"s"`


## pathToName( path, extension )
#### Global Function

##### Arguments:
* `path`: *string*
* `extension`: *boolean*

Returns: *string* or `""`


## pathToExtension( path )
#### Global Function

##### Arguments:
* `path`: *string*

Returns: *string* or `""`


## intToRGBA( int )
#### Global Function

##### Arguments:
* `int`: *any*

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L100)


## getAverageRGB( imgEl, blockSize )
#### Global Function

##### Arguments:
* `imgEl`: *any*
* `blockSize`: *any*

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L109)


## stringifyLargeInt( int )
#### Global Function

##### Arguments:
* `int`: *any*

Returns: *any*


## intersectLines( p1, p2, p3, p4 )
#### Global Function

##### Arguments:
* `p1`: *any*
* `p2`: *any*
* `p3`: *any*
* `p4`: *any*

Returns: *boolean*


## pointInRectangle( point, rect_start, rect_end )
#### Global Function

##### Arguments:
* `point`: *any*
* `rect_start`: *any*
* `rect_end`: *any*

Returns: *boolean*


## lineIntersectsRectangle( p1, p2, rect_start, rect_end )
#### Global Function

##### Arguments:
* `p1`: *any*
* `p2`: *any*
* `rect_start`: *any*
* `rect_end`: *any*

Returns: *boolean*


## cameraTargetToRotation( position, target )
#### Global Function

##### Arguments:
* `position`: *any*
* `target`: *any*

Returns: Array of *any*


## cameraRotationToTarget( position, rotation )
#### Global Function

##### Arguments:
* `position`: *any*
* `rotation`: *any*

Returns: *any*


## asyncLoop( o )
#### Global Function

##### Arguments:
* `o`: *any*



## Objector
#### Namespace

### equalKeys( obj, ref )
##### Arguments:
* `obj`: *any*
* `ref`: *any*

Returns: *boolean*

### keyLength( obj )
##### Arguments:
* `obj`: *any*

Returns: *number*


## Merge
#### Namespace

Merge the value under a certain key from one object into another

### number( obj, source[, index] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)

### number( target, source, key )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*


### string( obj, source[, index, validate] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)
* `validate`: *boolean* (Optional)

### string( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L179) (Optional)


### molang( obj, source[, index] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)

### molang( target, source, key )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*


### boolean( obj, source[, index, validate] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)
* `validate`: *boolean* (Optional)

### boolean( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L186) (Optional)


### function( obj, source[, index, validate] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)
* `validate`: *boolean* (Optional)


### arrayVector( obj, source[, index, validate] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)
* `validate`: *boolean* (Optional)

### arrayVector( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L192) (Optional)


### arrayVector2( obj, source[, index, validate] )
##### Arguments:
* `obj`: *any*
* `source`: *any*
* `index`: *any* (Optional)
* `validate`: *boolean* (Optional)

### arrayVector2( target, source, key[, validate] )
##### Arguments:
* `target`: *object*
* `source`: *object*
* `key`: *string* or *number*
* `validate`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/util.d.ts#L198) (Optional)


### function
Reference



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


## getCurrentGroup()
#### Global Function


Returns: [Group](group#group-1)


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
| start | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/outliner.d.ts#L4) |  |
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


