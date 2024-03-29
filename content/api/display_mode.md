---
title: Display Mode
---

# Display Mode
## DisplayMode
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/display_mode.d.ts#L1)


## DisplaySlot
Display Slots hold the transform values for a specific item slot in the Minecraft Java Edition "Display Mode" feature

### new DisplaySlot( id, data )
Creates a new DisplaySlot

##### Arguments:
* `id`: *string*
* `data`: DisplaySlotOptions
	* `rotation`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `translation`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `scale`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `mirror`: Array (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| rotation | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| translation | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| scale | [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) |  |
| mirror | Array |  |

### default()
Reset slot to default values


Returns: [DisplaySlot](display_mode#displayslot)

### extend( data )
##### Arguments:
* `data`: DisplaySlotOptions
	* `rotation`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `translation`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `scale`: [ArrayVector3](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L2) (Optional)
	* `mirror`: Array (Optional)

Returns: [DisplaySlot](display_mode#displayslot)

### copy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/display_mode.d.ts#L26)

### export()
Generate the values of the slot for export


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/display_mode.d.ts#L35)

### update()
Visually update the UI with the data from this slot if selected


Returns: [DisplaySlot](display_mode#displayslot)

