# Property

Properties are used to dynamically assign properties to existing classes that are undo-relevant.
The advantages of using properties include:

* Value of property is properly handled by the Undo system
* Property is stored in and loaded from .bbmodel files.
* Property is copied when copy-pasting or duplicating an object

Properties are supported on the following classes:

* ModelProject
* Group
* Cube
* Locator
* Face
* Texture
* Animation
* Keyframe
* KeyframeDataPoint



### new Property( target, type, name, options )
Creates a new property on the target class

* `target: Class` Target class
* `type: String` Data type: Can be one of
	* `string` String
	* `molang` Molang value, supports both strings and numbers. Also creates an accessor property on the class (`<name>_string`) that returns the value as a string
	* `number` Number
	* `boolean` Boolean
	* `array` Array
	* `vector` 3 dimensional vector
	* `vector2` 2 dimensional vector
* `name: String` Name/Key of the property
* `options: Object` Optional additional settings
	* `default: Any` Default property value
	* `merge: Function` Custom merge function
	* `reset: Function` Custom reset function
	* `merge_validation: Function` Validates values before merging
	* `condition: ConditionResolvable` Condition for when to use this property
	* `exposed: Boolean`: Whether the property is exposed to the user. This currently applies to project settings (Project dialog) and keyframe data point properties (keyframe panel).
	* `options: Object` Turns the string input into a select input with the provided options. Currently only works for project settings.

#### Example

```javascript
// Creates a simple property named 'rotation' on faces
new Property(Face, 'number', 'rotation');

// Creates a property named 'cullface' on faces that is validated against a list of possible values
let valid_cullfaces = ['north', 'south', 'east', 'west', 'up', 'down', ''];
new Property(Face, 'string', 'cullface', {
	merge_validation: val => valid_cullfaces.includes(val)
});
```

#### Property#delete()
Deletes the property

#### Property#merge( instance, data )
Merges the property value from `data` into the property on the `instance` of the target class.

#### Property#copy( instance, target )
Deletes the property

#### Property#reset( instances )
Resets the property to the default value on the given `instance`
