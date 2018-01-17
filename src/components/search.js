import React from 'react';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Hit from './hit';
import '../style/styles.css';
import { RefinementList, Hits } from 'react-instantsearch/dom';
import { connectSearchBox } from 'react-instantsearch/connectors';

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
        <div className="refinements">
          <RefinementList attributeName="categories" />
        </div>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

const ConnectedSearchBox = connectSearchBox(MySearchBox);
export default ConnectedSearchBox;
