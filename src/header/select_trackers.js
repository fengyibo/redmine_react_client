import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import ServiceAPI from '../services/service_api'

class SelectTrackers extends Component {

  constructor(props){
    super(props);
    this.state = {
      trackers: []
    };
    this.handleTrackersSelection = this.handleTrackersSelection.bind(this);
  }

  handleTrackersSelection(e, {value}){
    if(value)
      this.props.onTrackersSelection(value)
  }

  componentDidMount() {
    ServiceAPI.getAllTrackers('', res => {
      const trackers = res.trackers;
      this.setState({trackers});
    });
  }

  render() {
    return (
      <Dropdown search fluid multiple selection
                loading={this.state.trackers.length===0}
                placeholder='Trackers'
                closeOnBlur={false}
                options={this.state.trackers.map(p => { return {'key': p.id, 'value': p.id, 'text': p.name}})}
                value={this.props.selected_trackers}
                onChange={this.handleTrackersSelection}
      />
    )
  }
}

export default SelectTrackers