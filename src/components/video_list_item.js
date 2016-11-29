import React from  'react';
import { Card, List, Image} from 'semantic-ui-react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <List.Item onClick={ () => onVideoSelect(video)}>
      <Card fluid={true}>
        <Image fluid={true} src={imageUrl} />
        <Card.Content>
          <Card.Header>{video.snippet.title}</Card.Header>
        </Card.Content>
      </Card>
    </List.Item>
  );
}
export default VideoListItem;
