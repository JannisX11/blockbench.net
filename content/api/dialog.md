---
title: Dialog
---

# Dialog
## DialogSidebar
### new DialogSidebar( options )
Creates a new DialogSidebar

##### Arguments:
* `options`: DialogSidebarOptions
	* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L200) (Optional)
	* `page`: *string* (Optional)
	* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L96) (Optional)
	* `onPageSwitch`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| pages | [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L210) |  |
| page | *string* |  |
| actions | Array of *string* or [Action](action#action-1) |  |

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
Extended by: [ShapelessDialog](dialog#shapelessdialog)

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
	* `lines`: Array of *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [Comment](#Comment) or [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L145) (Optional) - Array of HTML any strings for each line of content in the dialog.
	* `form`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L155) (Optional) - Creates a form in the dialog
	* `component`: *any* (Optional) - Vue component
	* `part_order`: Array of *string* (Optional) - Order that the different interface types appear in the dialog. Default is 'form', 'lines', 'component'.
	* `form_first`: *boolean* (Optional)
	* `sidebar`: DialogSidebarOptions (Optional) - Creates a dialog sidebar
		* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L200) (Optional)
		* `page`: *string* (Optional)
		* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L96) (Optional)
		* `onPageSwitch`: Function (Optional)
	* `title_menu`: [Menu](menu#menu-1) (Optional) - Menu in the handle bar
	* `singleButton`: *boolean* (Optional) - If true, the dialog will only have one button to close it
	* `buttons`: Array of *string* (Optional) - List of buttons
	* `keyboard_actions`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L186) (Optional) - A list of keyboard shortcuts that only work inside the dialog
	* `resizable`: *boolean* or `"x"` or `"y"` or `"xy"` (Optional) - Select on which axes the dialog can be resized. None by default

### new Dialog( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| component | *any* |  |
| sidebar | `null` or [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | `null` or [Vue](#Vue) |  |
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


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L250)

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
* `form_result`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L272)


### setFormValues( values )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L276)


### delete()
Delete the dialog any, causing it to be re-build from scratch on next open



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
	* `component`: *any* (Optional) - Vue component
	* `cancel_on_click_outside`: *boolean* (Optional) - Unless set to false, clicking on the darkened area outside of the dialog will cancel the dialog.


| Property | Type | Description |
| -------- | ---- | ----------- |
| sidebar | `null` or [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | `null` or [Vue](#Vue) |  |
| confirmIndex | *number* |  |
| cancelIndex | *number* |  |
| id | *string* |  |
| component | *any* |  |

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
* `form_result`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L272)


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


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L343)

### setFormValues( values )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/dialog.d.ts#L349)


### delete()
Delete the dialog any, causing it to be re-build from scratch on next open



### open
Static Property

Type: `null` or [Dialog](dialog#dialog-1)

Currently opened dialog


### stack
Static Property

Type: Array of [Dialog](dialog#dialog-1)


