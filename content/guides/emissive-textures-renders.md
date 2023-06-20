---
title: Emissive Textures in Renders
description: How to create elegant emissive textures in renders
authors:
  - SirJain0
  - Incernion
---

# Emissive Textures in Renders

## Introduction

You've probably seen some cool renders of models that stood out to you because parts of them glow. Perhaps you even wanted to try this out on some of your own models. This article will show you how!

In order to create any sort of render, you will need to decide what rendering software to use. If you want to explore the different rendering softwares and view the advantages and disadvantages of each, please see the [Rendering Models](https://www.blockbench.net/wiki/guides/model-rendering) guide. 

This guide will provide in-depth steps for the two most popular softwares, [Blender](https://www.blender.org/) and [Sketchfab](https://sketchfab.com/), but there may be overlap when creating emissive textures with other softwares too. The required steps will be explained in detail for each software, which you can access by either scrolling down or navigating through the table of contents located at the right of the page. As well as explaining the required steps, this guide has an example you can follow along with to help visualize the process. We’ll be creating the following render of a desk lamp in both Blender and Sketchfab.

image here

Please note that the methods recommended in the article are not the only ways to achieve emissive textures in renders, but rather are supposed to provide general insight on how you can go about achieving them. You are encouraged to experiment and find the best workflow for you.

## Blender

### 1. Creating the model

Lorem ipsum

### 2. Modifying the model 

Lorem ipsum

### 3. Making the emissive texture

Lorem ipsum

### 4. Exporting into Blender

Lorem ipsum

### 5. Configuring

Lorem Ipsum

## Sketchfab

### 1. Creating the model

Of course, to make a render with an emissive texture, you first need a model. There is not much to talk about in this section because when rendering with Sketchfab, we'll make the model the exact same as normal. The model will be modified to our requirements in the next step. For now, texture on everything you want glowing like it’s a normal part of the model.

Following our lamp example, we now have this:

![Base lamp model](/images/wiki/guides/emissive-textures-renders/sketchfab-base-model.png)

### 2. Making the emissive texture

In order for Sketchfab to know what parts need to glow, we need to make something called an emissive texture, which was mentioned in the Blender section earlier. This texture will tell Sketchfab what parts it needs to consider emissive, and what parts it should not.

In order to make an emissive texture, start by duplicating your texture. We will make changes to this new texture while leaving the main texture undisturbed. To help distinguish between the two, we'd recommend renaming the emissive texture to something else (for example, you can append `-emissive` to the name of the texture).

![Duplicate textures](/images/wiki/guides/emissive-textures-renders/sketchfab-duplicate-texture.png)

In order to visually see the changes we make to the texture on the model, we need to tell Blockbench to apply the texture to the model, as currently it's still applying our main one. To this, select your whole model using `Ctrl + A`, and right click the cubes in the outliner. Then, select `Texture > [Your Emissive Texture Name]`, as shown in the screenshot. Now, all changes we make to the emissive texture will be reflected visually on our model.

![Apply emissive texture to model](/images/wiki/guides/emissive-textures-renders/sketchfab-apply-emissive-texture.png)

Our emissive texture is the exact same as our regular texture (which is why we duplicated our original texture), *but* will only contain the parts we want glowing. This means that we need to erase everything else from the texture that we don't want emissive. There are many ways to go about doing this, most involving an external image editor. You can even do it in Blockbench by using the default tools in the paint toolbar, but most people would recommend an external image editor because its tools are less limited. Again, remember to experiment and find a workflow that suits you. 

**Remember:** make sure you keep stuff like the UV mapping and position of where the emissive parts are the *exact* same in both textures. All you need to do is erase the parts that are non-emissive. It will not work otherwise! Since the changes we make are also reflected on the model, you can double-check to make sure you made the correct parts emissive in the texture.

After making these changes to the texture, here is what our lamp now looks like:

![Configured emissive texture](/images/wiki/guides/emissive-textures-renders/sketchfab-configured-emissive.png)

Again, note that the emissive texture is completely separate from our normal texture, therefore there should be two textures in the project.

### 3. Exporting and configuring

Currently, our model still has the emissive texture applied to it. To make the model apply the original texture we made, we need to do the same thing as before: press `Ctrl + A` to select the whole model, right click the cubes, and click `Texture > [Original Texture Name]`. The model should look like what it was before, with the entire texture applied to it instead of just the emissive parts.

![Apply back default texture](/images/wiki/guides/emissive-textures-renders/sketchfab-apply-default.png)

We can now export our model to Sketchfab. Luckily, Blockbench provides a quick way to do so. Simply go to `File > Export`, fill out the required information, and then press `Confirm`. Doing this should show a prompt which allows you to view your model on Sketchfab.

![Export to Sketchfab](/images/wiki/guides/emissive-textures-renders/sketchfab-export.png)

Upon clicking this prompt, we are redirected to the Sketchfab website where we can start rendering our model. This article won't go too in-depth about general rendering; for that, you can check out the [Rendering Models](https://www.blockbench.net/wiki/guides/model-rendering) guide (also linked above). Since we are concerned about the emissive textures specifically, that's what we will be primarily focusing on.

Currently, you should have a screen similar to this:

image here

<!-- Next step: Add some missing images -->