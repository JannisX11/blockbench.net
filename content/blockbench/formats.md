---
title: Formats
description: formats
hidetoc: true
authors:
  - Wackyblocks
  - JannisX11
  - TDY2012
---

# Blockbench Format Features

Blockbench has a number of built-in formats that optimize the interface and workflow for specific exports.
This list attempts to give an overview over the features that each format enables, and where they can be used.

| |Java Block/Item|Bedrock Model|Bedrock Legacy|Modded Entity|OptiFine Entity|OptiFine Part|Generic Model|GeckoLib Model
|---|---|---|---|---|---|---|---|---
|Game|
Minecraft: Java Edition|x| | |x|x|x| |x³
Minecraft: Bedrock Edition| |x|x| | | | |
Other| | | | | | |x|
| | | | | | | |
**Type of model**| | | | | | | |
Block models|x|x¹| |x| | | |x²
Item models|x| | |x| | | |x
Entity models| |x|x|x|x| | |x
Armor models| |x|x|x| | | |x
| | | | | | | |
**Export Formats**| | | | | | | |
.json (java blockmodel)|x| | | | | | |x
.json (bedrock geo)| |x|x| | | | |x
.json (bedrock animation)| |x|x| | | |x|x
.java| | | |x| | | |
.jem| | | | |x| | |
.jpm| | | | | |x| |
.obj|x|x|x|x|x|x|x|x
.gltf|x|x|x|x|x|x|x|x
.bbmodel|x|x|x|x|x|x|x|x
| | | | | | | |
**General**| | | | | | | |
Size limit (Blocks)|3x3x3|Unlimited|Unlimited|Unlimited|Unlimited|Unlimited|Unlimited|Unlimited
Per-face UV|x|x| | |x|x|x|x
Box UV|x|x|x|x|x|x|x|x
UV face rotations|x| | | | | |x|
Parent models|x| | | | | | |
Unrestricted cube sizing ⁵|x|x|x| | |x|x|x
Double sided face rendering| |x|x|x|x|x|x|x
Multiple textures support|x| | | | | |x|
| | | | | | | |
**Rotations**| | | | | | | |
Bone rotations| |x|x|x|x|x|x|x
Individual cube rotations|x|x| |x| |x|x|x
Cube axis rotations|1|3| |3| |3|3|3
Rotation angle limits|22.5°|Unlimited|Unlimited|Unlimited|Unlimited|Unlimited|Unlimited|Unlimited
| | | | | | | |
**Animations**| | | | | | | |
Model animations| |x|x|x|x⁴| |x|x
Texture animations|x|x|x| | | | |
MoLang| |x|x| | | |x|x
Hold-on-last| |x|x| | | |x|
Animation time update| |x|x| | | |x|
Blend weight| |x|x| | | |x|
Snowstorm particle rendering| |x|x| | | | |x
Sound/Particle/Custom Keyframes| |x|x| | | |x|x

### Notes
- ¹ Experimental feature
- ² Only exports item display settings json (to control how items look in guis and hand)
- ³ Use [GeckoLib](https://github.com/bernie-g/geckolib/wiki) to run Blockbench animations in Minecraft mods
- ⁴ Optifine entities support expression based animations. Requires the [CEM Template Loader Plugin](https://www.blockbench.net/plugins/cem_template_loader) to be able to edit and preview inside Blockbench. [Documentation](https://www.wynem.com/?cem_animation_doc)
- ⁵ Models that don't support unlimited cube sizes are restricted to only integers for cube sizes i.e. 0 1 2 etc.


</template>
