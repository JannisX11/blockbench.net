---
title: Modes
---

# Modes

### `new Mode( id: String, data: Object )`

* `data`
	* `name: String` 
	* `category: String` Category of this mode's keybinding.
	* `default_tool: Tool` Default tool that gets selected when joining this mode.
	* `center_windows: Array` Which center windows are visible in this mode. Options are `'preview'`, `'timeline'` and `'start_screen'`.
	* `selectCubes: Boolean` Whether the user can select cubes by left clicking in the preview
	* `hide_toolbars: Boolean` Hides the main toolbar
	* `hide_status_bar: Boolean` Hides the status bar
	* `component: Object` VueJS component describing the interface of the mode
	* `condition: Condition`
	* `onSelect: Function`
	* `onUnselect: Function`

#### `Mode#select()`

Selects this mode.

#### `Mode#selected`

Boolean. Returns whether this mode is selected.

#### `Modes.vue.$forceUpdate()`

Forces the mode tab menu to update. This may be necessary after adding new modes or changing certain properties.
