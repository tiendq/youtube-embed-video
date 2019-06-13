import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeEmbedVideo from '../dist/youtube';
// import YoutubeEmbedVideo from 'youtube-embed-video';

ReactDOM.render(<YoutubeEmbedVideo size="medium" videoId="RnDC9MXSqCY" className="video-player" style={{ borderWidth: 10, borderColor: '#00c775', borderStyle: 'solid' }} suggestions={false} />, document.getElementById('app'));
