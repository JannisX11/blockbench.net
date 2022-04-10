---
title: Dialog
---

# Dialog

This is a method to create a completely custom dialog window.

### new Dialog( id: String, options )

Creates a new dialog.

* `id: String` ID of the dialog
* `options: Object`
	* `title: String` Title of the dialog
	* `form` Create a form dialog. This is an object of inputs and lines that the form consists of.
		* Form part (Object)
			* `type` (`input/textarea/select/number/color/checkbox`) Type of the input
			* `label` Label of the input
			* `nocolon` Whether to skip the automatic colon added to the label
			* `readonly` When true, makes the input read-only
			* `value` Default value
			* `placeholder` Text to show when the input is empty
			* `text` Text when using the text type. Supports markdown-style links.
			* `colorpicker` When using the type: `color`, the colorpicker action to use. (optional)
			* `min`/`max`/`step` Mimimum, Maximum and Step attributes for the number input
			* `height` Height for textarea inputs
			* `options: Object` Options (`key: "displaytext"`) for select inputs
	* `component: Object` VueJS component stating the content of the dialog
	* `lines: String[]` Array of HTML object strings for each line of content in the dialog.
	* `part_order: String[]` Order of the 3 parts that can make up the content, if you are using 2 or more of them. Default is `'lines', 'form', 'component'` 
	* `onConfirm` Function to execute when the user confirms the dialog
	* `onCancel` Function to execute when the user cancels the dialog

### Dialog.show()
Shows the dialog.

### Dialog.hide()
Closes the dialog.

### Dialog.confirm()
Triggers the confirm event of the dialog.

### Dialog.cancel()
Triggers the cancel event of the dialog.


### Example
```javascript
new Dialog({
    id: 'generate_tree',
    title: 'Tree Generator',
    form: {
        branches: {label: 'Branches', type: 'number', value: 10, step: 1, min: 1, max: 16},
        conifer: {label: 'Conifer', type: 'checkbox'},
    },
    onConfirm: function(formData) {
        TreeGenerator.generateTree(formData.branches, formData.conifer)
        this.hide()
    }
}).show()
```
