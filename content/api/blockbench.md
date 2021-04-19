# Blockbench

The Blockbench object provides useful variables and methods to interact with general functionality of Blockbench.

## Information

* `Blockbench.isWeb` true if Blockbench is used in a web browser
* `Blockbench.isMobile` true if Blockbench is used in the mobile version
* `Blockbench.version` The installed version of Blockbench
* `Blockbench.openTime` Date object of the time Blockbench was opened

## Flags

Flags can be used to save a binary state within an instance of Blockbench.

#### Blockbench.addFlag( flag: String )

#### Blockbench.removeFlag( flag: String )

#### Blockbench.hasFlag( flag: String )

## Import

#### Blockbench.import( options: Object, callback: function )

Opens the file import dialog and reads the file.

* `options`
	* `startpath` Path where to start the file dialog. Only works on desktop
	* `type` Name of the file type. If unset, it will use the first extension
	* `extensions` Array of extensions that can be imported
	* `multiple` If true, multiple files can be selected and loaded
	* `readtype` How to read the imported files. Can be `image`, `buffer` or `text` (default).
	* `title` Title to use for the import dialog. Only works on desktop.
	* `errorbox` Whether to display an error dialog if Blockbench can't load the file
* `callback` Called after all files have been read.
	* `files: Array` Imported and read files
		* `path` Path to the file. Will only return the name in the web app
		* `name` File name
		* `content` Content of the file. String for plain text files, base64 string for images (only .tga images or images on the web app)

#### Blockbench.read( paths, options, callback )

Reads one or multiple files at a fixed path. Only available on desktop app.

* `paths: Array` List of file paths.
* `options: Object` Import options.
	* `readtype: String` How to read the imported files. Can be `image`, `buffer` or `text` (default).
	* `errorbox: Boolean` Whether to display an error dialog if Blockbench can't load the file
* `callback`: Function. Called after all files have been read.
	* `files`: Array of imported and read files
		* `path: String` Path to the file. Will only return the name in the web app
		* `name: String` File name
		* `content: String` Content of the file. String for plain text files, base64 string for images (only .tga images or images on the web app)

## Export

#### Blockbench.export( options, callback )

Opens a file save dialog to ask where to save the file. In most browsers, the file will just get downloaded with the default name.

* `options`: Object
	* `startpath` Path where to start the file dialog. Only works on desktop
	* `type` Name of the file type
	* `extensions` Array of possible extensions
	* `name` Suggested file name. Gets overwritten by startpath.
	* `content` Content of the file. Can be a string for plain text files or a base64 string or path for images.
	* `savetype` How to save the file. Can be `text` (default), `image` or `zip`.
	* `custom_writer` In the desktop app, you can use this to create a custom function to save the file. This can be used to merge with the old file for example. Has two arguments: `content` and `path`.
* `callback`: Function. Called after the file has been exported.
	* `path` The path the file has been exported to. Only on desktop app.

#### Blockbench.writeFile( path, options, callback )

Writes a file at the specified path.

* `path`: File path
* `options`: Object
	* `content` Content of the file. Can be a string for plain text files or a base64 string or path for images.
	* `savetype` How to save the file. Can be `text` (default), `image` or `zip`.
	* `custom_writer` In the desktop app, you can use this to create a custom function to save the file. This can be used to merge with the old file for example. Has two arguments: `content` and `path`.
* `callback`: Function. Called after the file has been exported.
	* `path` The path the file has been exported to.

## Events

Listen to and dispatch Blockbench-specific events

#### Blockbench.on( event_id, callback )

Runs a function when Blockbench emits a specific event

* `event_id` Event to listen for
* `callback` Function to execute. Has one argument `data`.

#### Blockbench.dispatchEvent( event_id, data )

Triggers an event.

* `event_id` Name of the event,
* `data` Data to submit to the listeners

#### Blockbench.removeEventListener( event_id, callback)

Removes an event listener using the `event_id` and `callback`. Should be used in `onunload` in a plugin to clear event listeners.

### List of Blockbench events

| Event ID | Description
|-|-
| remove_animation	| Emitted after a user removes an animation
| display_animation_frame	| Emitted when Blockbench renders a frame of an animation
| before_closing	| 
| create_session	| 
| join_session		| 
| quit_session		| 
| send_session_data		| 
| receive_session_data	| 
| user_joins_session	| 
| user_leaves_session	| 
| process_chat_message	| 
| update_settings		| 
| update_project_settings	|
| save_project	| 
| load_project	| 
| new_project	| 
| reset_project	|  
| close_project	| 
| add_cube		| 
| add_group		| 
| update_selection	| 
| update_keyframe_selection	| 
| select_all		| 
| added_to_selection| 
| invert_selection	| 
| canvas_select		| 
| canvas_click		| 
| change_texture_path	| 
| add_texture		| 
| finish_edit		| 
| finished_edit		| 
| undo				| 
| redo				| 
| select_mode		| 
| unselect_mode		| 


## Drag and Drop Files

#### Blockbench.addDragHandler( id, options, callback )

Handles file drop events for the specified file types

* `id` ID of the handler
* `options`: Objecct 
	* `extensions` Array of extensions that will trigger this handler
	* `element` 
	* `addClass` 
	* `propagate` 
	* `readtype` How to read the dropped files. See [Blockbench.read](#blockbenchread-paths-options-callback)
	* `errorbox` Whether to show an error message if Blockbench fails to load the file.
* `callback`: Function. Called after all files have been read.
	* `files`: Array of imported and read files
		* `path` Path to the file. Will only return the name in the web app
		* `name` File name
		* `content` Content of the file. String for plain text files, base64 string for images (only .tga images or images on the web app)

#### Blockbench.removeDragHandler( id )

Removes and disables a drag handler using its ID.

## Icons

Icons are used throughout Blockbench in actions, menus and plugins. Google Material icons, Font Awesome Regular, Solid and Brands as well as a set of custom Blockbench icons are available.

#### Blockbench.getIconNode( string[, color])

Returns a HTML node for the specified icon.

* `string` Specifies the pack and name of the icon.
	* Strings starting with fa return Font Awesome icons. Example: `'fa-bone'`
	* Prepend `far.` or `fas.` to choose between regular and solid icons. Example: `'fas.fa-circle'`
	* Regular strings will return a Google Materials Icon
	* Strings starting with `icon-` will return custom Blockbench icons (see list below)
	* Base64 image strings will return an image/texture in icon format
	* Passing a function will run the function and use the return value to determine the icon
	* If undefined, it will return a question mark icon
* `color` Optional. Colors the icon in a specific color. Can be `x`, `y` or `z` for a generic axis color or a CSS color string for a custom color.

### Available Icons

* [Google Material Icons](https://material.io/resources/icons/?style=baseline)
* [Font Awesome Free Icons](https://fontawesome.com/icons?d=gallery&m=free)
* Custom Blockbench icons:
	* `icon-mirror_x`
	* `icon-mirror_y`
	* `icon-mirror_z`
	* `icon-saved`
	* `icon-player`
	* `icon-player_head`
	* `icon-zombie`
	* `icon-baby_zombie`
	* `icon-armor_stand`
	* `icon-armor_stand_small`
	* `icon-ground`
	* `icon-hud`
	* `icon-inventory_full`
	* `icon-inventory_nine`
	* `icon-inventory_single`
	* `icon-bow`
	* `icon-crossbow`
	* `icon-x11`
	* `icon-blockbench`
	* `icon-blockbench_inverted`
	* `icon-vertexsnap`
	* `icon-create_bitmap`
	* `icon-objects`
	* `icon-bb_interface`
	* `icon-sketchfab`
	* `icon-optifine_file`
	* `icon-format_bedrock`
	* `icon-format_block`
	* `icon-format_free`
	* `icon-format_java`
	* `icon-format_optifine`
	* `icon-format_bedrock_legacy`

