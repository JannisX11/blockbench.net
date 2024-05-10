---
title: Validator
---

# Validator
## Validator
#### Namespace

The validator in Blockbench provides feedback about the model and can detect issues in real time, based on a list of checks that can be added. This is a good way to ensure model files are valid, and to teach users about best practices.

| Property | Type | Description |
| -------- | ---- | ----------- |
| checks | Array of [ValidatorCheck](validator#validatorcheck) |  |
| warnings | Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/validator.d.ts#L41) |  |
| errors | Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/validator.d.ts#L41) |  |
| triggers | Array of [EventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/misc.d.ts#L13) | Cached trigger IDs |

### validate( [trigger] )
Run the validator

##### Arguments:
* `trigger`: [EventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/misc.d.ts#L13) (Optional) - ID of the Blockbench event that triggered the call


### openDialog()
Opens the Validator dialog



### updateCashedTriggers()
Update the cached triggers list




## ValidatorCheck
Extends: [Deletable](misc#deletable)

A check for the validator. A check can be triggered by certain things, and updates the list of warnings and errors that can be displayed in the status bar.


### Example:



```javascript
new ValidatorCheck('special_cube_name_rule', {
	update_triggers: ['update_selection'],
	run() {
		Cube.all.forEach(cube => {
			if (cube.name == 'sphere') {
				this.warn({
					message: `The cube "${cube.name}" has an invalid names. Cubes may not be called "sphere".`,
					buttons: [
						{
							name: 'Select Cube',
							icon: 'fa-cube',
							click() {
								Validator.dialog.hide();
								cube.select();
							}
						}
					]
				})
			}
		})
	}
})
```

### new ValidatorCheck( id, options )
Creates a new ValidatorCheck

##### Arguments:
* `id`: *string*
* `options`: ValidatorCheckOptions
	* `run`: Function
	* `update_triggers`: Array of [EventName](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/misc.d.ts#L13) (Optional) - Names of events that automatically trigger this check
	* `condition`: [ConditionResolvable](https://github.com/JannisX11/blockbench-types/blob/main/types/util.d.ts#L1) (Optional)


### delete()


### update()
Manually run this check



### warn( warnings )
Throw a warning. This is intended to be used inside the run() method

##### Arguments:
* `warnings`: Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/validator.d.ts#L41)


### fail( warnings )
Throw an error. This is intended to be used inside the run() method

##### Arguments:
* `warnings`: Array of [WarningOrError](https://github.com/JannisX11/blockbench-types/blob/c2ec864/types/validator.d.ts#L41)


