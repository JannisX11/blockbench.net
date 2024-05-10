---
title: Action
---

# Action
## BarItems
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L5)

<reference path="./blockbench.d.ts"/>


## Keybind
A customizable keybind

### new Keybind( keys )
Creates a new Keybind

##### Arguments:
* `keys`: KeybindKeys
	* `key`: *string* or *number* - Main key, can be a numeric keycode or a lower case character
	* `ctrl`: `null` or *boolean* (Optional)
	* `shift`: `null` or *boolean* (Optional)
	* `alt`: `null` or *boolean* (Optional)
	* `meta`: `null` or *boolean* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| key | *number* |  |
| ctrl | *boolean* |  |
| shift | *boolean* |  |
| alt | *boolean* |  |

### getCode()
Get the name of the bound key


Returns: *string*


## KeybindItem
Extends: [Deletable](misc#deletable)

Extended by: [BarItem](action#baritem), [Mode](mode#mode-1)

<reference path="./blockbench.d.ts"/>

### new KeybindItem( id, options )
Creates a new KeybindItem

##### Arguments:
* `id`: *string*
* `options`: KeybindItemOptions
	* `keybind`: [Keybind](action#keybind) (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |

### delete()



## MenuSeparator
### new MenuSeparator()
Creates a new MenuSeparator




## BarItem
Extends: [KeybindItem](action#keybinditem)

Extended by: [Action](action#action-1), [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarItem( id, options )
Creates a new BarItem

##### Arguments:
* `id`: *string*
* `options`: BarItemOptions
	* `name`: *string* (Optional)
	* `description`: *string* (Optional)
	* `icon`: *string*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `category`: *string* (Optional)
	* `keybind`: [Keybind](action#keybind) (Optional)

### new BarItem( id, options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarItem](action#baritem)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarItem](action#baritem)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### delete()



## Action
Extends: [BarItem](action#baritem)

Extended by: [Toggle](action#toggle), [Tool](action#tool)

Actions can be triggered to run something, they can be added to menus, toolbars, assigned a keybinding, or run via Action Control

### new Action( id, options )
Creates a new Action

##### Arguments:
* `id`: *string*
* `options`: ActionOptions
	* `name`: *string* (Optional)
	* `description`: *string* (Optional)
	* `icon`: *string*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `category`: *string* (Optional)
	* `keybind`: [Keybind](action#keybind) (Optional)
	* `click`: Function
	* `color`: *string* (Optional) - Icon color. Can be a CSS color string, or an axis letter to use an axis color.
	* `linked_setting`: *string* (Optional) - ID of a setting that the action is slinked to
	* `children`: Array of *any* (Optional)
	* `label`: *boolean* (Optional) - Show the full label in toolbars


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |
| nodes | Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| side_menu | [Menu](menu#menu-1) | Provide a menu that belongs to the action, and gets displayed as a small arrow next to it in toolbars. |
| click | [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L128) |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Action](action#action-1)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Action](action#action-1)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### condition()

Returns: *boolean*

### trigger( [event] )
Trigger to run or select the action. This is the equivalent of clicking or using a keybind to trigger it. Also checks if the condition is met.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)

Returns: *boolean*

### updateKeybindingLabel()

Returns: [Action](action#action-1)

### setIcon( icon )
Change the icon of the action

##### Arguments:
* `icon`: *string*


### toggleLinkedSetting( change )
##### Arguments:
* `change`: *any*


### delete()



## Toggle
Extends: [Action](action#action-1)

A toggle is a type of action that can be on or off. The state is not persistent between restarts by default.

### new Toggle( id, options )
Creates a new Toggle

##### Arguments:
* `id`: *string*
* `options`: ToggleOptions
	* `name`: *string* (Optional)
	* `description`: *string* (Optional)
	* `icon`: *string*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `category`: *string* (Optional)
	* `keybind`: [Keybind](action#keybind) (Optional)
	* `click`: Function
	* `color`: *string* (Optional) - Icon color. Can be a CSS color string, or an axis letter to use an axis color.
	* `linked_setting`: *string* (Optional) - ID of a setting that the action is slinked to
	* `children`: Array of *any* (Optional)
	* `label`: *boolean* (Optional) - Show the full label in toolbars
	* `default`: *boolean* (Optional) - Default value of the toggle
	* `onChange`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |
| nodes | Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| side_menu | [Menu](menu#menu-1) | Provide a menu that belongs to the action, and gets displayed as a small arrow next to it in toolbars. |
| click | [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L128) |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Toggle](action#toggle)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Toggle](action#toggle)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### condition()

Returns: *boolean*

### trigger( [event] )
Trigger to run or select the action. This is the equivalent of clicking or using a keybind to trigger it. Also checks if the condition is met.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)

Returns: *boolean*

### updateKeybindingLabel()

Returns: [Toggle](action#toggle)

### setIcon( icon )
Change the icon of the action

##### Arguments:
* `icon`: *string*


### toggleLinkedSetting( change )
##### Arguments:
* `change`: *any*


### updateEnabledState()
Updates the state of the toggle in the UI



### delete()



## Tool
Extends: [Action](action#action-1)

A tool, such as move tool, vertex snap tool, or paint brush

### new Tool( id, options )
Creates a new Tool

##### Arguments:
* `id`: *string*
* `options`: ToolOptions
	* `name`: *string* (Optional)
	* `description`: *string* (Optional)
	* `icon`: *string*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `category`: *string* (Optional)
	* `keybind`: [Keybind](action#keybind) (Optional)
	* `click`: Function
	* `color`: *string* (Optional) - Icon color. Can be a CSS color string, or an axis letter to use an axis color.
	* `linked_setting`: *string* (Optional) - ID of a setting that the action is slinked to
	* `children`: Array of *any* (Optional)
	* `label`: *boolean* (Optional) - Show the full label in toolbars
	* `selectFace`: *boolean* (Optional)
	* `selectElements`: *boolean* (Optional)
	* `transformerMode`: `""` or `"translate"` (Optional)
	* `animation_channel`: *string* (Optional)
	* `toolbar`: *string* (Optional)
	* `alt_tool`: *string* (Optional)
	* `modes`: Array of *string* (Optional)
	* `allowed_view_modes`: [ViewMode](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L187) (Optional)
	* `paintTool`: *boolean* (Optional)
	* `brush`: BrushOptions (Optional)
		* `blend_modes`: *boolean* - Enable the input for blend modes when this tool is selected
		* `shapes`: *boolean* - Enable the input for shapes when this tool is selected
		* `size`: *boolean* - Enable the input for brush size when this tool is selected
		* `softness`: *boolean* - Enable the input for softness when this tool is selected
		* `opacity`: *boolean* - Enable the input for opacity when this tool is selected
		* `offset_even_radius`: *boolean* - When the brush size is an even number, offset the snapping by half a pixel so that even size brush strokes can be correctly centered
		* `floor_coordinates`: *boolean* or [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L250) - Set whether the brush coordinates get floored to snap to the nearest pixel.
		* `changePixel`: Function
		* `onStrokeStart`: Function
		* `onStrokeMove`: Function
		* `onStrokeEnd`: Function
		* `draw`: Function


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |
| nodes | Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| side_menu | [Menu](menu#menu-1) | Provide a menu that belongs to the action, and gets displayed as a small arrow next to it in toolbars. |
| click | [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L128) |  |
| animation_channel | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Tool](action#tool)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Tool](action#tool)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### condition()

Returns: *boolean*

### updateKeybindingLabel()

Returns: [Tool](action#tool)

### setIcon( icon )
Change the icon of the action

##### Arguments:
* `icon`: *string*


### toggleLinkedSetting( change )
##### Arguments:
* `change`: *any*


### select()

Returns: *undefined* or [Tool](action#tool)

### trigger( event )
Trigger to run or select the action. This is the equivalent of clicking or using a keybind to trigger it. Also checks if the condition is met.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *boolean*

### delete()



## Widget
Extends: [BarItem](action#baritem)

Extended by: [NumSlider](action#numslider), [BarSlider](action#barslider), [BarSelect](action#barselect), [BarText](action#bartext), [ColorPicker](action#colorpicker)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new Widget( id, options )
Creates a new Widget

##### Arguments:
* `id`: *string*
* `options`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Widget](action#widget)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Widget](action#widget)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### delete()



## NumSlider
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new NumSlider( id, options )
Creates a new NumSlider

##### Arguments:
* `id`: *string*
* `options`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [NumSlider](action#numslider)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [NumSlider](action#numslider)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### startInput( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### setWidth( width )
##### Arguments:
* `width`: *any*

Returns: [NumSlider](action#numslider)

### getInterval( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *number*

### slide( clientX, event )
##### Arguments:
* `clientX`: *any*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### input()


### stopInput()


### arrow( difference, event )
##### Arguments:
* `difference`: *any*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### trigger( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *boolean*

### setValue( value, trim )
##### Arguments:
* `value`: *number*
* `trim`: *any*

Returns: [NumSlider](action#numslider)

### change( modify )
##### Arguments:
* `modify`: *any*


### get()

Returns: *number*

### update()


### delete()



## BarSlider
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarSlider( id, options )
Creates a new BarSlider

##### Arguments:
* `id`: *string*
* `options`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarSlider](action#barslider)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarSlider](action#barslider)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### change( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### set( value )
##### Arguments:
* `value`: *number*


### get()

Returns: *number*

### delete()



## BarSelect
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarSelect( id, options )
Creates a new BarSelect

##### Arguments:
* `id`: *string*
* `options`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarSelect](action#barselect)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarSelect](action#barselect)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### open( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### trigger( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *undefined* or *boolean*

### change( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: [BarSelect](action#barselect)

### getNameFor( key )
##### Arguments:
* `key`: *string*

Returns: *string*

### set( key )
##### Arguments:
* `key`: *string*

Returns: [BarSelect](action#barselect)

### get()

Returns: *string*

### delete()



## BarText
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarText( id, options )
Creates a new BarText

##### Arguments:
* `id`: *string*
* `options`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarText](action#bartext)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarText](action#bartext)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### set( text )
##### Arguments:
* `text`: *any*

Returns: [BarText](action#bartext)

### update()

Returns: [BarText](action#bartext)

### trigger( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *boolean*

### delete()



## ColorPicker
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new ColorPicker( id, options )
Creates a new ColorPicker

##### Arguments:
* `id`: *string*
* `options`: *any*


| Property | Type | Description |
| -------- | ---- | ----------- |
| keybind | [Keybind](action#keybind) |  |
| id | *string* |  |

### conditionMet()

Returns: *boolean*
### conditionMet()

Returns: *boolean*

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases

### addLabel( [in_bar, action] )
Adds a label to the HTML element of the bar item

##### Arguments:
* `in_bar`: *boolean* (Optional) - Set to true to generate an in-bar label, as opposed to a regular on-hover label
* `action`: *any* (Optional) - Provide the action to generate the label. This defaults to self and is only needed in special cases


### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
### getNode()
Gets a copy of the elements HTML node that is not yet in use.


Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [ColorPicker](action#colorpicker)
### toElement( destination )
Appends the bar item to a HTML element

##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [ColorPicker](action#colorpicker)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### on( event_name, callback )
Adds an event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L91) -


### once( event_name, callback )
Adds a single-use event listener to the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L97) -


### removeListener( event_name, callback )
Removes an event listener from the item

##### Arguments:
* `event_name`: [ActionEventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L44) -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L103) -


### dispatchEvent( data )
##### Arguments:
* `data`: *object*


### change( color )
##### Arguments:
* `color`: *any*


### hide()


### confirm()


### set( color )
##### Arguments:
* `color`: *any*

Returns: [ColorPicker](action#colorpicker)

### get()

Returns: *any*

### delete()



## Toolbar
Extended by: [_ToolToolbar](action#tooltoolbar)

### new Toolbar( id, data )
Creates a new Toolbar

##### Arguments:
* `id`: *string*
* `data`: ToolbarOptions
	* `id`: *string*
	* `name`: *string* (Optional)
	* `label`: *boolean* (Optional) - If true, the toolbar will display a label abovee
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `narrow`: *boolean* (Optional) - If true, the toolbar will only take as much width as needed
	* `vertical`: *boolean* (Optional)
	* `children`: Array of *string* or [BarItem](action#baritem) - Default content of the toolbar. Separators are available, where _ = separator, + = spaces, # = line break

### new Toolbar( data )
*Alternative constructor signature*


### build( data, force )
##### Arguments:
* `data`: *any*
* `force`: *any*

Returns: [Toolbar](action#toolbar)

### contextmenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### editMenu()

Returns: [Toolbar](action#toolbar)

### add( action, position )
##### Arguments:
* `action`: *any*
* `position`: *any*

Returns: [Toolbar](action#toolbar)

### remove( action )
##### Arguments:
* `action`: *any*

Returns: [Toolbar](action#toolbar)

### update()

Returns: [Toolbar](action#toolbar)

### toPlace( place )
##### Arguments:
* `place`: *any*

Returns: [Toolbar](action#toolbar)

### save()

Returns: [Toolbar](action#toolbar)

### reset()

Returns: [Toolbar](action#toolbar)


## BARS
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| stored | [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L418) |  |
| editing_bar | *undefined* or [Toolbar](action#toolbar) |  |
| action_definers | Array of [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/action.d.ts#L420) |  |
| condition | *any* |  |

### defineActions( definer )
##### Arguments:
* `definer`: *any*


### setupActions()


### setupToolbars()


### setupVue()


### updateConditions()


### updateToolToolbar()



## ActionControl
#### Namespace

A dialog-based interface to search and trigger actions and other things

| Property | Type | Description |
| -------- | ---- | ----------- |
| open | *boolean* |  |
| type | *string* |  |
| max_length | *number* |  |

### select()


### hide()


### confirm( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### cancel()


### trigger( action, event )
##### Arguments:
* `action`: *any*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### click( action, event )
##### Arguments:
* `action`: *any*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### handleKeys( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *boolean*


## Keybinds
#### Namespace

Stores and handles keybinds

| Property | Type | Description |
| -------- | ---- | ----------- |
| actions | Array of [BarItem](action#baritem) |  |
| stored | [Record](#Record) |  |
| extra | [Record](#Record) |  |
| structure | *any* |  |

### save()


### reset()



## ToolToolbar
Extends: [Toolbar](action#toolbar)

### new _ToolToolbar( id, data )
Creates a new ToolToolbar

##### Arguments:
* `id`: *string*
* `data`: ToolbarOptions
	* `id`: *string*
	* `name`: *string* (Optional)
	* `label`: *boolean* (Optional) - If true, the toolbar will display a label abovee
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `narrow`: *boolean* (Optional) - If true, the toolbar will only take as much width as needed
	* `vertical`: *boolean* (Optional)
	* `children`: Array of *string* or [BarItem](action#baritem) - Default content of the toolbar. Separators are available, where _ = separator, + = spaces, # = line break

### new _ToolToolbar( data )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| selected | [Tool](action#tool) |  |

### build( data, force )
##### Arguments:
* `data`: *any*
* `force`: *any*

Returns: [_ToolToolbar](action#tooltoolbar)

### contextmenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### editMenu()

Returns: [_ToolToolbar](action#tooltoolbar)

### add( action, position )
##### Arguments:
* `action`: *any*
* `position`: *any*

Returns: [_ToolToolbar](action#tooltoolbar)

### remove( action )
##### Arguments:
* `action`: *any*

Returns: [_ToolToolbar](action#tooltoolbar)

### update()

Returns: [_ToolToolbar](action#tooltoolbar)

### toPlace( place )
##### Arguments:
* `place`: *any*

Returns: [_ToolToolbar](action#tooltoolbar)

### save()

Returns: [_ToolToolbar](action#tooltoolbar)

### reset()

Returns: [_ToolToolbar](action#tooltoolbar)


## Toolbox
#### Global Variable

Type: [_ToolToolbar](action#tooltoolbar)

