import React from 'react';

const VideoListItem = (props) => {
  let imgUrl, title;

  if (props.video.snippet) {
    imgUrl = props.video.snippet.thumbnails.default.url;
    title = props.video.snippet.title;
  } else {
    imgUrl = props.video.images.fixed_height_small_still.url;
    title = props.video.slug;
  }
  return (
    <li onClick={() => props.onVideoSelect(props.video)}>
      <img src={imgUrl} alt="video" />
      <div>{title}</div>
    </li>
  );
};

export default VideoListItem;
