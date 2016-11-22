import React from "react";
import ReactDOM from "react-dom";
import YoutubeEmbedVideo from "../dist/youtube"; // "youtube-embed-video"

ReactDOM.render(<YoutubeEmbedVideo size="large" videoId="RnDC9MXSqCY" suggestions={false} />, document.getElementById("app"));
