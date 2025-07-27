---
title: Animation Expressions
description: Expressions in animations can be used to create dynamic animations based on math expressions, or to create systems where variables can be used to modify the transformation or state of the model, such as facial expressions
authors:
	- JannisX11
---

# Animation Expressions

## Overview

Blockbench supports math expressions in several places in the animation workflow.
Expressions can be used for various tasks, from driving values with math expressions to create animations along sine curves, over dynamically reacting values, to modifying the state and transformation of a model via variables.

Expressions use a C-like syntax that is based on the Molang language that is used for animations in Minecraft.
This means that the same expressions can be used both for animations inside Blockbench for various purposes, for general 3D exports, and for exporting to Minecraft.

### Syntax summary

Expressions support a C-like syntax. Any expression returns a numeric value.

Some syntax requires boolean values, in such cases a value of 0 will be considered false, any other value will be considered true.

Any trigonometry functions use degrees to describe angles.

Expressions are not case sensitive.

The most important syntax in short:

#### Add, multiply, subtract, divide
```
5 * 7 + 49 / (4+3)
```

#### Math expressions
```
Math.sin( q.anim_time * 400 ) * 12
```

#### Assigning variables
```
v.my_value = 20;
```

#### Using variables
```
20 * v.my_value
```

#### Ternary operators
Ternary operators consist of a pattern of three values, divided by a question mark and a colon.
The first value is evaluated first. If it is true or has a value, the second value is returned. Otherwise, the third value is returned.
```
v.is_enabled ? 20 : 10
```

Blockbench will provide autocomplete options for most syntax.

A full overview of the syntax of Molang can be found here: [Molang Documentation - Introduction to Molang](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/molangreference/examples/molangconcepts/molangintroduction)

Additional Blockbench-only features and syntax will be explained in this article.

### Exporting expressions

Common [3D export formats](https://www.blockbench.net/wiki/guides/export-formats) such as glTF and FBX do not support expressions in animations, they are limited to keyframes.
Due to this, expressions will be baked down into keyframes when exporting to such formats. This limits expressions to things like sine curve driven animations and similar approaches. Use-cases such as variable-driven model state are not possible with these formats.

Advanced animation expressions can best be used when previewing animations directly in Blockbench or recording them into GIFs or videos.

Additionally, export to Minecraft Bedrock Edition (and Java Edition via Geckolib) fully supports expressions.


## How to use expressions

Expressions can be used in various places within an animation. If a field for numeric values allows you to type in non-numeric expressions, that is usually a sign that expressions are supported.
Expression input fields will highlight syntax in different colors and provide autocomplete.

### Keyframes

Keyframe values can be either numeric values or expressions. If only one keyframe exist, the entire channel will be animated based on the expressions of the keyframe.
Otherwise, expressions will be evaluated at the current time in the timeline and then interpolated between just like linear numeric keyframes.

Keyframe expressions generally don't work in keyframes with smooth or bezier interpolation.

To enter an expression into a keyframe, create or select a keyframe. Then write your expression into the input of the respective axis in your keyframe field.

![Keyframe expressions](/images/wiki/guides/animation-expressions/keyframe-expression.png)

### Anim Time Update

Right click an animation and click **Properties...** and you will see a dialog with animation properties. Some of these support expressions.

Anim Time Update is an expression that controls how fast the animation moves along. The expression is evaluated any time an animation frame is rendered.

By default, if the field is empty, the expression would look like this:
```
query.anim_time + query.delta_time
```

`query.anim_time` refers to the current time in the animation. `query.delta_time` is the real time that has passed since the last frame was rendered. This expression ensures that the animation progresses each time it is rendered by exactly how much time has passed, ensuring consistent playback speed even if some frames take longer to render.

A simple way to modify this is to put in `query.anim_time + query.delta_time * 2`. This doubles the delta time, resulting in an animation playing at twice the speed.

Or put in `query.anim_time + query.delta_time * (1 + 0.6 * math.sin(query.anim_time * 500))` to modulate the playback speed.


### Blend Weight

In the same dialog, you can enter an expression for blend weight. Blend weight lets you multiply the amplitude of the entire animation by a factor. Entering `0.5` will make the animation play only half as much, entering `2` will double the effect.

As usual, complex expressions are allowed to achieve certain effects.


### Placeholders

The **Variable Placeholders** panel allows you to run arbitrary expressions without those directly affecting the animation. This is particularly useful for defining variables.

You can simplify define variables like this:

```
variable.foo = 25;
v.bar = 5 + 5;
```

Additionally, you can use special syntax to add UI inputs that provide an easier way to change values:

```
v.enabled = toggle('Enabled')
```

![Defining UI Inputs](/images/wiki/guides/animation-expressions/variable-ui-inputs.png)


### Placeholder UI Inputs

#### `toggle(name)`
Adds a checkbox. Returns `1` when enabled and `0` when disabled
* **Name:** Display name of the element, should be written in single quotes (`'`)
#### `slider(name, step, min, max)`
Adds a numeric slider input that users can slide or enter a number into.
* **Name:** Display name of the element, should be written in single quotes (`'`)
* **Step:** Set a value by which the value is incremented when using the slider. Optional and default to 1.
* **Min:** Set a minimum value. Optional.
* **Max:** Set a maximum value. Optional.
#### `impulse(name, duration)`
Adds a button. When pressed, this will return 1 for a short while, then return 0 again.
* **Name:** Display name of the element, should be written in single quotes (`'`)
* **Duration:** Set how long the impulse will last in seconds. Optional and defaults to


## Use cases

### Animating with Sine Curves

There are a lot of use-cases for sine curves when creating animations. Sine curves can create a smooth back and forth movement.
Depending on the frequency and amplitude, this can be used for anything from breathing, over walk cycle animations, to high frequency movement like vibration or shivering.

A basic sine curve looks like this:
```
20 + Math.sin(q.anim_time * 180) * 5
```

`20` is the base value here. `180` is the frequency of the curve, in this case the curve will complete 180 degrees or half a cycle per second. `5` is the magnitude of the curve.
With this expression, the value will smoothly swing between 15 and 25 every two seconds.

In addition to the Blockbench preview, you can use the Graph Editor to preview sine curves.


### Face Rig




### Speed Ramping

