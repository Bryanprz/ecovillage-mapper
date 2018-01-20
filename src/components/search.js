import React from 'react';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import Hit from './hit';
import '../style/styles.css';
import { HierarchicalMenu, RefinementList, Hits } from 'react-instantsearch/dom';
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
        <HierarchicalMenu attributes={['categories0']} id='categories0' key='categories0' />
        <div className="refinements">
          <HierarchicalMenu 
            attributes={['categoriesLvl0', 'categoriesLvl1']}
          />
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
