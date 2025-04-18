---
title: Codec
---

# Codec
## Codec
Extends: [Deletable](misc#deletable)

A codec represents a specific file format that can be imported into and exported from Blockbench. The codec handles the compilation and parsing, as well as the loading and exporting logic

### new Codec( id, options )
Creates a new codec

##### Arguments:
* `id`: *string* - Codec ID
* `options`: CodecOptions - Codec options
	* `name`: *string*
	* `load`: Function (Optional)
	* `compile`: Function (Optional)
	* `parse`: Function (Optional)
	* `export`: Function (Optional)
	* `fileName`: Function (Optional)
	* `startPath`: Function (Optional)
	* `write`: Function (Optional)
	* `overwrite`: Function (Optional)
	* `afterDownload`: Function (Optional)
	* `afterSave`: Function (Optional)
	* `exportCollection`: Function (Optional)
	* `writeCollection`: Function (Optional)
	* `dispatchEvent`: Function (Optional)
	* `extension`: *string*
	* `remember`: *boolean* - Whether to remember the models exported using this codec
	* `load_filter`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L27) (Optional)
	* `export_options`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L35) (Optional) - List of export option inputs, based on the Dialog form API
	* `export_action`: [Action](action#action-1) (Optional) - Default action that is used to export to the codec


| Property | Type | Description |
| -------- | ---- | ----------- |
| name | *string* | The display name of the codec |
| extension | *string* | The default file extension that the codec uses |
| remember | *boolean* | Whether to remember files that use this codec in the recent models list |
| export_action | [Action](action#action-1) | If available, the action that is used to export files using this codec |
| export_options | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L146) | List of export option inputs |
| format | [ModelFormat](format#modelformat) |  |

### load( model, file[, add] )
Load a file into the program

##### Arguments:
* `model`: *any* -
* `file`: *any* -
* `add`: *boolean* (Optional) -


### compile( [options] )
Compiles the file content

##### Arguments:
* `options`: *any* (Optional) -

Returns: *any*

### parse( data, path[, add] )
Takes the content of a file, and loads the model into the current Blockbench project

##### Arguments:
* `data`: *any* - File content
* `path`: *string* - File path
* `add`: *boolean* (Optional)


### export()
Opens the file browser to export a file of this type



### fileName()
Generate a file name to suggest when exporting


Returns: *string*

### startPath()
Generates the suggested file path. This is the path that the explorer opens in when exporting this type


Returns: *string*

### write( content, path )
Write the content of this file to the selected location. The default method can be overwritten to achieve custom behavior

##### Arguments:
* `content`: *any* - File content, as generated by compile()
* `path`: *string* - The file export path


### overwrite( content, path, callback )
##### Arguments:
* `content`: *any*
* `path`: *string*
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L91)


### afterDownload( path )
##### Arguments:
* `path`: *string*


### afterSave( path )
##### Arguments:
* `path`: *string*


### exportCollection( collection )
##### Arguments:
* `collection`: [Collection](collection#collection-1)


### writeCollection( collection )
##### Arguments:
* `collection`: [Collection](collection#collection-1)


### getExportOptions()
Return the stored export option values of the current project


Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L100)

### promptExportOptions()
Prompt the user to enter their preferred export settings into the dialog


Returns: [Promise](#Promise)

### on( event_name, callback )
Adds an event listener to the codec

##### Arguments:
* `event_name`: *string* - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L111) -


### once( event_name, callback )
Adds a single-use event listener to the codec

##### Arguments:
* `event_name`: *string* - The event type to listen for
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L117) -


### removeListener( event_name, callback )
Removes an event listener from the codec

##### Arguments:
* `event_name`: *string* -
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L123) -


### dispatchEvent( event_name, data )
##### Arguments:
* `event_name`: *string*
* `data`: *any*


### Codec.getAllExtensions()
Get a list of all possible extensions of all codecs


Returns: Array of *string*

### delete()



## Codecs
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/codec.d.ts#L158)

