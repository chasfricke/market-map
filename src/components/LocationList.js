import React from 'react';
import './LocationList.css';

export default function LocationList(props) {
  var locations = props.locations;
  var postingInfo = props.posting_info;
  
  var results = [];
  var mergedObjects = {};
  for(var i=0; i < locations.length; i++){
    mergedObjects = Object.assign(locations[i], postingInfo[i]);
    results.push(mergedObjects)
  }

  // function dateConversion (date) {
  //   return date.slice(0,8)
  // }
      
  if (!props.locations || !props.posting_info) {
    return <h4>Locations Loading...</h4>
  } else {
    return (
      <ul className="location-list">   
        {results.map(function(result){
          return <li key={result.id}>
            <h3>{result.name}</h3>
            <div className="list-address-container">
              <p>{result.address}</p>
              <input type="submit" value="show"/>
            </div>
            <p>{result.posting_date}</p>
            <p><strong>Posted Items: </strong>{result.posting_type}</p>
            <p><small><strong>Notes: </strong>{result.notes}</small></p>
          </li>
        })}
      </ul>
    )
  }
}
