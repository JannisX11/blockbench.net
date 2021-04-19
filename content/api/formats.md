# Formats

## ModelFormat

A model format can describe how a specific type of model can be made: Which features are available, which modes can be accessed and to which file formats can the model be exported.

### new ModelFormat( data )

* `data` Object
	* `id` Format ID
	* `name` Format name
	* `description` Format description
	* `show_on_start_screen` Whether to list the format as an option on the start screen
	* `box_uv` Whether to enable box UV in the format
	* `optional_box_uv` Allows the user to enable or disable box UV within the format
	* `single_texture` Only allow one single texture at a time
	* `bone_rig` Whether to use groups as a bone rig
	* `rotate_cubes` Allow the user to rotate cubes
	* `integer_size` Limit cube sizes to full integers
	* `locators` Enable Locators
	* `canvas_limit` Enable the 3x3x3 model size limmit
	* `rotation_limit` Enable the rotation limit to 22.5 degrees and one axis
	* `display_mode` Enable the display mode
	* `animation_mode` Enable animations
	* `codec` Which [Codec](#codec) to use as the default codec for the format
	* `onActivation` Function to run on activation of the format
	* `onDeactivation` Function to run on deactivation of the format

### Format#select()

Selects the format

### Format#new()

Creates a new project using this format.

### Format#convertTo()

Convert the model to this format

## Codec

Codecs are used to define specific file formats. Codecs can have an importer and an exporter as well as a few other functions that can be overwritten to achieve custom import and export behavior.

### new Codec(id, data)

* `id` ID of the Codec
* `data` Object
	* `name` Name of the Codec
	* `extension` Default extension for the codec
	* `remember` Boolean. Whether to remember the model in the recent files list and as the opened model file.
	* `export_action` Default action used to export for this format.
	* `compile()` Should return the compiled model
	* `parse( model, path )` Parse and add the provided model to Blockbench
	* `export()` Overwrite the default export function
	* `load( model, file, add )` Overwrite the default load function
	* `fileName()` Returns the suggested file name for exported files
	* `filePath` Returns the suggested start path for the export dialog
	* `afterDownload` Called after a model has successfully been downloaded. Displays the success message
	* `afterSave(path)` Overwrite the default afterSave function

#### Codec#load( model, file )

Loads a model with using the codec

* `model: Object/String` Input model. If JSON, this is a parsed object, otherwise this is a string
