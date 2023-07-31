---
title: Dialog
---

# Dialog
## Dialog
Extended by: [ShapelessDialog](dialog#shapelessdialog)

### new Dialog( id, options )
Creates a new Dialog

##### Arguments:
* `id`: *string*
* `options`: DialogOptions
	* `title`: *string*
	* `id`: *string*
	* `confirmIndex`: *number* (Optional) - Default button to press to confirm the dialog. Defaults to the first button.
	* `cancelIndex`: *number* (Optional) - Default button to press to cancel the dialog. Defaults to the last button.
	* `onConfirm`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L48) (Optional)
	* `onCancel`: Function (Optional)
	* `onButton`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L56) (Optional)
	* `onFormChange`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L60) (Optional)
	* `lines`: Array of *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L64) (Optional) - Array of HTML object strings for each line of content in the dialog.
	* `form`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L68) (Optional) - Creates a form in the dialog
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional) - Vue component
	* `part_order`: Array of *string* (Optional) - Order that the different interface types appear in the dialog. Default is 'form', 'lines', 'component'.
	* `form_first`: *boolean* (Optional)
	* `sidebar`: DialogSidebarOptions (Optional) - Creates a dialog sidebar
		* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L217) (Optional)
		* `page`: *string* (Optional)
		* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L27) (Optional)
		* `onPageSwitch`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L222) (Optional)
	* `title_menu`: [Menu](menu#menu-1) (Optional) - Menu in the handle bar
	* `singleButton`: *boolean* (Optional) - If true, the dialog will only have one button to close it
	* `buttons`: Array of *string* (Optional) - List of buttons
	* `cancel_on_click_outside`: *boolean* (Optional) - Unless set to false, clicking on the darkened area outside of the dialog will cancel the dialog.

### new Dialog( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| component | [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) |  |
| sidebar | [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | [Vue](#Vue) |  |

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


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L129)

### setFormValues( values )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L135)


### delete()
Delete the dialog object, causing it to be re-build from scratch on next open



### open
Static Property

Type: [Dialog](dialog#dialog-1)

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
	* `onConfirm`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L161) (Optional)
	* `onCancel`: Function (Optional)
	* `onClose`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L169) (Optional)
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional) - Vue component
	* `cancel_on_click_outside`: *boolean* (Optional) - Unless set to false, clicking on the darkened area outside of the dialog will cancel the dialog.


| Property | Type | Description |
| -------- | ---- | ----------- |
| sidebar | [DialogSidebar](dialog#dialogsidebar) |  |
| content_vue | [Vue](#Vue) |  |
| id | *string* |  |
| component | [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) |  |

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


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L203)

### setFormValues( values )
Set the values of the dialog form inputs

##### Arguments:
* `values`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L209)


### delete()
Delete the dialog object, causing it to be re-build from scratch on next open



### open
Static Property

Type: [Dialog](dialog#dialog-1)

Currently opened dialog


### stack
Static Property

Type: Array of [Dialog](dialog#dialog-1)



## DialogSidebar
### new DialogSidebar( options )
Creates a new DialogSidebar

##### Arguments:
* `options`: DialogSidebarOptions
	* `pages`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L217) (Optional)
	* `page`: *string* (Optional)
	* `actions`: Array of *string* or [Action](action#action-1) or [ActionInterface](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L27) (Optional)
	* `onPageSwitch`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L222) (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| pages | [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/dialog.d.ts#L227) |  |
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


