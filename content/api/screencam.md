---
title: Screencam
---

# Screencam
## Screencam
#### Namespace

A global namespace handling screenshot and GIF recording utilities.

| Property | Type | Description |
| -------- | ---- | ----------- |
| NoAAPreview | [Preview](preview#preview-1) | Provided preview with anti aliasing disabled that can be used for screenshots |
| recording_timelapse | *boolean* | Whether a timelapse is currently being recorded |
| gif_options_dialog | [Dialog](dialog#dialog-1) |  |
| gif_crop | [See types](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L45) |  |

### screenshotPreview( preview, options, cb )
##### Arguments:
* `preview`: [Preview](preview#preview-1)
* `options`: ScreenshotOptions
	* `crop`: *boolean* (Optional)
	* `width`: *number* (Optional)
	* `height`: *number* (Optional)
* `cb`: [ScreenshotReturn](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L30)


### fullScreen( options, cb )
##### Arguments:
* `options`: ScreenshotOptions
	* `crop`: *boolean* (Optional)
	* `width`: *number* (Optional)
	* `height`: *number* (Optional)
* `cb`: [ScreenshotReturn](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L30)


### screenshot2DEditor( options, cb )
##### Arguments:
* `options`: ScreenshotOptions
	* `crop`: *boolean* (Optional)
	* `width`: *number* (Optional)
	* `height`: *number* (Optional)
* `cb`: [ScreenshotReturn](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L30)


### returnScreenshot( dataUrl, cb, blob )
##### Arguments:
* `dataUrl`: *any*
* `cb`: [ScreenshotReturn](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L30)
* `blob`: *any*


### cleanCanvas( options, cb )
Runs callback in a clean canvas, where only the model is visible and the control gizmos are hidden

##### Arguments:
* `options`: *any* -
* `cb`: [ScreenshotReturn](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L30) -


### createGif( options, cb )
##### Arguments:
* `options`: RecordGIFOptions
	* `fps`: *number*
	* `format`: `"gif"` or `"apng"` or `"png_sequence"` (Optional)
	* `length_mode`: `"animation"` or `"frames"` or `"seconds"` or `"turntable"` (Optional)
	* `length`: *number* (Optional)
	* `pixelate`: *number* (Optional)
	* `quality`: *number* (Optional)
	* `background`: *string*
	* `background_image`: *string* (Optional)
	* `turnspeed`: *string* (Optional)
	* `play`: *boolean* (Optional) - Start playing the selected animation when the animation starts
	* `repeat`: *any* (Optional)
	* `silent`: *boolean* (Optional) - Disable all UI feedback about GIF recording
* `cb`: [ScreenshotReturn](https://github.com/JannisX11/blockbench-types/blob/4306e32/types/screencam.d.ts#L30)


### recordTimelapse( options )
##### Arguments:
* `options`: RecordTimelapseOptions
	* `destination`: *string* - Destination oath
	* `source`: `"locked"` or `"preview"` or `"interface"`
	* `interval`: *number* - Interval between frames in seconds


### stopTimelapse()


