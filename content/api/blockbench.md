---
title: Blockbench
---

# Blockbench
## NativeGlobals
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L506)


## Blockbench
#### Namespace

<reference path="./blockbench.d.ts"/>

| Property | Type | Description |
| -------- | ---- | ----------- |
| platform | `"web"` or `"win32"` or `"darwin"` or `"linux"` |  |
| version | *string* | Blockbench version number |
| queries | [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L174) or *undefined* | URL queries when opened as web app using a link that contained queries |
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


### setCursorTooltip( [text] )
Display a tooltip displaying a custom text that appears next to and follows the mouse cursor

##### Arguments:
* `text`: *string* (Optional) - The text to display. Line breaks are supported. Leave empty to hide the tooltip.


### setProgress( progress[, time, bar] )
Set the value of a progress bar

##### Arguments:
* `progress`: *number* - Progress of the bar between 0 and 1
* `time`: *number* (Optional) - Time over which the bar is animated, in miliseconds
* `bar`: *string* (Optional) - ID of the bar element. If omitted, the main status bar will be selected


### showMessageBox( options[, callback] )
Opens a message box

##### Arguments:
* `options`: MessageBoxOptions
	* `confirm`: *number* (Optional) - Index of the confirm button within the buttons array
	* `cancel`: *number* (Optional) - Index of the cancel button within the buttons array
	* `buttons`: Array of *string* (Optional)
	* `translateKey`: *string* (Optional)
	* `title`: *string* (Optional)
	* `message`: *string* (Optional)
	* `icon`: *string* (Optional)
	* `width`: *number* (Optional)
	* `commands`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/misc.d.ts#L133) (Optional) - Display a list of actions to do in the dialog. When clicked, the message box closes with the string ID of the command as first argument.
	* `checkboxes`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/misc.d.ts#L146) (Optional) - Adds checkboxes to the bottom of the message box
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L242) (Optional)


### textPrompt( title, value, callback )
##### Arguments:
* `title`: *string*
* `value`: *string*
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L252)


### showToastMessage()
todo


Returns: [Deletable](misc#deletable)

### openLink( link )
Opens the specified link in the browser or in a new tab

##### Arguments:
* `link`: *string*


### notification( title, text[, icon] )
Shows a system notification

##### Arguments:
* `title`: *string* - Title
* `text`: *string* - Text
* `icon`: *string* (Optional) - Url or data url pointing to an icon. Defaults to Blockbench icon


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

### dispatchEvent( event_name[, data] )
Dispatches a Blockbench event.
If you're using TypeScript, You can call this with the type param <EventName> to get the default event names in Blockbench, or leave the param blank for custom events.


```ts
Blockbench.dispatchEvent<EventName>(...)
```

##### Arguments:
* `event_name`: [E](#E)
* `data`: *any* (Optional)


### addListener( event_names, callback )
Adds a listener to a Blockbench event.
If you're using TypeScript, You can call this with the type param <EventName> to get the default event names in Blockbench, or leave the param blank for custom events.


```ts
Blockbench.addListener<EventName>(...)
```

##### Arguments:
* `event_names`: [E](#E)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L298)


### on( event_names, callback )
Adds a listener to a Blockbench event.
If you're using TypeScript, You can call this with the type param <EventName> to get the default event names in Blockbench, or leave the param blank for custom events.


```ts
Blockbench.on<EventName>(...)
```

##### Arguments:
* `event_names`: [E](#E)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L307)


### removeListener( event_names, callback )
Removes a listener from a Blockbench event.
If you're using TypeScript, You can call this with the type param <EventName> to get the default event names in Blockbench, or leave the param blank for custom events.


```ts
Blockbench.removeListener<EventName>(...)
```

##### Arguments:
* `event_names`: [E](#E)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L318)


### findFileFromContent( base_directories, options, check_file )
Find a file in a directory, based on content. Optimized by prioritizing files with certain names.

##### Arguments:
* `base_directories`: Array of *string* - Base directories to search in
* `options`: FindFileFromContentOptions - Options
	* `read_file`: *boolean* (Optional)
	* `json`: *boolean* (Optional)
	* `recursive`: *boolean* (Optional)
	* `filter_regex`: [RegExp](#RegExp) (Optional)
	* `priority_regex`: [RegExp](#RegExp) (Optional)
* `check_file`: [CheckFileCallback](#CheckFileCallback) - Function that runs on every file to check if the file is a match. If the function returns anything truthy, that result is returned by the main function.

Returns: `false` or *any*

### read( files[, options, callback] )
Reads the content from the specified files. Desktop app only.

##### Arguments:
* `files`: Array of *string*
* `options`: [ReadOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L81) (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/file_system.d.ts#L39) (Optional)

### read( files[, options, callback] )
Reads the content from the specified files. Desktop app only.

##### Arguments:
* `files`: Array of *string*
* `options`: ReadOptions (Optional)
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L80) or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L82) (Optional)
	* `errorbox`: *boolean* (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L327) (Optional)


### readFile( files[, options, callback] )
Reads the content from the specified files. Desktop app only.

##### Arguments:
* `files`: Array of *string*
* `options`: [ReadOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L81) (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/file_system.d.ts#L47) (Optional)

### readFile( files[, options, callback] )
Reads the content from the specified files. Desktop app only.

##### Arguments:
* `files`: Array of *string*
* `options`: ReadOptions (Optional)
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L80) or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L82) (Optional)
	* `errorbox`: *boolean* (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L335) (Optional)


### writeFile( file_path, options[, callback] )
Writes a file to the file system. Desktop app only.

##### Arguments:
* `file_path`: *string*
* `options`: [WriteOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L86)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/file_system.d.ts#L62) (Optional)

### writeFile( file_path, options[, callback] )
Writes a file to the file system. Desktop app only.

##### Arguments:
* `file_path`: *string*
* `options`: WriteOptions
	* `content`: *string* or [ArrayBuffer](#ArrayBuffer) (Optional)
	* `savetype`: [WriteType](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L85) or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L88) (Optional)
	* `custom_writer`: Function (Optional)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L344) (Optional)


### pickDirectory( options )
Pick a directory. Desktop app only.

##### Arguments:
* `options`: [PickDirOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L91)

Returns: *string* or *undefined*
### pickDirectory( options )
Pick a directory. Desktop app only.

##### Arguments:
* `options`: PickDirOptions
	* `startpath`: *string* (Optional) - Location where the file dialog starts off
	* `resource_id`: *string* (Optional) - The resource identifier group, used to allow the file dialog (open and save) to remember where it was last used
	* `title`: *string* (Optional) - Window title for the file picker

Returns: *any*

### import( options[, callback] )
@ts-ignore

##### Arguments:
* `options`: [ImportOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L102)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/file_system.d.ts#L104) (Optional)

Returns: *any*

### export( options[, callback] )
##### Arguments:
* `options`: [ExportOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L124)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/file_system.d.ts#L129) (Optional)

Returns: *any*

### addDragHandler( id, options[, callback] )
##### Arguments:
* `id`: *string*
* `options`: [DragHandlerOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L146)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/file_system.d.ts#L156) (Optional)

Returns: [Deletable](misc#deletable)
### addDragHandler( id, options[, callback] )
Adds a drag handler that handles dragging and dropping files into Blockbench

##### Arguments:
* `id`: *string*
* `options`: DragHandlerOptions
	* `readtype`: [ReadType](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L80) or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L82) (Optional)
	* `errorbox`: *boolean* (Optional)
	* `extensions`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L150) - Allowed file extensions
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional) - Whether or not to enable the drag handler
	* `element`: *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L158) (Optional) - Drop target element
	* `propagate`: *boolean* (Optional) - If true, the drop will work on all child elements of the specified element
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/blockbench.d.ts#L377) (Optional)

Returns: [Deletable](misc#deletable)

### removeDragHandler( id )
##### Arguments:
* `id`: *string*

### removeDragHandler( id )
##### Arguments:
* `id`: *string*


### showToastNotification( options )
##### Arguments:
* `options`: ToastNotificationOptions
	* `text`: *string*
	* `icon`: *string* (Optional)
	* `expire`: *number* (Optional)
	* `color`: *string* (Optional)
	* `click`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/misc.d.ts#L258) (Optional)

Returns: [Deletable](misc#deletable)

### addCSS( css )
##### Arguments:
* `css`: *string*

### addCSS( css )
Adds custom CSS code to Blockbench, globally. Returns an object that is deletable

##### Arguments:
* `css`: *string* - CSS string

Returns: [Deletable](misc#deletable)

### FindFileFromContentOptions
Interface


### CheckFileCallback
Type alias


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


### Collection
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


