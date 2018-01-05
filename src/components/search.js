import React from 'react';
import TextField from 'material-ui/TextField';
import '../style/styles.css';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom';
import LocationSearchResult from './location_search_result';
import { connectHighlight, connectSearchBox } from 'react-instantsearch/connectors';

const CustomHighlight = connectHighlight(
    ({ highlight, attributeName, hit, highlightProperty }) => {
      const parsedHit = highlight({
        attributeName,
        hit,
        highlightProperty: '_highlightResult'
      });
      console.log('connectHighlight: ', connectHighlight);
      const highlightedHits = parsedHit.map(part => {
        if (part.isHighlighted) return <mark>{part.value}</mark>;
        return part.value;
      });
      return <div>{highlightedHits}</div>;
    }
    );

const Hit = ({ hit }) => {
  return (
    <p>
      <CustomHighlight attributeName="name" hit={hit} />
    </p>
  );
};

const Search = () => (
  <div>
    <InstantSearch
      appId="J0GCXLWRZ3"
      apiKey="c7cf3c81f688ae18a011b652b18b2196"
      indexName="dev_LOCATIONS"
    >
      <TextField
        hintText="Busque Aldeas por lugar o tipos de voluntarios."
        fullWidth={true}
        className="search"
      />
      <SearchBox />
      <div className="container">
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  </div>
);

export default Search;
