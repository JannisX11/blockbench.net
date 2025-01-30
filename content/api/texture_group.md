---
title: Texture Group
---

# Texture Group
## TextureGroup
A way to group textures. Texture groups can also be used to represent materials in enabled formats

### new TextureGroup( [data, uuid] )
Creates a new TextureGroup

##### Arguments:
* `data`: TextureGroupData (Optional)
	* `name`: *string* (Optional)
	* `is_material`: *boolean* (Optional)
	* `material_config`: TextureGroupMaterialConfigData (Optional)
		* `color_value`: Array (Optional)
		* `mer_value`: Array (Optional)
		* `saved`: *boolean* (Optional)
* `uuid`: *string* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| uuid | *string* |  |
| name | *string* |  |
| folded | *boolean* |  |
| is_material | *boolean* | If true, the texture group works as a material |
| material_config | [TextureGroupMaterialConfig](texture_group#texturegroupmaterialconfig) | Material configuration |

### extend( data )
##### Arguments:
* `data`: TextureGroupData
	* `name`: *string* (Optional)
	* `is_material`: *boolean* (Optional)
	* `material_config`: TextureGroupMaterialConfigData (Optional)
		* `color_value`: Array (Optional)
		* `mer_value`: Array (Optional)
		* `saved`: *boolean* (Optional)

Returns: [TextureGroup](texture_group#texturegroup)

### add()

Returns: [TextureGroup](texture_group#texturegroup)

### select()

Returns: [TextureGroup](texture_group#texturegroup)

### remove()


### showContextMenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### rename()

Returns: [TextureGroup](texture_group#texturegroup)

### getTextures()

Returns: Array of [Texture](textures#texture)

### getUndoCopy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/texture_group.d.ts#L34)

### getSaveCopy()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/texture_group.d.ts#L39)

### updateMaterial()


### getMaterial()

Returns: [MeshStandardMaterial](#MeshStandardMaterial)

### material
Accessor



## TextureGroupMaterialConfig
### new TextureGroupMaterialConfig( texture_group, data )
Creates a new TextureGroupMaterialConfig

##### Arguments:
* `texture_group`: [TextureGroup](texture_group#texturegroup)
* `data`: TextureGroupMaterialConfigData
	* `color_value`: Array (Optional)
	* `mer_value`: Array (Optional)
	* `saved`: *boolean* (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| color_value | Array |  |
| mer_value | Array |  |
| saved | *boolean* |  |
| menu | [Menu](menu#menu-1) |  |
| texture_group | [TextureGroup](texture_group#texturegroup) |  |

### extend( data )
##### Arguments:
* `data`: TextureGroupMaterialConfigData
	* `color_value`: Array (Optional)
	* `mer_value`: Array (Optional)
	* `saved`: *boolean* (Optional)

Returns: [TextureGroupMaterialConfig](texture_group#texturegroupmaterialconfig)

### getUndoCopy()

Returns: [See types]()

### getSaveCopy()

Returns: [See types]()

### compileForBedrock()

Returns: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/texture_group.d.ts#L63)

### getFilePath()

Returns: *string*

### getFileName( [extension] )
##### Arguments:
* `extension`: *boolean* (Optional)

Returns: *string*

### save()


### showContextMenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


### propertiesDialog()



## importTextureSet( file )
#### Global Function

##### Arguments:
* `file`: *any*


