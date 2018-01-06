import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import '../style/styles.css';
import { Hits, Highlight } from 'react-instantsearch/dom';
import { connectHighlight, connectSearchBox } from 'react-instantsearch/connectors';

const Hit = ({ hit }) => {
  return (
    <div>
      <div className="hit">
        <span className="hit-name">
          <CustomHighlight attributeName="name" hit={hit} />
        </span>
        <small className="hit-address">
          <CustomHighlight attributeName="address" hit={hit} />
        </small>
        <span className="hit-seeking">
          <CustomHighlight attributeName="seeking" hit={hit} />
        </span>
      </div>
      <Divider />
    </div>
  );
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

const Content = () => {
  return (
    <div>
      <span className="subtitle">
        <Subheader>Resultados</Subheader>
      </span>
      <Hits hitComponent={Hit}/>
    </div>
  )
}

const MySearchBox = ({ currentRefinement, refine }) => {
  return (
    <div>
      <div className="search">
        <TextField
          value={currentRefinement}
          floatingLabelText="Busque aqui"
          fullWidth={true}
          multiLine={true}
          hintText="Ejemplo: Voluntarios, eco-aldea, Colombia"
          onChange={e => refine(e.target.value)}
        />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

const ConnectedSearchBox = connectSearchBox(MySearchBox);
export default ConnectedSearchBox;
