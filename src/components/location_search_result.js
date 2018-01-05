import React from 'react';
import {InstantSearch, Hits, Highlight} from 'react-instantsearch/dom';
import '../style/styles.css';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const LocationSearchResult = ({ hit }) => {
  return (
    <Paper zDepth={1}>
      <Highlight attributeName="name" hit={hit} tagName="mark" />
      <Divider />
      <Highlight attributeName="seeking" hit={hit} />
    </Paper>
  );
};

export default LocationSearchResult;
