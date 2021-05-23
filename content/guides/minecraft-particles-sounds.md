---
title: Particles and Sounds in MC Bedrock
description: How to add particles and sounds effects to animations for Minecraft Bedrock Edition
---


# Particles and Sounds in Minecraft: Bedrock Edition

Blockbench allows users to add particle effects and sounds to animations, preview them, and export them to Minecraft: Bedrock Edition. This guide will teach you how to do just that.

## Adding Effect Keyframes
Sounds and particle effects are cued by keyframes. To enable the effect animator, press the "Animate Effects" button above the timeline. In the effects animator, you can add various types of keyframes

- Particle keyframes play particle effects
- Sound keyframes play sound effects
- Instruction keyframes allow you to run arbitracy MoLang expressions on the entity at any time during the animation.
  This can be used to modify variables in order to switch textures or change other rendering properties.

![Effect animator in Blockbench](images/wiki/guides/effect-animator.png)

## Previewing Effects

Once you have added a keyframe, use the "Select Keyframe File" button in the keyframe panel to select a file for the preview.
For sound effects, this must be an .ogg audio file. For particle files, it must be a .json particle file.
Once loaded, the effects will preview inside Blockbench.

For particle effects, you can also select a locator from your model in the keyframe panel. The particle effect will be attached to that specific locator, even if the position of the locator animates. For particle effects, you can also define a script. This script will run when the particle effect is created. Note that in-game the query namespace relates to the entity while the variable namespace exclusively references variables on the particle emitter.

Particle effects will automatically reload once you edit the particle file. If you want to reload a sound effect, or you are using the web version, simply select the file again to reload it.

## Using Effects In-Game

In order to use effects in-game, some extra steps are required:

### Effect Identifiers

The effect identifier is used to reference a particle effect or sound somewhere in your resource pack

- For particle effects, the identifier is the one specified in the particle file or in Snowstorm.
  The particle effect will work as long as the particle file is in the `particles` folder of the resource pack, or in one if it's sub-folders.

- For sound effects, the identifier is defined in the file `sound_definitions.json` that should be placed inside the sounds folder of your resource pack.
  This file defined all custom sounds in your pack. Each sound links to one or multiple .ogg files in the resource pack.
  More info on defining sounds can be found here: [Sounds - Bedrock Wiki](https://wiki.bedrock.dev/concepts/sounds.html)

`sound_definitions.json`
```json
{
	"format_version": "1.14.0",
	"sound_definitions": {
		"rainbow.bling": {
			"category": "ui",
			"sounds": [ "sounds/rainbow/bling" ]
		}
	}
}
```

### Assigning a short name

1. Open the client entity file of the custom entity you are animating. The client entity file can be found in the `entity` folder in the resource pack.
2. Inside "description", add a new object listing the effects. For sound effects, add an object called `"sound_effects"`. For particle effects, add an object called `"particle_effects"`.
3. Now, add your effect into this object as a key-value pair.
	The key is the **short name** for the effect that we will from now on use to refer to the effect inside the scope of the entity.
	The value is the full **identifier** of the effect.

`some_mob.entity.json`
```json
{
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			
			// Other information like identifier, models and textures
			[...]

			"particle_effects": {
				"rainbow": "snowstorm:rainbow"
			},
			"sound_effects": {
				"pling": "rainbow.pling"
			}
		}
	}
}
```

### Using the short name in Blockbench

Now that the short name is defined, we can use it in the animation. Simply enter the short name into the "Effect" input in the keyframe panel in Blockbench.

![Keyframe panel in Blockbench with short name placed into the effect input](images/wiki/guides/keyframe-panel.png)

Now the sound or particle effect should work inside Minecraft!
