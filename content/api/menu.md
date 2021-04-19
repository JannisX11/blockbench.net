# Menus

## Menu Class

A menu or context menu.

### new Menu( content )

* `content: Array` List of main level menu items. Can be Actions, objects functioning as `MenuItems`, or `'_'` functioning as a separator
	* `MenuItem: Object`
		* `id: String` Identifier of the menu item, this is used to navigate nested menus.
		* `name: String` Menu Label. This can be a direct name or a translation string
		* `description: String` Item description, appearing when hovering over this menu item. This can be a direct name or a translation string
		* `icon: Icon String` Menu item icon
		* `color: CSS Color` color of the icon. Can be an axis letter for red/green/blue axis color.
		* `condition: Condition` Whether to show this item
		* `children: Array` Child menu items
		* `click: Function` Runs when you click the event. First argument is the context as specified in Menu.open(). Second argument is the click event.

#### Menu#open( position, context )

Opens the menu

* `position: MouseEvent|HTML Element` Event or element defining the opening position of the menu
* `context: Any` Opening context of the menu. This can be used in click events of menu items for object specific context menus.

#### Menu#hide()

Hides the menu

#### Menu#addAction( action, path )

Adds an action or menu item to the menu

* `action: Action|Object` Action to add
* `path: String` Path to where to add the action, separated by periods. The last part can be a number, indicating where in the list to add the action. The number can be negative for starting from the end. Example: `import.0` (Add the action to the start of the File > Import submenu)

#### Menu#removeAction( path )

Removes an action from a menu.

* `path: String` Path to the action, separated by periods.

## BarMenu Class

Menu for the main menu bar

### new BarMenu( id, content, condition )

Creates a new menu inside the main menu bar

* `id: String` Identifier for the menu
* `content: Array` List of menu items. Works the same as in normal menus.
* `condition: Condition` Whether to show the menu in the menu bar.


## MenuBar

Global constant keeping track of the program's main menu bar.

#### MenuBar.update()

Updates the state and conditions of the menu bar


#### MenuBar.addAction( action, path )

Adds an action or menu item to the menu

* `action: Action|Object` Action to add
* `path: String` Path to where to add the action, separated by periods. The last part can be a number, indicating where in the list to add the action. The number can be negative for starting from the end. Example: `file.import.0` (Add the action to the start of the File > Import submenu)

#### MenuBar.removeAction( path )

Removes an action from a menu.

* `path: String` Path to the action, separated by periods.
