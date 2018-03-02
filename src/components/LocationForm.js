import React from 'react';

export default function LocationForm() {
  return (
    <form>
      <div>
        <label for="posting_date">Date Posted: </label>
        <input type="text" id="posting_date" value="mm/dd/yyyy"/>
      </div>
      <br/>
      <div>
        <label for="posting_type">Material Posted: </label>
        <input type="text" id="posting_date" value="postcards"/>
      </div>
      <br/>
      <div>
        <label for="posting_occasion">Occassion: </label>
        <input type="text" id="posting_occasion" value="fundraiser"/>
      </div>
      <br/>
      <div>
        <label for="contact_name">Contact Name: </label>
        <input type="text" id="contact_name" value="Chuckie The Chicken"/>
      </div>
      <br/>
      <div>
        <label for="contact_title">Contact Title: </label>
        <input type="text" id="contact_title" value="Mascot"/>
      </div>
      <br/>
      <div>

        <textarea rows="5" cols="50" id="notes" value="notes..." size="120"/>
      </div>
      <br/><br/>
      <input type="submit"/>
    </form>
  )
}
