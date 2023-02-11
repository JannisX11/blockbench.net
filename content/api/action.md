---
title: Action
---

# Action
## BarItems
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L4)

Registry of all toolbar items, such as actions, tools, etc.


## Keybind
A customizable keybind

### new Keybind( keys )
Creates a new Keybind

##### Arguments:
* `keys`: KeybindKeys
	* `key`: *string* or *number* - Main key, can be a numeric keycode or a lower case character
	* `ctrl`: *boolean* (Optional)
	* `shift`: *boolean* (Optional)
	* `alt`: *boolean* (Optional)
	* `meta`: *boolean* (Optional)



## KeybindItem
Extends: [Deletable](misc#deletable)

Extended by: [BarItem](action#baritem), [Mode](mode#mode-1)

### new KeybindItem( id, options )
Creates a new KeybindItem

##### Arguments:
* `id`: *string*
* `options`: KeybindItemOptions
	* `keybind`: [Keybind](action#keybind) (Optional)


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


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarItem](action#baritem)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


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
	* `color`: *string* (Optional)
	* `linked_setting`: *string* (Optional)
	* `children`: Array of *object* (Optional)
	* `label`: *boolean* (Optional) - Show the full label in toolbars


| Property | Type | Description |
| -------- | ---- | ----------- |
| nodes | Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| side_menu | [Menu](menu#menu-1) | Provide a menu that belongs to the action, and gets displayed as a small arrow next to it in toolbars. |

### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Action](action#action-1)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### trigger( event )
Trigger to run or select the action. This is the equivalent of clicking or using a keybind to trigger it. Also checks if the condition is met.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

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
	* `color`: *string* (Optional)
	* `linked_setting`: *string* (Optional)
	* `children`: Array of *object* (Optional)
	* `label`: *boolean* (Optional) - Show the full label in toolbars
	* `default`: *boolean* (Optional) - Default value of the toggle
	* `onChange`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| nodes | Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| side_menu | [Menu](menu#menu-1) | Provide a menu that belongs to the action, and gets displayed as a small arrow next to it in toolbars. |

### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Toggle](action#toggle)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### trigger( event )
Trigger to run or select the action. This is the equivalent of clicking or using a keybind to trigger it. Also checks if the condition is met.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

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

A tool, such as mvoe tool, vertex snap tool, or paint brush

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
	* `color`: *string* (Optional)
	* `linked_setting`: *string* (Optional)
	* `children`: Array of *object* (Optional)
	* `label`: *boolean* (Optional) - Show the full label in toolbars
	* `selectFace`: *boolean* (Optional)
	* `selectElements`: *boolean* (Optional)
	* `transformerMode`: `""` or `"translate"` (Optional)
	* `animation_channel`: *string* (Optional)
	* `toolbar`: *string* (Optional)
	* `alt_tool`: *string* (Optional)
	* `modes`: Array of *string* (Optional)
	* `allowed_view_modes`: [ViewMode](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L105) (Optional)
	* `paintTool`: *boolean* (Optional)
	* `brush`: BrushOptions (Optional)
		* `blend_modes`: *boolean* - Enable the input for blend modes when this tool is selected
		* `shapes`: *boolean* - Enable the input for shapes when this tool is selected
		* `size`: *boolean* - Enable the input for brush size when this tool is selected
		* `softness`: *boolean* - Enable the input for softness when this tool is selected
		* `opacity`: *boolean* - Enable the input for opacity when this tool is selected
		* `offset_even_radius`: *boolean* - When the brush size is an even number, offset the snapping by half a pixel so that even size brush strokes can be correctly centered
		* `floor_coordinates`: *boolean* or [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L168) - Set whether the brush coordinates get floored to snap to the nearest pixel.
		* `changePixel`: Function
		* `onStrokeStart`: Function
		* `onStrokeMove`: Function
		* `onStrokeEnd`: Function
		* `draw`: Function


| Property | Type | Description |
| -------- | ---- | ----------- |
| nodes | Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| side_menu | [Menu](menu#menu-1) | Provide a menu that belongs to the action, and gets displayed as a small arrow next to it in toolbars. |

### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Tool](action#tool)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


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

Returns: [Tool](action#tool)

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
* `options`: *object*


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [Widget](action#widget)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### delete()



## NumSlider
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new NumSlider( id, options )
Creates a new NumSlider

##### Arguments:
* `id`: *string*
* `options`: *object*


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [NumSlider](action#numslider)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


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

Returns: *any*

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

Returns: *any*

### update()


### delete()



## BarSlider
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarSlider( id, options )
Creates a new BarSlider

##### Arguments:
* `id`: *string*
* `options`: *object*


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarSlider](action#barslider)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### change( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### set( value )
##### Arguments:
* `value`: *any*


### get()

Returns: *any*

### delete()



## BarSelect
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarSelect( id, options )
Creates a new BarSelect

##### Arguments:
* `id`: *string*
* `options`: *object*


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarSelect](action#barselect)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


### open( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### trigger( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: *boolean*

### change( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: [BarSelect](action#barselect)

### getNameFor( key )
##### Arguments:
* `key`: *any*

Returns: *any*

### set( key )
##### Arguments:
* `key`: *any*

Returns: [BarSelect](action#barselect)

### get()

Returns: *any*

### delete()



## BarText
Extends: [Widget](action#widget)

Anything that can go into a toolbar, including actions, tools, toggles, widgets etc.

### new BarText( id, options )
Creates a new BarText

##### Arguments:
* `id`: *string*
* `options`: *object*


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [BarText](action#bartext)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


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
* `options`: *object*


### conditionMet()

Returns: *boolean*

### addLabel( in_bar, action )
##### Arguments:
* `in_bar`: *any*
* `action`: *any*


### getNode()

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### toElement( destination )
##### Arguments:
* `destination`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

Returns: [ColorPicker](action#colorpicker)

### pushToolbar( bar )
##### Arguments:
* `bar`: *any*


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

### new Toolbar( data )
Creates a new Toolbar

##### Arguments:
* `data`: *any*


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
| stored | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L280) |  |
| editing_bar | *undefined* or [Toolbar](action#toolbar) |  |
| action_definers | Array of [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L282) |  |

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
| stored | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L310) |  |
| extra | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L311) |  |
| structure | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/action.d.ts#L312) |  |

### save()


### reset()



## ToolToolbar
Extends: [Toolbar](action#toolbar)

### new _ToolToolbar( data )
Creates a new ToolToolbar

##### Arguments:
* `data`: *any*


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

