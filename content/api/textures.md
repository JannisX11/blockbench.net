---
title: Textures
---

# Textures
## Texture
A texture combines the functionality of material, texture, and image, in one. Textures can be linked to files on the local hard drive, or hold the information in RAM.

### new Texture( [data, uuid] )
Creates a new Texture

##### Arguments:
* `data`: TextureData (Optional)
	* `path`: *string* (Optional)
	* `uuid`: *string* (Optional)
	* `name`: *string* (Optional)
	* `folder`: *string* (Optional) - Relative path to the file's directory, used by some formats such as Java Block/Item
	* `namespace`: *string* (Optional)
	* `id`: *string* (Optional) - Texture ID or key, used by some formats. By default this is a number that increases with every texture that is added
	* `particle`: *boolean* (Optional) - Whether the texture is used for the models particle system. Used by some formats such as Java Block/Item
	* `visible`: *boolean* (Optional)
	* `render_mode`: *string* (Optional)
	* `render_sides`: *string* (Optional)
	* `pbr_channel`: `"color"` or `"normal"` or `"height"` or `"mer"` (Optional)
	* `frame_time`: *number* (Optional) - Texture animation frame time
	* `frame_order_type`: `"custom"` or `"loop"` or `"backwards"` or `"back_and_forth"` (Optional)
	* `frame_order`: *string* (Optional) - Custom frame order
	* `frame_interpolate`: *boolean* (Optional) - Interpolate between frames
	* `saved`: *boolean* (Optional) - Whether the texture is saved
	* `keep_size`: *boolean* (Optional) - Flag to indicate that the texture was manually resized, and on load it should not try to automatically adjust UV size
	* `source`: *string* (Optional)
	* `width`: *number* (Optional)
	* `height`: *number* (Optional)
	* `standalone`: *boolean* (Optional)
	* `relative_path`: *string* (Optional)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| frameCount | *undefined* or *number* |  |
| display_height | *number* |  |
| ratio | *number* |  |
| path | *string* |  |
| name | *string* |  |
| folder | *string* | Relative path to the file's directory, used by some formats such as Java Block/Item |
| namespace | *string* |  |
| id | *string* | Texture ID or key, used by some formats. By default this is a number that increases with every texture that is added |
| particle | *boolean* | Whether the texture is used for the models particle system. Used by some formats such as Java Block/Item |
| render_mode | *string* |  |
| render_sides | *string* |  |
| pbr_channel | `"color"` or `"normal"` or `"height"` or `"mer"` |  |
| frame_time | *number* | Texture animation frame time |
| frame_order_type | `"custom"` or `"loop"` or `"backwards"` or `"back_and_forth"` |  |
| frame_order | *string* | Custom frame order |
| frame_interpolate | *boolean* | Interpolate between frames |
| source | *string* | HTML-style source of the texture's displayed data. Can be a path (desktop app only), or a base64 data URL |
| selected | *boolean* |  |
| show_icon | *boolean* |  |
| error | *number* |  |
| visible | *boolean* | Whether the texture is visible. Used for layered textures mode |
| width | *number* |  |
| height | *number* |  |
| uv_width | *number* |  |
| uv_height | *number* |  |
| currentFrame | *number* |  |
| saved | *boolean* |  |
| mode | *never* | Whether the latest version of the texture is currently loaded from and linked to a file on disk, or held in memory as bitmap data |
| internal | *boolean* | If true, the texture is loaded internally. If false, the texture is loaded directly from a file |
| uuid | *string* |  |
| selection | [IntMatrix](textures#intmatrix) | Texture selection in paint mode |
| layers | Array of [TextureLayer](texture_layers#texturelayer) |  |
| layers_enabled | *boolean* |  |
| sync_to_project | *string* | The UUID of the project to sync the texture to |
| canvas | [HTMLCanvasElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement) | The texture's associated canvas. Since 4.9, this is the main source of truth for textures in internal mode. |
| ctx | [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) | The 2D context of the texture's associated canvas. |
| img | [HTMLImageElement](https://github.com/JannisX11/blockbench-types/blob/8049169/types/global.d.ts#L25) | Texture image element |
| relative_path | *string* |  |
| menu | [Menu](menu#menu-1) |  |

### getErrorMessage()

Returns: *string*

### extend( data )
##### Arguments:
* `data`: TextureData
	* `path`: *string* (Optional)
	* `uuid`: *string* (Optional)
	* `name`: *string* (Optional)
	* `folder`: *string* (Optional) - Relative path to the file's directory, used by some formats such as Java Block/Item
	* `namespace`: *string* (Optional)
	* `id`: *string* (Optional) - Texture ID or key, used by some formats. By default this is a number that increases with every texture that is added
	* `particle`: *boolean* (Optional) - Whether the texture is used for the models particle system. Used by some formats such as Java Block/Item
	* `visible`: *boolean* (Optional)
	* `render_mode`: *string* (Optional)
	* `render_sides`: *string* (Optional)
	* `pbr_channel`: `"color"` or `"normal"` or `"height"` or `"mer"` (Optional)
	* `frame_time`: *number* (Optional) - Texture animation frame time
	* `frame_order_type`: `"custom"` or `"loop"` or `"backwards"` or `"back_and_forth"` (Optional)
	* `frame_order`: *string* (Optional) - Custom frame order
	* `frame_interpolate`: *boolean* (Optional) - Interpolate between frames
	* `saved`: *boolean* (Optional) - Whether the texture is saved
	* `keep_size`: *boolean* (Optional) - Flag to indicate that the texture was manually resized, and on load it should not try to automatically adjust UV size
	* `source`: *string* (Optional)
	* `width`: *number* (Optional)
	* `height`: *number* (Optional)
	* `standalone`: *boolean* (Optional)
	* `relative_path`: *string* (Optional)

Returns: [Texture](textures#texture)

### getUVWidth()
Get the UV width of the texture if the format uses per texture UV size, otherwise get the project texture width


Returns: *number*

### getUVHeight()
Get the UV height of the texture if the format uses per texture UV size, otherwise get the project texture height


Returns: *number*

### getUndoCopy( [bitmap] )
##### Arguments:
* `bitmap`: *boolean* (Optional)

Returns: *any*
### getUndoCopy()

Returns: [Texture](textures#texture)

### getSaveCopy( [bitmap] )
##### Arguments:
* `bitmap`: *boolean* (Optional)

Returns: *any*

### startWatcher()
Start listening for changes to the linked file. Desktop only



### stopWatcher()
Stop listening for changes to the linked file. Desktop only



### generateFolder()
Generate the Java Block/Item folder property from the file path



### load( [cb] )
Loads the texture from it's current source

##### Arguments:
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/textures.d.ts#L194) (Optional) - Callback function

Returns: [Texture](textures#texture)

### fromJavaLink( link, path_array )
##### Arguments:
* `link`: *string*
* `path_array`: Array of *string*

Returns: [Texture](textures#texture)

### fromFile( file )
##### Arguments:
* `file`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/textures.d.ts#L196)

Returns: [Texture](textures#texture)

### fromPath( path )
##### Arguments:
* `path`: *string*

Returns: [Texture](textures#texture)

### loadContentFromPath( path )
Loads file content **only**.

Does not read 

`png.mcmeta`

, or attempt to overwrite an existing texture in the project with the same name.

Used internally when loading 

`.bbmodel`

 files

##### Arguments:
* `path`: *string* -

Returns: [Texture](textures#texture)

### fromDataURL( data_url )
##### Arguments:
* `data_url`: *string*

Returns: [Texture](textures#texture)

### fromDefaultPack()

Returns: *undefined* or `true`

### loadEmpty( [error_id] )
Loads the default white error texture

##### Arguments:
* `error_id`: *number* (Optional) - Sets the error ID of the texture

Returns: [Texture](textures#texture)

### updateSource( dataUrl )
##### Arguments:
* `dataUrl`: *string*

Returns: [Texture](textures#texture)

### updateMaterial()

Returns: [Texture](textures#texture)

### reopen( force )
Opens a dialog to replace the texture with another file

##### Arguments:
* `force`: *boolean* - If true, no warning appears of the texture has unsaved changes


### reloadTexture()
Reloads the texture. Only works in the desktop app



### getMaterial()
Get the material that the texture displays. When previewing PBR, this will return the shared PBR material


Returns: [THREE.ShaderMaterial](https://threejs.org/docs/index.html?q=ShaderMaterial#api/en/materials/ShaderMaterial) or [THREE.MeshStandardMaterial](https://threejs.org/docs/index.html?q=MeshStandardMaterial#api/en/materials/MeshStandardMaterial)

### getOwnMaterial()
Get the texture's own material


Returns: [THREE.ShaderMaterial](https://threejs.org/docs/index.html?q=ShaderMaterial#api/en/materials/ShaderMaterial)

### select( [event] )
Selects the texture

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional) - Click event during selection

Returns: [Texture](textures#texture)

### add( [undo] )
Adds texture to the textures list and initializes it

##### Arguments:
* `undo`: *boolean* (Optional) - If true, an undo point is created

Returns: [Texture](textures#texture)

### remove( [no_update] )
Removes the texture

##### Arguments:
* `no_update`: *boolean* (Optional) - If true, the texture is silently removed. The interface is not updated, no undo point is created


### toggleVisibility()

Returns: [Texture](textures#texture)

### enableParticle()

Returns: [Texture](textures#texture)

### fillParticle()
Enables 'particle' on this texture if it is not enabled on any other texture


Returns: [Texture](textures#texture)

### apply( [all] )
Applies the texture to the selected elements

##### Arguments:
* `all`: *boolean* or `"blank"` (Optional) - If true, the texture is applied to all faces of the elements. If 'blank', the texture is only applied to blank faces

Returns: [Texture](textures#texture)

### openFolder()
Shows the texture file in the file explorer


Returns: [Texture](textures#texture)

### openEditor()
Opens the texture in the configured image editor


Returns: [Texture](textures#texture)

### showContextMenu( event )
##### Arguments:
* `event`: [MouseEvent](#MouseEvent)


### openMenu()


### resizeDialog()

Returns: [Texture](textures#texture)

### scrollTo()
Scroll the texture list to this texture



### save( [as] )
##### Arguments:
* `as`: *any* (Optional)

Returns: [Texture](textures#texture)

### getBase64()
Returns the content of the texture as PNG as a base64 encoded string


Returns: *string*

### getDataURL()
Returns the content of the texture as PNG as a base64 encoded data URL


Returns: *string*

### edit( [callback, options] )
Wrapper to do edits to the texture.

##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/textures.d.ts#L291) (Optional) -
* `options`: TextureEditOptions (Optional) - Editing options
	* `method`: `"canvas"` or `"jimp"` (Optional) - Edit method. 'canvas' is default
	* `edit_name`: *string* (Optional) - Name of the undo entry that is created
	* `use_cache`: *boolean* (Optional) - Whether to use the cached canvas/jimp instance
	* `no_undo`: *boolean* (Optional) - If true, no undo point is created. Default is false
	* `no_update`: *boolean* (Optional) - If true, the texture is not updated visually
	* `no_undo_init`: *boolean* (Optional)
	* `no_undo_finish`: *boolean* (Optional)


### getActiveLayer()
Get the selected layer. If no layer is selected, returns the bottom layer


Returns: [TextureLayer](texture_layers#texturelayer)

### activateLayers( [undo] )
##### Arguments:
* `undo`: *boolean* (Optional)


### selectionToLayer( [undo, clone] )
Turns the texture selection into a layer

##### Arguments:
* `undo`: *boolean* (Optional) - Whether to create an undo entry
* `clone`: *boolean* (Optional) - When true, the selection is copied into the new layer and also left on the original layer


### javaTextureLink()

Returns: *string*

### getMCMetaContent()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/textures.d.ts#L308)

### getAnimationFrameIndices()

Returns: Array of *number*

### exportEmissionMap()


### convertToInternal( [data_url] )
##### Arguments:
* `data_url`: *string* (Optional)

Returns: [Texture](textures#texture)

### updateLayerChanges( [update_data_url] )
Redraws the texture content from the layers

##### Arguments:
* `update_data_url`: *boolean* (Optional) - If true, the texture source gets updated as well. This is slower, but is necessary at the end of an edit. During an edit, to preview changes, this can be false


### updateChangesAfterEdit()
Update everything after a content edit to the texture or one of the layers. Updates the material, the layers, marks the texture as unsaved, syncs changes to other projects



### updateImageFromCanvas()
Update the attached img element with the content from the texture's canvas



### getActiveCanvas()
If layers are enabled, returns the active layer, otherwise returns the texture. Either way, the 'canvas', 'ctx', and 'offset' properties can be used from the returned object


Returns: [Texture](textures#texture) or [TextureLayer](texture_layers#texturelayer)

### syncToOtherProject()
When editing the same texture in different tabs (via Edit In Blockbench option), sync changes that were made to the texture to other projects


Returns: [Texture](textures#texture)

### Texture.getDefault()

Returns: [Texture](textures#texture)

### selected
Static Property

Type: [Texture](textures#texture)


### material
Accessor


### all
Static Property

Type: Array of [Texture](textures#texture)



## saveTextures( [lazy] )
#### Global Function

Saves all textures

##### Arguments:
* `lazy`: *boolean* (Optional) - If true, the texture isn't saved if it doesn't have a local file to save to



## loadTextureDraggable()
#### Global Function

Update the draggable/sortable functionality of the texture list




## unselectTextures()
#### Global Function

Unselect all textures




## IntMatrix
An Int Matrix holds an int (unsigned 8 bit) for each pixel in a matrix, via array. The override property can be used to set an override value for the entire area. This is used for texture selections.

### new IntMatrix( width, height )
Creates a new IntMatrix

##### Arguments:
* `width`: *number*
* `height`: *number*


| Property | Type | Description |
| -------- | ---- | ----------- |
| width | *number* |  |
| height | *number* |  |
| array | `null` or [Int8Array](#Int8Array) |  |
| override | `null` or *boolean* | The override can be set to true to indicate that the whole texture is selected, or false, which indicates that nothing is selected. Null indicates a custom selection |
| is_custom | *boolean* | True if there is a custom selection |

### activate()
The array does not exist by default to save memory, this activates it.



### get( x, y )
Get the value at the specified pixel

##### Arguments:
* `x`: *number* - X coordinate
* `y`: *number* - Y coordinate

Returns: *number* or *boolean*

### allow( x, y )
Test whether painting is allowed at a specific pixel

##### Arguments:
* `x`: *number* - X coordinate
* `y`: *number* - Y coordinate

Returns: *number* or *boolean*

### getDirect( x, y )
Get the value at the specified pixel directly without override and bounds check

##### Arguments:
* `x`: *number* - X coordinate
* `y`: *number* - Y coordinate

Returns: *number*

### getBoundingRect( respect_empty )
Return the smallest possible rectangle that contains all of the selection

##### Arguments:
* `respect_empty`: *boolean* - If true, if there is no selection, the bounding box will still cover the entire area

Returns: [Rectangle](util#rectangle)

### hasSelection()
Checks whether a selection is present and contains selected pixels


Returns: *boolean*

### set( x, y, value )
Set the value at a specified pixel

##### Arguments:
* `x`: *number* - X coordinate
* `y`: *number* - Y coordinate
* `value`: *number* -


### clear()
If there was a selection, whether override or not, clear it



### setOverride( value )
Change override mode

##### Arguments:
* `value`: `null` or *boolean* -


### changeSize( width, height )
Change the size of the matrix. Unless using overrides, the selection gets lost.

##### Arguments:
* `width`: *number* -
* `height`: *number* -


### forEachPixel( callback )
Run a method on each pixel, whether selected or not

##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/textures.d.ts#L441) - Function to run per pixel


### translate( offset_x, offset_y )
Shift custom selections by a specified offset

##### Arguments:
* `offset_x`: *number* -
* `offset_y`: *number* -


### toBoxes()
Return the selection simplified into non-overlapping boxes. Boxes are [x, y, width, height].


Returns: Array of Array

### maskCanvas( ctx, offset )
Mask the provided canvas using the selection

##### Arguments:
* `ctx`: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) - Canvas 2D context
* `offset`: [ArrayVector2](https://github.com/JannisX11/blockbench-types/blob/8049169/types/outliner.d.ts#L4) - Position offset of the canvas, e. g. when using a layer



## TextureAnimator
#### Namespace

Handles playback of animated textures

| Property | Type | Description |
| -------- | ---- | ----------- |
| isPlaying | *boolean* |  |
| interval | *any* |  |

### start()


### stop()


### toggle()


### updateSpeed()


### nextFrame()


### reset()


### updateButton()


