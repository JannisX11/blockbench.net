---
title: Settings
---

# Settings
## settings
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/settings.d.ts#L2)

<reference path="./blockbench.d.ts"/>


## Setting
Extends: [Deletable](misc#deletable)

Settings can be used to add global configuration options to Blockbench. All settings are listed under File > Preferences > Settings.

### new Setting( id, options )
Creates a new Setting

##### Arguments:
* `id`: *string*
* `options`: SettingOptions
	* `name`: *string*
	* `type`: `"number"` or `"toggle"` or `"select"` or `"text"` or `"click"` or `"password"` (Optional)
	* `value`: *string* or *number* or *boolean*
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `category`: *string*
	* `description`: *string* (Optional)
	* `min`: *number* (Optional) - launch_setting?: boolean
	* `max`: *number* (Optional)
	* `step`: *number* (Optional)
	* `icon`: *string* (Optional)
	* `click`: Function (Optional)
	* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/settings.d.ts#L19) (Optional)
	* `onChange`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| id | *string* |  |
| type | *string* |  |
| condition | *any* |  |
| master_value | *any* | The master value, not affected by profiles |
| value | *any* | The active value |
| ui_value | *any* | The value that is displayed in the settings dialog |
| name | *string* |  |
| description | *string* |  |
| category | *string* |  |
| launch_setting | *boolean* | If true, the setting can be used by the main process before initializing the Blockbench window. This is not available to custom settings created by plugins. |
| min | *number* |  |
| max | *number* |  |
| step | *number* |  |
| icon | *string* |  |
| options | [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/settings.d.ts#L56) |  |
| hidden | *boolean* |  |
| onChange | [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/settings.d.ts#L60) |  |

### delete()


### set( value )
Sets the value of the setting, while triggering the onChange function if available, and saving the change.

##### Arguments:
* `value`: *any*


### trigger( [event] )
Triggers the setting, as if selected in action control. This toggles boolean settings, opens a dialog for string or numeric settings, etc.

##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) (Optional)



## Settings
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| structure | [Record](#Record) |  |
| stored | [Record](#Record) |  |

### open( [options] )
Opens the settings dialog

##### Arguments:
* `options`: [See types](https://github.com/JannisX11/blockbench-types/blob/7f54313/types/settings.d.ts#L84) (Optional) -


### saveLocalStorages()
Save all settings to the local storage



### save()
Save the settings and apply changes



### get( setting_id )
Returns the value of the specified setting

##### Arguments:
* `setting_id`: *string*

Returns: *any*

