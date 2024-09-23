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
	* `growable`: *boolean* (Optional) - If true, the panel can automatically become smaller or larger than its initial size in the sidebar
	* `resizable`: `true` (Optional) - When true, the height of the panel can be adjusted in the sidebar
	* `selection_only`: *boolean* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `display_condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `expand_button`: *boolean* - Adds a button to the panel that allows users to pop-out and expand the panel on click
	* `toolbars`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L26) or Array of [Toolbar](action#toolbar) (Optional)
	* `default_position`: *number* or [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L31) (Optional)
	* `component`: *any* (Optional)
	* `default_side`: `"left"` or `"right"`
	* `insert_before`: *string* (Optional) - Identifier of another panel to insert this one above
	* `insert_after`: *string* (Optional) - Identifier of another panel to insert this one below
	* `onResize`: Function (Optional)
	* `onFold`: Function (Optional)

### new Panel( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| slot | [PanelSlot](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L3) |  |
| folded | *boolean* |  |
| inside_vue | [Vue](#Vue) |  |
| resizable | *boolean* |  |
| vue | *any* |  |
| menu | [Menu](menu#menu-1) |  |

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
* `slot`: [PanelSlot](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L3)
* `ref_panel`: [Panel](panel#panel-1) (Optional)
* `before`: *boolean* (Optional)

Returns: [Panel](panel#panel-1)

### update( [dragging] )
##### Arguments:
* `dragging`: *boolean* (Optional)

Returns: [Panel](panel#panel-1)

### dispatchEvent( event_name[, data] )
##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L52)
* `data`: *any* (Optional)


### on( event_name, callback )
Add an event listener

##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L52)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L80)


### once( event_name, callback )
Adds a single-use event listener

##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L52)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L84)


### removeListener( event_name, callback )
Removes an event listener

##### Arguments:
* `event_name`: [PanelEvent](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L52)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L88)


### delete()



## Panels
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/panel.d.ts#L92)


## updateInterfacePanels()
#### Global Function




## setActivePanel( panel_id )
#### Global Function

##### Arguments:
* `panel_id`: *string*


