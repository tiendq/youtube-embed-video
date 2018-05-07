import React from "react";
import PropTypes from 'prop-types';

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

  let url = getFullVideoUrl(videoId, autoplay, enhancedPrivacy, suggestions, controls, showInfo);
  let calculatedSize = getVideoSize(width, height, size);

  return (
    <iframe
      width={calculatedSize.width}
      height={calculatedSize.height}
      src={url}
      frameBorder="0"
      allowFullScreen={true}
      title="Youtube Embed Video"
      {...rest}
    />
  );
}

function getFullVideoUrl(videoId, autoplay, enhancedPrivacy, suggestions, controls, showInfo) {
  let params = [];

  if (enhancedPrivacy)
    params.push("https://www.youtube-nocookie.com/embed/");
  else
    params.push("https://www.youtube.com/embed/");

  params.push(videoId);
  params.push(autoplay ? "?autoplay=1" : "?autoplay=0");

  if (!suggestions)
    params.push("&rel=0");

  if (!controls)
    params.push("&controls=0");

  if (!showInfo)
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
  videoId: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.string,
  autoplay: PropTypes.bool,
  enhancedPrivacy: PropTypes.bool,
  suggestions: PropTypes.bool,
  controls: PropTypes.bool,
  showInfo: PropTypes.bool
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
