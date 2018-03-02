import React from 'react';

export default function LocationForm() {
  return (
    <div>
      <h3>Business Info:</h3>
      <form>
        <div>
          <label for="name">Business Name: </label>
          <input type="text" id="name" value=""/>
        </div>
        <div>
          <label for="business_type">Business Type: </label>
          <input type="text" id="business_type" value=""/>
        </div>
        <div>
          <label for="address">Address: </label>
          <input type="text" id="address" value=""/>
        </div>
        <div>
          <label for="latitude">Latitude: </label>
          <input type="text" id="latitude" value=""/>
        </div>
        <div>
          <label for="longitude">Longitude: </label>
          <input type="text" id="longitude" value=""/>
        </div>
      </form>

      <h3>Dropoff Details</h3>
      <form>
        <div>
          <label for="posting_date">Date Posted: </label>
          <input type="text" id="posting_date" value=""/>
        </div>
        <div>
          <label for="posting_type">Material Posted: </label>
          <input type="text" id="posting_date" value=""/>
        </div>
        <div>
          <label for="posting_occasion">Occassion: </label>
          <input type="text" id="posting_occasion" value=""/>
        </div>
        <div>
          <label for="contact_name">Contact Name: </label>
          <input type="text" id="contact_name" value=""/>
        </div>
        <div>
          <label for="contact_title">Contact Title: </label>
          <input type="text" id="contact_title" value=""/>
        </div>
        <div>
          <textarea rows="5" cols="50" id="notes" value="" size="120"/>
        </div>
        <br/><br/>
        <input type="submit"/>
        <br/><br/>
        <input type="submit" value="delete"/>
      </form>
    </div>
  )
}
