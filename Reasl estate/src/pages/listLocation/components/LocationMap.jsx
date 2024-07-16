import React, { useEffect, useRef } from "react";
import ReactMapGl, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css"; // for having hand cursor on map
import { updateLocation } from "../../../features/LocationDetails/LocationDetailSlice";

const LocationMap = () => {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const location = useSelector(
    (state) => state.locationDetails.locationData.location,
  );

  useEffect(() => {
    if (!location.lng && !location.lat) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          mapRef.current?.flyTo({
            center: [longitude, latitude],
          });
          dispatch(updateLocation({ lng: longitude, lat: latitude }));
          console.log({ lng: longitude, lat: latitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        },
      );
    }
  }, []);

  return (
    <div>
      <div className="container mx-auto h-screen w-screen">
        <div className="absolute left-0 top-0 h-full w-full">
          {/* Google Map */}
          <ReactMapGl
            ref={mapRef}
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_MAPS}
            initialViewState={{
              longitude: location.lng,
              latitude: location.ltd,
              zoom: 5,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              draggable
              latitude={location.lat}
              longitude={location.lng}
              onDragEnd={(e) => {
                dispatch(
                  updateLocation({ lng: e.lngLat.lng, lat: e.lngLat.lat }),
                );
              }}
            ></Marker>
            <NavigationControl position="bottom-right"></NavigationControl>
            <GeolocateControl
              position="bottom-left"
              trackUserLocation
              onGeolocate={(e) => {
                dispatch(
                  updateLocation({
                    lng: e.coords.longitude,
                    lat: e.coords.latitude,
                  }),
                );
              }}
            ></GeolocateControl>
          </ReactMapGl>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
