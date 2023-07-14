
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from 'react';
import './App.css'





const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.DEV.VITE_API_KEY,
    
  });

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);


  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App
