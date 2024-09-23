---
title: Format
---

# Format
## ModelFormat
Extends: [Deletable](misc#deletable)

<reference path="./blockbench.d.ts"/>

### new ModelFormat( id, options )
Creates a new ModelFormat

##### Arguments:
* `id`: *string*
* `options`: FormatOptions
	* `id`: *string*
	* `icon`: *string*
	* `name`: *string* (Optional)
	* `description`: *string* (Optional)
	* `category`: *string* (Optional)
	* `target`: *string* or Array of *string* (Optional)
	* `confidential`: *boolean* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `show_on_start_screen`: *boolean* (Optional)
	* `format_page`: FormatPage (Optional)
		* `component`: *any* (Optional)
		* `content`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L6) (Optional)
		* `button_text`: *string* (Optional)
	* `onFormatPage`: Function (Optional)
	* `onStart`: Function (Optional)
	* `onSetup`: Function (Optional)
	* `convertTo`: Function (Optional)
	* `box_uv`: *boolean* (Optional)
	* `optional_box_uv`: *boolean* (Optional)
	* `single_texture`: *boolean* (Optional)
	* `single_texture_default`: *boolean* (Optional)
	* `per_group_texture`: *boolean* (Optional)
	* `per_texture_uv_size`: *boolean* (Optional)
	* `model_identifier`: *boolean* (Optional)
	* `legacy_editable_file_name`: *boolean* (Optional)
	* `parent_model_id`: *boolean* (Optional)
	* `vertex_color_ambient_occlusion`: *boolean* (Optional)
	* `animated_textures`: *boolean* (Optional)
	* `bone_rig`: *boolean* (Optional)
	* `centered_grid`: *boolean* (Optional)
	* `rotate_cubes`: *boolean* (Optional)
	* `stretch_cubes`: *boolean* (Optional)
	* `integer_size`: *boolean* (Optional)
	* `meshes`: *boolean* (Optional)
	* `texture_meshes`: *boolean* (Optional)
	* `locators`: *boolean* (Optional)
	* `rotation_limit`: *boolean* (Optional)
	* `rotation_snap`: *boolean* (Optional)
	* `uv_rotation`: *boolean* (Optional)
	* `java_face_properties`: *boolean* (Optional)
	* `select_texture_for_particles`: *boolean* (Optional)
	* `texture_mcmeta`: *boolean* (Optional)
	* `bone_binding_expression`: *boolean* (Optional)
	* `animation_files`: *boolean* (Optional)
	* `texture_folder`: *boolean* (Optional)
	* `image_editor`: *boolean* (Optional)
	* `edit_mode`: *boolean* (Optional)
	* `paint_mode`: *boolean* (Optional)
	* `display_mode`: *boolean* (Optional)
	* `animation_mode`: *boolean* (Optional)
	* `pose_mode`: *boolean* (Optional)
	* `animation_controllers`: *boolean* (Optional)
	* `box_uv_float_size`: *boolean*
	* `java_cube_shading_properties`: *boolean*
	* `cullfaces`: *boolean*
	* `render_sides`: `"double"` or `"front"` or `"back"` or [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L102) (Optional)
	* `cube_size_limiter`: CubeSizeLimiter (Optional)
		* `test`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L21)
		* `move`: Function
		* `clamp`: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L32)
		* `rotation_affected`: *boolean* (Optional) - Set to true to tell Blockbench to check and adjust the cube limit after rotating a cube
		* `coordinate_limits`: Array (Optional) - Optionally set the coordinate limits of cubes in local space
	* `codec`: [Codec](codec#codec-1) (Optional)
	* `onActivation`: Function (Optional)
	* `onDeactivation`: Function (Optional)

### new ModelFormat( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| icon | *string* |  |
| name | *string* |  |
| description | *string* |  |
| category | *string* |  |
| target | *string* or Array of *string* |  |
| confidential | *boolean* |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| show_on_start_screen | *boolean* |  |
| format_page | [FormatPage](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L3) |  |
| box_uv | *boolean* |  |
| optional_box_uv | *boolean* |  |
| single_texture | *boolean* |  |
| single_texture_default | *boolean* |  |
| per_group_texture | *boolean* |  |
| per_texture_uv_size | *boolean* |  |
| model_identifier | *boolean* |  |
| legacy_editable_file_name | *boolean* |  |
| parent_model_id | *boolean* |  |
| vertex_color_ambient_occlusion | *boolean* |  |
| animated_textures | *boolean* |  |
| bone_rig | *boolean* |  |
| centered_grid | *boolean* |  |
| rotate_cubes | *boolean* |  |
| stretch_cubes | *boolean* |  |
| integer_size | *boolean* |  |
| meshes | *boolean* |  |
| texture_meshes | *boolean* |  |
| locators | *boolean* |  |
| rotation_limit | *boolean* |  |
| rotation_snap | *boolean* |  |
| uv_rotation | *boolean* |  |
| java_face_properties | *boolean* |  |
| select_texture_for_particles | *boolean* |  |
| texture_mcmeta | *boolean* |  |
| bone_binding_expression | *boolean* |  |
| animation_files | *boolean* |  |
| texture_folder | *boolean* |  |
| image_editor | *boolean* |  |
| edit_mode | *boolean* |  |
| paint_mode | *boolean* |  |
| display_mode | *boolean* |  |
| animation_mode | *boolean* |  |
| pose_mode | *boolean* |  |
| box_uv_float_size | *boolean* |  |
| java_cube_shading_properties | *boolean* |  |
| cullfaces | *boolean* |  |
| animation_controllers | *boolean* |  |
| render_sides | `"double"` or `"front"` or `"back"` or [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L167) |  |
| codec | [Codec](codec#codec-1) |  |
| cube_size_limiter | [CubeSizeLimiter](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L17) |  |

### onFormatPage()


### onStart()


### onSetup()


### select()
Selects the format



### new()
Creates a new model using the format. Returns false if the user clicks cancel in the 'Unsaved Changes' dialog, returns true when successful.


Returns: *boolean*

### convertTo()
Convert project to this format



### delete()



## Format
#### Global Variable

Type: [ModelFormat](format#modelformat)

The current format


## Formats
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L191)


## ModelLoader
Extends: [Deletable](misc#deletable)

<reference path="./blockbench.d.ts"/>

### new ModelLoader( id, options )
Creates a new ModelLoader

##### Arguments:
* `id`: *string*
* `options`: ModelLoaderOptions
	* `id`: *string* (Optional)
	* `icon`: *string*
	* `name`: *string* (Optional)
	* `description`: *string* (Optional)
	* `category`: *string* (Optional)
	* `target`: *string* or Array of *string* (Optional)
	* `confidential`: *boolean* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `format_page`: FormatPage (Optional)
		* `component`: *any* (Optional)
		* `content`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L6) (Optional)
		* `button_text`: *string* (Optional)
	* `onFormatPage`: Function (Optional)
	* `onStart`: Function (Optional)

### new ModelLoader( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| icon | *string* |  |
| name | *string* |  |
| description | *string* |  |
| category | *string* |  |
| target | *string* or Array of *string* |  |
| confidential | *boolean* |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| show_on_start_screen | *boolean* |  |
| format_page | [FormatPage](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/format.d.ts#L3) |  |

### onFormatPage()


### onStart()


### delete()


