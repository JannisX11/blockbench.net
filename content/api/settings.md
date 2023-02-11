---
title: Settings
---

# Settings
## settings
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/settings.d.ts#L1)


## Setting
Extends: [Deletable](misc#deletable)

### new Setting( id, options )
Creates a new Setting

##### Arguments:
* `id`: *string*
* `options`: SettingOptions
	* `name`: *string*
	* `type`: `"string"` or `"number"` or `"boolean"` or `"select"` or `"click"` or `"password"` (Optional)
	* `value`: *string* or *number* or *boolean*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `category`: *string*
	* `description`: *string* (Optional)
	* `min`: *number* (Optional) - launch_setting?: boolean
	* `max`: *number* (Optional)
	* `step`: *number* (Optional)
	* `icon`: *string* (Optional)
	* `click`: Function (Optional)
	* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/settings.d.ts#L18) (Optional)
	* `onChange`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/settings.d.ts#L21) (Optional)


### delete()



## Settings
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| structure | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/settings.d.ts#L29) |  |
| stored | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/settings.d.ts#L30) |  |

### open( [options] )
Opens the settings dialog

##### Arguments:
* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/settings.d.ts#L35) (Optional) -


### saveLocalStorages()
Save all settings to the local storage



### save()
Save the settings and apply changes



### get( setting_id )
Returns the value of the specified setting

##### Arguments:
* `setting_id`: *string*

Returns: *any*

