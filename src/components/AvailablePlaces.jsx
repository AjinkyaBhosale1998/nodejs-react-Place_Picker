import React, { useState, useEffect } from "react";
import Places from "./Places.jsx";

const AvailablePlaces = ({ onSelectPlace }) => {

  const [ isFetching, setIsFetching ] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fetchPlaces();
    // fetch("http://localhost:3000/places")
    //   .then((response) => response.json())
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching places:", error);
    //   });
  }, []);


  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};

export default AvailablePlaces;
