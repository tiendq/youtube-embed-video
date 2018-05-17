import React from "react";
import renderer from "react-test-renderer";
import YoutubeEmbedVideo from "./youtube";

const TEST_VIDEO_ID = 'RnDC9MXSqCY';

test("Default settings, only videoId is required", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId={TEST_VIDEO_ID} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Enhanced privacy mode and autoplay", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId={TEST_VIDEO_ID} enhancedPrivacy={true} autoplay={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Largest size without suggestions and media controls", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo width={1280} height={720} videoId={TEST_VIDEO_ID} suggestions={false} controls={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Medium size and no show info", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId={TEST_VIDEO_ID} size="medium" showInfo={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Customer style and class", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId={TEST_VIDEO_ID} className="video-player" style={{ borderWidth: 10, borderColor: '#00c775', borderStyle: 'solid' }} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
