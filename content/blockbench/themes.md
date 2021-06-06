---
title: Custom Themes
---

# Custom Themes

Themes allow you to change the visual appearance of Blockbench. You can drag and drop `.bbtheme` files into Blockbench to load them.

## Creating Themes

Themes can be created using the theme editor in Blockbench. You can open it by going to `File` > `Preferences` > `Theme...`.
You can change the base interface colors by clicking on the colored rectangle and selecting a color. You can also change the fonts.

* The main font is the default font.
* The headline font is used for headlines and large texts such as panel labels.
* The code font is used inside code boxes and editors.

To select a font, enter the full font name of a font that is installed on your system.
If you are sharing a theme with a custom font, you need to make sure that everyone who uses the theme also has this font.
If you want to define one or multiple backup fonts in case the first one is not installed, you can create a list of font names, separated by comma.

### Custom CSS

Blockbench is built using web technology. If you want to further customize the appearance of Blockbench, you can use the style language of the web: CSS.

You can enter CSS rules into the Custom CSS editor at the bottom of the theme dialog. For example, use this code to give dialogs a frosted glass background:

```css
dialog {
  background-color: rgba(20, 22, 30, 0.7);
  backdrop-filter: blur(5px);
}
```

In order to inspect the interface and find out which CSS selectors to use, go to `Help` > `Developer` > `Open Dev Tools`. You can learn more in this [article about viewing and changing CSS using Chrome dev tools](https://developer.chrome.com/docs/devtools/css/).

If you are new to CSS and you want to learn more, check out the [W3Schools CSS Tutorial](https://www.w3schools.com/css/).

## Sharing Themes

Once you are happy with your theme, you can export it as a file using the `Export Theme` button in the dialog handle bar.
You can personally share the file with friends.
If you want to share the theme with the Blockbench community, you can post it in the #bb-themes channel on the [Blockbench Discord server](http://discord.blockbench.net).
Make sure to include a name, description and preview image.

