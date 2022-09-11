---
title: Interface
---

# Interface

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

Displays a notification at the top of the 3D viewport.

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
 


