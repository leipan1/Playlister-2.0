import jsTPS_Transaction from "../common/jsTPS.js"
/**
 *
 * @author McKilla Gorilla
 * @author leipan
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,index) {
        super();
        this.app = initApp;
        this.index=index
        console.log("called delete song transaction and index is:"+index)
        this.oldTitle=this.app.state.currentList.songs[this.index-1].title
        this.oldArtist=this.app.state.currentList.songs[this.index-1].artist
        this.oldYTID=this.app.state.currentList.songs[this.index-1].youTubeId
    }

    doTransaction() {
        this.app.confirmDelete(this.index-1);
    }
    
    undoTransaction() {
        this.app.addSong();
        let length=this.app.getPlaylistSize();
        console.log("lenght:::"+length)
        this.app.moveSong(length,this.index);
        this.app.confirmEdit(this.oldTitle,this.oldArtist,this.oldYTID,this.index)
    }
}