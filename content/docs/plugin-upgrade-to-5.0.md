---
title: Upgrading Plugins to 5.0
description: An overview of breaking changes in the plugin API in 5.0
authors:
  - JannisX11
---

# Upgrading Plugins to 5.0

Blockbench 5.0 introduces some changes to the plugin API. These are changes that are necessary to allow Blockbench to grow and improve in the coming years.
This update aims to bundle a number of potentially breaking changes together instead of spreading them across different updates, so that you only need to update your plugins once.

Generally, most plugins are expected to continue to work in the new version, but some plugins, especially larger ones, will need to be updated to continue working.

This article will be updated during the beta phase, but most changes are expected to be in the first beta already.
The beta for 5.0 will have an extended timeline to give everyone enough time to update their plugins and tools.

While the beta is now yet, you can test these changes by launching Blockbench from the `next` branch. Follow the instructions in README.md to launch it.


## Adding support for both versions
In case you need to support a feature in both 5.0 and older versions, there is a way to detect the version and implement behavior conditionally.
This can be useful if you want to update and release your plugin ahead of the release date of Blockbench 5.0 to ensure it works instantly and that it already works during the beta.

```javascript
if (Blockbench.isNewerThan('4.99')) {
	// 5.0 behavior
} else {
	// 4.x behavior
}
```

## Keyframe Direction

The direction of rotation keyframes across the X and Y axis and of position keyframes across the X axis has been inverted. This change was made to make animation rotations consistent with rotations in edit mode.

Blockbench now inverts these two values when importing or exporting animations for Minecraft Bedrock Edition or .bbmodel files from old Blockbench versions.
This is done using the function `invertMolang(molang: string | number)`, which is also available for plugins.



## Native APIs

In past versions, all node APIs were available to plugins by default on the desktop version. This is changing in version 5.0 to give users more control and trust over what plugins can and cannot access.

* The global variables to access most modules (such as `fs`) have been removed. `PathModule` is still available to use the Node `path` module.
* Some modules with limited abilities can still be accessed via `require()`. This list includes modules like "path", "url", and "timers".
* Other APIs can be requested via `require()`, but open a prompt when called to let the user select their preference. Users can either allow, or deny a request, or always allow it for a certain plugin.
* If the user accepts the request, the module will be returned synchronously. If not, the request will return `undefined`.

<div class="block-info">
Modules should be requested on demand rather than on plugin load if possible, so that users know what the permission is needed for and are not bombarded with dialogs when installing the plugin.
</div>

For better Typescript support, an alias has been added offers the same functionality but with better type support and no risk of being converted to import during transpilation or compilation:
```javascript
const os = requireNativeModule('os');`
```

You can add a custom message when requiring a module to let the user know what the permission will be used for:
```javascript
const child_process = requireNativeModule('child_process', {message: 'This permission is required to open ffmpeg and encode the video.'});`
```

### Scoped File System
The Node file system module is now generally more limited. It still allows reading and writing to files, but more advanced APIs such as modifying permissions of files are no longer available.

It is now also possible to require a scoped File System module that only works inside a certain directory. This can give users more control over which files they want to allow a plugin to access, and more trust in a plugin.

You can request access to a scoped file system like this:
```typescript
const scoped_fs = requireNativeModule('fs', {scope: 'C:/path/to/directory'});
if (scoped_fs) {
	// Will succeed
	scoped_fs.writeFileSync('C:/path/to/directory/file.json', 'hello world');
	// Will throw an error
	scoped_fs.writeFileSync('C:/foo/bar.json', 'hello world');
}
```

### System info
To get basic information about the system on the desktop version, a new interface has been added named `SystemInfo`.
This interface contains information that you might have otherwise needed the `os` module or `process` variable for:
```javascript
SystemInfo.platform: 'win32' | 'darwin' | 'linux'
SystemInfo.home_directory: 'path/to/home'
SystemInfo.arch: 'x64' | 'arm64'
SystemInfo.os_version: 'Windows 11 Home' ...
```


### Node Modules
The following modules can be required without user confirmation:
* `path`
* `crypto`
* `events`
* `zlib`
* `timers`
* `url`
* `string_decoder`
* `querystring`

These modules can be required but need user permission:
* `fs`
* `child_process`
* `electron`
* `https`
* `net`
* `tls`
* `util`
* `os`
* `v8`


If you have any concerns or suggestions regarding these changes, please let me know on Discord!


## Outliner Elements

Outliner elements are being updated to allow plugin creators to add new element types from scratch. The goal is to make most behavior of built-in elements data-driven so that plugins can add custom element types more easily.
Previously, element behavior was implemented as various fields on the element class prototype. Now, the behavior will be specified in a static field called "behavior" on the class.

Example: Billboards:
```javascript
export class Billboard extends OutlinerElement {
	...
	static behavior = {
		select_faces: false,
		cube_faces: true,
		movable: true,
		resizable: true,
		unique_name: false
	}
}
```


## Removal of Deprecated Features

### `Group.selected: Group|undefined`
This change was already announced in 4.12 and would throw a console warning, but in 5.0 is is now enforced. `Group.selected` now returns an array of all top-level selected groups instead of one selected group.
To get the selected group, use `Group.first_selected` or `Group.selected[0]`. Generally plugins should be upgraded to affect all groups instead of just the first selected.


### Defining plugins via `plugin_data`
This has been deprecated for many years and is now no longer possible.

### Accessing random function from the global scope
Since Blockbench now uses modules, while a lot are still exposed to maintain backwards compatibility, some global variables may no longer be available.If you come across one that you need and cannot replicate otherwise, reach out to me and I can expose it again. Otherwise try to find an alternative solution.


## BBModel Changes

Some changes have been made to the bbmodel format. See [The .bbmodel format](https://www.blockbench.net/wiki/docs/bbmodel) for more info.


## Typescript Types

Blockbench 5.0 marks the start of an initiative to modernize the entire Blockbench codebase and move it to Typescript. This effort will span across multiple updates, but most changes that affect plugin creators are expected in 5.0.

Typescript types for Blockbench allow plugins to be written in Typescript, but they also help with validation and autocomplete for plugins written in Javascript.
Previously, all types were manually maintained and hosted on a separate repository. This often lead to imcomplete types or inconsistencies.

Blockbench 5.0 aims to generate types from its own files, where possible. For legacy files that are still written in Javascript, the types are still maintained manually, but they are now hosted in the main repository alongside the Blockbench source code.

For plugin creators, hopefully not much should change, except that types should be more up-to-date and accurate.

You can install the types from `blockbench-types`. Use the tag `@beta` to install the latest types for the 5.0 beta:

```batch
npm i --save-dev blockbench-types@beta
```

Please reach out on the Discord Server if you have any feedback or questions about these changes.
