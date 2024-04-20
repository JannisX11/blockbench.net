---
title: FAQ
description: Frequently Asked Questions about Blockbench
authors:
  - JannisX11
---

# Blockbench FAQ


### Is Blockbench free?

Yes, Blockbench is entirely free, for all users and for any purpose! The project is open source, supported by the amazing community, and funded by donations and sponsors.


### Can I use Blockbench models in my (commercial) project?

Everything that you make with Blockbench is your artwork. Blockbench is just a tool. That means that you can use and redistribute anything made with Blockbench, even for commercial use.


### How do I get started?

The [quick-start wizard](https://blockbench.net/quickstart) shows you which format to select and gives you useful informations, tutorials and resources for your specific needs.


### Does Mojang use Blockbench?

Mojang uses Blockbench internally as a tool to model and animate mobs and other assets. Some examples of mobs that were designed in Blockbench are the Axolotl, the Goat, the Camel, and the Sniffer.
Mojang also supports the development of Blockbench, both for internal use, and for the Minecraft community.


### Where do I report bugs?

You can report issues on the [Blockbench bug tracker](https://github.com/JannisX11/blockbench) on Github. Before you report a bug, make sure it hasn't already been reported.


### Where do I find error messages?

If there is an issue with either Blockbench itself or a plugin, you can see the error message in the Blockbench console. To see the console, press Control + Shift + I at the same time. In some cases you will not see the console directly, so you have to click on the "Console" tab. Include a screenshot of the error message in your bug report.


### The web app preview does not load. What can I do?

Make sure your browser is WebGL-compatible. Go to [get.webgl.org](https://get.webgl.org) and check if a cube appears. If it doesn't, update or switch your browser. The latest versions of Chrome, Edge, Firefox and Opera should work.

If this doesn't help, it might be an individual problem with your graphics drivers.


### What limitations does the web-app have?

The web-app is a fully-functional version of the app. Only some import / export features require extra steps due to security restrictions in browsers. Model import is still possible, but the textures have to be loaded manually in many cases.


### Is Blockbench available as a Mobile App?

Blockbench is available as a progressive web app. That means that you can install it directly from the browser, without the need to use an APK or go through an app store. You can find installation instructions on the [downloads page](https://blockbench.net/downloads/)


### How do I add reference images/blueprints?

You can add reference images to Blockbench. They can be placed as a background behind your model, or above the UI. On orthographic camera angles, an image can be used as a blueprint. To add a new reference image, right click in the preview and click "Add Reference Image". Right click the reference image to change its settings, move it to a different layer, or enable clear mode for blueprints. After exiting the refernece image edit mode, you can double-click a reference image to edit it again.


### Which technology and programming language is Blockbench built on?

Blockbench is built on web technologies. This allows it to work seamlessly across different platforms, and even as a web app on Android, iOS, and Chromebook.

The program is mainly written in Javascript, the it renders the 3D preview in WebGL with the help of THREE.JS. The customizable interface is mainly written in Javascript, with some of the dynamic components, such as the Outliner, using Vue.js 2 for dynamic rendering.

The desktop apps on Windows, Linux, and Mac are created with Electron.

Blockbench also uses a variety of other open source libraries. A full list can be found in Help > About.


### Why is the Blockbench interface flickering and turning blurry?

This is an issue with your graphics settings. If you are using an Nvidia graphics card, open the Nvidia Control Panel, select "3D Settings" > "Manage 3D Settings" and disable "Antialiasing - FXAA". Click "Apply". The changes will show after you restart Blockbench.


### Discord Server

More Frequently Asked Questions, including questions about modeling, are answered on the [Blockbench Discord server](https://discord.gg/WVHg5kH).
