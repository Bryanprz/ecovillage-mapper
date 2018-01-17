import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectHighlight } from 'react-instantsearch/connectors';
import Divider from 'material-ui/Divider';
import { filterLocation } from '../actions';

class Hit extends Component {
  constructor(props) {
    super(props);
    this.centerMap = this.centerMap.bind(this);
  }

  centerMap() {
    console.log('hit: ', this.props.hit);
  }

  render() {
    // invoke action creator to show only these hits on map
    this.props.filterLocation(this.props.hit);
    return (
      <div onClick={this.centerMap}>
        <div key={ this.props.hit.objectID } className="hit">
          <span className="hit-name">
            <CustomHighlight attributeName="name" hit={this.props.hit} />
          </span>
          <small className="hit-address">
            <CustomHighlight attributeName="address" hit={this.props.hit} />
          </small>
          <span className="hit-seeking">
            <CustomHighlight attributeName="seeking" hit={this.props.hit} />
          </span>
        </div>
        <Divider />
      </div>
    );
  }
}

const CustomHighlight = connectHighlight(
  ({ highlight, attributeName, hit, highlightProperty }) => {
    const parsedHit = highlight({ attributeName, hit, highlightProperty: '_highlightResult' }); 
    const highlightedHits = parsedHit.map( location => {
      if (location.isHighlighted) return <mark>{location.value}</mark>;
      return location.value; 
    });
    return <div>{highlightedHits}</div>;
  }    
);


export default connect(null, { filterLocation })(Hit);
