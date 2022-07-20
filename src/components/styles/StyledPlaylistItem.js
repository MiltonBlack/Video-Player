import styled from "styled-components";

const StyledPlaylistItem = styled.div`
    font-family:sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing:grayscale;
    background: none;
    border:${props => (props.active ? "2px dotted #696969" : "none")};
    font-size: 1.6rem;
    color: ${props => props.theme.color};
    min-height: 50px;
    padding: 10px 20px;
    margin: 0 0 10px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${(props) => (props.active ? "5px" : "0")};
    cursor: pointer;
    position: relative;

    ::before {
        display: ${(props) => (props.active || !props.played ? "none" : "block")};
        content: "";
        width: 10px;
        min-height: 10px;
        background: #409f40;
        border-radius: 50px;
        position: absolute;
        left:0;
        top:19px;
    }
    .edtutor-player__video-no {
        flex-grow: 10;
        max-width: 50px;
        padding-right: 20px;
        border-right: 2px solid #565656;
    }
    .edtutor-player__video-name,
    .edtutor-player__video-name a {
        flex-grow: 10;
        padding: 0 0 0 10px;
        color: ${(props) => props.theme.color};
        text-align: left;
        text-decoration: none;
        display: block;
    }
    .edtutor-player__video-time {
        background: #565656;
        min-width: 45px;
        color: #fff;
        font-size: 0.8rem;
        padding: 0 5px;
        height: 20px;
        text-align: center;
        border-radius: 5px;
        margin: 0 0 0 5px;
    }
    .edtutor-player__video-download {
        flex-grow: 1;
        color: ${(props) => (props.played ? "#fff" : props.theme.color)};
        margin: 0 0 0 20px;
        padding: 0 20px;
        max-width: 50px;
        border-left: 2px solid #565656;
        font-family: "fontelio";
        font-style: normal;
        font-weight: normal;
    }
    .active {
        opacity: 0.1;
    }
`
export default StyledPlaylistItem;