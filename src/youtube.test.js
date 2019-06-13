import React from 'react';
import { cleanup, render } from '@testing-library/react';
import YoutubeEmbedVideo from './youtube';

const TEST_VIDEO_ID = 'RnDC9MXSqCY';

afterEach(cleanup);

test('Default settings, only videoId is required', () => {
  let { container } = render(<YoutubeEmbedVideo videoId={TEST_VIDEO_ID} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Enhanced privacy mode and autoplay', () => {
  let { container } = render(<YoutubeEmbedVideo videoId={TEST_VIDEO_ID} enhancedPrivacy={true} autoplay={true} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Largest size without suggestions and media controls', () => {
  let { container } = render(<YoutubeEmbedVideo width={1280} height={720} videoId={TEST_VIDEO_ID} suggestions={false} controls={false} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Medium size and no show info', () => {
  let { container } = render(<YoutubeEmbedVideo videoId={TEST_VIDEO_ID} size="medium" showInfo={false} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('Customer style and class', () => {
  let { container } = render(<YoutubeEmbedVideo videoId={TEST_VIDEO_ID} className="video-player" style={{ borderWidth: 10, borderColor: '#00c775', borderStyle: 'solid' }} />);
  expect(container.firstChild).toMatchSnapshot();
});
