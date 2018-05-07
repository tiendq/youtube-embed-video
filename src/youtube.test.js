import React from "react";
import renderer from "react-test-renderer";
import YoutubeEmbedVideo from "./youtube";

test("Default settings, only videoId is required", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId="RnDC9MXSqCY" />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Enhanced privacy mode and autoplay", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId="RnDC9MXSqCY" enhancedPrivacy={true} autoplay={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Largest size without suggestions and media controls", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo width={1280} height={720} videoId="RnDC9MXSqCY" suggestions={false} controls={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Medium size and no show info", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId="RnDC9MXSqCY" size="medium" showInfo={false} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Customer style and class", () => {
  const component = renderer.create(
    <YoutubeEmbedVideo videoId="RnDC9MXSqCY" className="video-player" style={{ borderWidth: 10, borderColor: '#00c775', borderStyle: 'solid' }} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
