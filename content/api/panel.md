---
title: Panel
---

# Panel
## Panel
Panels are interface sections in Blockbench, that are always visible (in a specific format and mode), and can be added to the sidebars, above or below the 3D viewport, or used as free floating above the UI. Examples are the Outliner or the UV editor.

### new Panel( id, options )
Creates a new Panel

##### Arguments:
* `id`: *string*
* `options`: PanelOptions
	* `id`: *string*
	* `name`: *string*
	* `icon`: *string*
	* `menu`: *any* (Optional)
	* `growable`: *boolean* (Optional)
	* `selection_only`: *boolean* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `display_condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `expand_button`: *boolean*
	* `toolbars`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L13) or Array of [Toolbar](action#toolbar)
	* `default_position`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L16)
	* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html)
	* `default_side`: `"left"` or `"right"`
	* `insert_before`: *string*
	* `insert_after`: *string*
	* `onResize`: Function
	* `onFold`: Function

### new Panel( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| slot | [PanelSlot](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L1) |  |
| folded | *boolean* |  |
| inside_vue | [Vue](#Vue) |  |

### isVisible()

Returns: *boolean*

### isInSidebar()

Returns: *boolean*

### fold( [state] )
##### Arguments:
* `state`: *boolean* (Optional)

Returns: [Panel](panel#panel-1)

### moveToFront()
If the panel is floating, move it up to the front


Returns: [Panel](panel#panel-1)

### moveTo( slot[, ref_panel, before] )
##### Arguments:
* `slot`: [PanelSlot](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L1)
* `ref_panel`: [Panel](panel#panel-1) (Optional)
* `before`: *boolean* (Optional)

Returns: [Panel](panel#panel-1)

### update( [dragging] )
##### Arguments:
* `dragging`: *boolean* (Optional)

Returns: [Panel](panel#panel-1)

### dispatchEvent( event_name[, data] )
##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L30)
* `data`: *any* (Optional)


### on( event_name, callback )
Add an event listener

##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L30)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L56)


### once( event_name, callback )
Adds a single-use event listener

##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L30)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L60)


### removeListener( event_name, callback )
Removes an event listener

##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L30)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/panel.d.ts#L64)


### delete()



## updateInterfacePanels()
#### Global Function




## setActivePanel( panel_id )
#### Global Function

##### Arguments:
* `panel_id`: *string*


