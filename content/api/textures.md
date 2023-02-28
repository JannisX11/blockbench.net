---
title: Textures
---

# Textures
## Texture
A texture combines the functionality of material, texture, and image, in one. Textures can be linked to files on the local hard drive, or hold the information in RAM.

### new Texture( data[, uuid] )
Creates a new Texture

##### Arguments:
* `data`: TextureData
	* `path`: *string* (Optional)
	* `name`: *string* (Optional)
	* `folder`: *string* (Optional)
	* `namespace`: *string* (Optional)
	* `id`: *string* (Optional)
	* `particle`: *boolean* (Optional)
	* `visible`: *boolean* (Optional)
	* `mode`: *string* (Optional)
	* `saved`: *boolean* (Optional)
	* `keep_size`: *boolean* (Optional)
	* `source`: *string* (Optional)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| frameCount | *number* |  |
| display_height | *number* |  |
| ratio | *number* |  |
| menu | [Menu](menu#menu-1) |  |

### getErrorMessage()

Returns: *string*

### extend( data )
##### Arguments:
* `data`: TextureData
	* `path`: *string* (Optional)
	* `name`: *string* (Optional)
	* `folder`: *string* (Optional)
	* `namespace`: *string* (Optional)
	* `id`: *string* (Optional)
	* `particle`: *boolean* (Optional)
	* `visible`: *boolean* (Optional)
	* `mode`: *string* (Optional)
	* `saved`: *boolean* (Optional)
	* `keep_size`: *boolean* (Optional)
	* `source`: *string* (Optional)

Returns: [Texture](textures#texture)

### load( [cb] )
Loads the texture from it's current source

##### Arguments:
* `cb`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/textures.d.ts#L56) (Optional) - Callback function

Returns: [Texture](textures#texture)

### fromJavaLink( link, path_array )
##### Arguments:
* `link`: *string*
* `path_array`: Array of *string*

Returns: [Texture](textures#texture)

### fromFile( file )
##### Arguments:
* `file`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/textures.d.ts#L58)

Returns: [Texture](textures#texture)

### fromPath( path )
##### Arguments:
* `path`: *string*

Returns: [Texture](textures#texture)

### fromDataURL( data_url )
##### Arguments:
* `data_url`: *string*

Returns: [Texture](textures#texture)

### fromDefaultPack()

Returns: `true`

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

Returns: [MeshLambertMaterial](#MeshLambertMaterial)

### select( [event] )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)

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

### apply( all )
Applies the texture to the selected elements

##### Arguments:
* `all`: *boolean* or `"blank"` - If true, the texture is applied to all faces of the elements. If 'blank', the texture is only applied to blank faces

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



### save( as )
##### Arguments:
* `as`: *any*

Returns: [Texture](textures#texture)

### getBase64()
Returns the content of the texture as a base64 encoded string


Returns: *string*

### edit( callback, options )
Wrapper to do edits to the texture.

##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/textures.d.ts#L128) -
* `options`: TextureEditOptions - Editing options
	* `method`: `"canvas"` or `"jimp"` (Optional) - Edit method. 'canvas' is default
	* `edit_name`: *string* (Optional) - Name of the undo entry that is created
	* `use_cache`: *boolean* (Optional) - Whether to use the cached canvas/jimp instance
	* `no_undo`: *boolean* (Optional) - If true, no undo point is created. Default is false
	* `no_update`: *boolean* (Optional) - If true, the texture is not updated visually
	* `no_undo_init`: *boolean* (Optional)
	* `no_undo_finish`: *boolean* (Optional)


### Texture.getDefault()

Returns: [Texture](textures#texture)

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


