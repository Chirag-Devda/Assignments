import { useDispatch } from "react-redux";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import { updateLocation } from "../../../features/LocationDetails/LocationDetailSlice";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Geocoder = () => {
  const dispatch = useDispatch();
  const cntrl = new MapBoxGeocoder({
    accessToken: import.meta.env.VITE_MAPBOX_MAPS,
    marker: false,
    collapsed: true,
  });

  useControl(() => cntrl);

  cntrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;

    dispatch(updateLocation({ lng: coords[0], lat: coords[1] }));
  });
  return null;
};

export default Geocoder;
