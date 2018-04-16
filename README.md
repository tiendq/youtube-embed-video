# youtube-embed-video
React component to embed Youtube video on web page.

## Usage
Simply install and import component like below code:

`yarn add youtube-embed-video`

```js
import React from "react";
import ReactDOM from "react-dom";
import YoutubeEmbedVideo from "youtube-embed-video";

ReactDOM.render(<YoutubeEmbedVideo videoId="RnDC9MXSqCY" suggestions={false} />, document.getElementById("app"));
```

Above code will load a Youtube video from [LEGO® Red Can Break It Down](https://www.youtube.com/watch?v=RnDC9MXSqCY).

### Properties
Props are same as Youtube options for embedding a video.

#### `videoId`
Youtube video ID parameter, it's `RnDC9MXSqCY` in this Youtube [link](https://www.youtube.com/watch?v=RnDC9MXSqCY). `Required`.
#### `autoplay`
Make an embedded video play automatically. Default: `false`
#### `suggestions`
Show suggested videos when the video finishes. Default: `true`
#### `controls`
Show player controls. Default: `true`
#### `showInfo`
Show video title and player actions. Default: `true`
#### `enhancedPrivacy`
Enable privacy-enhanced mode. Default: `false`
#### `width`
Player width in px. Default: `560`
#### `height`
Player height in px. Default: `315`
#### `size`
Pre-defined video sizes same as Youtube options. `size` will override `width` and `height` values. Available size values are `small`, `medium`, `large`, and `largest`.

## Examples
1. Run `yarn start` from `examples` folder
2. Visit `http://localhost:8080`

## TO DO
- ~~Predefined video sizes~~
- Delay load video

Copyright ©2018 Tien Do.

MIT License.
