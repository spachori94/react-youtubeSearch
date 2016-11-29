import React, {Component} from 'react';
import { Grid, Icon, Input } from 'semantic-ui-react'

class SearchBar extends Component{
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <Grid>
        <Grid.Column fluid = {true} width={16}>
        <Input onChange={event => this.onInputChange(event.target.value)} fluid = {true} icon={<Icon name='search' inverted circular link />} placeholder='Search...'/>
        </Grid.Column>
      </Grid>
    );
    }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar
