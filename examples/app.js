import React from "react";
import ReactDOM from "react-dom";
import YoutubeEmbedVideo from '../dist/youtube';
// import YoutubeEmbedVideo from 'youtube-embed-video';

ReactDOM.render(<YoutubeEmbedVideo size="medium" videoId="RnDC9MXSqCY" className="video-player" style={{ borderWidth: 5, borderColor: '#004ebc' }} suggestions={false} />, document.getElementById("app"));
