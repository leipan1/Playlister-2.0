import React from "react";
import ListCard from "./ListCard";

export default class SidebarList extends React.Component {
    render() {
        const { currentList,
                keyNamePairs,
                deleteListCallback, 
                loadListCallback,
                renameListCallback,
                disableButtons} = this.props;
        return (
            <div id="sidebar-list">
                {
                    keyNamePairs.map((pair) => (
                        <ListCard
                            key={pair.key}
                            keyNamePair={pair}
                            selected={(currentList !== null) && (currentList.key === pair.key)}
                            deleteListCallback={deleteListCallback}
                            loadListCallback={loadListCallback}
                            renameListCallback={renameListCallback}
                            disableButtons={disableButtons}
                        />
                    ))
                }
            </div>
        );
    }
}