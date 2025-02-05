---
title: Collection
---

# Collection
## Collection
Collections are "selection presets" for a set of groups and elements in your project, independent from outliner hierarchy

### new Collection( [data, uuid] )
Creates a new Collection

##### Arguments:
* `data`: CollectionOptions (Optional)
	* `children`: Array of *string* (Optional)
	* `name`: *string* (Optional)
	* `export_codec`: *string* (Optional)
	* `export_path`: *string* (Optional)
	* `visibility`: *boolean* (Optional)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| selected | *boolean* |  |
| children | Array of *string* | List of direct children, referenced by UUIDs |
| name | *string* |  |
| export_codec | *string* |  |
| export_path | *string* |  |
| visibility | *boolean* |  |

### extend( data )
##### Arguments:
* `data`: CollectionOptions
	* `children`: Array of *string* (Optional)
	* `name`: *string* (Optional)
	* `export_codec`: *string* (Optional)
	* `export_path`: *string* (Optional)
	* `visibility`: *boolean* (Optional)

Returns: [Collection](collection#collection-1)

### select( [event] )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)

Returns: [Collection](collection#collection-1)

### clickSelect( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### getChildren()
Get all direct children


Returns: Array of [OutlinerNode](outliner#outlinernode)

### add()

Returns: [Collection](collection#collection-1)

### addSelection()
Adds the current outliner selection to this collection


Returns: [Collection](collection#collection-1)

### getVisibility()
Returns the visibility of the first contained node that supports visibility. Otherwise returns true.


Returns: *boolean*

### getAllChildren()
Get all children, including indirect ones


Returns: Array of *any*

### toggleVisibility( event )
Toggle visibility of everything in the collection

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) - If the alt key is pressed, the result is inverted and the visibility of everything but the collection will be toggled


### showContextMenu( event )
Opens the context menu

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

Returns: [Collection](collection#collection-1)

### getUndoCopy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/collection.d.ts#L54)

### getSaveCopy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/collection.d.ts#L59)

### propertiesDialog()
Opens the properties dialog



### Collection.selected()
Get selected collections


Returns: Array of [Collection](collection#collection-1)

### all
Static Property

Type: Array of [Collection](collection#collection-1)

Get all collections


