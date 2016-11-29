import React from 'react';
import { Segment, Embed, Header } from 'semantic-ui-react';
const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading....</div>;
  }
  const  videoID = video.id.videoId;
  const  url = `https://www.youtube.com/embed/${videoID}`;
  return(
    <Segment fluid={true}>
      <Header as='h1'>{video.snippet.title}</Header>
      <Embed  placeholder={video.snippet.thumbnails.default.url} url={url}  aspectRatio='16:9'></Embed>
      <Header as='h3'>{video.snippet.description}></Header>
    </Segment>
  );
};
export default VideoDetail;
