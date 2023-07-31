---
title: Blockbench
---

# Blockbench
## Blockbench
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| platform | `"web"` or `"win32"` or `"darwin"` or `"linux"` |  |
| version | *string* | Blockbench version number |
| queries | [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L148) or *undefined* | URL queries when opened as web app using a link that contained queries |
| openTime | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Time when Blockbench was opened |

### reload()
Reloads the Blockbench window



### isNewerThan( version )
checks if Blockbench is newer than the specified version

##### Arguments:
* `version`: *string* - semver string

Returns: *boolean*

### isOlderThan( version )
checks if Blockbench is older than the specified version

##### Arguments:
* `version`: *string* - semver string

Returns: *boolean*

### getIconNode( icon[, color] )
Resolves an icon string as a HTML element

##### Arguments:
* `icon`: *string* - Material Icons, Fontawesome or custom icon string
* `color`: *string* (Optional) - CSS color

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### showQuickMessage( message[, time] )
Shows a passing message in the middle of the screen

##### Arguments:
* `message`: *string* - Message
* `time`: *number* (Optional) - Time in miliseconds that the message stays up


### showStatusMessage( message[, time] )
##### Arguments:
* `message`: *string*
* `time`: *number* (Optional)


### setStatusBarText( [text] )
##### Arguments:
* `text`: *string* (Optional)


### setProgress( progress[, time, bar] )
Set the value of a progress bar

##### Arguments:
* `progress`: *number* - Progress of the bar between 0 and 1
* `time`: *number* (Optional) - Time over which the bar is animated, in miliseconds
* `bar`: *string* (Optional) - ID of the bar element. If omitted, the main status bar will be selected


### showMessageBox( options, callback )
Opens a message box

##### Arguments:
* `options`: MessageBoxOptions
	* `confirm`: *number* - Index of the confirm button within the buttons array
	* `cancel`: *number* - Index of the cancel button within the buttons array
	* `buttons`: Array of *string*
	* `translateKey`: *string* (Optional)
	* `title`: *string* (Optional)
	* `message`: *string* (Optional)
	* `icon`: *string* (Optional)
	* `width`: *number*
	* `commands`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L102) (Optional) - Display a list of actions to do in the dialog. When clicked, the message box closes with the string ID of the command as first argument.
	* `checkboxes`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L108) - Adds checkboxes to the bottom of the message box
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L208)


### textPrompt( title, value, callback )
##### Arguments:
* `title`: *string*
* `value`: *string*
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L210)


### showToastMessage()
todo


Returns: [Deletable](misc#deletable)

### openLink( link )
Opens the specified link in the browser or in a new tab

##### Arguments:
* `link`: [URL](#URL)


### notification( title, text[, icon] )
Shows a system notification

##### Arguments:
* `title`: *string* - Title
* `text`: *string* - Text
* `icon`: *string* (Optional) - Url or data url pointing to an icon. Defaults to Blockbench icon


### addCSS( css )
Adds custom CSS code to Blockbench, globally. Returns an object that is deletable

##### Arguments:
* `css`: *string* - CSS string

Returns: [Deletable](misc#deletable)

### addFlag( flag )
##### Arguments:
* `flag`: *string*


### removeFlag( flag )
##### Arguments:
* `flag`: *string*


### hasFlag( flag )
##### Arguments:
* `flag`: *string*

Returns: *boolean*

### dispatchEvent( event_name, data )
##### Arguments:
* `event_name`: [EventName](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L13)
* `data`: *object*


### addListener( event_names, callback )
##### Arguments:
* `event_names`: [EventName](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L13)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L239)


### on( event_names, callback )
Adds an event listener

##### Arguments:
* `event_names`: [EventName](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L13)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L243)


### once( event_names, callback )
Adds a single-use event listener

##### Arguments:
* `event_names`: [EventName](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L13)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L247)


### removeListener( event_names )
Removes an event listener

##### Arguments:
* `event_names`: [EventName](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/misc.d.ts#L13)


### read( files[, options, callback] )
Reads the content from the specified files. Desktop app only.

##### Arguments:
* `files`: Array of *string*
* `options`: ReadOptions (Optional)
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L53) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L55) (Optional)
	* `errorbox`: *boolean* (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L259) (Optional)


### readFile( files[, options, callback] )
Reads the content from the specified files. Desktop app only.

##### Arguments:
* `files`: Array of *string*
* `options`: ReadOptions (Optional)
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L53) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L55) (Optional)
	* `errorbox`: *boolean* (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L263) (Optional)


### writeFile( file_path, options[, callback] )
Writes a file to the file system. Desktop app only.

##### Arguments:
* `file_path`: *string*
* `options`: WriteOptions
	* `content`: *string* or [ArrayBuffer](#ArrayBuffer)
	* `savetype`: [WriteType](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L58) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L61) (Optional)
	* `custom_writer`: Function (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L271) (Optional)


### pickDirectory( options )
Pick a directory. Desktop app only.

##### Arguments:
* `options`: PickDirOptions
	* `startpath`: *string* (Optional) - Location where the file dialog starts off
	* `resource_id`: *string* (Optional) - The resource identifier group, used to allow the file dialog (open and save) to remember where it was last used
	* `title`: *string* (Optional) - Window title for the file picker

Returns: *any*

### import( options[, callback] )
##### Arguments:
* `options`: ImportOptions
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L53) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L55) (Optional)
	* `errorbox`: *boolean* (Optional)
	* `type`: *string* - Name of the file type
	* `extensions`: Array of *string* - File Extensions
	* `multiple`: *boolean* (Optional) - Allow selection of multiple elements
	* `startpath`: *string* (Optional) - File picker start path
	* `resource_id`: *string* (Optional) - The resource identifier group, used to allow the file dialog (open and save) to remember where it was last used
	* `title`: *string* (Optional) - Title of the file picker window
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L282) (Optional)

Returns: *any*

### export( options[, callback] )
##### Arguments:
* `options`: ExportOptions
	* `content`: *string* or [ArrayBuffer](#ArrayBuffer)
	* `savetype`: [WriteType](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L58) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L61) (Optional)
	* `custom_writer`: Function (Optional)
	* `type`: *string* - Name of the file type
	* `extensions`: Array of *string* - File extensions
	* `name`: *string* (Optional) - Suggested file name
	* `startpath`: *string* (Optional) - Location where the file dialog starts
	* `resource_id`: *string* (Optional) - The resource identifier group, used to allow the file dialog (open and save) to remember where it was last used
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L287) (Optional)

Returns: *any*

### findFileFromContent( base_directories, options, check_file )
Find a file in a directory, based on content. Optimized by prioritizing files with certain names.

##### Arguments:
* `base_directories`: Array of *string* - Base directories to search in
* `options`: [FindFileFromContentOptions](#FindFileFromContentOptions) - Options
* `check_file`: [CheckFileCallback](#CheckFileCallback) - Function that runs on every file to check if the file is a match. If the function returns anything truthy, that result is returned by the main function.

Returns: `false` or *any*

### addDragHandler( id, options[, callback] )
Adds a drag handler that handles dragging and dropping files into Blockbench

##### Arguments:
* `id`: *string*
* `options`: DragHandlerOptions
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L53) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L55) (Optional)
	* `errorbox`: *boolean* (Optional)
	* `extensions`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L123) - Allowed file extensions
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional) - Whether or not to enable the drag handler
	* `element`: *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L131) (Optional) - Drop target element
	* `propagate`: *boolean* (Optional) - If true, the drop will work on all child elements of the specified element
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/blockbench.d.ts#L311) (Optional)

Returns: [Deletable](misc#deletable)

### removeDragHandler( id )
##### Arguments:
* `id`: *string*


### import
Reference


### export
Reference


### Outliner
Variable


### OutlinerNode
Variable


### OutlinerElement
Variable


### Group
Variable


### Cube
Variable


### Mesh
Variable


### Locator
Variable


### NullObject
Variable


### TextureMesh
Variable


### Face
Variable


### CubeFace
Variable


### MeshFace
Variable


### NodePreviewController
Variable


### Animator
Variable


### Timeline
Variable


### AnimationItem
Variable


### Animation
Variable


### AnimationController
Variable


### Keyframe
Variable


### KeyframeDataPoint
Variable


### BoneAnimator
Variable


### NullObjectAnimator
Variable


### EffectAnimator
Variable


### TimelineMarker
Variable


### Panel
Variable


### Mode
Variable


### Dialog
Variable


### Setting
Variable


### Plugin
Variable


### Preview
Variable


### Toolbar
Variable


### Language
Variable


### Painter
Variable


### Screencam
Variable


### Settings
Variable


### TextureAnimator
Variable


### Toolbox
Variable


### BarItems
Variable


### BarItem
Variable


### Action
Variable


### Tool
Variable


### Toggle
Variable


### Widget
Variable


### BarSelect
Variable


### BarSlider
Variable


### BarText
Variable


### NumSlider
Variable


### ColorPicker
Variable


### Keybind
Variable


### KeybindItem
Variable


### Menu
Variable


### BarMenu
Variable


### ResizeLine
Variable


### ModelProject
Variable


### ModelFormat
Variable


### Codec
Variable


### DisplaySlot
Variable


### Reusable
Variable


### Texture
Variable


