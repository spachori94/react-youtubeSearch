import React from 'react';
import { Grid, List, Card} from 'semantic-ui-react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
      return <VideoListItem onVideoSelect = {props.onVideoSelect} key = {video.etag} video = {video} />;
  });

  return (
         <List>
          {videoItems}
         </List>

  );
}

export default VideoList;
