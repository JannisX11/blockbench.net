# Utility

Blockbench comes with a bunch of custom utility functions to make the life of developers easier.

## General Things

#### Condition( condition: Boolean/Function/undefined [, context: Object ])
Returns true if the condition checks out. Conditions can be
* Simple booleans
* Functions returning a value
* If the condition is undefined, it will return true

#### oneLiner( data: Object )
Used as a wrapper for an object to tell the JSON exporter to print the entire Object in one line.

#### cl()
A simple shortcut for `console.log`

#### guid()
Generates a uuid. Example: `df818b11-0785-2753-599a-95d6818ed846`

#### isUUID( uuid: String )
returns true if `uuid` is in fact a UUID.

#### bbuid( length: Number )
Returns a short random unique identifier using the given `length` and the characters [a-zA-Z0-9].

#### autoStringify( object: Object )
Compiles the `object` to a JSON string using the Blockbench custom JSON compiler under consideration of the minified output setting.

#### pathToName( path: String[, extension: String] )
Turns the file path `path` into the corresponding file name, including file extension of extension is set to true.

#### pathToExtension( path: String )
Returns the extension of a file path or name.

## Libraries

### DOM Manipulation

Blockbench uses [jQuery](https://api.jquery.com) as a simple way to interact with the DOM.

### Colors

Blockbench uses [Spectrum](https://bgrins.github.io/spectrum/) as a Color picker and [tinycolor](https://github.com/bgrins/TinyColor) as a color handling and conversion library.
Images can be manupulated using [Jimp](https://github.com/oliver-moran/jimp) but for simpler edits I recommend to use the HTML5 canvas since it is a lot faster.

### 3D Editor

THREE.JS is used to display and handle the 3D preview. Read the [three.js docs](https://threejs.org/docs/) for more info.


## Math

#### Math.radToDeg( rad )
Converts radiants into degrees

#### Math.degToRad( deg )
Converts degrees into radiants

#### Math.roundTo( number, digits )
Rounds the number `number` to `digits` decimal places.

#### Math.lerp( a, b, m )
Lerps between the values `a` and `b` using `lerp` (between 0 and 1)

#### Math.isBetween( n, a, b )
Returns true if `n` is in between `a` and `b`.

#### Math.trimDeg( deg )
Trims the given degree number to a normalized value between -180 and 180.

#### Math.isPowerOfTwo( x )
Returns true if `x` is a power of two.

#### Math.randomab( a, b )
Returns a random number between `a` and `b`

#### Math.clamp( n, a, b )
Clamps the number `n` to a number in between or equal to `a` or `b`.

#### Math.areMultiples( a, b )
Returns true if `a` is a multiple of `b` or vice versa.

#### trimFloatNumber( n )
Trims the given float to a readable by rounding it to 4 decimal places maximum, to avoid values such as `1.59999999`

#### getAxisNumber( letter: String )
Converts an axis letter (`x, y, z`) into an axis number (`0, 1, 2`)

#### getAxisLetter( number: Number )
Converts an axis number (`0, 1, 2`) into an axis letter (`x, y, z`)

## Dates

#### Date.getDateArray()
Returns an array of the date of `Date` in the format `[d, m, yyyy]`

#### Date.getDateString()
Returns a string of the data `Date` in the format `"dd.mm.yyyy"`

#### Date.dayOfYear()
Returns the day of the year

## Array

#### Array.safePush( item: Any )
Pushes `item` to `Array` only if it is not in the array yet.

#### Array.equals( array: Array )
Checks if `Array` and `array` have the same content.

#### Array.remove( item: Any )
Removes `item` from `Array`

#### Array.empty()
Empties the array

#### Array.purge()
Empties an array while also updating it for VueJS

#### Array.findInArray( key: String, value: Any )
Find an object in the array by looking for a `key: value` match

#### Array.last()
Returns the last item of the array

#### Array.positiveItems()
Returns the number of truthy items in the array.

#### Array.allEqual( value: Any )
Returns true if all items in the array equal `value`.

#### Array.random()
Returns a random item of the array.

#### Array.forEachReverse( callback: Function )
Runs the function `callback` for each item in the list, starting from the end.
