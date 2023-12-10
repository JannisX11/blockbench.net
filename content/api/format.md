---
title: Format
---

# Format
## ModelFormat
Extends: [Deletable](misc#deletable)

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
		* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional)
		* `content`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L3) (Optional)
		* `button_text`: *string* (Optional)
	* `onFormatPage`: Function (Optional)
	* `onStart`: Function (Optional)
	* `box_uv`: *boolean* (Optional)
	* `optional_box_uv`: *boolean* (Optional)
	* `single_texture`: *boolean* (Optional)
	* `model_identifier`: *boolean* (Optional)
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
	* `uv_rotation`: *boolean* (Optional)
	* `java_face_properties`: *boolean* (Optional)
	* `select_texture_for_particles`: *boolean* (Optional)
	* `bone_binding_expression`: *boolean* (Optional)
	* `animation_files`: *boolean* (Optional)
	* `texture_folder`: *boolean* (Optional)
	* `image_editor`: *boolean* (Optional)
	* `edit_mode`: *boolean* (Optional)
	* `paint_mode`: *boolean* (Optional)
	* `display_mode`: *boolean* (Optional)
	* `animation_mode`: *boolean* (Optional)
	* `pose_mode`: *boolean* (Optional)
	* `cube_size_limiter`: CubeSizeLimiter (Optional)
		* `test`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L16)
		* `move`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L20)
		* `clamp`: [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L24)
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
| format_page | [FormatPage](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L1) |  |
| box_uv | *boolean* |  |
| optional_box_uv | *boolean* |  |
| single_texture | *boolean* |  |
| model_identifier | *boolean* |  |
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
| uv_rotation | *boolean* |  |
| java_face_properties | *boolean* |  |
| select_texture_for_particles | *boolean* |  |
| bone_binding_expression | *boolean* |  |
| animation_files | *boolean* |  |
| texture_folder | *boolean* |  |
| image_editor | *boolean* |  |
| edit_mode | *boolean* |  |
| paint_mode | *boolean* |  |
| display_mode | *boolean* |  |
| animation_mode | *boolean* |  |
| pose_mode | *boolean* |  |
| cube_size_limiter | [CubeSizeLimiter](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L12) |  |

### onFormatPage()


### onStart()


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


## ModelLoader
Extends: [Deletable](misc#deletable)

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
		* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional)
		* `content`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L3) (Optional)
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
| format_page | [FormatPage](https://github.com/JannisX11/blockbench-types/blob/9449dd3/types/format.d.ts#L1) |  |

### onFormatPage()


### onStart()


### delete()


