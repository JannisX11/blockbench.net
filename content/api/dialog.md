---
title: Dialog
---

# Dialog
## InputForm
### new InputForm( form_config )
Creates a new InputForm

##### Arguments:
* `form_config`: [InputFormConfig](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L110)


| Property | Type | Description |
| -------- | ---- | ----------- |
| form_config | [InputFormConfig](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L110) |  |
| form_data | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L117) |  |
| node | [HTMLDivElement](#HTMLDivElement) |  |
| max_label_width | *number* |  |
| uses_wide_inputs | *boolean* |  |

### setValues( values[, update] )
Set the values of some or all form inputs

##### Arguments:
* `values`: [Record](#Record) - The values to set
* `update`: *boolean* (Optional) - Set to false to prevent triggering an update


### setToggles( values[, update] )
Set the values of some or all form input toggles

##### Arguments:
* `values`: [Record](#Record) - The toggle values to set
* `update`: *boolean* (Optional) - Set to false to prevent triggering an update


### getResult()
Get the form result values


Returns: [Record](#Record)

### updateValues( initial )
Register that the values have been changed. This should generally only be used internally

##### Arguments:
* `initial`: *boolean* - Indicate that the change is for the initial setup of the form, prevents dispatching a change event

Returns: [Record](#Record)

### InputForm.getDefaultValue( input_config )
Returns the default value of a given form input

##### Arguments:
* `input_config`: FormElement
	* `label`: *string* (Optional)
	* `description`: *string* (Optional) - Detailed description of the field, available behind the questionmark icon or on mouse hover
	* `type`: `"number"` or `"text"` or `"color"` or `"select"` or `"textarea"` or `"range"` or `"checkbox"` or `"radio"` or `"vector"` or `"file"` or `"folder"` or `"save"` or `"inline_select"` or `"inline_multi_select"` or `"info"` or `"num_slider"` or `"buttons"`
	* `nocolon`: *boolean* (Optional) - If true, the label will be displayed without colon at the end
	* `full_width`: *boolean* (Optional) - Stretch the input field across the whole width of the form
	* `readonly`: *boolean* (Optional) - Set the input to read-only
	* `share_text`: *boolean* (Optional) - Add buttons to allow copying and sharing the text or link
	* `value`: *any* (Optional) - The default value
	* `default`: *any* (Optional) - The default selected option for 'select', 'inline_select' and 'radio' types. Alias for 'value'
	* `placeholder`: *string* (Optional)
	* `text`: *string* (Optional) - When using 'text' type, the text to display. Markdown is supported
	* `editable_range_label`: *boolean* (Optional) - When using 'range' type, allow users to modify the numeric input
	* `colorpicker`: *any* (Optional)
	* `min`: *number* (Optional) - On numeric inputs, the minimum possible value
	* `max`: *number* (Optional) - On numeric inputs, the maximum possible value
	* `step`: *number* (Optional) - The step in which the value can be increased / decreased
	* `force_step`: *boolean* (Optional) - If enabled, the value is forced to multiples of the "step" value. This can be used to create integer-only inputs etc.
	* `height`: *number* (Optional) - The height of the input on textareas, in pixels
	* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L78) (Optional) - Available options on select or inline_select inputs
	* `buttons`: Array of *string* (Optional) - List of buttons for the button type
	* `getInterval`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L88) (Optional)
	* `interval_type`: `"position"` or `"rotation"` (Optional) - For num_sliders, the sliding interval mode
	* `toggle_enabled`: *boolean* (Optional) - Allow users to toggle the entire option on or off
	* `toggle_default`: *boolean* (Optional) - Set whether the setting is toggled on or off by default. Requires 'toggle_enabled' field to be set to true
	* `click`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L105) (Optional)

Returns: [FormResultValue](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L108)


## DialogSidebar
### new DialogSidebar( options )
Creates a new DialogSidebar

##### Arguments:
* `options`: DialogSidebarOptions
	* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L259) (Optional)
	* `page`: *string* (Optional)
	* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L148) (Optional)
	* `onPageSwitch`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| pages | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L269) |  |
| page | *string* |  |
| actions | Array of *string* or [Action](action#action-1) |  |
| page_menu | [Record](#Record) |  |

### onPageSwitch( page )
##### Arguments:
* `page`: *string*


### build()


### toggle( [state] )
##### Arguments:
* `state`: *boolean* (Optional)


### setPage( page )
##### Arguments:
* `page`: *string*



## Dialog
Extended by: [ShapelessDialog](dialog#shapelessdialog), [ToolConfig](dialog#toolconfig)

### new Dialog( id, options )
Creates a new Dialog

##### Arguments:
* `id`: *string*
* `options`: DialogOptions
	* `title`: *string*
	* `id`: *string* (Optional)
	* `width`: *number* (Optional)
	* `cancel_on_click_outside`: *boolean* (Optional) - Unless set to false, clicking on the darkened area outside of the dialog will cancel the dialog.
	* `confirmIndex`: *number* (Optional) - Default button to press to confirm the dialog. Defaults to the first button.
	* `cancelIndex`: *number* (Optional) - Default button to press to cancel the dialog. Defaults to the last button.
	* `onOpen`: Function (Optional)
	* `onConfirm`: Function (Optional)
	* `onCancel`: Function (Optional)
	* `onButton`: Function (Optional)
	* `onFormChange`: Function (Optional)
	* `lines`: Array of *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [Comment](#Comment) or [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L197) (Optional) - Array of HTML any strings for each line of content in the dialog.
	* `form`: [InputFormConfig](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L110) (Optional) - Creates a form in the dialog
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional) - Vue component
	* `part_order`: Array of *string* (Optional) - Order that the different interface types appear in the dialog. Default is 'form', 'lines', 'component'.
	* `form_first`: *boolean* (Optional)
	* `sidebar`: DialogSidebarOptions (Optional) - Creates a dialog sidebar
		* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L259) (Optional)
		* `page`: *string* (Optional)
		* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L148) (Optional)
		* `onPageSwitch`: Function (Optional)
	* `title_menu`: [Menu](menu#menu-1) (Optional) - Menu in the handle bar
	* `progress_bar`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L228) (Optional) - Display a progress bar in the dialog
	* `singleButton`: *boolean* (Optional) - If true, the dialog will only have one button to close it
	* `buttons`: Array of *string* (Optional) - List of buttons
	* `keyboard_actions`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L245) (Optional) - A list of keyboard shortcuts that only work inside the dialog
	* `resizable`: *boolean* or `"x"` or `"y"` or `"xy"` (Optional) - Select on which axes the dialog can be resized. None by default

### new Dialog( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| component | [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) |  |
| sidebar | `null` or [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | `null` or [Vue](#Vue) |  |
| form | `null` or [InputForm](dialog#inputform) |  |
| progress_bar | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L290) |  |
| confirmIndex | *number* |  |
| cancelIndex | *number* |  |

### show()

Returns: [Dialog](dialog#dialog-1)

### hide()

Returns: [Dialog](dialog#dialog-1)

### confirm( [event] )
Triggers the confirm event of the dialog.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### cancel( [event] )
Triggers the cancel event of the dialog.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### close( button[, event] )
Closes the dialog using the index of the pressed button

##### Arguments:
* `button`: *number*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### getFormResult()
If the dialog contains a form, return the current values of the form


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L326)

### onOpen()
Function to execute when the dialog is opened



### onConfirm( formResult )
Function to execute when the user confirms the dialog

##### Arguments:
* `formResult`: *any*


### onCancel()
Function to execute when the user cancels the dialog



### onButton( button_index[, event] )
Triggered when the user presses a specific button

##### Arguments:
* `button_index`: *number*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### onFormChange( form_result )
Function to run when anything in the form is changed

##### Arguments:
* `form_result`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L348)


### setFormValues( values, update )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L354) - The values to set, by form input key
* `update`: *boolean* - Whether to update the dialog (call onFormChange) after setting the values. Default is true. Set to false when called from onFormChange


### setFormToggles( values, update )
Set whether the dialog form inputs are toggled on or off. See "toggle_enabled"

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L360) -
* `update`: *boolean* - Whether to update the dialog (call onFormChange) after setting the values. Default is true. Set to false when called from onFormChange


### delete()
Delete the dialog any, causing it to be re-build from scratch on next open



### onPageSwitch( page )
##### Arguments:
* `page`: *string*


### open
Static Property

Type: `null` or [Dialog](dialog#dialog-1)

Currently opened dialog


### stack
Static Property

Type: Array of [Dialog](dialog#dialog-1)



## ShapelessDialog
Extends: [Dialog](dialog#dialog-1)

### new ShapelessDialog( id, options )
Creates a new ShapelessDialog

##### Arguments:
* `id`: *string*
* `options`: ShapelessDialogOptions
	* `title`: *string*
	* `confirmIndex`: *number* (Optional) - Default button to press to confirm the dialog. Defaults to the first button.
	* `cancelIndex`: *number* (Optional) - Default button to press to cancel the dialog. Defaults to the last button.
	* `onConfirm`: Function (Optional)
	* `onCancel`: Function (Optional)
	* `onClose`: Function (Optional)
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional) - Vue component
	* `cancel_on_click_outside`: *boolean* (Optional) - Unless set to false, clicking on the darkened area outside of the dialog will cancel the dialog.


| Property | Type | Description |
| -------- | ---- | ----------- |
| sidebar | `null` or [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | `null` or [Vue](#Vue) |  |
| form | `null` or [InputForm](dialog#inputform) |  |
| progress_bar | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L290) |  |
| confirmIndex | *number* |  |
| cancelIndex | *number* |  |
| id | *string* |  |
| component | [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) |  |

### onOpen()
Function to execute when the dialog is opened



### onConfirm( formResult )
Function to execute when the user confirms the dialog

##### Arguments:
* `formResult`: *any*


### onCancel()
Function to execute when the user cancels the dialog



### onButton( button_index[, event] )
Triggered when the user presses a specific button

##### Arguments:
* `button_index`: *number*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### onFormChange( form_result )
Function to run when anything in the form is changed

##### Arguments:
* `form_result`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L348)


### setFormToggles( values, update )
Set whether the dialog form inputs are toggled on or off. See "toggle_enabled"

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L360) -
* `update`: *boolean* - Whether to update the dialog (call onFormChange) after setting the values. Default is true. Set to false when called from onFormChange


### onPageSwitch( page )
##### Arguments:
* `page`: *string*


### show()

Returns: [ShapelessDialog](dialog#shapelessdialog)

### hide()

Returns: [ShapelessDialog](dialog#shapelessdialog)

### confirm( [event] )
Triggers the confirm event of the dialog.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### cancel( [event] )
Triggers the cancel event of the dialog.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### close( button[, event] )
Closes the dialog using the index of the pressed button

##### Arguments:
* `button`: *number*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### getFormResult()
If the dialog contains a form, return the current values of the form


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L429)

### setFormValues( values )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L435)


### delete()
Delete the dialog any, causing it to be re-build from scratch on next open



### open
Static Property

Type: `null` or [Dialog](dialog#dialog-1)

Currently opened dialog


### stack
Static Property

Type: Array of [Dialog](dialog#dialog-1)



## ToolConfig
Extends: [Dialog](dialog#dialog-1)

### new ToolConfig( id, options )
Creates a new ToolConfig

##### Arguments:
* `id`: *string*
* `options`: ToolConfigOptions
	* `title`: *string*
	* `id`: *string* (Optional)
	* `width`: *number* (Optional)
	* `cancel_on_click_outside`: *boolean* (Optional) - Unless set to false, clicking on the darkened area outside of the dialog will cancel the dialog.
	* `confirmIndex`: *number* (Optional) - Default button to press to confirm the dialog. Defaults to the first button.
	* `cancelIndex`: *number* (Optional) - Default button to press to cancel the dialog. Defaults to the last button.
	* `onOpen`: Function (Optional)
	* `onConfirm`: Function (Optional)
	* `onCancel`: Function (Optional)
	* `onButton`: Function (Optional)
	* `onFormChange`: Function (Optional)
	* `lines`: Array of *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [Comment](#Comment) or [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L197) (Optional) - Array of HTML any strings for each line of content in the dialog.
	* `form`: [InputFormConfig](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L110) (Optional) - Creates a form in the dialog
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional) - Vue component
	* `part_order`: Array of *string* (Optional) - Order that the different interface types appear in the dialog. Default is 'form', 'lines', 'component'.
	* `form_first`: *boolean* (Optional)
	* `sidebar`: DialogSidebarOptions (Optional) - Creates a dialog sidebar
		* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L259) (Optional)
		* `page`: *string* (Optional)
		* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L148) (Optional)
		* `onPageSwitch`: Function (Optional)
	* `title_menu`: [Menu](menu#menu-1) (Optional) - Menu in the handle bar
	* `progress_bar`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L228) (Optional) - Display a progress bar in the dialog
	* `singleButton`: *boolean* (Optional) - If true, the dialog will only have one button to close it
	* `buttons`: Array of *string* (Optional) - List of buttons
	* `keyboard_actions`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L245) (Optional) - A list of keyboard shortcuts that only work inside the dialog
	* `resizable`: *boolean* or `"x"` or `"y"` or `"xy"` (Optional) - Select on which axes the dialog can be resized. None by default


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| component | [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) |  |
| sidebar | `null` or [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | `null` or [Vue](#Vue) |  |
| form | `null` or [InputForm](dialog#inputform) |  |
| progress_bar | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L290) |  |
| confirmIndex | *number* |  |
| cancelIndex | *number* |  |
| options | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L447) |  |

### hide()

Returns: [ToolConfig](dialog#toolconfig)

### confirm( [event] )
Triggers the confirm event of the dialog.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### cancel( [event] )
Triggers the cancel event of the dialog.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### close( button[, event] )
Closes the dialog using the index of the pressed button

##### Arguments:
* `button`: *number*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### getFormResult()
If the dialog contains a form, return the current values of the form


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L326)

### onOpen()
Function to execute when the dialog is opened



### onConfirm( formResult )
Function to execute when the user confirms the dialog

##### Arguments:
* `formResult`: *any*


### onCancel()
Function to execute when the user cancels the dialog



### onButton( button_index[, event] )
Triggered when the user presses a specific button

##### Arguments:
* `button_index`: *number*
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)


### onFormChange( form_result )
Function to run when anything in the form is changed

##### Arguments:
* `form_result`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L348)


### setFormValues( values, update )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L354) - The values to set, by form input key
* `update`: *boolean* - Whether to update the dialog (call onFormChange) after setting the values. Default is true. Set to false when called from onFormChange


### setFormToggles( values, update )
Set whether the dialog form inputs are toggled on or off. See "toggle_enabled"

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/dialog.d.ts#L360) -
* `update`: *boolean* - Whether to update the dialog (call onFormChange) after setting the values. Default is true. Set to false when called from onFormChange


### delete()
Delete the dialog any, causing it to be re-build from scratch on next open



### onPageSwitch( page )
##### Arguments:
* `page`: *string*


### changeOptions( options )
Change and save a number of options in the config

##### Arguments:
* `options`: [Record](#Record) - Options to set


### save()
Save any changes in local storage



### show( [anchor] )
Open the config menu

##### Arguments:
* `anchor`: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) (Optional) - Optional element to anchor the menu to

Returns: [ToolConfig](dialog#toolconfig)

### open
Static Property

Type: `null` or [Dialog](dialog#dialog-1)

Currently opened dialog


### stack
Static Property

Type: Array of [Dialog](dialog#dialog-1)


