import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const {confirmDeleteSongCallback, hideDeleteSongModalCallback } = this.props;
        // let thistitle = "";
        // console.log("currentlist::")
        // console.log(currentList)
        // console.log("index:: "+index)
        // if (currentList && index) {
            
        //     thistitle = currentList.songs[index-1].title;
        //     console.log("this title::"+thistitle)
        // }
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-list-root'>
                        <div class="modal-north">
                            Delete Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you sure you wish to permanently remove <span id="deleteSongTitle"></span> from the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-list-confirm-button" 
                                class="modal-button" 
                                onClick={confirmDeleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}