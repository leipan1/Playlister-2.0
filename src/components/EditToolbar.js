import React from "react";

export default class EditToolbar extends React.Component {

    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback, addSongCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";

        if (!canAddSong){
            addSongClass += "-disabled";
        
        }
        if (!canUndo){
            console.log("can't undo")
            undoClass += "-disabled";
        }
        if (!canRedo){ 
            console.log("can't redo")
            redoClass += "-disabled";
        }
        if (!canClose){ 
            closeClass += "-disabled";
        }

        return (
            <div id="edit-toolbar">
            
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick={addSongCallback}
                disabled={canAddSong ? false : true}
                
            />

            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
                disabled={canUndo ? false: true}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
                disabled={canRedo? false: true}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
                disabled={canClose? false:true}
            />
        </div>
        )
    }
}