---
title: Shared Actions
---

# Shared Actions
## SharedActions
#### Namespace

Shared Actions is a system in Blockbench to allow actions (including in toolbars, menus, via action control, or keybinding) to run different code in different cases, such as in different modes or different panels.
As an example, the "Duplicate" action runs code to duplicate elements when used in the outliner, and duplicates textures when used in the textures panel.


Handlers can be added for existing actions like this:

### Example:



```javascript
// Duplicate layers when using "Duplicate" in the layers panel
SharedActions.add('duplicate', {
	subject: 'layer',
	condition: () => Prop.active_panel == 'layers' && TextureLayer.selected,
	run() {
		let texture = Texture.selected;
		let original = texture.getActiveLayer();
		let copy = original.getUndoCopy(true);
		copy.name += '-copy';
		Undo.initEdit({textures: [texture]});
		let layer = new TextureLayer(copy, texture);
		layer.addForEditing();
		Undo.finishEdit('Duplicate layer');
	}
})
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| checks | [See types]() |  |

### add( action_id, handler )
Add a new handler to a shared action

##### Arguments:
* `action_id`: *string* - Action ID
* `handler`: SharedActionHandler - Handler options
	* `priority`: *number*
	* `subject`: *string*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1)
	* `run`: [See types]()

Returns: [Deletable](misc#deletable)

### run( action_id[, event, context] )
Run the active handler for a specific subject manually

##### Arguments:
* `action_id`: *string* - Action ID
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional) - Event that triggered the interaction
* `context`: *any* (Optional) - Optional context variable

Returns: *boolean*

### runSpecific( action_id, subject[, event, context, force] )
Run a specific handler manually

##### Arguments:
* `action_id`: *string* - Action ID
* `subject`: *string* - Subject to run on
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional) - Event that triggered the interaction
* `context`: *any* (Optional) - Optional context variable
* `force`: *boolean* (Optional) - Force the specified handler to run and ignore its condition

Returns: *boolean*

### condition( action_id )
Check if there is an active and available handler in the current situation for a shared action

##### Arguments:
* `action_id`: *string* -

Returns: *boolean*

### find( action_id[, event, context] )
Find the active handler in the current situation for a shared action

##### Arguments:
* `action_id`: *string* -
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional) -
* `context`: *any* (Optional) -

Returns: [SharedActionHandler]() or `null`

