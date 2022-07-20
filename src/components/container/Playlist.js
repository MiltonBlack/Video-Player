import React from "react"
import PlaylistHeader from "../PlaylistHeader"
import PlaylistItems from "../container/PlaylistItems"
import NightMode from "../NightMode"
import StyledPlaylist from "../styles/StyledPlaylist"

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlaylist>
        <NightMode nightModeCallBack={nightModeCallback} nightMode={nightMode}/>
        <PlaylistHeader active={active}/>
        <PlaylistItems/>
    </StyledPlaylist>
)

export default Playlist