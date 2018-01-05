import React from 'react';
import TextField from 'material-ui/TextField';
import '../style/styles.css';
import { SearchBox, Hits, Highlight } from 'react-instantsearch/dom';
import { connectHighlight, connectSearchBox } from 'react-instantsearch/connectors';

const Hit = ({ hit }) => {
  return (
    <div className="hit">
      <span className="hit">
        <Highlight attributeName="name" hit={hit} />
        <Highlight attributeName="address" hit={hit} tagName="mark" />
      </span>
    </div>
  );
}

const Content = () => {
  return (
    <div className="hits-content">
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
          fullWidth={true}
          hintText="Busque aqui"
          onChange={e => refine(e.target.value)}
        />
      </div>
      <main>
        <Content />
      </main>
    </div>
  );
}

const ConnectedSearchBox = connectSearchBox(MySearchBox);
export default ConnectedSearchBox;
