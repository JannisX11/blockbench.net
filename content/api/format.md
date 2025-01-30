---
title: Format
---

# Format
## ModelFormat
Extends: [FormatOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L48), [Deletable](misc#deletable)

<reference path="./blockbench.d.ts"/>

### new ModelFormat( id, options )
Creates a new ModelFormat

##### Arguments:
* `id`: *string*
* `options`: [FormatOptions](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L48)

### new ModelFormat( options )
*Alternative constructor signature*


| Property | Type | Description |
| -------- | ---- | ----------- |
| box_uv | *boolean* | Enables Box UV on cubes by default |
| optional_box_uv | *boolean* | If true, box UV is optional and can be toggled on the project or per cube |
| single_texture | *boolean* | If true, only one texture can be assigned to the model at a time, instead of textures being assigned per face |
| single_texture_default | *boolean* | If true, a single texture is used as default, but textures can still be assigned to faces |
| per_group_texture | *boolean* | If true, textures can be assigned per group instead of per face |
| per_texture_uv_size | *boolean* | If true, UV size (the size of the texture in UV space) will be defined per texture and not per project |
| model_identifier | *boolean* | Enable a model identifier field in the project settings. Default is true |
| legacy_editable_file_name | *boolean* | If true, the file name of a project will be editable in the project settings |
| parent_model_id | *boolean* | If true, enables a field in the project settings to set a parent model ID |
| vertex_color_ambient_occlusion | *boolean* | Adds a toggle in the project settings to enable project wide vertex color ambient occlusion |
| animated_textures | *boolean* | Enable flipbook animated textures |
| bone_rig | *boolean* | Enable groups to work as bones and rig the model |
| centered_grid | *boolean* | Align the grid center with the model origin, instead of the grid corner |
| rotate_cubes | *boolean* | Add the ability to rotate cubes |
| stretch_cubes | *boolean* | Add the ability to stretch cubes. Stretch scales cubes from the center without affecting UV |
| integer_size | *boolean* | If true, cube sizes are limited to integer values |
| meshes | *boolean* | Enable mesh elements |
| texture_meshes | *boolean* | Enable texture meshes |
| locators | *boolean* | Enable locators |
| rotation_limit | *boolean* | Enforces a rotation limit for cubes of up to 45 degrees in either direction and one axis at a time |
| rotation_snap | *boolean* | Forces cube rotations to snap to 22.5 degree increments |
| uv_rotation | *boolean* | Allows cube UVs to be rotated |
| java_face_properties | *boolean* | Enables Minecraft Java block/item model specific cube face features (tint and export) |
| select_texture_for_particles | *boolean* | Allows assigning one texture to be used as a texture for particles related to the model |
| texture_mcmeta | *boolean* | Enable mcmeta files for animated texture files |
| bone_binding_expression | *boolean* | Enables an option to set an expression for bone bindings |
| animation_files | *boolean* | If true, animations will be saved into files |
| texture_folder | *boolean* | Enables a folder path per texture that can be set in the texture properties window |
| image_editor | *boolean* | Enables the 2D image editor |
| edit_mode | *boolean* | Enables edit mode. Default is true |
| paint_mode | *boolean* | Enables paint mode. Default is true |
| display_mode | *boolean* | Enables display mode |
| animation_mode | *boolean* | Emaböes animation mode |
| pose_mode | *boolean* | Enables pose mode |
| animation_controllers | *boolean* | Enables animation controllers |
| box_uv_float_size | *boolean* | If true, cube sizes will not be floored to calculate UV sizes with box UV. This can result in UVs not aligning with pixel edges |
| java_cube_shading_properties | *boolean* | Enables properties for Minecraft Java block/item models related to block shading (shading option and light emission value) |
| cullfaces | *boolean* | Enables cullfaces, the ability on faces in Minecraft block models to set a direction, that, if covered by another block, will cause the face to unrender |
| node_name_regex | *string* | A set of characters that is allowed in node names (names of elements and groups that can be referenced externally, this does not apply to cubes or meshes) |
| render_sides | `"double"` or `"front"` or `"back"` or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L223) | Set the default render sides for textures |
| id | *string* |  |
| icon | *string* |  |
| name | *string* |  |
| description | *string* |  |
| category | *string* |  |
| target | *string* or Array of *string* |  |
| confidential | *boolean* |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| show_on_start_screen | *boolean* |  |
| format_page | [FormatPage](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L3) |  |
| codec | [Codec](codec#codec-1) |  |
| cube_size_limiter | [CubeSizeLimiter](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L17) | Options to limit the size of cubes |

### onActivation()


### onDeactivation()


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

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L277)


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
		* `component`: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html) (Optional)
		* `content`: Array of *string* or [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L6) (Optional)
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
| format_page | [FormatPage](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/format.d.ts#L3) |  |

### onFormatPage()


### onStart()


### delete()


