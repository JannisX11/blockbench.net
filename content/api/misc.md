---
title: Misc
---

# Misc
## Object()
#### Global Function

Provides functionality common to all JavaScript objects.


Returns: *any*
## Object( value )
#### Global Function

Provides functionality common to all JavaScript objects.

##### Arguments:
* `value`: *any*

Returns: *any*

Extended by: [KeyframeDataPoint](keyframe#keyframedatapoint)


## Blockbench
#### Global Reference


## Deletable
Extended by: [KeybindItem](action#keybinditem), [Codec](codec#codec-1), [ModelFormat](format#modelformat), [ModelLoader](format#modelloader), [Menu](menu#menu-1), [Preview](preview#preview-1), [Setting](settings#setting), [ValidatorCheck](validator#validatorcheck), [Property](misc#property)

<reference path="./blockbench.d.ts"/>

### new Deletable()
Creates a new Deletable



### delete()



## isApp
#### Global Variable

Type: *boolean*

True if Blockbench runs as a native app


## VuePrismEditor
#### Global Variable

Type: [Vue.Component](https://v2.vuejs.org/v2/guide/components.html)


## Property
Extends: [Deletable](misc#deletable)

Creates a new property on the specified target class

### new Property( target_class, type, name[, options] )
Creates a new Property

##### Arguments:
* `target_class`: *any*
* `type`: [T](#T)
* `name`: *string*
* `options`: PropertyOptions (Optional)
	* `default`: *any* (Optional)
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)
	* `exposed`: *boolean* (Optional)
	* `label`: *string* (Optional)
	* `options`: *any* (Optional) - Options used for select types
	* `values`: Array of *string* (Optional) - Enum possible values
	* `merge`: Function (Optional)
	* `reset`: Function (Optional)
	* `merge_validation`: Function (Optional)


| Property | Type | Description |
| -------- | ---- | ----------- |
| class | *any* |  |
| name | *string* |  |
| type | [T](#T) |  |
| default |  |  |
| export | *boolean* |  |
| isString | *boolean* |  |
| isEnum | *boolean* |  |
| isMolang | *boolean* |  |
| isNumber | *boolean* |  |
| isBoolean | *boolean* |  |
| isArray | *boolean* |  |
| isVector | *boolean* |  |
| isVector2 | *boolean* |  |
| isInstance | *boolean* |  |
| enum_values | Array of *string* |  |
| merge_validation | *undefined* or [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/misc.d.ts#L209) |  |
| condition | [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) |  |
| exposed | *boolean* |  |
| label | *any* |  |

### delete()


### merge( instance, data )
##### Arguments:
* `instance`: 
* `data`: 


### reset( instance )
##### Arguments:
* `instance`: 


### getDefault( instance )
##### Arguments:
* `instance`: 

Returns: 

### copy( instance, target )
##### Arguments:
* `instance`: 
* `target`: 



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
| data | [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/misc.d.ts#L232) | Translation data for the current language |
| code | *string* | Two letter code indicating the currently selected language |

### addTranslations( language, strings )
Add translations for custom translation strings

##### Arguments:
* `language`: *string* - Two letter language code, e. G. 'en'
* `strings`: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/misc.d.ts#L244) - Object listing the translation keys and values



## LZUTF8
#### Global Variable

Type: *any*


## unselectAllElements()
#### Global Function




## updateCubeHighlights( hover_cube, force_off )
#### Global Function

##### Arguments:
* `hover_cube`: [Cube](cube#cube-1)
* `force_off`: *boolean*



## getRescalingFactor( angle )
#### Global Function

##### Arguments:
* `angle`: *number*

Returns: *number*


## Pressing
#### Global Variable

Type: [See types](https://github.com/JannisX11/blockbench-types/blob/8049169/types/misc.d.ts#L268)


## isStringNumber( value )
#### Global Function

##### Arguments:
* `value`: *any*

Returns: *boolean*


## marked( text )
#### Global Function

##### Arguments:
* `text`: *string*

Returns: *string*


## pureMarked( text )
#### Global Function

##### Arguments:
* `text`: *string*

Returns: *string*

