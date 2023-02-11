---
title: Validator
---

# Validator
## Validator
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| checks | Array of [ValidatorCheck](validator#validatorcheck) |  |
| warnings | Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/validator.d.ts#L37) |  |
| errors | Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/validator.d.ts#L37) |  |
| triggers | Array of [EventName](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L13) | Cached trigger IDs |

### validate( [trigger] )
Run the validator

##### Arguments:
* `trigger`: [EventName](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L13) (Optional) - ID of the Blockbench event that triggered the call


### openDialog()
Opens the Validator dialog



### updateCashedTriggers()
Update the cached triggers list




## ValidatorCheck
Extends: [Deletable](misc#deletable)

### new ValidatorCheck( id, options )
Creates a new ValidatorCheck

##### Arguments:
* `id`: *string*
* `options`: ValidatorCheckOptions
	* `run`: Function
	* `update_triggers`: Array of [EventName](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/misc.d.ts#L13) (Optional) - Names of events that automatically trigger this check
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)


### delete()


### update()
Manually run this check



### warn( warnings )
Throw a warning. This is intended to be used inside the run() method

##### Arguments:
* `warnings`: Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/validator.d.ts#L37)


### fail( warnings )
Throw an error. This is intended to be used inside the run() method

##### Arguments:
* `warnings`: Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/e85d652/types/validator.d.ts#L37)


