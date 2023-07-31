---
title: Painter
---

# Painter
## Painter
#### Namespace

A global namespace containing various functionality for Blockbench's 2D and 3D paint tools and texture editor

| Property | Type | Description |
| -------- | ---- | ----------- |
| currentPixel | [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/outliner.d.ts#L3) |  |
| brushChanges | *boolean* |  |
| current | *object* |  |
| selection | *object* |  |
| mirror_painting | *boolean* |  |
| lock_alpha | *boolean* |  |
| erase_mode | *boolean* |  |
| default_brush_presets | Array of *object* |  |

### edit( texture, callback, options )
##### Arguments:
* `texture`: [Texture](textures#texture)
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/painter.d.ts#L14)
* `options`: TextureEditOptions
	* `method`: `"canvas"` or `"jimp"` (Optional) - Edit method. 'canvas' is default
	* `edit_name`: *string* (Optional) - Name of the undo entry that is created
	* `use_cache`: *boolean* (Optional) - Whether to use the cached canvas/jimp instance
	* `no_undo`: *boolean* (Optional) - If true, no undo point is created. Default is false
	* `no_update`: *boolean* (Optional) - If true, the texture is not updated visually
	* `no_undo_init`: *boolean* (Optional)
	* `no_undo_finish`: *boolean* (Optional)


### setAlphaMatrix( texture, x, y, val )
##### Arguments:
* `texture`: [Texture](textures#texture)
* `x`: *number*
* `y`: *number*
* `val`: *number*


### getAlphaMatrix( texture, x, y )
##### Arguments:
* `texture`: [Texture](textures#texture)
* `x`: *number*
* `y`: *number*

Returns: *number*

### combineColors( base, added, opacity )
##### Arguments:
* `base`: [RGBAColor](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/action.d.ts#L145)
* `added`: [RGBAColor](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/action.d.ts#L145)
* `opacity`: *number*

Returns: [RGBAColor](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/action.d.ts#L145)

### blendColors( base, added, opacity, blend_mode )
##### Arguments:
* `base`: [RGBAColor](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/action.d.ts#L145)
* `added`: [RGBAColor](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/action.d.ts#L145)
* `opacity`: *number*
* `blend_mode`: *string*

Returns: [RGBAColor](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/action.d.ts#L145)

### getMirrorElement( element, symmetry_axes )
##### Arguments:
* `element`: [OutlinerElement](outliner#outlinerelement)
* `symmetry_axes`: Array of *number*


### updateNslideValues()


### getBlendModeCompositeOperation()

Returns: *string*

### getCanvas( texture )
##### Arguments:
* `texture`: [Texture](textures#texture)

Returns: [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)

### scanCanvas( ctx, x, y, w, h, cb )
##### Arguments:
* `ctx`: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* `x`: *number*
* `y`: *number*
* `w`: *number*
* `h`: *number*
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/painter.d.ts#L24)


### getPixelColor( ctx, x, y )
##### Arguments:
* `ctx`: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* `x`: *number*
* `y`: *number*


### modifyCanvasSection( ctx, x, y, w, h, cb )
##### Arguments:
* `ctx`: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* `x`: *number*
* `y`: *number*
* `w`: *number*
* `h`: *number*
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/painter.d.ts#L26)


### editCircle( ctx, x, y, r, softness, editPx )
##### Arguments:
* `ctx`: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* `x`: *number*
* `y`: *number*
* `r`: *number*
* `softness`: *number*
* `editPx`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/painter.d.ts#L27)


### editSquare( ctx, x, y, r, softness, editPx )
##### Arguments:
* `ctx`: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* `x`: *number*
* `y`: *number*
* `r`: *number*
* `softness`: *number*
* `editPx`: [See types](https://github.com/JannisX11/blockbench-types/blob/639b9fd/types/painter.d.ts#L28)


### openBrushOptions()


### loadBrushPreset( preset )
##### Arguments:
* `preset`: *object*


