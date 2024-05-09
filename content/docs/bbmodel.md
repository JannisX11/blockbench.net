---
title: The .bbmodel format
description: An overview of the .bbmodel file format
authors:
  - JannisX11
---

# The .bbmodel format

Blockbench uses the .bbmodel file format to save projects as files. This page intends to describe the format and to give an overview of how to interact with the files on a technical level.

## Overview

.bbmodel files are JSON-based. That does not mean that they are compatible with other types of JSON files though. The exact specifications of the format are listed below.

The format is mainly intended to be used as an internal format to save Blockbench projects. If you are looking to create a model loader or a similar system that works with Blockbench, it is generally recommended to create a separate custom format via a Blockbench plugin, instead of relying on bbmodel files.
However, in some cases, it can make sense to work with .bbmodel files directly.

## Format changes

The .bbmodel files may be subject to breaking changes in the future. So it is recommended to plan with that. Each bbmodel file contains a format version field that can be used to identify and handle those changes.
The following section describes recent breaking changes within the format:

Note that additions and non-breaking changes are not listed on this page. This includes new features that have been added to the format, but don't impact how the rest of the format works.

* ### 4.10
	Released with Blockbench 4.10, May 9th 2024

	* Fixed an issue with relative texture paths. Relative paths used to be relative to the .bbmodel file as if is was a directory, now they are correctly saved as relative to the directory that the .bbmodel file is in.
	* The "name" field is now ignored and overwritten with the .bbmodel file name, if the project was loaded from a file.
	* Fixed an issue with textures in formats that have a default texture. Textures are no longer specified per face if they were not explicitly assigned to the face.

* ### 4.9
	Released with Blockbench 4.9, December 2nd 2023

	* In generic models, and other formats that enable it via the feature `per_texture_uv_size`, the UV size is now set per texture, instead of globally.
		**Old format:**
		```
			"resolution": {
				"width": 16,
				"height": 16
			}
		```
		**New (per texture):**
		```
				"uv_width": 16,
				"uv_height": 16,
		```

## Format documentation

There is no complete specification of the JSON format at this point in time. To understand it, it is recommended to look at example .bbmodel files and to examine the Blockbench source code: [js/io/formats/bbmodel.js](https://github.com/JannisX11/blockbench/blob/master/js/io/formats/bbmodel.js)

