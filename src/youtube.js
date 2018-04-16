import React from "react";

// Predefined size options from Youtube.
const videoSizes = new Map([
  [
    "small", {
      width: 560,
      height: 315
    }
  ], [
    "medium", {
      width: 640,
      height: 360
    }
  ], [
    "large", {
      width: 853,
      height: 480
    }
  ], [
    "largest", {
      width: 1280,
      height: 720
    }
  ]
]);

function YoutubeEmbedVideo(props) {
  let {
    videoId,
    autoplay,
    suggestions,
    controls,
    showInfo,
    enhancedPrivacy,
    width,
    height,
    size,
    ...rest
  } = props;

  let url = getFullVideoUrl(props);
  let calculatedSize = getVideoSize(width, height, size);

  return (
    <iframe
      width={calculatedSize.width}
      height={calculatedSize.height}
      src={url}
      frameBorder="0"
      allowFullScreen={true}
      {...rest}
    />
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

function getVideoSize(width, height, size) {
  if (size && videoSizes.has(size.toLowerCase()))
    return videoSizes.get(size.toLowerCase());

  return {
    width,
    height
  }
}

YoutubeEmbedVideo.propTypes = {
  videoId: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  size: React.PropTypes.string,
  autoplay: React.PropTypes.bool,
  enhancedPrivacy: React.PropTypes.bool,
  suggestions: React.PropTypes.bool,
  controls: React.PropTypes.bool,
  showInfo: React.PropTypes.bool
};

YoutubeEmbedVideo.defaultProps = {
  width: 560,
  height: 315,
  size: "",
  autoplay: false,
  enhancedPrivacy: false,
  suggestions: true,
  controls: true,
  showInfo: true
};

export default YoutubeEmbedVideo;
