---
title: Keyframe
---

# Keyframe
## KeyframeDataPoint
Extends: [Object]()

### new KeyframeDataPoint( keyframe )
Creates a new KeyframeDataPoint

##### Arguments:
* `keyframe`: [_Keyframe](keyframe#keyframe-1)


| Property | Type | Description |
| -------- | ---- | ----------- |
| constructor | [Function](#Function) | The initial value of Object.prototype.constructor is the standard built-in Object constructor. |
| boneConfig | [Record](#Record) |  |

### KeyframeDataPoint.assign( target, source )
Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Arguments:
* `target`: [T](#T) - The target object to copy to.
* `source`: [U](#U) - The source object from which to copy properties.

Returns: 
### KeyframeDataPoint.assign( target, source1, source2 )
Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Arguments:
* `target`: [T](#T) - The target object to copy to.
* `source1`: [U](#U) - The first source object from which to copy properties.
* `source2`: [V](#V) - The second source object from which to copy properties.

Returns: 
### KeyframeDataPoint.assign( target, source1, source2, source3 )
Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Arguments:
* `target`: [T](#T) - The target object to copy to.
* `source1`: [U](#U) - The first source object from which to copy properties.
* `source2`: [V](#V) - The second source object from which to copy properties.
* `source3`: [W](#W) - The third source object from which to copy properties.

Returns: 
### KeyframeDataPoint.assign( target, sources )
Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Arguments:
* `target`: *object* - The target object to copy to.
* `sources`: Array of *any* - One or more source objects from which to copy properties

Returns: *any*

### KeyframeDataPoint.getOwnPropertySymbols( o )
Returns an array of all symbol properties found directly on object o.

##### Arguments:
* `o`: *any* - Object to retrieve the symbols from.

Returns: Array of *symbol*

### KeyframeDataPoint.is( value1, value2 )
Returns true if the values are the same value, false otherwise.

##### Arguments:
* `value1`: *any* - The first value.
* `value2`: *any* - The second value.

Returns: *boolean*

### KeyframeDataPoint.setPrototypeOf( o, proto )
Sets the prototype of a specified object o to object proto or null. Returns the object o.

##### Arguments:
* `o`: *any* - The object to change its prototype.
* `proto`: `null` or *object* - The value of the new prototype or null.

Returns: *any*

### KeyframeDataPoint.values( o )
Returns an array of values of the enumerable properties of an object

##### Arguments:
* `o`: [See types]() or [ArrayLike](#ArrayLike) - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: Array of [T](#T)
### KeyframeDataPoint.values( o )
Returns an array of values of the enumerable properties of an object

##### Arguments:
* `o`: [See types]() - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: Array of *any*

### KeyframeDataPoint.entries( o )
Returns an array of key/values of the enumerable properties of an object

##### Arguments:
* `o`: [See types]() or [ArrayLike](#ArrayLike) - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: Array of Array
### KeyframeDataPoint.entries( o )
Returns an array of key/values of the enumerable properties of an object

##### Arguments:
* `o`: [See types]() - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: Array of Array

### KeyframeDataPoint.getOwnPropertyDescriptors( o )
Returns an object containing all own property descriptors of an object

##### Arguments:
* `o`: [T](#T) - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: 

### KeyframeDataPoint.fromEntries( entries )
Returns an object created by key-value entries for properties and methods

##### Arguments:
* `entries`: [Iterable](#Iterable) - An iterable object that contains key-value entries for properties and methods.

Returns: [See types]()
### KeyframeDataPoint.fromEntries( entries )
Returns an object created by key-value entries for properties and methods

##### Arguments:
* `entries`: [Iterable](#Iterable) - An iterable object that contains key-value entries for properties and methods.

Returns: *any*

### toString()
Returns a string representation of an object.


Returns: *string*

### toLocaleString()
Returns a date converted to a string using the current locale.


Returns: *string*

### valueOf()
Returns the primitive value of the specified object.


Returns: [Object]()

### hasOwnProperty( v )
Determines whether an object has a property with the specified name.

##### Arguments:
* `v`: [PropertyKey](#PropertyKey) - A property name.

Returns: *boolean*

### isPrototypeOf( v )
Determines whether an object exists in another object's prototype chain.

##### Arguments:
* `v`: [Object]() - Another object whose prototype chain is to be checked.

Returns: *boolean*

### propertyIsEnumerable( v )
Determines whether a specified property is enumerable.

##### Arguments:
* `v`: [PropertyKey](#PropertyKey) - A property name.

Returns: *boolean*

### KeyframeDataPoint.getPrototypeOf( o )
Returns the prototype of an object.

##### Arguments:
* `o`: *any* - The object that references the prototype.

Returns: *any*

### KeyframeDataPoint.getOwnPropertyDescriptor( o, p )
Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

##### Arguments:
* `o`: *any* - Object that contains the property.
* `p`: [PropertyKey](#PropertyKey) - Name of the property.

Returns: *undefined* or [PropertyDescriptor](#PropertyDescriptor)

### KeyframeDataPoint.getOwnPropertyNames( o )
Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

##### Arguments:
* `o`: *any* - Object that contains the own properties.

Returns: Array of *string*

### KeyframeDataPoint.create( o )
Creates an object that has the specified prototype or that has null prototype.

##### Arguments:
* `o`: `null` or *object* - Object to use as a prototype. May be null.

Returns: *any*
### KeyframeDataPoint.create( o, properties )
Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Arguments:
* `o`: `null` or *object* - Object to use as a prototype. May be null
* `properties`:  - JavaScript object that contains one or more property descriptors.

Returns: *any*

### KeyframeDataPoint.defineProperty( o, p, attributes )
Adds a property to an object, or modifies attributes of an existing property.

##### Arguments:
* `o`: [T](#T) - Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
* `p`: [PropertyKey](#PropertyKey) - The property name.
* `attributes`:  - Descriptor for the property. It can be for a data property or an accessor property.

Returns: [T](#T)

### KeyframeDataPoint.defineProperties( o, properties )
Adds one or more properties to an object, and/or modifies attributes of existing properties.

##### Arguments:
* `o`: [T](#T) - Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
* `properties`:  - JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.

Returns: [T](#T)

### KeyframeDataPoint.seal( o )
Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

##### Arguments:
* `o`: [T](#T) - Object on which to lock the attributes.

Returns: [T](#T)

### KeyframeDataPoint.freeze( f )
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Arguments:
* `f`: [T](#T) - Object on which to lock the attributes.

Returns: [T](#T)
### KeyframeDataPoint.freeze( o )
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Arguments:
* `o`: [T](#T) - Object on which to lock the attributes.

Returns: [Readonly](#Readonly)
### KeyframeDataPoint.freeze( o )
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Arguments:
* `o`: [T](#T) - Object on which to lock the attributes.

Returns: [Readonly](#Readonly)

### KeyframeDataPoint.preventExtensions( o )
Prevents the addition of new properties to an object.

##### Arguments:
* `o`: [T](#T) - Object to make non-extensible.

Returns: [T](#T)

### KeyframeDataPoint.isSealed( o )
Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

##### Arguments:
* `o`: *any* - Object to test.

Returns: *boolean*

### KeyframeDataPoint.isFrozen( o )
Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

##### Arguments:
* `o`: *any* - Object to test.

Returns: *boolean*

### KeyframeDataPoint.isExtensible( o )
Returns a value that indicates whether new properties can be added to an object.

##### Arguments:
* `o`: *any* - Object to test.

Returns: *boolean*

### KeyframeDataPoint.keys( o )
Returns the names of the enumerable string properties and methods of an object.

##### Arguments:
* `o`: *object* - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: Array of *string*
### KeyframeDataPoint.keys( o )
Returns the names of the enumerable string properties and methods of an object.

##### Arguments:
* `o`: [See types]() - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

Returns: Array of *string*

### extend( data )
##### Arguments:
* `data`: [KeyframeDataPointData](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L3)


### getUndoCopy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L10)

### properties
Static Property

Type: [Record](#Record)



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
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
* `uuid`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| data_points | Array of [KeyframeDataPoint](keyframe#keyframedatapoint) |  |
| animator | [GeneralAnimator](animation#generalanimator) |  |
| channel | *string* |  |
| time | *number* |  |
| uuid | *string* |  |
| color | *number* |  |
| uniform | *boolean* |  |
| interpolation | `"linear"` or `"catmullrom"` or `"bezier"` or `"step"` |  |
| cooldown | *boolean* |  |
| bezier_linked | *boolean* |  |
| bezier_left_time | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| bezier_right_time | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| bezier_left_value | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| bezier_right_value | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) |  |
| selected | *boolean* |  |
| transform | *boolean* |  |
| has_expressions | *boolean* |  |

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
	* `bezier_left_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `bezier_left_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_time`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)
	* `bezier_right_value`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L3) (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### get( axis[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)
* `data_point`: *number* (Optional)

Returns: *string* or *number*

### calc( axis[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)
* `data_point`: *number* (Optional)

Returns: *number*

### set( axis, value[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)
* `value`: *any*
* `data_point`: *number* (Optional)

Returns: [_Keyframe](keyframe#keyframe-1)

### offset( axis, amount[, data_point] )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)
* `amount`: *any*
* `data_point`: *number* (Optional)


### flip( axis )
##### Arguments:
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)

Returns: [_Keyframe](keyframe#keyframe-1)

### getLerp( other, axis, amount[, allow_expression] )
##### Arguments:
* `other`: [_Keyframe](keyframe#keyframe-1)
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)
* `amount`: *number*
* `allow_expression`: *boolean* (Optional)

Returns: *number*

### getCatmullromLerp( before_plus, before, after, after_plus, axis, alpha )
##### Arguments:
* `before_plus`: [_Keyframe](keyframe#keyframe-1)
* `before`: [_Keyframe](keyframe#keyframe-1)
* `after`: [_Keyframe](keyframe#keyframe-1)
* `after_plus`: [_Keyframe](keyframe#keyframe-1)
* `axis`: [axisLetter](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L29)
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

Returns: [THREE.Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) or [THREE.Euler](https://threejs.org/docs/index.html#api/en/math/Euler) or [THREE.Quaternion](https://threejs.org/docs/index.html#api/en/math/Quaternion)

### getTimecodeString()

Returns: *string*

### compileBedrockKeyframe()

Returns: *any*

### replaceOthers( save )
##### Arguments:
* `save`: *any*


### select( [event] )
##### Arguments:
* `event`: *any* (Optional)

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
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L79)
* `undo_tag`: *any*

Returns: Array of [_Keyframe](keyframe#keyframe-1)

### getUndoCopy( save )
##### Arguments:
* `save`: *any*

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/keyframe.d.ts#L80)

### selected
Static Property

Type: Array of [_Keyframe](keyframe#keyframe-1)



## updateKeyframeSelection()
#### Global Function



