import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
  // console.log(props);
  let videoItems, etag;

  if (props.videos.length && props.videos[0].etag) {
    etag = 'etag';
  } else {
    etag = 'id';
  }

  videoItems = props.videos.map((video) => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video[etag]} video={video} />;
  });

  return (
    <ul>
       {videoItems}
    </ul>
  );
};

export default VideoList;
