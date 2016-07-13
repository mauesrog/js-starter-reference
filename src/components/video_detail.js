import React from 'react';

const VideoDetail = ({ video }) => {
  let title, description, url, videoId;

  if (video.snippet) {
    videoId = video.id.videoId;
    url = `https://www.youtube.com/embed/${videoId}`;
    title = video.snippet.title;
    description = video.snippet.description;
  } else {
    videoId = video.id;
    url = video.embed_url;
    title = video.slug;
    description = video.caption;
  }

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
