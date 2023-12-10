---
title: Texture Layers
---

# Texture Layers
## TextureLayer
Texture layers always belong to a texture and represent the layers of the texture. Each layer has its own HTML canvas and canvas context

### new TextureLayer( data, texture[, uuid] )
Creates a new TextureLayer

##### Arguments:
* `data`: TextureLayerData
	* `name`: *string* (Optional)
	* `in_limbo`: *boolean* (Optional)
	* `offset`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) (Optional)
	* `scale`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) (Optional)
	* `opacity`: *number* (Optional)
	* `visible`: *boolean* (Optional)
	* `blend_mode`: `"add"` or `"default"` or `"color"` or `"difference"` or `"multiply"` or `"screen"` or `"set_opacity"` (Optional)
	* `image_data`: [ImageData](#ImageData) (Optional)
	* `data_url`: *string* (Optional)
* `texture`: [Texture](textures#texture)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* |  |
| uuid | *string* |  |
| texture | [Texture](textures#texture) |  |
| canvas | [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) |  |
| ctx | [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) |  |
| in_limbo | *boolean* |  |
| img | [HTMLImageElement](#HTMLImageElement) |  |
| offset | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) | Layer offset from the top left corner of the texture to the top left corner of the layer |
| scale | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) | Layer scale. This is only used by the layer transform tool and should be applied and reset to 1x1 before doing further changes |
| opacity | *number* |  |
| visible | *boolean* |  |
| blend_mode | `"add"` or `"default"` or `"color"` or `"difference"` or `"multiply"` or `"screen"` or `"set_opacity"` |  |

### extend( data )
##### Arguments:
* `data`: TextureLayerData
	* `name`: *string* (Optional)
	* `in_limbo`: *boolean* (Optional)
	* `offset`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) (Optional)
	* `scale`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) (Optional)
	* `opacity`: *number* (Optional)
	* `visible`: *boolean* (Optional)
	* `blend_mode`: `"add"` or `"default"` or `"color"` or `"difference"` or `"multiply"` or `"screen"` or `"set_opacity"` (Optional)
	* `image_data`: [ImageData](#ImageData) (Optional)
	* `data_url`: *string* (Optional)


### select()
Selects the layer



### showContextMenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### remove( undo )
Remove the layer

##### Arguments:
* `undo`: *boolean* - Create an undo point and update the texture


### getUndoCopy( image_data )
##### Arguments:
* `image_data`: *boolean*

Returns: *object*

### getSaveCopy()

Returns: *object*

### setLimbo()
Set the layer into a limbo state, where clicking Place or clicking next to the layer will place it on the layer below



### resolveLimbo( keep_separate )
Resolves the limbo state by turning the limbo layer into a full layer, or merging it into the layer below

##### Arguments:
* `keep_separate`: *any* - If true, the layer is kept as a separate layer


### setSize( width, height )
Set the layer size. This resizes the canvas, which discards the layer content

##### Arguments:
* `width`: *number*
* `height`: *number*


### toggleVisibility()
Toggle layer visibility. This creates an undo point



### scrollTo()
Scroll the layer panel list to



### addForEditing()
Add the layer to the associated texture above the previously selected layer, select this layer, and scroll the layer panel list to it



### mergeDown( undo )
Merge this texture onto the texture below

##### Arguments:
* `undo`: *boolean* - Create an undo entry


### expandTo( points )
Expand the layer to include the listed pixels

##### Arguments:
* `points`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/outliner.d.ts#L3) -


### flip( axis, undo )
Flip the texture along an axis

##### Arguments:
* `axis`: *number* - Flip axis, where 0 is X and 1 is Y
* `undo`: *any* - Create an undo entry


### rotate( angle, undo )
Rotate the layer around itself in 90 degree steps

##### Arguments:
* `angle`: *number* - Angle in degrees
* `undo`: *boolean* - Create an undo entry


### center()
Centers the layer on the texture



### propertiesDialog()
Open the properties dialog



### all
Static Property

Type: Array of [TextureLayer](texture_layers#texturelayer)

Get all layers of the active texture


### selected
Static Property

Type: [TextureLayer](texture_layers#texturelayer)

Get the selected layer


