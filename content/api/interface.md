---
title: Interface
---

# Interface
## ResizeLine
### new ResizeLine( id, options )
Creates a new ResizeLine

##### Arguments:
* `id`: *string*
* `options`: ResizeLineOptions
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `horizontal`: *boolean* (Optional)
	* `position`: Function
	* `get`: Function
	* `set`: Function


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| horizontal | *boolean* |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| width | *number* |  |
| node | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |

### get()


### set()


### update()


### setPosition( data )
##### Arguments:
* `data`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/interface.d.ts#L19)



## Interface
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| data | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/interface.d.ts#L25) |  |
| left_bar_width | *number* |  |
| right_bar_width | *number* |  |
| top_panel_height | *number* |  |
| bottom_panel_height | *number* |  |
| Resizers | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/interface.d.ts#L42) |  |
| status_bar | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/interface.d.ts#L51) |  |
| text_edit_menu | [Menu](menu#menu-1) |  |
| center_screen | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| page_wrapper | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| preview | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| work_screen | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| right_bar | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |
| left_bar | [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) |  |

### createElement( type[, attributes, content] )
##### Arguments:
* `type`: 
* `attributes`: [See types]() (Optional)
* `content`: *string* or [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or Array of [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) (Optional)

Returns: [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### getTopPanel()

Returns: [Panel](panel#panel-1)

### getBottomPanel()

Returns: [Panel](panel#panel-1)

### getLeftPanels()

Returns: Array of [Panel](panel#panel-1)

### getRightPanels()

Returns: Array of [Panel](panel#panel-1)

### Panels( key )
##### Arguments:
* `key`: *string*

Returns: [Panel](panel#panel-1)

### toggleSidebar( side, status )
##### Arguments:
* `side`: *any*
* `status`: *any*


### addSuggestedModifierKey( key, text )
##### Arguments:
* `key`: `"shift"` or `"ctrl"` or `"alt"`
* `text`: *string*


### removeSuggestedModifierKey( key, text )
##### Arguments:
* `key`: `"shift"` or `"ctrl"` or `"alt"`
* `text`: *string*


### CustomElements
Namespace


