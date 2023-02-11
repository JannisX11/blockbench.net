---
title: Misc
---

# Misc
## Deletable
Extended by: [KeybindItem](action#keybinditem), [Codec](codec#codec-1), [ModelFormat](format#modelformat), [ModelLoader](format#modelloader), [Menu](menu#menu-1), [Preview](preview#preview-1), [Setting](settings#setting), [ValidatorCheck](validator#validatorcheck), [Property](misc#property)

### new Deletable()
Creates a new Deletable



### delete()



## isApp
#### Global Variable

Type: *boolean*

True if Blockbench runs as a native app


## Property
Extends: [Deletable](misc#deletable)

Creates a new property on the specified target class

### new Property( target_class, type, name[, options] )
Creates a new Property

##### Arguments:
* `target_class`: *any*
* `type`: *string*
* `name`: *string*
* `options`: PropertyOptions (Optional)
	* `default`: *any* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `exposed`: *boolean* (Optional)
	* `label`: *string* (Optional)
	* `options`: *object* (Optional) - Options used for select types
	* `merge`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L114) (Optional)
	* `reset`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L115) (Optional)
	* `merge_validation`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L116) (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| class | *any* |  |
| name | *string* |  |
| type | *string* |  |
| default | *any* |  |
| isString | *boolean* |  |
| isMolang | *boolean* |  |
| isNumber | *boolean* |  |
| isBoolean | *boolean* |  |
| isArray | *boolean* |  |
| isVector | *boolean* |  |
| isVector2 | *boolean* |  |
| merge_validation | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L136) |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| exposed | *boolean* |  |
| label | *any* |  |

### delete()


### merge( instance, data )
##### Arguments:
* `instance`: *any*
* `data`: *object*


### reset( instance )
##### Arguments:
* `instance`: *any*


### getDefault( instance )
##### Arguments:
* `instance`: *any*

Returns: *any*

### copy( instance, target )
##### Arguments:
* `instance`: *any*
* `target`: *any*



## updateSelection()
#### Global Function




## tl( key[, arguments] )
#### Global Function

Returns a translated string in the current language

##### Arguments:
* `key`: *string* - Translation key
* `arguments`: Array of *any* (Optional) - Array of arguments that replace anchors (%0, etc.) in the translation. Items can be strings or anything that can be converted to strings

Returns: *string*


## Language
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| data | [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L159) | Translation data for the current language |
| code | *string* | Two letter code indicating the currently selected language |

### addTranslations( language, strings )
Add translations for custom translation strings

##### Arguments:
* `language`: *string* - Two letter language code, e. G. 'en'
* `strings`: [See types](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L171) - Object listing the translation keys and values

Returns: *any*

