---
title: Actions
---

# Actions

## BarItem

BarItem is the parent class of all widgets and actions.

### new BarItem(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* `id` BarItem ID
	* `private` If true, the instance won't be referenced in the `BarItems` map.
	* `name: String` BarItem name
	* `description: String` BarItem description, shows when the baritem is hovered.
	* `color`
	* `condition: Condition` When the condition is met, the baritem will show in it's parent widget.
	* `keybind: Keybind`
	* `work_in_dialog: Boolean`

#### BarItem#conditionMet()
Whether the baritem meets it's condition.

#### BarItem#addLabel(in_bar, action)
Initializes a label and tooltip.
* `action: BarItem` Target action. When omitted: `this` baritem is used.

#### BarItem#getNode(ignore_disconnected)
* `ignore_disconnected: Boolean` If true and the node of the baritem is disconnected, a new instance of the node is returned.

#### BarItem#toElement(destination)
Appends the node of the baritem into target element (destination).

#### BarItem#pushToolbar(bar, idx)
#### BarItem#delete()
Deletes the baritem.

## Toolbar

Action bars used in panels and the interface are called toolbars. They are able to store BarItems such as Tools, NumSliders, Actions, etc.

### new Toolbar(data)
* `data` Object
	* `id`
	* `name: String`
	* `label: Boolean`
	* `narrow: Boolean`
	* `vertical: Boolean`
	* `children: BarItem[]`

#### Toolbar#contextmenu(event)
Opens the toolbar edit menu.

#### Toolbar#editMenu()
Opens the toolbar edit dialog.

#### Toolbar#add(action, position)
Adds an action to the toolbar if it doesn't already exist at a specific position.
* `action: BarItem` The target action
* `position: Integer` The index to place the action at. If omitted, the action will be added at the end.

#### Toolbar#remove(action)
Removes a specific action if it does exist.

#### Toolbar#update(force)
Updates the toolbar.

#### Toolbar#toPlace(place)
Moves the toolbar into a new place.
* `place: String` The class of the dom toolbar wrappers to append to.

#### Toolbar#save()
Saves the toolbar's state.

#### Toolbar#reset()
Resets the toolbar's state.

## Menu

Menus are drop-down menus that display a list of actions.

### new Menu(id, structure, options)
* `id` Menu ID
* `structure` Can be an array of Actions, Tools, Toggles and BarSelects or a function builder that returns the array.
* `options` Object
	* `onOpen` Function that runs once the menu is opened
	* `onClose` Function that runs once the menu is closed
	* `keep_open` If true, when a child action is clicked, the menu doesn't close.
	* `searchable`

#### Menu#hover(node, event, expand)

#### Menu#open(position, context)
Opens the menu.

#### Menu#show(position)
An aliases of `Menu#open()`.

#### Menu#hide()
Hides the menu.

#### Menu#addAction(action, path)
Adds an action to the menu at a specific path
* `path: String` The path where the action should be. For example: `path.to.my_parent_action` or with a specific index `path.to.my_parent_action.3`

#### Menu#removeAction(path)
Removes the action at the specified path
* `path: String` The path where the action exists. For example: `path.to.my_action` or the action at a specific index `path.to.3`

#### Menu#deleteItem(rm_item)
Removes a given action.

#### Menu#conditionMet()
Whether the menu meets it's condition.

## Action

Actions are menu menu items that when clicked, performs an action; actions can also include sub actions. Actions inherit all properties and methods from BarItem.

### new Action(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `icon`
	* `children` Can be an array of Actions, Tools, Toggles and BarSelects or a function builder that returns the array.
	* `searchable`
	* `side_menu: Menu`
	* `click` Function that runs when the action is clicked

## Toggle

Toggles are actions that toggle a value when clicked. Toggles inherit all properties and methods from Action.

### new Toggle(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `default: Boolean`
	* `onChange` Function that runs when the action is toggled

## Tool

Tools are types of actions that can be selected to change how the user can interact with the model. Tools inherit all properties and methods from Action.

### new Tool(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `icon`
	* `side_menu: Menu`
	* `toolbar: String`
	* `alt_tool` The id of the tool to select temporary when the alt key is held
	* `modes: String[]` Array of mode ids that the tool can be used in 
	* `selectElements` If true the tool can select elements
	* `selectFace` If true, the tool can select element faces
	* `cursor: String` CSS cursor
	* `paintTool`
	* `transformerMode` Can be either of translate, scale, rotate or hidden. Specifies what state the transformer should be in
	* `animation_channel` What animation channel is related to this tool
	* `allowed_view_modes` Array of view mode ids that the tool can be used in
	* `onCanvasClick`
	* `onSelect`
	* `onUnselect` 
	* `brush` Object
		* `blend_modes: boolean` Enable the input for blend modes when this tool is selected
		* `shapes: boolean` Enable the input for shapes when this tool is selected
		* `size: boolean` Enable the input for brush size when this tool is selected
		* `softness: boolean` Enable the input for softness when this tool is selected
		* `opacity: boolean` Enable the input for opacity when this tool is selected
		* `offset_even_radius: boolean` When the brush size is an even number, offset the snapping by half a pixel so that even size brush strokes can be correctly centered
		* `floor_coordinates: boolean | (() => boolean)` Set whether the brush coordinates get floored to snap to the nearest pixel.
		* `changePixel` Function that runs per pixel when the brush is used and returns an RGB color. Mutually exclusive with draw().
		* `onStrokeStart` Function that runs when a new brush stroke starts. Return false to cancel the brush stroke
		* `onStrokeMove` Function that runs when a new brush stroke starts. Return false to cancel the brush stroke
		* `onStrokeEnd` Function that runs when a new brush stroke starts.
		* `draw` Alternative way to create a custom brush, mutually exclusive with the changePixel() function. Draw runs once every time the brush starts or moves, and also along the bath on lines.

#### Tool#select()
Selects the tool.

# Widgets

## NumSlider
NumSlider is a widget that allows input of numerical/Molang values.

### new NumSlider(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `tool_setting`
	* `get` If present, overwrites `NumSlider#get()`
	* `change` If present, overwrites `NumSlider#change()`
	* `getInterval: Function` If present, changes the default interval behavior
	* `onBefore` Function that runs before the user slides the slider
	* `onChange` Function that runs when the slider's value is changed
	* `onAfter` Function that runs after the user slides the slider
	* `settings` Object
		* `default: Number`
		* `step/interval` If present, changes the default interval behavior

#### NumSlider#startInput(event)
Makes the numslider in it's editable input state.

#### NumSlider#setWidth(width)
Changes the numslider's node width.

#### NumSlider#getInterval(event)
Returns the interval of the numslider.

#### NumSlider#slide(clientX, event)
Slides the numslider by amount `clientX`.

#### NumSlider#input()
Sets the last value of the numslider the current value.

#### NumSlider#stopInput()
Makes the numslider in it's default state and evaluates the input.

#### NumSlider#arrow(difference, event)
Simulate an arrow click on the slider's arrows.
* `difference` `1` means the right arrow, `-1` means the left arrow.

#### NumSlider#trigger(event)
#### NumSlider#setValue(value, trim)
#### NumSlider#change(modify)
#### NumSlider#get()
#### NumSlider#update()

## BarSlider
BarSlider is a range widget that allows input of numerical values between a range.
### new BarSlider(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `value`
	* `min`
	* `max`
	* `step`
	* `width`
	* `onBefore` Function that runs before the user slides the slider
	* `onChange` Function that runs when the slider's value is changed
	* `onAfter` Function that runs after the user slides the slider

#### BarSlider#change(event)
#### BarSlider#set(value)
#### BarSlider#get()

## BarSelect
BarSelect are actions users can select an option from.
### new BarSelect(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `value` Key of the default selected option
	* `options: Object` Map of objects with name and icon properties
	* `width: Number`
	* `min_width: Number`
	* `onChange` Function that runs when the value is changed

#### BarSelect#open(event)
#### BarSelect#trigger(event)
#### BarSelect#change(event)
#### BarSelect#getNameFor(key)
#### BarSelect#set(key)
#### BarSelect#get()

## BarText
BarTexts are literal texts.
### new BarText(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* `text: String`
	* `right` If true, the bartext floats to the right
	* `onUpdate`
#### BarText#set(text)
#### BarText#update()
#### BarText#trigger(event)

## ColorPicker
ColorPicker is widget that allows input of color.
### new ColorPicker(id, data)
* `id: string` ID of the action, in snake_case
* `data` Object
	* <code>[<a href="#baritem">...</a>]</code> Properties inherited from BarItem
	* `value` Default color
	* `palette` Array of rgb colors 
	* `onChange` Function that runs when the color is changed.

#### ColorPicker#change(color)
#### ColorPicker#hide()
#### ColorPicker#confirm()
#### ColorPicker#set(color)
#### ColorPicker#get()
