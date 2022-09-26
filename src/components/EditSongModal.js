import React, { Component } from 'react';
import DBManager from '../db/DBManager';

export default class EditSongModal extends Component {
    
    render() {
        const {confirmEditSongCallback, hideEditSongModalCallback } = this.props;
        
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-list-root'>
                        <div class="modal-north">
                            Edit playlist?
                        </div>
                        <table class="modal-center-edit">
                            <td>Title:</td>
                            <td><input type="text" id="newTitle"></input></td>
                            <td>Artist:</td>
                            <td><input type="text" id="newArtist"></input></td>
                            <td>YouTube ID:</td>
                            <td><input type="text" id="newYTID"></input></td>
                        </table>
          
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-list-confirm-button" 
                                class="modal-button" 
                                onClick={() => confirmEditSongCallback(document.getElementById("newTitle").value,document.getElementById("newArtist").value,document.getElementById("newYTID").value)}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-list-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}
