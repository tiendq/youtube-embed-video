import React from "react";

function YoutubeEmbedVideo(props) {
  let url = getFullVideoUrl(props);

  return (
    <iframe width={props.width} height={props.height} src={url} frameBorder="0" allowFullScreen={true}></iframe>
  );
}

function getFullVideoUrl(props) {
  let params = [];

  if (props.enhancedPrivacy)
    params.push("https://www.youtube-nocookie.com/embed/");
  else
    params.push("https://www.youtube.com/embed/");

  params.push(props.videoId);
  params.push(props.autoplay ? "?autoplay=1" : "?autoplay=0");

  if (!props.suggestions)
    params.push("&rel=0");

  if (!props.controls)
    params.push("&controls=0");

  if (!props.showInfo)
    params.push("&showinfo=0");

  return params.join("");
}

YoutubeEmbedVideo.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  autoplay: React.PropTypes.bool,
  enhancedPrivacy: React.PropTypes.bool,
  suggestions: React.PropTypes.bool,
  controls: React.PropTypes.bool,
  showInfo: React.PropTypes.bool
};

YoutubeEmbedVideo.defaultProps = {
  width: 560,
  height: 315,
  autoplay: false,
  enhancedPrivacy: false,
  suggestions: true,
  controls: true,
  showInfo: true
};

export default YoutubeEmbedVideo;
