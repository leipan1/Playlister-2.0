import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * @author McKilla Gorilla
 * @author leipan
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index) {
        super();
        this.app = initApp;
        this.index=index
        this.oldTitle=this.app.state.currentList.songs[this.index-1].title
        this.oldArtist=this.app.state.currentList.songs[this.index-1].artist
        this.oldYTID=this.app.state.currentList.songs[this.index-1].youTubeId
        this.newTitle=document.getElementById("newTitle").value
        this.newArtist=document.getElementById("newArtist").value
        this.newYTID=document.getElementById("newYTID").value
    }

    doTransaction() {
        this.app.confirmEdit(this.newTitle,this.newArtist,this.newYTID,this.index)
    }
    
    undoTransaction() {
        this.app.confirmEdit(this.oldTitle,this.oldArtist,this.oldYTID,this.index)
    }
}