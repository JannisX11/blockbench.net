---
title: Project
---

# Project
## ModelProject
A project instance. The tab bar can be used to switch between projects.

### new ModelProject( options )
Creates a new ModelProject

##### Arguments:
* `options`: ModelProjectOptions
	* `format`: [ModelFormat](format#modelformat)


| Property | Type | Description |
| -------- | ---- | ----------- |
| box_uv | *boolean* |  |
| texture_width | *number* |  |
| texture_height | *number* |  |
| name | *string* |  |
| uuid | *string* |  |
| selected | *boolean* |  |
| model_identifier | *string* |  |
| locked | *boolean* | When set to true, the project tab can no longer be selected or unselected |
| thumbnail | *string* |  |
| saved | *boolean* |  |
| save_path | *string* | The path under which a project file is saved, if available |
| export_path | *string* | The path under which an exported file is saved, if available |
| added_models | *number* |  |
| undo | [UndoSystem](undo#undosystem) |  |
| BedrockEntityManager | [See types]() |  |
| format | [ModelFormat](format#modelformat) |  |
| mode | *string* |  |
| view_mode | *string* |  |
| display_uv | *string* |  |
| previews | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/project.d.ts#L39) |  |
| EditSession | [EditSession](project#editsession) |  |
| elements | Array of [OutlinerElement](outliner#outlinerelement) |  |
| groups | Array of [Group](group#group-1) |  |
| selected_elements | Array of [OutlinerElement](outliner#outlinerelement) |  |
| selected_group | [Group](group#group-1) |  |
| mesh_selection | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/project.d.ts#L48) |  |
| selected_faces | Array |  |
| textures | Array of [Texture](textures#texture) |  |
| selected_texture | [Texture](textures#texture) |  |
| outliner | Array of [OutlinerNode](outliner#outlinernode) |  |
| animations | Array of [Animation](#Animation) |  |
| timeline_animators | Array |  |
| display_settings | [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/project.d.ts#L61) |  |

### getDisplayName()

Returns: *string*

### openSettings()


### whenNextOpen( callback )
##### Arguments:
* `callback`: [See types](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/project.d.ts#L80)


### select()

Returns: *boolean*

### unselect()


### close( force )
##### Arguments:
* `force`: *any*

Returns: [Promise](#Promise)

### model_3d
Accessor


### materials
Accessor


### nodes_3d
Accessor


### all
Static Property

Type: Array of [ModelProject](project#modelproject)



## Project
#### Global Variable

Type: [ModelProject](project#modelproject) or `0`

Global variable and shortcut to get the currently opened project. If no project is open, or the New Tab is open, this value is falsy.


## setupProject( format )
#### Global Function

##### Arguments:
* `format`: *string* or [ModelFormat](format#modelformat)

Returns: *boolean*


## newProject( format )
#### Global Function

##### Arguments:
* `format`: *string* or [ModelFormat](format#modelformat)

Returns: *boolean*


## setProjectResolution( width, height[, modify_uv] )
#### Global Function

##### Arguments:
* `width`: *number*
* `height`: *number*
* `modify_uv`: *boolean* (Optional)



## updateProjectResolution()
#### Global Function




## EditSession
An edit session instance. Edit sessions can be attached to a project to collaborate on it with multiple users via P2P connections.

### new EditSession()
Creates a new EditSession



| Property | Type | Description |
| -------- | ---- | ----------- |
| active | *boolean* |  |
| hosting | *boolean* |  |
| clients | [See types]() |  |
| client_count | *number* |  |
| data_queue | Array |  |
| chat_history | Array |  |
| Project | [ModelProject](project#modelproject) |  |

### updateClientCound()


### start( [username] )
##### Arguments:
* `username`: *string* (Optional)


### join( username, token )
##### Arguments:
* `username`: *string*
* `token`: *string*

Returns: *any*

### quit()


### setState( active )
##### Arguments:
* `active`: *boolean*


### copyToken()


### initNewModel( [force] )
##### Arguments:
* `force`: *boolean* (Optional)


### initConnection( conn )
##### Arguments:
* `conn`: *any*


### sendAll( type, data )
##### Arguments:
* `type`: *string*
* `data`: *any*


### sendEdit( entry )
##### Arguments:
* `entry`: [UndoEntry](https://github.com/JannisX11/blockbench-types/blob/95ce15c/types/undo.d.ts#L50)


### receiveData( tag )
##### Arguments:
* `tag`: *object*


### processData( tag )
##### Arguments:
* `tag`: *object*


### catchUp()


### sendChat( [text] )
Send a chat message

##### Arguments:
* `text`: *string* (Optional) - Text to send. If omitted, the current text in the chat panel input is sent


### addChatMessage( message )
##### Arguments:
* `message`: *any*

Returns: *any*

### processChatMessage( data )
##### Arguments:
* `data`: *any*


