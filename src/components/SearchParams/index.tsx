import React, { useState } from "react";
export default function SearchParams() {
  const [location, setLocation] = useState('')
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
