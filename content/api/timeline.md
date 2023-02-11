---
title: Timeline
---

# Timeline
## Timeline
#### Namespace

| Property | Type | Description |
| -------- | ---- | ----------- |
| animators | Array of [GeneralAnimator](animation#generalanimator) |  |
| selected | Array of [Keyframe](#Keyframe) |  |
| playing_sounds | Array of *any* |  |
| playback_speed | *number* |  |
| time | *number* | Current time |
| playing | *boolean* |  |
| keyframes | Array of [Keyframe](#Keyframe) |  |
| menu | [Menu](menu#menu-1) |  |

### setTime( time, editing )
Set the timeline to a specific time

##### Arguments:
* `time`: *number* - Time in seconds
* `editing`: *boolean* - If true, don't update the timeline timecode, because it is currently edited by the user


### revealTime( time )
Reveal the specified time in the timeline by scrolling to it's position

##### Arguments:
* `time`: *number* - Time in seconds


### setTimecode( time )
Set the time code above the timeline to a specific time

##### Arguments:
* `time`: *number* - Time in seconds


### snapTime( time[, animation] )
Converts the input time to a time that is snapped to the current timeline snapping setting

##### Arguments:
* `time`: *number* - Input time in seconds
* `animation`: [Animation](#Animation) (Optional) - Animation to use the snapping setting from. If unspecified, uses the selected animation

Returns: *number*

### getStep()
Returns the time between two snapping points


Returns: *number*

### getMaxLength()
Return the maximum length of the timeline, based on the length of the selected animation and the time of all keyframes


Returns: *number*

### unselect()
Unselect the selected keyframes



### start()
Start playing the animation



### loop()
Run one frame of the animation



### pause()
Pause playing the animation



### showMenu( event )
##### Arguments:
* `event`: [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)


