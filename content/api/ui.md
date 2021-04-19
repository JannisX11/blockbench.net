# Interface

## Dialog

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
	* `confirmEnabled` If false, the confirm button of the dialog is disabled
	* `cancelEnabled` If false, the cancel button of the dialog is disabled
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


## Messages

### Blockbench.showMessageBox( options, cb )

Shows a simple message box with a title, message, an icon and buttons 

* `options` Object
	* `buttons` Array or strings used to generate the buttons
	* `confirm` Index of the button used to confirm the dialog
	* `cancel` Index of the button used to cancel the dialog
	* `translateKey` Translation key used to auto-fill the title and message from translations
	* `title` Dialog Title
	* `message` Dialog content
	* `icon` Icon string, see [#Icons](#icons)
	* `width` Dialog width in pixels
* `callback` Called when the user exits the dialog using the buttons.
	* `result` Argument, the index of the clicked button within the buttons array.


### Blockbench.textPrompt( title, value, callback )

Prompts the user to enter or edit a text.

* `title` Dialog title
* `value` Before value of the text
* `callback` Runs when the user confirms the prompt
	* `text` Only parameter, the text entered by the user


### Blockbench.showToastNotification( options: Object )

Prompts the user to enter or edit a text.

* `options` 
	* `text: String` Text message
	* `icon: Icon String` Toast Icon
	* `color: CSS Color String` Background color of the toast
	* `expire: Integer` Time in miliseconds before the notification disappears
	* `click: Function` Method to run on click

### Blockbench.showQuickMessage( message[, time] )

Displays a quick message in the middle of the Blockbench interface

* `message` Message to display. Can be a translation string
* `time` How long to display the message in miliseconds. Defaults to 1000 miliseconds.

### Blockbench.showStatusMessage( message[, time] )

Displays a message in the status bar of Blockbench.

* `message` Message to display. Can be a translation string
* `time` How long to display the message in miliseconds. Defaults to 1000 miliseconds.

### Blockbench.setStatusBarText( text )

Sets a text to the status bar

* `text` Text to display. If undefined, it will return to the old value.

### Blockbench.notification( title, text[, icon])

Displays a push notification. In browsers, the user has to accept notifications first.

* `title` Notification title
* `text` Notification content
* `icon` Notification icon, defaults to the Blockbench icon

## Miscellaneous

### Blockbench.setProgress( progress )

Sets the progress bar below the status bar and in the taskbar/dock.

* `progress` Progress (0 is empty, 1 is full)

### Blockbench.openLink( link )

Opens a link in an external browser window or new tab.
 


